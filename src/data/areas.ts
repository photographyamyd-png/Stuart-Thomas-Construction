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
      "Armour stone retaining walls in Tiny Township.",
    headline: "Tiny Township construction and landscaping",
    intro: [
      "Tiny Township cottages sit on shoreline, sandy lots, and tight access. We build armour stone walls and waterfront stairs that hold through Georgian Bay winters.",
      "We also run commercial snow routes in Tiny Township — Balm Beach, Thunder Beach, Perkinsfield, and Lafontaine.",
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
      "Waterfront stone work and hardscaping in Wasaga Beach — built for wind, sand, and South Georgian Bay exposure.",
    headline: "Outdoor builds for Wasaga Beach properties",
    intro: [
      "Wasaga Beach lots deal with wind off the bay, sandy soil, and finishes that get noticed. We plan drainage and stone work that holds up over time.",
      "Shoreline steps, patios, and retaining walls — we handle the outdoor work under one contract.",
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
      "Retaining walls and hardscaping in Collingwood — stone work for sloped lots near the escarpment.",
    headline: "Stone work and outdoor builds in Collingwood",
    intro: [
      "Collingwood properties often sit on sloped lots near the escarpment. We build retaining walls and patios that match the home and handle Ontario winters.",
      "We handle grading, stone, and landscape finishing on Collingwood jobs under one contract.",
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
    "Tiny Township construction and landscaping. Stone work and excavation in Wasaga Beach and Collingwood.",
};

export function getAreaBySlug(slug: string): AreaDetail | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): AreaSlug[] {
  return areas.map((a) => a.slug);
}
