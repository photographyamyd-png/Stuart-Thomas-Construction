import type { ServiceSlug } from "./services";

/** Canonical image paths — single source for service page assignments */
const img = {
  armourBoulderWallWaterfront: "/images/20260508_110404.jpg",
  armourRiverRockRetaining: "/images/20260508_105516.jpg",
  armourStoneStairs: "/images/20260508_110106.jpg",
  armourStoneStairsSlope: "/images/20260508_110056.jpg",
  excavationBuildingPad: "/images/20260508_093859.jpg",
  excavationGradedPad: "/images/20260508_110558.jpg",
  excavationGravelDrive: "/images/20260508_105213.jpg",
  excavationLongDrive: "/images/20260508_110917.jpg",
  firePitGravel: "/images/20260508_102632.jpg",
  gravelPadFinish: "/images/20260508_105454.jpg",
  landscapeEarthworkBerm: "/images/20260508_105643.jpg",
  landscapeFinishEstablish: "/images/20260508_110636.jpg",
  landscapeOutdoorLiving: "/images/20260508_105741.jpg",
  landscapePlantingBeds: "/images/20260508_105457.jpg",
  patioWaterfront: "/images/20260508_110051.jpg",
  pergolaRockGarden: "/images/20260508_110330.jpg",
  projectsCourtShed: "/images/20260508_105445.jpg",
  waterfrontWalkway: "/images/20260508_105835.jpg",
  rediRockLogo: "/images/partners/redi-rock-logo.png",
  sarjeantCoLogo: "/images/partners/sarjeant-co-logo.png",
  rediRockReferenceHero: "/images/redi-rock/reference/hero-waterfront-reference.jpg",
  /** Unsplash — commercial snow removal (Unsplash License) */
  snowRemovalLoaderHero:
    "https://images.unsplash.com/photo-1629818571588-65407f9dd1a5?auto=format&fit=crop&w=1920&q=80",
  snowRemovalIndustrialLot:
    "https://images.unsplash.com/photo-1769701000453-e306362a7d03?auto=format&fit=crop&w=1920&q=80",
  snowRemovalPlowFleet:
    "https://images.unsplash.com/photo-1769254740231-f726fe21a516?auto=format&fit=crop&w=1920&q=80",
  snowRemovalNightPlow:
    "https://images.unsplash.com/photo-1771865200657-22e127497422?auto=format&fit=crop&w=1920&q=80",
} as const;

/** Replace with on-site STC photography when available. */
export const snowRemovalShotTargets = {
  hero: "Commercial loader or plow clearing a parking lot",
  seasonalContracts: "Signed commercial lot or retail frontage in winter",
  salting: "Salt spreader on parking lot or treated walkway",
  loaderBlower: "Loader relocating snow or blower on commercial walk",
} as const;

export const media = {
  homeHeroVideoStartSec: 4,
  homeHero: img.waterfrontWalkway,
  homeHeroPoster: img.patioWaterfront,
  homeHeroVideo: "/video/home-hero.mp4",
  landscapingHeroVideo: "/video/landscaping-hero.mp4",
  integritySection: img.armourBoulderWallWaterfront,
  ctaBanner: img.landscapeOutdoorLiving,
  aboutHero: img.patioWaterfront,
  projectsHero: img.projectsCourtShed,
  contactHero: img.firePitGravel,
  serviceDefaults: {
    "armour-stone": img.armourBoulderWallWaterfront,
    "waterfront-stone-work": img.patioWaterfront,
    landscaping: img.landscapeFinishEstablish,
    hardscaping: img.waterfrontWalkway,
    excavation: img.excavationGradedPad,
    "commercial-snow-removal": img.snowRemovalLoaderHero,
  } satisfies Record<ServiceSlug, string>,
  serviceCapabilityImages: {
    "armour-stone": [
      img.armourRiverRockRetaining,
      img.waterfrontWalkway,
      img.armourStoneStairs,
    ],
    "waterfront-stone-work": [
      img.armourStoneStairsSlope,
      img.waterfrontWalkway,
      img.armourBoulderWallWaterfront,
    ],
    landscaping: [
      img.landscapeEarthworkBerm,
      img.landscapePlantingBeds,
      img.landscapeOutdoorLiving,
    ],
    hardscaping: [
      img.landscapeOutdoorLiving,
      img.armourStoneStairs,
      img.firePitGravel,
    ],
    excavation: [
      img.landscapeEarthworkBerm,
      img.excavationBuildingPad,
      img.landscapeFinishEstablish,
    ],
    "commercial-snow-removal": [
      img.snowRemovalIndustrialLot,
      img.snowRemovalPlowFleet,
      img.snowRemovalNightPlow,
    ],
  } satisfies Record<ServiceSlug, readonly [string, string, string]>,
  featuredGalleryPaths: [
    img.patioWaterfront,
    img.armourBoulderWallWaterfront,
    img.landscapeOutdoorLiving,
    img.landscapeFinishEstablish,
    img.firePitGravel,
    img.projectsCourtShed,
  ],
  areaHeroes: {
    "tiny-township": img.armourStoneStairs,
    "wasaga-beach": "/images/20260508_105448.jpg",
    collingwood: img.armourStoneStairsSlope,
  },
  rediRockLogo: img.rediRockLogo,
  sarjeantCoLogo: img.sarjeantCoLogo,
  rediRockReferenceHero: img.rediRockReferenceHero,
} as const;

export function getServiceHero(slug: ServiceSlug): string {
  return media.serviceDefaults[slug];
}

export function getServiceCapabilityImages(slug: ServiceSlug): string[] {
  return [...media.serviceCapabilityImages[slug]];
}

export type ServiceWorkShowcase = {
  eyebrow: string;
  headline: string;
  statement?: string;
  leadImage: string;
  leadAlt: string;
  supporting: { src: string; alt: string; caption: string }[];
};

export const serviceWorkShowcase: Partial<Record<ServiceSlug, ServiceWorkShowcase>> = {
  "armour-stone": {
    eyebrow: "On Site",
    headline: "Armour Stone In Practice",
    statement: "Structural mass and clean coursing on Georgian Bay properties.",
    leadImage: img.armourStoneStairsSlope,
    leadAlt: "Tiered armour stone stairs and retaining on slope",
    supporting: [
      {
        src: img.armourRiverRockRetaining,
        alt: "River rock armour stone retaining wall",
        caption: "River rock retention",
      },
      {
        src: img.armourStoneStairs,
        alt: "Finished armour stone stair interface",
        caption: "Finished stair interface",
      },
    ],
  },
};

export function getServiceWorkShowcase(slug: ServiceSlug): ServiceWorkShowcase | null {
  return serviceWorkShowcase[slug] ?? null;
}
