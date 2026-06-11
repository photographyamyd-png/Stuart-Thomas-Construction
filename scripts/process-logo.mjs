/**
 * Process brand logo → transparent public/brand assets
 * Source: public/brand/logo-source.png (or Logo attempts/PNG.png)
 * Usage: node scripts/process-logo.mjs
 */
import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "brand");

const candidates = [
  path.join(outDir, "logo-source.png"),
  path.join(root, "Logo attempts", "PNG.png"),
];

const src = candidates.find((p) => fs.existsSync(p));
if (!src) {
  console.error("No logo source found. Add public/brand/logo-source.png");
  process.exit(1);
}

const img = sharp(src);
const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];
  // Remove light backgrounds and checkerboard neutrals
  const isLightBg = r > 210 && g > 200 && b > 180;
  const isChecker =
    a > 200 &&
    Math.abs(r - g) < 12 &&
    Math.abs(g - b) < 12 &&
    r > 160 &&
    r < 245;
  if (isLightBg || isChecker) data[i + 3] = 0;
}

const logoPath = path.join(outDir, "logo.png");
await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile(logoPath);

const meta = await sharp(logoPath).metadata();

await sharp(logoPath)
  .resize(128, 128, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toFile(path.join(outDir, "logo-icon.png"));

console.log(`Logo written from ${path.basename(src)} (${meta.width}x${meta.height})`);
