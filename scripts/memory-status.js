import { computeProjectInfo, readMemoryStatus } from "./lib/researchstack.js";

function parseArgs(argv) {
  const options = {
    root: process.cwd(),
    slug: "",
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
    } else if (arg === "--slug" && argv[i + 1]) {
      options.slug = argv[i + 1];
      i += 1;
    } else if (arg.startsWith("--slug=")) {
      options.slug = arg.slice("--slug=".length);
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
const slug = options.slug || computeProjectInfo(options.root, options.source, options.projectName).slug;
const status = readMemoryStatus(slug, !options.noCreate);

const output = {
  slug,
  exists: status.exists,
  memory_entries: status.memoryEntries,
  current_stage: status.currentStage,
  last_skill: status.lastSkill,
  updated_at: status.updatedAt,
  memory_path: status.memoryPath,
  state_path: status.statePath
};

if (options.printJson) {
  console.log(JSON.stringify(output, null, 2));
} else {
  console.log(`slug=${output.slug}`);
  console.log(`memory_entries=${output.memory_entries}`);
  console.log(`current_stage=${output.current_stage}`);
  console.log(`last_skill=${output.last_skill}`);
  console.log(`updated_at=${output.updated_at}`);
}
