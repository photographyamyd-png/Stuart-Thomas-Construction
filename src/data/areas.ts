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
    metaTitle: "Construction & Stone Work in Tiny Township | Stuart Thomas Construction",
    metaDescription:
      "Armour stone, waterfront work, landscaping, and excavation in Tiny Township and Georgian Bay cottage country.",
    headline: "Premium outdoor construction in Tiny Township",
    intro: [
      "Tiny Township demands work that respects shoreline exposure, seasonal access, and the expectations of cottage-country homeowners.",
      "Stuart Thomas Construction delivers armour stone, waterfront assemblies, and full-site outdoor builds with equipment discipline and refined finishing.",
    ],
    highlights: [
      "Waterfront retention and stone stairs",
      "Cottage access and tight-lot equipment work",
      "Commercial snow routes in winter",
    ],
    relatedServices: ["armour-stone", "waterfront-stone-work", "excavation", "commercial-snow-removal"],
  },
  {
    slug: "wasaga-beach",
    name: "Wasaga Beach",
    metaTitle: "Landscaping & Stone Work in Wasaga Beach | Stuart Thomas Construction",
    metaDescription:
      "Luxury hardscaping, waterfront stone, and excavation serving Wasaga Beach and the South Georgian Bay coast.",
    headline: "Built for coastal exposure in Wasaga Beach",
    intro: [
      "Wasaga Beach properties face wind, sand-base challenges, and high visibility finishes. We detail drainage and interfaces for long-term stability.",
      "From shoreline transitions to premium patios, our crews bring industrial capability and architectural precision.",
    ],
    highlights: [
      "Shoreline stone and access work",
      "Hardscaping for coastal homes",
      "Grading and drainage-aware earthwork",
    ],
    relatedServices: ["waterfront-stone-work", "hardscaping", "landscaping", "excavation"],
  },
  {
    slug: "collingwood",
    name: "Collingwood",
    metaTitle: "Luxury Hardscaping & Stone in Collingwood | Stuart Thomas Construction",
    metaDescription:
      "High-end hardscaping, armour stone, and landscape construction in Collingwood and Blue Mountain country.",
    headline: "Luxury outdoor builds in Collingwood",
    intro: [
      "Collingwood homeowners expect outdoor spaces that match the calibre of the home — clean lines, premium materials, and reliable execution.",
      "We integrate stone, grade, and hardscape into cohesive environments built to perform through Ontario seasons.",
    ],
    highlights: [
      "Upscale patios and architectural stone",
      "Retaining and terracing on sloped lots",
      "Full-site landscape and hardscape integration",
    ],
    relatedServices: ["hardscaping", "landscaping", "armour-stone", "excavation"],
  },
];

export const areasHubCopy = {
  title: "Service Areas",
  description:
    "We serve Tiny Township, Wasaga Beach, Collingwood, Perkinsfield, and the broader South Georgian Bay corridor.",
};

export function getAreaBySlug(slug: string): AreaDetail | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): AreaSlug[] {
  return areas.map((a) => a.slug);
}
