import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

export const managedMarkerName = ".researchstack-managed";

function listFiles(rootDir, currentDir = rootDir) {
  const files = [];
  for (const entry of readdirSync(currentDir, { withFileTypes: true })) {
    if (entry.name === managedMarkerName || entry.name === ".git") {
      continue;
    }
    const full = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(rootDir, full));
    } else if (entry.isFile()) {
      files.push(full);
    }
  }
  return files.sort((a, b) => a.localeCompare(b));
}

export function directoryFingerprint(rootDir) {
  if (!existsSync(rootDir) || !statSync(rootDir).isDirectory()) {
    return "";
  }
  const hash = createHash("sha256");
  for (const file of listFiles(rootDir)) {
    const relative = path.relative(rootDir, file).replace(/\\/g, "/");
    hash.update(relative);
    hash.update("\0");
    hash.update(readFileSync(file));
    hash.update("\0");
  }
  return hash.digest("hex");
}

export function writeManagedManifest(dirPath, metadata) {
  const manifest = {
    schema_version: 1,
    package_version: metadata.packageVersion,
    host: metadata.host,
    generated_name: metadata.generatedName,
    source_skill: metadata.sourceSkill,
    content_sha256: directoryFingerprint(dirPath)
  };
  writeFileSync(path.join(dirPath, managedMarkerName), JSON.stringify(manifest, null, 2) + "\n", "utf8");
  return manifest;
}

export function readManagedManifest(dirPath) {
  const markerPath = path.join(dirPath, managedMarkerName);
  if (!existsSync(markerPath)) {
    return null;
  }
  try {
    return JSON.parse(readFileSync(markerPath, "utf8"));
  } catch {
    return { schema_version: 0, legacy: true };
  }
}

export function verifyManagedInstall(dirPath) {
  const manifest = readManagedManifest(dirPath);
  if (!manifest) {
    return { managed: false, version: "", contentOk: false, manifest: null };
  }
  const currentFingerprint = directoryFingerprint(dirPath);
  return {
    managed: true,
    version: manifest.package_version || "",
    contentOk: Boolean(manifest.content_sha256) && manifest.content_sha256 === currentFingerprint,
    currentFingerprint,
    manifest
  };
}
