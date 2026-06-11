import "server-only";
import { listProjectImages } from "@/lib/projectImages";
import type { GalleryCategoryId, GalleryItem } from "@/data/gallery";

const categoryIds: GalleryCategoryId[] = [
  "armour-stone",
  "waterfront",
  "landscaping",
  "hardscaping",
  "excavation",
  "snow-removal",
];

function titleFromPublicPath(publicPath: string): string {
  const seg = publicPath.split("/").pop() ?? "Photo";
  const base = seg.replace(/\.[^.]+$/i, "");
  const words = base.replace(/[-_]+/g, " ").trim();
  if (!words) return "Project photo";
  return words.replace(/\b\w/g, (c) => c.toUpperCase());
}

function inferCategory(index: number, path: string): GalleryCategoryId[] {
  const lower = path.toLowerCase();
  if (lower.includes("snow")) return ["snow-removal"];
  if (index % 6 === 0) return ["armour-stone"];
  if (index % 6 === 1) return ["waterfront"];
  if (index % 6 === 2) return ["landscaping"];
  if (index % 6 === 3) return ["hardscaping"];
  if (index % 6 === 4) return ["excavation"];
  return [categoryIds[index % categoryIds.length]!];
}

export function getGalleryItems(): GalleryItem[] {
  const files = listProjectImages();
  if (files.length === 0) return [];

  return files.map((f, idx) => {
    const title = titleFromPublicPath(f.publicPath);
    const categories =
      f.categories.length > 0 ? f.categories : inferCategory(idx, f.publicPath);
    return {
      id: `local-${idx}`,
      title,
      categories,
      image: f.publicPath,
      alt: `Stuart Thomas Construction — ${title}`,
    } satisfies GalleryItem;
  });
}

export function getGalleryItemsByPaths(paths: string[]): GalleryItem[] {
  const all = getGalleryItems();
  const set = new Set(paths);
  return all.filter((g) => set.has(g.image));
}
