import "server-only";
import { listProjectImages } from "@/lib/projectImages";
import type { GalleryCategoryId, GalleryItem } from "@/data/gallery";
import { site } from "@/data/site";

const categoryIds: GalleryCategoryId[] = [
  "armour-stone",
  "waterfront",
  "landscaping",
  "hardscaping",
  "excavation",
  "snow-removal",
  "redi-rock",
];

function titleFromPublicPath(publicPath: string): string {
  const seg = publicPath.split("/").pop() ?? "Photo";
  const base = seg.replace(/\.[^.]+$/i, "");
  const words = base.replace(/[-_]+/g, " ").trim();
  if (!words) return "Project photo";
  return words.replace(/\b\w/g, (c) => c.toUpperCase());
}

function altForCategories(title: string, categories: GalleryCategoryId[], publicPath: string): string {
  const lower = publicPath.toLowerCase();
  const area =
    lower.includes("tiny-township") || lower.includes("stc-tiny-township")
      ? "Tiny Township"
      : "South Georgian Bay";
  const primary = categories[0];
  const serviceLabel: Partial<Record<GalleryCategoryId, string>> = {
    "armour-stone": "armour stone and retaining wall project",
    waterfront: "waterfront stone work",
    landscaping: "landscaping project",
    hardscaping: "hardscaping and patio work",
    excavation: "excavation and grading",
    "snow-removal": "commercial snow removal",
    "redi-rock": "Redi-Rock retaining wall installation",
  };
  const service = primary ? serviceLabel[primary] ?? "construction project" : "construction project";
  if (categories.includes("redi-rock")) {
    return `${site.name} — ${service} in ${area} — ${title}. Materials supplied by The Sarjeant Co.`;
  }
  return `${site.name} — ${service} in ${area} — ${title}`;
}

function inferCategory(index: number, path: string): GalleryCategoryId[] {
  const lower = path.toLowerCase();
  if (lower.includes("snow")) return ["snow-removal"];
  if (lower.includes("redi")) return ["redi-rock"];
  if (lower.includes("/retouched/stc-")) {
    const excavatorIds = new Set([
      "015",
      "058",
      "090",
      "114",
      "116",
      "120",
      "214",
      "228",
      "250",
      "275",
    ]);
    const match = lower.match(/stc-(\d{3})\.jpg/);
    if (match && excavatorIds.has(match[1]!)) return ["excavation"];
    if (lower.includes("landscaping")) return ["landscaping"];
    if (
      ["001", "006", "036", "040", "321"].some((id) =>
        lower.includes(`stc-${id}.jpg`),
      )
    ) {
      return lower.includes("006") ? ["hardscaping"] : ["landscaping"];
    }
  }
  if (index % 7 === 0) return ["armour-stone"];
  if (index % 7 === 1) return ["waterfront"];
  if (index % 7 === 2) return ["landscaping"];
  if (index % 7 === 3) return ["hardscaping"];
  if (index % 7 === 4) return ["excavation"];
  if (index % 7 === 5) return ["snow-removal"];
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
      alt: altForCategories(title, categories, f.publicPath),
    } satisfies GalleryItem;
  });
}

export function getGalleryItemsByPaths(paths: string[]): GalleryItem[] {
  const all = getGalleryItems();
  const set = new Set(paths);
  return all.filter((g) => set.has(g.image));
}

export function getGalleryItemsByCategory(category: GalleryCategoryId): GalleryItem[] {
  return getGalleryItems().filter((g) => g.categories.includes(category));
}
