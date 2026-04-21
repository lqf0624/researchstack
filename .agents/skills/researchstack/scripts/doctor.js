import { existsSync } from "node:fs";
import path from "node:path";
import { findInstallations, findRepoRoot, isManagedInstall, loadConfig, readPackageVersion, routingTargets, safeReadText } from "./lib/researchstack.js";

function checkRouting(rootDir) {
  return routingTargets(rootDir).map((target) => {
    const text = safeReadText(target.path);
    const installed = text.includes("## Researchstack Skill Routing");
    return { ...target, exists: existsSync(target.path), installed };
  });
}

const repoRoot = findRepoRoot(process.cwd()) || process.cwd();
const { configPath, config } = loadConfig();
const installations = findInstallations();
const routing = checkRouting(repoRoot);
const version = readPackageVersion(repoRoot);
const checks = [];

checks.push({ name: "repo_root", ok: existsSync(path.join(repoRoot, "setup")), detail: repoRoot });
checks.push({ name: "config", ok: existsSync(configPath), detail: configPath });

for (const install of installations) {
  const activeInstalls = install.installed.filter((entry) => !entry.includes(".bak."));
  checks.push({
    name: `install_${install.host}`,
    ok: install.exists && activeInstalls.length > 0,
    detail: install.exists ? `${install.dir} (${activeInstalls.length} active dirs)` : `${install.dir} missing`
  });

  for (const entry of activeInstalls) {
    const full = path.join(install.dir, entry);
    checks.push({
      name: `${install.host}_${entry}_managed`,
      ok: isManagedInstall(full),
      detail: full
    });
  }

  if (install.backups.length > 0) {
    checks.push({
      name: `${install.host}_backup_pollution`,
      ok: false,
      detail: install.backups.join(", ")
    });
  }
}

for (const target of routing) {
  checks.push({
    name: `routing_${target.host}`,
    ok: target.installed,
    detail: target.path
  });
}

const ok = checks.every((check) => check.ok);
console.log(JSON.stringify({
  ok,
  version,
  repo_root: repoRoot,
  config,
  checks
}, null, 2));
process.exitCode = ok ? 0 : 1;
