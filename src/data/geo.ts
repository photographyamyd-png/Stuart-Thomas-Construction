import type { AreaSlug } from "./areas";
import type { ServiceSlug } from "./services";

export const serviceAreas = {
  constructionLandscaping: [
    "Tiny Township",
    "Wasaga Beach",
    "Elmvale",
    "Collingwood",
    "Simcoe County",
  ],
  commercialWinter: [
    "Midland",
    "Penetanguishene",
    "Tiny Township",
    "Wasaga Beach",
    "Collingwood",
    "Perkinsfield",
  ],
  regional: ["South Georgian Bay", "Georgian Bay", "Simcoe County"],
} as const;

const SERVICE_AREA_MAP: Record<ServiceSlug, readonly string[]> = {
  "armour-stone": [
    "Tiny Township",
    "Wasaga Beach",
    "Elmvale",
    "Collingwood",
    "Simcoe County",
    "South Georgian Bay",
  ],
  "waterfront-stone-work": [
    "Tiny Township",
    "Wasaga Beach",
    "Elmvale",
    "Collingwood",
    "South Georgian Bay",
  ],
  landscaping: [
    "Tiny Township",
    "Wasaga Beach",
    "Elmvale",
    "Collingwood",
    "Simcoe County",
  ],
  hardscaping: [
    "Tiny Township",
    "Wasaga Beach",
    "Elmvale",
    "Collingwood",
    "Simcoe County",
  ],
  excavation: [
    "Tiny Township",
    "Wasaga Beach",
    "Elmvale",
    "Midland",
    "Penetanguishene",
    "Collingwood",
    "Simcoe County",
  ],
  "commercial-snow-removal": [
    "Midland",
    "Penetanguishene",
    "Tiny Township",
    "Wasaga Beach",
    "Collingwood",
    "Perkinsfield",
    "Simcoe County",
  ],
};

export function getAreaServedForService(slug: ServiceSlug): string[] {
  return [...SERVICE_AREA_MAP[slug]];
}

export function getFeaturedAreaSlugsForService(slug: ServiceSlug): AreaSlug[] {
  switch (slug) {
    case "commercial-snow-removal":
    case "excavation":
      return ["midland", "penetanguishene", "tiny-township", "wasaga-beach"];
    case "landscaping":
    case "hardscaping":
    case "armour-stone":
    case "waterfront-stone-work":
      return ["tiny-township", "wasaga-beach", "collingwood"];
    default:
      return [];
  }
}

export const localBusinessKnowsAbout = [
  "Tiny Township construction",
  "Tiny Township landscaping",
  "Wasaga Beach construction",
  "Wasaga Beach landscaping",
  "Elmvale construction",
  "Commercial snow removal Midland",
  "Commercial snow removal Penetanguishene",
  "Excavation Simcoe County",
  "Armour stone retaining walls",
  "Waterfront stone work",
  "Hardscaping",
  "Excavation and grading",
  "Commercial snow removal",
] as const;

export const localBusinessAreaServed = [
  { "@type": "AdministrativeArea" as const, name: "Tiny Township" },
  { "@type": "AdministrativeArea" as const, name: "Wasaga Beach" },
  { "@type": "AdministrativeArea" as const, name: "Elmvale" },
  { "@type": "AdministrativeArea" as const, name: "Midland" },
  { "@type": "AdministrativeArea" as const, name: "Penetanguishene" },
  { "@type": "AdministrativeArea" as const, name: "Collingwood" },
  { "@type": "AdministrativeArea" as const, name: "Simcoe County" },
  { "@type": "Place" as const, name: "South Georgian Bay" },
  { "@type": "Place" as const, name: "Perkinsfield" },
];
