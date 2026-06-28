import type { ServiceSlug } from "./services";

export type AreaSlug =
  | "tiny-township"
  | "wasaga-beach"
  | "collingwood"
  | "midland"
  | "penetanguishene";

export type AreaHubGroup = "construction-landscaping" | "commercial-winter";

export type AreaDetail = {
  slug: AreaSlug;
  name: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string[];
  highlights: string[];
  relatedServices: ServiceSlug[];
  hubGroup: AreaHubGroup;
  containedInPlace: string;
};

export const areas: AreaDetail[] = [
  {
    slug: "tiny-township",
    name: "Tiny Township",
    metaTitle: "Tiny Township Construction & Landscaping | Stuart Thomas Construction",
    metaDescription:
      "Tiny Township construction and landscaping — armour stone, waterfront stone work, hardscaping, excavation, and commercial snow removal across Simcoe County.",
    headline: "Tiny Township construction and landscaping",
    intro: [
      "Tiny Township properties sit on shoreline, sandy lots, and tight cottage access. We build armour stone walls, waterfront stairs, patios, and full outdoor sites here.",
      "We also run commercial snow routes in winter — from Balm Beach and Thunder Beach to Perkinsfield, Lafontaine, and Elmvale across Simcoe County's Georgian Bay corridor.",
    ],
    highlights: [
      "Waterfront retaining walls and stone stairs",
      "Tiny Township landscaping — grading, beds, and finishing",
      "Tight-lot excavation and site prep",
      "Commercial snow routes in winter",
    ],
    relatedServices: [
      "armour-stone",
      "waterfront-stone-work",
      "landscaping",
      "excavation",
      "commercial-snow-removal",
    ],
    hubGroup: "construction-landscaping",
    containedInPlace: "South Georgian Bay, Ontario",
  },
  {
    slug: "wasaga-beach",
    name: "Wasaga Beach",
    metaTitle: "Construction & Landscaping in Wasaga Beach | Stuart Thomas Construction",
    metaDescription:
      "Armour stone, waterfront stone work, hardscaping, and excavation in Wasaga Beach and along the South Georgian Bay coast — including nearby Elmvale.",
    headline: "Outdoor builds for Wasaga Beach properties",
    intro: [
      "Wasaga Beach lots deal with wind off the bay, sandy soil, and finishes that get noticed. We plan drainage and stone work that holds up over time.",
      "From shoreline steps to patios and retaining walls, our crews handle the full outdoor scope — and serve nearby Elmvale and Simcoe County properties on the same corridor.",
    ],
    highlights: [
      "Shoreline stone and waterfront access",
      "Patios and hardscaping for coastal homes",
      "Grading and drainage-aware excavation",
      "Construction and landscaping near Elmvale",
    ],
    relatedServices: ["waterfront-stone-work", "hardscaping", "landscaping", "excavation"],
    hubGroup: "construction-landscaping",
    containedInPlace: "South Georgian Bay, Ontario",
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
      "Grading, stone, and landscape finishing planned together so the property reads as one build.",
    ],
    highlights: [
      "Patios and natural stone hardscaping",
      "Retaining walls and terracing on sloped lots",
      "Full-site landscaping and hardscape integration",
    ],
    relatedServices: ["hardscaping", "landscaping", "armour-stone", "excavation"],
    hubGroup: "construction-landscaping",
    containedInPlace: "South Georgian Bay, Ontario",
  },
  {
    slug: "midland",
    name: "Midland",
    metaTitle: "Commercial Snow Removal & Excavation in Midland | Stuart Thomas Construction",
    metaDescription:
      "Commercial snow removal and excavation in Midland, Ontario — seasonal contracts, salting, loader service, and site prep for business and commercial properties.",
    headline: "Commercial snow and site work in Midland",
    intro: [
      "Midland commercial properties need reliable winter clearing and site work you can reach by phone. We run seasonal snow contracts with clear trigger depths, response times, and documentation.",
      "Our excavation crews handle grading and site prep for commercial lots and staging areas across Midland and the Simcoe County corridor — without over-promising residential landscaping we do not run here.",
    ],
    highlights: [
      "Commercial snow contracts with salting and de-icing",
      "Loader and blower service for retail and multi-unit sites",
      "Excavation and grading for commercial site prep",
      "Night and early-morning storm response",
    ],
    relatedServices: ["commercial-snow-removal", "excavation"],
    hubGroup: "commercial-winter",
    containedInPlace: "Simcoe County, Ontario",
  },
  {
    slug: "penetanguishene",
    name: "Penetanguishene",
    metaTitle: "Commercial Snow Removal & Excavation in Penetanguishene | Stuart Thomas Construction",
    metaDescription:
      "Commercial snow removal and excavation in Penetanguishene, Ontario — winter property maintenance and site prep for business properties in Simcoe County.",
    headline: "Commercial snow and excavation in Penetanguishene",
    intro: [
      "Penetanguishene business properties need winter access kept open through lake-effect storms. We clear lots, walks, and loading zones under defined commercial contracts.",
      "For site work, our excavation crews handle grading and prep on commercial properties across Penetanguishene and neighbouring Simcoe County corridors.",
    ],
    highlights: [
      "Seasonal snow contracts for commercial sites",
      "Salting, de-icing, and loader clearing",
      "Commercial excavation and grading",
      "Accountability you can reach by phone",
    ],
    relatedServices: ["commercial-snow-removal", "excavation"],
    hubGroup: "commercial-winter",
    containedInPlace: "Simcoe County, Ontario",
  },
];

export const areasHubCopy = {
  title: "Service Areas",
  description:
    "Tiny Township and Elmvale construction and landscaping; Wasaga Beach outdoor builds; Midland and Penetanguishene commercial snow removal and excavation across Simcoe County and South Georgian Bay.",
};

export function getAreaBySlug(slug: string): AreaDetail | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): AreaSlug[] {
  return areas.map((a) => a.slug);
}

export function getAreasByHubGroup(group: AreaHubGroup): AreaDetail[] {
  return areas.filter((a) => a.hubGroup === group);
}
