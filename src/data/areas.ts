import type { ServiceSlug } from "./services";

export type AreaSlug = "tiny-township" | "wasaga-beach" | "collingwood";

export type AreaDetail = {
  slug: AreaSlug;
  name: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string[];
  highlights: string[];
  relatedServices: ServiceSlug[];
};

export const areas: AreaDetail[] = [
  {
    slug: "tiny-township",
    name: "Tiny Township",
    metaTitle: "Tiny Township Construction & Landscaping | Stuart Thomas Construction",
    metaDescription:
      "Tiny Township construction and landscaping — armour stone, waterfront stone work, hardscaping, excavation, and commercial snow removal.",
    headline: "Tiny Township construction and landscaping",
    intro: [
      "Tiny Township properties sit on shoreline, sandy lots, and tight cottage access. We build armour stone walls, waterfront stairs, patios, and full outdoor sites here.",
      "We also run commercial snow routes in Tiny Township in winter — from Balm Beach and Thunder Beach to Perkinsfield and Lafontaine.",
    ],
    highlights: [
      "Waterfront retaining walls and stone stairs",
      "Tiny Township landscaping — grading, beds, and finishing",
      "Tight-lot excavation and site prep",
      "Commercial snow routes in winter",
    ],
    relatedServices: ["armour-stone", "waterfront-stone-work", "landscaping", "excavation", "commercial-snow-removal"],
  },
  {
    slug: "wasaga-beach",
    name: "Wasaga Beach",
    metaTitle: "Construction & Landscaping in Wasaga Beach | Stuart Thomas Construction",
    metaDescription:
      "Armour stone, waterfront stone work, hardscaping, and excavation in Wasaga Beach and along the South Georgian Bay coast.",
    headline: "Outdoor builds for Wasaga Beach properties",
    intro: [
      "Wasaga Beach lots deal with wind off the bay, sandy soil, and finishes that get noticed. We plan drainage and stone work that holds up over time.",
      "From shoreline steps to patios and retaining walls, our crews handle the full outdoor scope.",
    ],
    highlights: [
      "Shoreline stone and waterfront access",
      "Patios and hardscaping for coastal homes",
      "Grading and drainage-aware excavation",
    ],
    relatedServices: ["waterfront-stone-work", "hardscaping", "landscaping", "excavation"],
  },
  {
    slug: "collingwood",
    name: "Collingwood",
    metaTitle: "Hardscaping & Stone Work in Collingwood | Stuart Thomas Construction",
    metaDescription:
      "Armour stone, hardscaping, landscaping, and excavation in Collingwood and Blue Mountain country.",
    headline: "Stone work and outdoor builds in Collingwood",
    intro: [
      "Collingwood properties often sit on sloped lots near the escarpment. We build retaining walls, patios, and outdoor spaces that match the home and handle Ontario winters.",
      "One crew handles grading, stone, and landscape finishing so your property comes together as one project.",
    ],
    highlights: [
      "Patios and natural stone hardscaping",
      "Retaining walls and terracing on sloped lots",
      "Full-site landscaping and hardscape integration",
    ],
    relatedServices: ["hardscaping", "landscaping", "armour-stone", "excavation"],
  },
];

export const areasHubCopy = {
  title: "Service Areas",
  description:
    "Tiny Township construction and landscaping, plus stone work and excavation in Wasaga Beach, Collingwood, Perkinsfield, and South Georgian Bay.",
};

export function getAreaBySlug(slug: string): AreaDetail | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): AreaSlug[] {
  return areas.map((a) => a.slug);
}
