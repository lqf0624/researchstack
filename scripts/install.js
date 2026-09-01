import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, renameSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

function parseArgs(argv) {
  const options = { host: "codex", target: "", local: false };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--host" && argv[index + 1]) {
      options.host = argv[++index];
    } else if (arg.startsWith("--host=")) {
      options.host = arg.slice("--host=".length);
    } else if (arg === "--target" && argv[index + 1]) {
      options.target = argv[++index];
    } else if (arg.startsWith("--target=")) {
      options.target = arg.slice("--target=".length);
    } else if (arg === "--local") {
      options.local = true;
    }
  }
  if (!new Set(["codex", "claude"]).has(options.host)) {
    throw new Error(`unsupported host: ${options.host}`);
  }
  if (options.local && options.target) {
    throw new Error("use either --local or --target, not both");
  }
  return options;
}

function defaultTarget(options) {
  if (options.target) {
    return path.resolve(options.target);
  }
  if (options.local) {
    return path.resolve(options.host === "codex" ? ".agents/skills" : ".claude/skills");
  }
  return path.join(os.homedir(), options.host === "codex" ? ".codex" : ".claude", "skills");
}

function assertSafeTarget(targetDir) {
  const resolved = path.resolve(targetDir);
  const filesystemRoot = path.parse(resolved).root;
  if (resolved === filesystemRoot || resolved === path.resolve(os.homedir())) {
    throw new Error(`refusing broad install target: ${resolved}`);
  }
  return resolved;
}

function timestamp() {
  return new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
}

function uniqueBackupPath(destination, suffix) {
  let candidate = `${destination}.bak.${suffix}`;
  let sequence = 1;
  while (existsSync(candidate)) {
    candidate = `${destination}.bak.${suffix}.${sequence++}`;
  }
  return candidate;
}

const options = parseArgs(process.argv.slice(2));
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const targetDir = assertSafeTarget(defaultTarget(options));
const generatedRoot = mkdtempSync(path.join(os.tmpdir(), "researchstack-install-"));
const installed = [];
const backups = [];

try {
  const generation = spawnSync(process.execPath, [
    path.join(repoRoot, "scripts", "gen-skill-docs.js"),
    `--host=${options.host}`,
    `--out=${generatedRoot}`
  ], { cwd: repoRoot, encoding: "utf8" });
  if (generation.status !== 0) {
    throw new Error(generation.stderr || generation.stdout || "skill generation failed");
  }

  mkdirSync(targetDir, { recursive: true });
  const generatedNames = readdirSync(generatedRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.startsWith("researchstack"))
    .map((entry) => entry.name)
    .sort();
  const suffix = timestamp();

  for (const name of generatedNames) {
    const source = path.join(generatedRoot, name);
    const destination = path.join(targetDir, name);
    const relative = path.relative(targetDir, destination);
    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      throw new Error(`resolved destination escaped target: ${destination}`);
    }

    if (existsSync(destination)) {
      const backup = uniqueBackupPath(destination, suffix);
      renameSync(destination, backup);
      backups.push({ destination, backup });
    }
    cpSync(source, destination, { recursive: true });
    installed.push(destination);
  }

  console.log(JSON.stringify({
    ok: true,
    host: options.host,
    target: targetDir,
    installed: installed.length,
    backups: backups.map((entry) => entry.backup)
  }, null, 2));
} catch (error) {
  for (const destination of installed.reverse()) {
    if (existsSync(destination)) {
      rmSync(destination, { recursive: true, force: true });
    }
  }
  for (const { destination, backup } of backups.reverse()) {
    if (existsSync(backup) && !existsSync(destination)) {
      renameSync(backup, destination);
    }
  }
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
} finally {
  rmSync(generatedRoot, { recursive: true, force: true });
}
