#!/usr/bin/env node
/**
 * Grep-based contrast guard for typography role violations.
 * Fails if btn-beige appears in overlay cards or text-stc-white in light-band components.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const root = join(import.meta.dirname, "..");
const src = join(root, "src");

const failures = [];

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "node_modules" || name === ".next") continue;
      walk(p, files);
    } else if (extname(name) === ".tsx" || extname(name) === ".css") {
      files.push(p);
    }
  }
  return files;
}

for (const file of walk(src)) {
  const text = readFileSync(file, "utf8");
  const rel = file.replace(root + "\\", "").replace(root + "/", "");

  if (extname(file) === ".tsx" && /stc-svc-overlay[\s\S]{0,600}btn-beige/.test(text)) {
    failures.push(`${rel}: btn-beige inside service overlay`);
  }

  if (/turner-band--light[\s\S]{0,400}text-stc-white/.test(text)) {
    failures.push(`${rel}: text-stc-white near turner-band--light`);
  }

  if (/bg-stc-white[\s\S]{0,300}text-stc-white/.test(text) && !file.includes("button.tsx")) {
    failures.push(`${rel}: text-stc-white on white background`);
  }
}

if (failures.length) {
  console.error("Typography contrast check failed:\n");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log("Typography contrast check passed.");
