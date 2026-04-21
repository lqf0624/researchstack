import { loadConfig, saveConfig } from "./lib/researchstack.js";

function parseValue(raw) {
  if (raw === "true") {
    return true;
  }
  if (raw === "false") {
    return false;
  }
  if (/^-?\d+$/.test(raw)) {
    return Number.parseInt(raw, 10);
  }
  return raw;
}

const [command = "show", key = "", value = ""] = process.argv.slice(2);
const { config } = loadConfig();

if (command === "show") {
  console.log(JSON.stringify(config, null, 2));
} else if (command === "get") {
  if (!key) {
    throw new Error("config get requires a key");
  }
  const result = key.split(".").reduce((acc, part) => (acc && typeof acc === "object" ? acc[part] : undefined), config);
  if (result === undefined) {
    process.exitCode = 1;
  } else if (typeof result === "object") {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(String(result));
  }
} else if (command === "set") {
  if (!key) {
    throw new Error("config set requires a key");
  }
  const next = structuredClone(config);
  const parts = key.split(".");
  let cursor = next;
  while (parts.length > 1) {
    const part = parts.shift();
    if (!(part in cursor) || typeof cursor[part] !== "object" || cursor[part] === null) {
      cursor[part] = {};
    }
    cursor = cursor[part];
  }
  cursor[parts[0]] = parseValue(value);
  saveConfig(next);
  console.log(`${key}=${JSON.stringify(cursor[parts[0]])}`);
} else {
  throw new Error(`Unknown config command: ${command}`);
}
