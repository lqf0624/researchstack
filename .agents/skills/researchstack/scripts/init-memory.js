import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";

function parseArgs(argv) {
  const options = {
    root: process.cwd(),
    source: "",
    projectName: "",
    printJson: false,
    noCreate: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--root" && argv[i + 1]) {
      options.root = argv[i + 1];
      i += 1;
    } else if (arg.startsWith("--root=")) {
      options.root = arg.slice("--root=".length);
    } else if (arg === "--source" && argv[i + 1]) {
      options.source = argv[i + 1];
      i += 1;
    } else if (arg.startsWith("--source=")) {
      options.source = arg.slice("--source=".length);
    } else if (arg === "--project-name" && argv[i + 1]) {
      options.projectName = argv[i + 1];
      i += 1;
    } else if (arg.startsWith("--project-name=")) {
      options.projectName = arg.slice("--project-name=".length);
    } else if (arg === "--print-json") {
      options.printJson = true;
    } else if (arg === "--no-create") {
      options.noCreate = true;
    }
  }

  return options;
}

function normalizeSource(input) {
  return input.trim().toLowerCase().replace(/\\/g, "/").replace(/\.git$/, "").replace(/\/+$/, "");
}

function slugifyProjectName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "research-project";
}

function detectSource(root, explicitSource) {
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

function ensureLayout(slug) {
  const baseDir = path.join(os.homedir(), ".researchstack");
  const projectDir = path.join(baseDir, "projects", slug);
  const profileDir = path.join(baseDir, "profile");
  mkdirSync(projectDir, { recursive: true });
  mkdirSync(profileDir, { recursive: true });

  const memoryPath = path.join(projectDir, "memory.jsonl");
  const preferencesPath = path.join(profileDir, "preferences.json");

  if (!existsSync(memoryPath)) {
    writeFileSync(memoryPath, "", "utf8");
  }

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

  return { projectDir, memoryPath, preferencesPath };
}

const options = parseArgs(process.argv.slice(2));
const source = detectSource(options.root, options.source);
const normalizedSource = normalizeSource(source);
const repoName = slugifyProjectName(options.projectName || path.basename(path.resolve(options.root)));
const stableId = createHash("sha256").update(normalizedSource).digest("hex").slice(0, 6);
const slug = `${repoName}-${stableId}`;

let createdPaths = null;
if (!options.noCreate) {
  createdPaths = ensureLayout(slug);
}

const output = {
  slug,
  source,
  normalized_source: normalizedSource,
  project_name: repoName,
  stable_id: stableId,
  project_dir: createdPaths?.projectDir ?? path.join(os.homedir(), ".researchstack", "projects", slug),
  memory_path: createdPaths?.memoryPath ?? path.join(os.homedir(), ".researchstack", "projects", slug, "memory.jsonl"),
  preferences_path: createdPaths?.preferencesPath ?? path.join(os.homedir(), ".researchstack", "profile", "preferences.json")
};

if (options.printJson) {
  console.log(JSON.stringify(output, null, 2));
} else {
  console.log(`slug=${output.slug}`);
  console.log(`source=${output.source}`);
  console.log(`memory_path=${output.memory_path}`);
  console.log(`preferences_path=${output.preferences_path}`);
}
