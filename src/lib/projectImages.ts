import "server-only";
import fs from "fs";
import path from "path";
import {
  galleryCategories,
  type GalleryCategoryId,
} from "@/data/gallery";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const categoryIdSet = new Set<string>(
  galleryCategories.map((c) => c.id),
);

export type ProjectImageFile = {
  publicPath: string;
  categories: GalleryCategoryId[];
};

function isCategoryId(seg: string): seg is GalleryCategoryId {
  return categoryIdSet.has(seg);
}

function walkDir(absDir: string, relSegments: string[]): ProjectImageFile[] {
  if (!fs.existsSync(absDir)) return [];

  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  const out: ProjectImageFile[] = [];

  for (const ent of entries) {
    if (ent.name === ".gitkeep" || ent.name.startsWith(".")) continue;

    const absChild = path.join(absDir, ent.name);
    if (ent.isDirectory()) {
      out.push(...walkDir(absChild, [...relSegments, ent.name]));
      continue;
    }

    const ext = path.extname(ent.name).toLowerCase();
    if (!IMAGE_EXT.has(ext)) continue;

    const categories: GalleryCategoryId[] = [];
    const first = relSegments[0];
    if (first && isCategoryId(first)) categories.push(first);

    const urlRel = [...relSegments, ent.name].join("/");
    out.push({
      publicPath: `/images/${urlRel}`,
      categories,
    });
  }

  return out;
}

export function listProjectImages(): ProjectImageFile[] {
  const root = path.join(process.cwd(), "public", "images");
  return walkDir(root, []).sort((a, b) =>
    a.publicPath.localeCompare(b.publicPath),
  );
}

export function listProjectPublicPaths(): string[] {
  return listProjectImages().map((f) => f.publicPath);
}
