import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import os from "node:os";
import path from "node:path";

export function researchstackHome() {
  return process.env.RESEARCHSTACK_HOME || path.join(os.homedir(), ".researchstack");
}

export function normalizeSource(input) {
  return input.trim().toLowerCase().replace(/\\/g, "/").replace(/\.git$/, "").replace(/\/+$/, "");
}

export function slugifyProjectName(name) {
  return (name || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "research-project";
}

export function detectSource(root, explicitSource = "") {
  if (explicitSource) {
    return explicitSource;
  }

  const gitConfigPath = path.join(root, ".git", "config");
  if (existsSync(gitConfigPath)) {
    const gitConfig = readFileSync(gitConfigPath, "utf8");
    const match = gitConfig.match(/\[remote "origin"\][\s\S]*?url = (.+)/);
    if (match?.[1]) {
      return match[1].trim();
    }
  }

  return path.resolve(root);
}

export function computeProjectInfo(root, explicitSource = "", projectName = "") {
  const resolvedRoot = path.resolve(root);
  const source = detectSource(resolvedRoot, explicitSource);
  const normalizedSource = normalizeSource(source);
  const repoName = slugifyProjectName(projectName || path.basename(resolvedRoot));
  const stableId = createHash("sha256").update(normalizedSource).digest("hex").slice(0, 6);
  const slug = `${repoName}-${stableId}`;
  return { root: resolvedRoot, source, normalizedSource, projectName: repoName, stableId, slug };
}

export function ensureProfileLayout() {
  const baseDir = researchstackHome();
  const profileDir = path.join(baseDir, "profile");
  mkdirSync(profileDir, { recursive: true });
  const preferencesPath = path.join(profileDir, "preferences.json");
  if (!existsSync(preferencesPath)) {
    writeFileSync(
      preferencesPath,
      JSON.stringify(
        {
          claim_posture: "conservative",
          writing_preferences: [],
          evaluation_preferences: [],
          venue_preferences: {
            primary: [],
            secondary: []
          }
        },
        null,
        2
      ) + "\n",
      "utf8"
    );
  }
  return { baseDir, profileDir, preferencesPath };
}

export function ensureProjectLayout(slug) {
  const { baseDir, preferencesPath } = ensureProfileLayout();
  const projectDir = path.join(baseDir, "projects", slug);
  mkdirSync(projectDir, { recursive: true });

  const memoryPath = path.join(projectDir, "memory.jsonl");
  const statePath = path.join(projectDir, "state.json");

  if (!existsSync(memoryPath)) {
    writeFileSync(memoryPath, "", "utf8");
  }

  if (!existsSync(statePath)) {
    writeFileSync(
      statePath,
      JSON.stringify(
        {
          current_stage: "unknown",
          last_skill: "",
          updated_at: "",
          notes: []
        },
        null,
        2
      ) + "\n",
      "utf8"
    );
  }

  return { baseDir, projectDir, memoryPath, statePath, preferencesPath };
}

export function ensureBaseConfig() {
  const baseDir = researchstackHome();
  mkdirSync(baseDir, { recursive: true });
  const configPath = path.join(baseDir, "config.json");
  if (!existsSync(configPath)) {
    writeFileSync(
      configPath,
      JSON.stringify(
        {
          proactive: true,
          skill_prefix: true,
          routing_declined: false,
          preferred_host: "auto"
        },
        null,
        2
      ) + "\n",
      "utf8"
    );
  }
  return configPath;
}

export function loadJson(filePath, fallback) {
  if (!existsSync(filePath)) {
    return fallback;
  }
  try {
    return JSON.parse(readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

export function loadConfig() {
  const configPath = ensureBaseConfig();
  return { configPath, config: loadJson(configPath, {}) };
}

export function saveConfig(config) {
  const configPath = ensureBaseConfig();
  writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n", "utf8");
  return configPath;
}

export function readMemoryStatus(slug, createLayout = false) {
  const home = researchstackHome();
  const layout = createLayout ? ensureProjectLayout(slug) : {
    baseDir: home,
    projectDir: path.join(home, "projects", slug),
    memoryPath: path.join(home, "projects", slug, "memory.jsonl"),
    statePath: path.join(home, "projects", slug, "state.json"),
    preferencesPath: path.join(home, "profile", "preferences.json")
  };

  const memoryExists = existsSync(layout.memoryPath);
  const memoryEntries = memoryExists
    ? readFileSync(layout.memoryPath, "utf8").split(/\r?\n/).filter((line) => line.trim()).length
    : 0;
  const state = loadJson(layout.statePath, {
    current_stage: "unknown",
    last_skill: "",
    updated_at: "",
    notes: []
  });

  return {
    ...layout,
    exists: memoryExists,
    memoryEntries,
    currentStage: state.current_stage || "unknown",
    lastSkill: state.last_skill || "",
    updatedAt: state.updated_at || ""
  };
}

export function detectHost() {
  if (process.env.CODEX_HOME || process.env.CODEX_AGENT_NAME || process.env.CODEX_SANDBOX) {
    return "codex";
  }
  if (process.env.CLAUDECODE || process.env.CLAUDE_CODE_ENTRYPOINT || process.env.CLAUDE_PROJECT_DIR) {
    return "claude";
  }
  return "unknown";
}

export function findInstallations() {
  const candidates = [
    { host: "codex", dir: path.join(os.homedir(), ".codex", "skills") },
    { host: "claude", dir: path.join(os.homedir(), ".claude", "skills") }
  ];

  return candidates.map((candidate) => {
    const exists = existsSync(candidate.dir);
    const installed = exists
      ? readdirSync(candidate.dir, { withFileTypes: true })
          .filter((entry) => entry.isDirectory() && entry.name.startsWith("researchstack"))
          .map((entry) => entry.name)
          .sort()
      : [];
    const backups = installed.filter((name) => name.includes(".bak."));
    return { ...candidate, exists, installed, backups };
  });
}

export function findRepoRoot(startDir) {
  let current = path.resolve(startDir);
  while (true) {
    if (existsSync(path.join(current, "package.json")) && existsSync(path.join(current, "setup"))) {
      return current;
    }
    const parent = path.dirname(current);
    if (parent === current) {
      return "";
    }
    current = parent;
  }
}

export function readPackageVersion(rootDir) {
  const packagePath = path.join(rootDir, "package.json");
  if (!existsSync(packagePath)) {
    return "0.0.0";
  }
  try {
    const pkg = JSON.parse(readFileSync(packagePath, "utf8"));
    return pkg.version || "0.0.0";
  } catch {
    return "0.0.0";
  }
}

export function routingTargets(rootDir) {
  return [
    { host: "claude", path: path.join(rootDir, "CLAUDE.md") },
    { host: "generic", path: path.join(rootDir, "AGENTS.md") }
  ];
}

export function safeReadText(filePath) {
  return existsSync(filePath) ? readFileSync(filePath, "utf8") : "";
}

export function appendIfMissing(filePath, marker, content) {
  const current = safeReadText(filePath);
  if (current.includes(marker)) {
    return false;
  }
  const prefix = current && !current.endsWith("\n") ? "\n\n" : "";
  const next = `${current}${prefix}${content.trim()}\n`;
  writeFileSync(filePath, next, "utf8");
  return true;
}

export function isManagedInstall(dirPath) {
  return existsSync(path.join(dirPath, ".researchstack-managed"));
}

export function directoryMtime(filePath) {
  if (!existsSync(filePath)) {
    return "";
  }
  try {
    return statSync(filePath).mtime.toISOString();
  } catch {
    return "";
  }
}
