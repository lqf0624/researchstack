import { readdirSync, rmSync } from "node:fs";
import path from "node:path";
import os from "node:os";

function installDir(host) {
  return host === "codex"
    ? path.join(os.homedir(), ".codex", "skills")
    : path.join(os.homedir(), ".claude", "skills");
}

function cleanupHost(host) {
  const dir = installDir(host);
  const removed = [];
  try {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) {
        continue;
      }
      if (!entry.name.startsWith("researchstack") || !entry.name.includes(".bak.")) {
        continue;
      }
      const target = path.join(dir, entry.name);
      rmSync(target, { recursive: true, force: true });
      removed.push(target);
    }
  } catch {
    return { host, dir, removed, missing: true };
  }
  return { host, dir, removed, missing: false };
}

const host = process.argv[2] || "all";
const results = [];
if (host === "all" || host === "codex") {
  results.push(cleanupHost("codex"));
}
if (host === "all" || host === "claude") {
  results.push(cleanupHost("claude"));
}
console.log(JSON.stringify(results, null, 2));
