import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const referencesDir = join(root, "references");

const sourceDirs = [
  ".",
  "lab-intake",
  "idea-review",
  "idea-refine",
  "literature-map",
  "learn",
  "paper-reproduction",
  "experiment-design",
  "experiment-ops",
  "artifact-audit",
  "code-review",
  "paper-write",
  "paper-layout",
  "figure-studio",
  "submission-gate",
  "peer-review",
  "rebuttal-coach"
];

function parseArgs(argv) {
  let host = "codex";
  let outRoot = join(root, ".agents", "skills");
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--host" && argv[i + 1]) {
      host = argv[i + 1];
      i += 1;
    } else if (arg.startsWith("--host=")) {
      host = arg.slice("--host=".length);
    } else if (arg === "--out" && argv[i + 1]) {
      outRoot = argv[i + 1];
      i += 1;
    } else if (arg.startsWith("--out=")) {
      outRoot = arg.slice("--out=".length);
    }
  }
  return { host, outRoot };
}

function parseFrontmatter(text) {
  const normalized = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Missing YAML frontmatter");
  }
  const yaml = match[1];
  const body = match[2];
  const name = yaml.match(/^name:\s*(.+)$/m)?.[1]?.trim() ?? "";
  const descriptionMatch = yaml.match(/^description:\s*\|?\n([\s\S]*)$/m);
  let description = "";
  if (descriptionMatch) {
    description = descriptionMatch[1]
      .split("\n")
      .map((line) => line.replace(/^\s{2}/, ""))
      .join("\n")
      .trim();
  } else {
    description = yaml.match(/^description:\s*(.+)$/m)?.[1]?.trim() ?? "";
  }
  return { name, description, body };
}

function toGeneratedName(sourceDir) {
  if (sourceDir === ".") {
    return "researchstack";
  }
  return `researchstack-${sourceDir}`;
}

function rewriteBodyForGeneratedHost(body) {
  return body
    .replaceAll("(../references/", "(references/")
    .replaceAll("`lab-intake`", "`researchstack-lab-intake`")
    .replaceAll("`idea-review`", "`researchstack-idea-review`")
    .replaceAll("`idea-refine`", "`researchstack-idea-refine`")
    .replaceAll("`literature-map`", "`researchstack-literature-map`")
    .replaceAll("`learn`", "`researchstack-learn`")
    .replaceAll("`paper-reproduction`", "`researchstack-paper-reproduction`")
    .replaceAll("`experiment-design`", "`researchstack-experiment-design`")
    .replaceAll("`experiment-ops`", "`researchstack-experiment-ops`")
    .replaceAll("`artifact-audit`", "`researchstack-artifact-audit`")
    .replaceAll("`code-review`", "`researchstack-code-review`")
    .replaceAll("`paper-write`", "`researchstack-paper-write`")
    .replaceAll("`paper-layout`", "`researchstack-paper-layout`")
    .replaceAll("`figure-studio`", "`researchstack-figure-studio`")
    .replaceAll("`submission-gate`", "`researchstack-submission-gate`")
    .replaceAll("`peer-review`", "`researchstack-peer-review`")
    .replaceAll("`rebuttal-coach`", "`researchstack-rebuttal-coach`");
}

function copyOptionalResourceDirs(sourceBase, outDir) {
  for (const resourceDir of ["assets", "scripts", "references", "agents"]) {
    const sourceDir = join(sourceBase, resourceDir);
    if (existsSync(sourceDir)) {
      cpSync(sourceDir, join(outDir, resourceDir), { recursive: true });
    }
  }
}

function rewriteGeneratedOpenAiYaml(outDir, sourceSkillName, generatedName) {
  const openAiYamlPath = join(outDir, "agents", "openai.yaml");
  if (!existsSync(openAiYamlPath)) {
    return;
  }
  const original = readFileSync(openAiYamlPath, "utf8");
  const rewritten = original.replaceAll(`$${sourceSkillName}`, `$${generatedName}`);
  writeFileSync(openAiYamlPath, rewritten, "utf8");
}

function writeGeneratedSkill(outDir, generatedName, sourceSkillName, description, body, host, sourceBase) {
  mkdirSync(outDir, { recursive: true });
  cpSync(referencesDir, join(outDir, "references"), { recursive: true });
  copyOptionalResourceDirs(sourceBase, outDir);
  rewriteGeneratedOpenAiYaml(outDir, sourceSkillName, generatedName);
  const generated = [
    "---",
    `name: ${generatedName}`,
    "description: |",
    ...description.split("\n").map((line) => `  ${line}`),
    "---",
    "",
    `<!-- AUTO-GENERATED for ${host}. Edit source SKILL.md files, then rerun bun run gen:skill-docs. -->`,
    rewriteBodyForGeneratedHost(body).trimEnd(),
    ""
  ].join("\n");
  writeFileSync(join(outDir, "SKILL.md"), generated, "utf8");
}

const { host, outRoot } = parseArgs(process.argv.slice(2));

rmSync(outRoot, { recursive: true, force: true });
mkdirSync(outRoot, { recursive: true });

for (const dir of sourceDirs) {
  const sourcePath = dir === "." ? join(root, "SKILL.md") : join(root, dir, "SKILL.md");
  const content = readFileSync(sourcePath, "utf8");
  const { name, description, body } = parseFrontmatter(content);
  const generatedName = toGeneratedName(dir);
  const outDir = join(outRoot, generatedName);
  const sourceBase = dir === "." ? root : join(root, dir);
  writeGeneratedSkill(outDir, generatedName, name, description, body, host, sourceBase);
  console.log(`GENERATED: ${generatedName}`);
}

const generatedDirs = readdirSync(outRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

console.log(`Generated ${generatedDirs.length} ${host} skills.`);
