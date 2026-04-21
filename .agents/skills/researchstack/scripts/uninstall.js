import { readdirSync, rmSync } from "node:fs";
import path from "node:path";
import os from "node:os";

const suffixes = [
  "",
  "-next-step",
  "-lab-intake",
  "-idea-finder",
  "-idea-review",
  "-idea-refine",
  "-literature-map",
  "-learn",
  "-paper-reproduction",
  "-experiment-design",
  "-experiment-ops",
  "-artifact-audit",
  "-code-review",
  "-paper-write",
  "-paper-layout",
  "-figure-studio",
  "-submission-gate",
  "-peer-review",
  "-rebuttal-coach"
];

function removeInstall(host) {
  const dir = host === "codex"
    ? path.join(os.homedir(), ".codex", "skills")
    : path.join(os.homedir(), ".claude", "skills");
  const removed = [];

  for (const suffix of suffixes) {
    const target = path.join(dir, `researchstack${suffix}`);
    rmSync(target, { recursive: true, force: true });
    removed.push(target);
  }

  try {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory() && entry.name.startsWith("researchstack") && entry.name.includes(".bak.")) {
        const target = path.join(dir, entry.name);
        rmSync(target, { recursive: true, force: true });
        removed.push(target);
      }
    }
  } catch {
    // Ignore missing install roots.
  }

  return { host, dir, removed };
}

const host = process.argv[2] || "all";
const results = [];
if (host === "all" || host === "codex") {
  results.push(removeInstall("codex"));
}
if (host === "all" || host === "claude") {
  results.push(removeInstall("claude"));
}
console.log(JSON.stringify(results, null, 2));
