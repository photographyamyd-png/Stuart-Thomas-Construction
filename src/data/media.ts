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
  homeShowcasePanorama: "/images/20260508_102657.jpg",
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
  snowRemovalLoaderHero: "/images/snow-removal/hero-storm-plow.png",
  snowRemovalIndustrialLot: "/images/snow-removal/commercial-lot-loader.png",
  snowRemovalPlowFleet: "/images/snow-removal/rural-road-clearing.png",
  snowRemovalNightPlow: "/images/snow-removal/hero-storm-plow.png",
  /** Retouched 2026 archive — web-optimized in public/images/retouched/ */
  rtLandscapingBackyard: "/images/retouched/stc-tiny-township-landscaping.jpg",
  rtLandscapingFlagstoneYard: "/images/retouched/stc-040.jpg",
  rtLandscapingStoneStairs: "/images/retouched/stc-036.jpg",
  rtLandscapingGardenPath: "/images/retouched/stc-321.jpg",
  rtLandscapingWoodedPath: "/images/retouched/stc-001.jpg",
  rtHardscapingFlagstoneWalk: "/images/retouched/stc-006.jpg",
  rtExcavationHitachiFleet: "/images/retouched/stc-116.jpg",
  rtExcavationDualMachines: "/images/retouched/stc-120.jpg",
  rtExcavationHitachiSitePrep: "/images/retouched/stc-275.jpg",
  rtExcavationHitachiWoods: "/images/retouched/stc-228.jpg",
  rtExcavationHitachiResidential: "/images/retouched/stc-250.jpg",
  rtExcavationHitachiAction: "/images/retouched/stc-214.jpg",
  rtExcavationBobcatGravel: "/images/retouched/stc-090.jpg",
  rtExcavationBobcatT190: "/images/retouched/stc-058.jpg",
  rtExcavationGravelPile: "/images/retouched/stc-114.jpg",
} as const;

export const media = {
  homeHeroVideoStartSec: 4,
  homeHero: img.waterfrontWalkway,
  homeHeroPoster: img.rtLandscapingFlagstoneYard,
  homeHeroVideo: "/video/home-hero.mp4",
  /** Drone yard reveal clip — landscaping & hardscaping service heroes */
  landscapingHeroVideo: "/video/landscaping-hero.mp4",
  hardscapingHeroVideo: "/video/landscaping-hero.mp4",
  integritySection: img.rtExcavationHitachiFleet,
  ctaBanner: img.rtLandscapingBackyard,
  homeShowcasePanorama: img.rtLandscapingGardenPath,
  aboutHero: img.rtExcavationDualMachines,
  projectsHero: img.rtExcavationHitachiWoods,
  contactHero: img.rtLandscapingBackyard,
  serviceDefaults: {
    "armour-stone": img.armourBoulderWallWaterfront,
    "waterfront-stone-work": img.patioWaterfront,
    landscaping: img.rtLandscapingBackyard,
    hardscaping: img.rtLandscapingFlagstoneYard,
    excavation: img.rtExcavationHitachiFleet,
    "commercial-snow-removal": img.snowRemovalLoaderHero,
  } satisfies Record<ServiceSlug, string>,
  serviceCapabilityImages: {
    "armour-stone": [
      img.armourRiverRockRetaining,
      img.rtLandscapingStoneStairs,
      img.armourStoneStairs,
    ],
    "waterfront-stone-work": [
      img.armourStoneStairsSlope,
      img.waterfrontWalkway,
      img.armourBoulderWallWaterfront,
    ],
    landscaping: [
      img.rtLandscapingWoodedPath,
      img.rtLandscapingFlagstoneYard,
      img.rtLandscapingGardenPath,
    ],
    hardscaping: [
      img.rtHardscapingFlagstoneWalk,
      img.rtLandscapingStoneStairs,
      img.rtLandscapingFlagstoneYard,
    ],
    excavation: [
      img.rtExcavationBobcatGravel,
      img.rtExcavationBobcatT190,
      img.rtExcavationHitachiSitePrep,
    ],
    "commercial-snow-removal": [
      img.snowRemovalIndustrialLot,
      img.snowRemovalPlowFleet,
      img.snowRemovalNightPlow,
    ],
  } satisfies Record<ServiceSlug, readonly [string, string, string]>,
  featuredGalleryPaths: [
    img.rtExcavationHitachiFleet,
    img.rtLandscapingBackyard,
    img.rtLandscapingFlagstoneYard,
    img.rtExcavationHitachiWoods,
    img.armourBoulderWallWaterfront,
    img.patioWaterfront,
  ],
  areaHeroes: {
    "tiny-township": img.rtLandscapingStoneStairs,
    "wasaga-beach": img.patioWaterfront,
    collingwood: img.rtLandscapingFlagstoneYard,
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
    statement: "Armour stone retaining and stairs on Georgian Bay and Tiny Township properties.",
    leadImage: img.rtLandscapingStoneStairs,
    leadAlt: "Armour stone stairs and retaining wall in Tiny Township",
    supporting: [
      {
        src: img.armourRiverRockRetaining,
        alt: "Armour stone retaining wall on a South Georgian Bay property",
        caption: "Shoreline retention",
      },
      {
        src: img.armourStoneStairs,
        alt: "Finished armour stone stairs at a cottage property",
        caption: "Finished stair interface",
      },
    ],
  },
};

export function getServiceWorkShowcase(slug: ServiceSlug): ServiceWorkShowcase | null {
  return serviceWorkShowcase[slug] ?? null;
}
