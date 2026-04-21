import path from "node:path";
import { computeProjectInfo, ensureProjectLayout, researchstackHome } from "./lib/researchstack.js";

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

const options = parseArgs(process.argv.slice(2));
const project = computeProjectInfo(options.root, options.source, options.projectName || path.basename(path.resolve(options.root)));
const layout = options.noCreate ? null : ensureProjectLayout(project.slug);
const baseDir = researchstackHome();

const output = {
  slug: project.slug,
  root: project.root,
  source: project.source,
  normalized_source: project.normalizedSource,
  project_name: project.projectName,
  stable_id: project.stableId,
  project_dir: layout?.projectDir ?? path.join(baseDir, "projects", project.slug),
  memory_path: layout?.memoryPath ?? path.join(baseDir, "projects", project.slug, "memory.jsonl"),
  state_path: layout?.statePath ?? path.join(baseDir, "projects", project.slug, "state.json"),
  preferences_path: layout?.preferencesPath ?? path.join(baseDir, "profile", "preferences.json")
};

if (options.printJson) {
  console.log(JSON.stringify(output, null, 2));
} else {
  console.log(`slug=${output.slug}`);
  console.log(`memory_path=${output.memory_path}`);
  console.log(`state_path=${output.state_path}`);
}
