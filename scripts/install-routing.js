import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { appendIfMissing, findRepoRoot, routingTargets } from "./lib/researchstack.js";

const marker = "## Researchstack Skill Routing";

function parseArgs(argv) {
  const options = {
    root: findRepoRoot(process.cwd()) || process.cwd(),
    host: "all",
    printOnly: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--root" && argv[i + 1]) {
      options.root = argv[i + 1];
      i += 1;
    } else if (arg.startsWith("--root=")) {
      options.root = arg.slice("--root=".length);
    } else if (arg === "--host" && argv[i + 1]) {
      options.host = argv[i + 1];
      i += 1;
    } else if (arg.startsWith("--host=")) {
      options.host = arg.slice("--host=".length);
    } else if (arg === "--print") {
      options.printOnly = true;
    }
  }

  return options;
}

const options = parseArgs(process.argv.slice(2));
const scriptRoot = findRepoRoot(import.meta.dir) || process.cwd();
const templatePaths = {
  claude: path.join(scriptRoot, "templates", "claude-routing.md"),
  generic: path.join(scriptRoot, "templates", "agents-routing.md")
};

const targets = routingTargets(options.root).filter((target) => options.host === "all" || target.host === options.host);
const results = [];

for (const target of targets) {
  const templatePath = templatePaths[target.host] || templatePaths.generic;
  const content = readFileSync(templatePath, "utf8");
  if (options.printOnly) {
    console.log(`=== ${target.path} ===`);
    console.log(content);
    continue;
  }

  mkdirSync(path.dirname(target.path), { recursive: true });
  if (!existsSync(target.path)) {
    writeFileSync(target.path, "", "utf8");
  }
  const changed = appendIfMissing(target.path, marker, content);
  results.push({ host: target.host, path: target.path, changed });
}

if (!options.printOnly) {
  console.log(JSON.stringify(results, null, 2));
}
