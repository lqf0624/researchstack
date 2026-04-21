import { spawnSync } from "node:child_process";
import path from "node:path";
import { findRepoRoot, readPackageVersion } from "./lib/researchstack.js";

const repoRoot = findRepoRoot(process.cwd());
if (!repoRoot) {
  console.error("researchstack-upgrade must run from a researchstack source checkout.");
  process.exit(1);
}

const setupPath = path.join(repoRoot, "setup");
const args = [setupPath, "--host", process.argv[2] || "auto"];
const result = spawnSync("bash", args, { cwd: repoRoot, stdio: "inherit" });
if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
console.log(`researchstack upgraded to ${readPackageVersion(repoRoot)}`);
