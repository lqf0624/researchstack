import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { verifyManagedInstall, writeManagedManifest } from "../scripts/lib/install-manifest.js";
import { generatedSkillName, sourceDirs } from "../scripts/lib/skill-catalog.js";

const repoRoot = path.resolve(import.meta.dirname, "..");

function skillPath(sourceDir) {
  return sourceDir === "." ? path.join(repoRoot, "SKILL.md") : path.join(repoRoot, sourceDir, "SKILL.md");
}

test("all catalog skills exist and their local Markdown links resolve", () => {
  assert.equal(sourceDirs.length, 21);
  for (const sourceDir of sourceDirs) {
    const file = skillPath(sourceDir);
    assert.ok(existsSync(file), `missing ${file}`);
    const text = readFileSync(file, "utf8");
    const expectedName = generatedSkillName(sourceDir);
    assert.match(text, new RegExp(`^---\\s+[\\s\\S]*?^name:\\s*${expectedName}\\s*$`, "m"));

    for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
      const target = match[1].split("#", 1)[0];
      if (!target || /^[a-z]+:/i.test(target)) {
        continue;
      }
      const resolved = path.resolve(path.dirname(file), target);
      assert.ok(existsSync(resolved), `${file} links to missing ${target}`);
    }
  }
});

test("router distinguishes open-topic, fixed-topic, and program branches", () => {
  const root = readFileSync(path.join(repoRoot, "SKILL.md"), "utf8");
  assert.match(root, /Fixed topic that needs a new method: `researchstack-method-synthesis`/);
  assert.match(root, /Durable direction intended to support several papers: `researchstack-program-map`/);
  assert.match(root, /Topic overlap does not imply method overlap/);
});

test("generated distribution is complete, versioned, and avoids duplicated shared references", () => {
  const tempRoot = mkdtempSync(path.join(os.tmpdir(), "researchstack-test-"));
  try {
    const result = spawnSync(process.execPath, ["scripts/gen-skill-docs.js", "--host=codex", `--out=${tempRoot}`], {
      cwd: repoRoot,
      encoding: "utf8"
    });
    assert.equal(result.status, 0, result.stderr || result.stdout);

    for (const sourceDir of sourceDirs) {
      const generatedName = generatedSkillName(sourceDir);
      const generatedDir = path.join(tempRoot, generatedName);
      const generatedFile = path.join(generatedDir, "SKILL.md");
      assert.ok(existsSync(generatedFile), `missing generated ${generatedName}`);
      const generatedText = readFileSync(generatedFile, "utf8");
      for (const match of generatedText.matchAll(/\]\(([^)]+)\)/g)) {
        const target = match[1].split("#", 1)[0];
        if (!target || /^[a-z]+:/i.test(target)) {
          continue;
        }
        assert.ok(existsSync(path.resolve(generatedDir, target)), `${generatedFile} links to missing ${target}`);
      }
      const verification = verifyManagedInstall(generatedDir);
      assert.equal(verification.managed, true);
      assert.equal(verification.version, "0.3.0");
      assert.equal(verification.contentOk, true);
      if (sourceDir !== ".") {
        assert.equal(existsSync(path.join(generatedDir, "references")), false, `${generatedName} duplicated shared references`);
      }
    }
    assert.ok(existsSync(path.join(tempRoot, "researchstack", "references", "novelty-boundary.md")));
  } finally {
    rmSync(tempRoot, { recursive: true, force: true });
  }
});

test("managed fingerprint detects local drift", () => {
  const tempRoot = mkdtempSync(path.join(os.tmpdir(), "researchstack-manifest-"));
  try {
    writeFileSync(path.join(tempRoot, "SKILL.md"), "---\nname: demo\n---\n", "utf8");
    writeManagedManifest(tempRoot, {
      packageVersion: "0.3.0",
      host: "codex",
      generatedName: "researchstack-demo",
      sourceSkill: "demo"
    });
    assert.equal(verifyManagedInstall(tempRoot).contentOk, true);
    writeFileSync(path.join(tempRoot, "SKILL.md"), "changed\n", "utf8");
    assert.equal(verifyManagedInstall(tempRoot).contentOk, false);
  } finally {
    rmSync(tempRoot, { recursive: true, force: true });
  }
});

test("cross-platform installer updates all skills and preserves recoverable backups", () => {
  const tempRoot = mkdtempSync(path.join(os.tmpdir(), "researchstack-install-test-"));
  try {
    for (let run = 0; run < 3; run += 1) {
      const result = spawnSync(process.execPath, ["scripts/install.js", "--host=codex", `--target=${tempRoot}`], {
        cwd: repoRoot,
        encoding: "utf8"
      });
      assert.equal(result.status, 0, result.stderr || result.stdout);
    }
    const entries = readdirSync(tempRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);
    const active = entries.filter((name) => name.startsWith("researchstack") && !name.includes(".bak."));
    const backups = entries.filter((name) => name.startsWith("researchstack") && name.includes(".bak."));
    assert.equal(active.length, sourceDirs.length);
    assert.equal(backups.length, sourceDirs.length * 2);
    for (const name of active) {
      assert.equal(verifyManagedInstall(path.join(tempRoot, name)).contentOk, true);
    }
  } finally {
    rmSync(tempRoot, { recursive: true, force: true });
  }
});
