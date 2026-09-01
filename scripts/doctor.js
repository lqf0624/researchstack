import { existsSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { findInstallations, findRepoRoot, loadJson, readPackageVersion, researchstackHome, routingTargets, safeReadText } from "./lib/researchstack.js";
import { readManagedManifest, verifyManagedInstall } from "./lib/install-manifest.js";
import { sourceDirs } from "./lib/skill-catalog.js";

function checkRouting(rootDir) {
  return routingTargets(rootDir).map((target) => {
    const text = safeReadText(target.path);
    return { ...target, exists: existsSync(target.path), installed: text.includes("## Researchstack Skill Routing") };
  });
}

function isSourceCheckout(dirPath) {
  return existsSync(path.join(dirPath, "package.json")) && existsSync(path.join(dirPath, "setup"));
}

const scriptRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRepoRoot = findRepoRoot(process.cwd()) || findRepoRoot(scriptRoot);
const runtimeRoot = sourceRepoRoot || scriptRoot;
const routingRoot = sourceRepoRoot || process.cwd();
const configPath = path.join(researchstackHome(), "config.json");
const config = loadJson(configPath, {});
const installations = findInstallations();
const routing = checkRouting(routingRoot);
const rootManifest = readManagedManifest(runtimeRoot);
const version = sourceRepoRoot ? readPackageVersion(sourceRepoRoot) : rootManifest?.package_version || "0.0.0";
const generatedRoot = sourceRepoRoot ? path.join(sourceRepoRoot, ".agents", "skills") : path.dirname(runtimeRoot);
const expectedSkills = sourceDirs.length;
const checks = [];
const warnings = [];

checks.push({
  name: "runtime_root",
  ok: existsSync(path.join(runtimeRoot, "SKILL.md")) && existsSync(path.join(runtimeRoot, "scripts", "doctor.js")),
  detail: runtimeRoot
});

if (!existsSync(configPath)) {
  warnings.push({ name: "config_missing", detail: `${configPath} (defaults will be used; doctor did not create it)` });
}

for (const install of installations) {
  const activeInstalls = install.installed.filter((entry) => !entry.includes(".bak."));
  if (!install.exists || activeInstalls.length === 0) {
    warnings.push({ name: `install_${install.host}_absent`, detail: install.dir });
    continue;
  }

  checks.push({
    name: `install_${install.host}_skill_count`,
    ok: activeInstalls.length === expectedSkills,
    detail: `${install.dir} (${activeInstalls.length}/${expectedSkills} active dirs)`
  });

  for (const entry of activeInstalls) {
    const full = path.join(install.dir, entry);
    if (isSourceCheckout(full)) {
      const checkoutVersion = readPackageVersion(full);
      checks.push({
        name: `${install.host}_${entry}_source_checkout_version`,
        ok: checkoutVersion === version,
        detail: `${checkoutVersion || "unknown"} expected ${version}`
      });
      continue;
    }

    const verification = verifyManagedInstall(full);
    checks.push({
      name: `${install.host}_${entry}_managed`,
      ok: verification.managed,
      detail: verification.managed ? "managed manifest present" : `${full} missing managed manifest`
    });
    if (verification.managed) {
      checks.push({
        name: `${install.host}_${entry}_version`,
        ok: verification.version === version,
        detail: `${verification.version || "legacy/unknown"} expected ${version}`
      });
      checks.push({
        name: `${install.host}_${entry}_content`,
        ok: verification.contentOk,
        detail: verification.contentOk ? "content fingerprint matches" : "installed files drifted from the managed manifest"
      });
      const expectedManifest = readManagedManifest(path.join(generatedRoot, entry));
      if (expectedManifest?.content_sha256) {
        checks.push({
          name: `${install.host}_${entry}_source_sync`,
          ok: verification.currentFingerprint === expectedManifest.content_sha256,
          detail: verification.currentFingerprint === expectedManifest.content_sha256
            ? "installed content matches the current generated source"
            : "installed content is internally valid but differs from the current generated source"
        });
      }
    }
  }

  if (install.backups.length > 0) {
    warnings.push({ name: `${install.host}_backups_present`, detail: install.backups.join(", ") });
  }
}

for (const target of routing) {
  if (!target.installed) {
    warnings.push({ name: `routing_${target.host}_not_installed`, detail: target.path });
  }
}

const ok = checks.every((check) => check.ok);
console.log(JSON.stringify({
  ok,
  version,
  expected_skills: expectedSkills,
  source_repo_root: sourceRepoRoot || "",
  runtime_root: runtimeRoot,
  config_path: configPath,
  config,
  checks,
  warnings,
  host: os.platform()
}, null, 2));
process.exitCode = ok ? 0 : 1;
