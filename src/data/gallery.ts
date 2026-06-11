export type GalleryCategoryId =
  | "armour-stone"
  | "waterfront"
  | "landscaping"
  | "hardscaping"
  | "excavation"
  | "snow-removal";

export type GalleryItem = {
  id: string;
  title: string;
  categories: GalleryCategoryId[];
  image: string;
  alt: string;
  location?: string;
};

export const galleryCategories: { id: GalleryCategoryId; label: string }[] = [
  { id: "armour-stone", label: "Armour Stone" },
  { id: "waterfront", label: "Waterfront" },
  { id: "landscaping", label: "Landscaping" },
  { id: "hardscaping", label: "Hardscaping" },
  { id: "excavation", label: "Excavation" },
  { id: "snow-removal", label: "Snow Removal" },
];

export const galleryItems: GalleryItem[] = [];
