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
} as const;

/**
 * Winter photography still needed for commercial snow removal.
 * Interim images use commercial-scale property surfaces until these are shot:
 * - Hero: loader/plow clearing lot (night or dawn)
 * - Cap 1: seasonal contract lot / equipment lineup
 * - Cap 2: salt spreader on parking lot or treated walk
 * - Cap 3: loader moving snow pile or blower on commercial walk
 */
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
    "commercial-snow-removal": img.excavationGradedPad,
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
      img.excavationGradedPad,
      img.excavationLongDrive,
      img.excavationGravelDrive,
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
} as const;

export function getServiceHero(slug: ServiceSlug): string {
  return media.serviceDefaults[slug];
}

export function getServiceCapabilityImages(slug: ServiceSlug): string[] {
  return [...media.serviceCapabilityImages[slug]];
}
