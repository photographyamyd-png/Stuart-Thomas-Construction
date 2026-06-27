/**
 * Rename project images with SEO filenames, organize by service category,
 * embed EXIF/IPTC metadata (title, description, keywords, GPS), and emit catalog.
 *
 * Usage: node scripts/apply-image-seo.mjs [--dry-run]
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { exiftool } from "exiftool-vendored";
import {
  AREAS,
  BUSINESS,
  CATEGORY_ORDER,
  FILE_OVERRIDES,
  SERVICE_META,
} from "./image-seo-config.mjs";

const ROOT = path.join(process.cwd(), "public", "images");
const CATALOG_PATH = path.join(process.cwd(), "src", "data", "image-catalog.json");
const DRY_RUN = process.argv.includes("--dry-run");

const SKIP_DIRS = new Set(["partners", "reference", "brochures"]);
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

function areaBySlug(slug) {
  return AREAS.find((a) => a.slug === slug) ?? AREAS[0];
}

function inferMeta(basename, index) {
  const override = FILE_OVERRIDES[basename];
  if (override) {
    const area = areaBySlug(override.areaSlug);
    const service = SERVICE_META[override.category];
    return {
      category: override.category,
      descriptor: override.descriptor,
      area,
      title: override.title,
      service,
    };
  }

  const stcMatch = basename.match(/^stc-(\d{3})\.jpg$/i);
  const num = stcMatch ? parseInt(stcMatch[1], 10) : index;

  const category = CATEGORY_ORDER[num % CATEGORY_ORDER.length];
  const area = AREAS[num % AREAS.length];
  const service = SERVICE_META[category];
  const descriptor =
    service.descriptors[num % service.descriptors.length] ?? "project-site";

  return { category, descriptor, area, service, title: undefined };
}

function buildSeoFilename(category, descriptor, areaSlug, basename) {
  const stc = basename.match(/stc-(\d{3})/i)?.[1];
  const legacy = basename.match(/^(20260508_\d+)/)?.[1];
  const suffix = stc ? `stc-${stc}` : legacy ? `legacy-${legacy.slice(-6)}` : undefined;
  const parts = [category, descriptor, areaSlug];
  if (suffix) parts.push(suffix);
  return `${parts.join("-")}.jpg`;
}

function buildCopy(meta, basename) {
  const { category, descriptor, area, service, title } = meta;
  const serviceLabel = service.label;
  const areaName = area.name;

  const resolvedTitle =
    title ??
    `${serviceLabel} — ${descriptor.replace(/-/g, " ")} | ${areaName}`;

  const alt = `${serviceLabel} by ${BUSINESS.name} in ${areaName} — ${descriptor.replace(/-/g, " ")} on a South Georgian Bay residential property`;

  const description = `${BUSINESS.name} ${serviceLabel.toLowerCase()} project in ${areaName}, Ontario. Serving Tiny Township, Wasaga Beach, Collingwood, Perkinsfield, and South Georgian Bay with armour stone, waterfront hardscaping, excavation, landscaping, and commercial snow removal.`;

  const keywords = [
    ...service.keywords,
    areaName,
    "South Georgian Bay",
    "Ontario",
    BUSINESS.name,
    category.replace(/-/g, " "),
  ];

  return {
    title: resolvedTitle,
    alt,
    description,
    keywords: [...new Set(keywords)],
  };
}

function collectSourceFiles(dir, rel = []) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith(".") || ent.name === "manifest.json") continue;
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue;
      if (ent.name === "retouched") {
        out.push(...collectSourceFiles(abs, [...rel, ent.name]));
        continue;
      }
      if (CATEGORY_ORDER.includes(ent.name)) continue;
      out.push(...collectSourceFiles(abs, [...rel, ent.name]));
      continue;
    }
    if (!IMAGE_EXT.test(ent.name)) continue;
    if (ent.name.endsWith(".png") && rel.some((s) => s === "snow-removal")) continue;
    out.push({
      absPath: abs,
      basename: ent.name,
      relDir: rel.join("/"),
    });
  }
  return out;
}

async function writeExif(absPath, entry) {
  if (DRY_RUN) return;
  await exiftool.write(
    absPath,
    {
      Title: entry.title,
      Description: entry.description,
      ImageDescription: entry.description,
      XPKeywords: entry.keywords.join(";"),
      Subject: entry.keywords,
      Keywords: entry.keywords,
      Artist: BUSINESS.name,
      Copyright: BUSINESS.copyright,
      GPSLatitude: entry.gps.lat,
      GPSLongitude: entry.gps.lng,
      "XMP-dc:Creator": BUSINESS.name,
      "XMP-dc:Title": entry.title,
      "XMP-dc:Description": entry.description,
      "XMP-dc:Subject": entry.keywords,
      "XMP-iptcCore:Location": entry.areaServed,
    },
    ["-overwrite_original"],
  );
}

async function main() {
  const sources = [
    ...collectSourceFiles(path.join(ROOT, "retouched")),
    ...collectSourceFiles(ROOT).filter(
      (f) => !f.relDir && f.basename.match(/^20260508_/),
    ),
  ];

  const usedNames = new Set();
  const catalog = {};
  const pathMigration = {};
  let index = 0;

  for (const source of sources) {
    const meta = inferMeta(source.basename, index);
    index += 1;

    let filename = buildSeoFilename(
      meta.category,
      meta.descriptor,
      meta.area.slug,
      source.basename,
    );

    let n = 2;
    while (usedNames.has(filename)) {
      filename = filename.replace(/\.jpg$/, `-${n}.jpg`);
      n += 1;
    }
    usedNames.add(filename);

    const destDir = path.join(ROOT, meta.category);
    const destAbs = path.join(destDir, filename);
    const publicPath = `/images/${meta.category}/${filename}`;
    const oldPublicPath = source.relDir
      ? `/images/${source.relDir}/${source.basename}`
      : `/images/${source.basename}`;

    const copy = buildCopy(meta, source.basename);

    const entry = {
      publicPath,
      filename,
      category: meta.category,
      areaServed: meta.area.name,
      areaSlug: meta.area.slug,
      gps: meta.area.gps,
      title: copy.title,
      alt: copy.alt,
      description: copy.description,
      keywords: copy.keywords,
      legacyPath: oldPublicPath,
      sourceFile: source.basename,
    };

    catalog[publicPath] = entry;
    pathMigration[oldPublicPath] = publicPath;

    if (!DRY_RUN) {
      fs.mkdirSync(destDir, { recursive: true });
      if (source.absPath !== destAbs) {
        await sharp(source.absPath)
          .rotate()
          .jpeg({ quality: 82, mozjpeg: true })
          .toFile(destAbs + ".tmp");
        fs.renameSync(destAbs + ".tmp", destAbs);
      }
      await writeExif(destAbs, entry);
    }

    if (index % 50 === 0) {
      console.log(`Processed ${index}/${sources.length}`);
    }
  }

  if (!DRY_RUN) {
    for (const source of sources) {
      try {
        if (fs.existsSync(source.absPath)) fs.unlinkSync(source.absPath);
      } catch {
        /* ignore */
      }
    }

    const retouchedDir = path.join(ROOT, "retouched");
    if (fs.existsSync(retouchedDir)) {
      const remaining = fs.readdirSync(retouchedDir);
      if (remaining.length === 0 || (remaining.length === 1 && remaining[0] === "manifest.json")) {
        if (remaining.includes("manifest.json")) fs.unlinkSync(path.join(retouchedDir, "manifest.json"));
        try {
          fs.rmdirSync(retouchedDir);
        } catch {
          /* ignore */
        }
      }
    }
  }

  const catalogDoc = {
    generatedAt: new Date().toISOString(),
    business: BUSINESS.name,
    areasServed: AREAS.map((a) => a.name),
    services: Object.keys(SERVICE_META),
    count: Object.keys(catalog).length,
    images: catalog,
    pathMigration,
  };

  if (!DRY_RUN) {
    fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalogDoc, null, 2));
  }

  await exiftool.end();

  console.log(
    `${DRY_RUN ? "[dry-run] " : ""}Cataloged ${Object.keys(catalog).length} images → ${CATALOG_PATH}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
