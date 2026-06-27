/**
 * Replace legacy image paths in source files using image-catalog pathMigration.
 * Usage: node scripts/sync-media-paths.mjs
 */
import fs from "fs";
import path from "path";

const CATALOG_PATH = path.join(process.cwd(), "src", "data", "image-catalog.json");
const TARGETS = [
  "src/data/media.ts",
  "src/data/enterprise.ts",
  "src/data/redi-rock.ts",
  "src/lib/seo.ts",
];

const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf8"));
const migration = catalog.pathMigration ?? {};

let total = 0;
for (const rel of TARGETS) {
  const abs = path.join(process.cwd(), rel);
  let content = fs.readFileSync(abs, "utf8");
  let fileCount = 0;
  for (const [oldPath, newPath] of Object.entries(migration)) {
    const before = content;
    content = content.split(oldPath).join(newPath);
    if (content !== before) fileCount += 1;
  }
  if (fileCount > 0) {
    fs.writeFileSync(abs, content);
    console.log(`Updated ${rel} (${fileCount} path mappings)`);
    total += fileCount;
  }
}

console.log(`Done. ${total} file groups updated.`);
