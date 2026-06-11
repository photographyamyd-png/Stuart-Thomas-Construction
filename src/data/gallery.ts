export type GalleryCategoryId =
  | "armour-stone"
  | "waterfront"
  | "landscaping"
  | "hardscaping"
  | "excavation"
  | "snow-removal"
  | "redi-rock";

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
  { id: "redi-rock", label: "Redi-Rock Installs" },
];

export const galleryItems: GalleryItem[] = [];
