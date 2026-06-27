/**
 * Import retouched photos from the Stuart archive into public/images/retouched/.
 * Resizes to max 2400px and compresses for web (target ~200–600 KB each).
 *
 * Usage: node scripts/process-retouched-import.mjs [sourceDir]
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const SOURCE =
  process.argv[2] ?? "d:\\2026\\Stuart\\Retouched\\FINAL COPIES";
const DEST = path.join(process.cwd(), "public", "images", "retouched");

function destName(filename) {
  const numbered = filename.match(/untitled \((\d+) of 342\)/i);
  if (numbered) return `stc-${numbered[1].padStart(3, "0")}.jpg`;
  if (/tiny township landscaping/i.test(filename)) {
    return "stc-tiny-township-landscaping.jpg";
  }
  const base = path
    .basename(filename, path.extname(filename))
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  return `${base}.jpg`;
}

async function processFile(sourcePath, outPath) {
  await sharp(sourcePath)
    .rotate()
    .resize({
      width: 2400,
      height: 2400,
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(outPath);
}

async function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error(`Source not found: ${SOURCE}`);
    process.exit(1);
  }

  fs.mkdirSync(DEST, { recursive: true });

  const files = fs
    .readdirSync(SOURCE)
    .filter((f) => /\.jpe?g$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const manifest = [];
  let done = 0;

  for (const file of files) {
    const outName = destName(file);
    const outPath = path.join(DEST, outName);
    const sourcePath = path.join(SOURCE, file);

    try {
      await processFile(sourcePath, outPath);
      const bytes = fs.statSync(outPath).size;
      manifest.push({
        source: file,
        output: outName,
        publicPath: `/images/retouched/${outName}`,
        bytes,
      });
      done += 1;
      if (done % 25 === 0 || done === files.length) {
        console.log(`Processed ${done}/${files.length}`);
      }
    } catch (err) {
      console.error(`Failed: ${file}`, err);
      manifest.push({ source: file, output: outName, error: String(err) });
    }
  }

  const totalBytes = manifest.reduce((sum, m) => sum + (m.bytes ?? 0), 0);
  fs.writeFileSync(
    path.join(DEST, "manifest.json"),
    JSON.stringify(
      {
        importedAt: new Date().toISOString(),
        source: SOURCE,
        count: manifest.filter((m) => m.bytes).length,
        totalMB: Math.round((totalBytes / 1024 / 1024) * 10) / 10,
        files: manifest,
      },
      null,
      2,
    ),
  );

  console.log(
    `Done. ${done} images → ${DEST} (${Math.round(totalBytes / 1024 / 1024)} MB)`,
  );
}

main();
