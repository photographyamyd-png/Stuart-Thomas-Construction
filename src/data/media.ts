import type { ServiceSlug } from "./services";

export const media = {
  homeHeroVideoStartSec: 4,
  homeHero: "/images/20260508_110755.jpg",
  homeHeroPoster: "/images/20260508_110755.jpg",
  homeHeroVideo: "/video/home-hero.mp4",
  integritySection: "/images/20260508_105454.jpg",
  ctaBanner: "/images/20260508_105228.jpg",
  aboutHero: "/images/20260508_110051.jpg",
  projectsHero: "/images/20260508_105445.jpg",
  contactHero: "/images/20260508_102632.jpg",
  serviceDefaults: {
    "armour-stone": "/images/20260508_105454.jpg",
    "waterfront-stone-work": "/images/20260508_110755.jpg",
    landscaping: "/images/20260508_102504.jpg",
    hardscaping: "/images/20260508_105835.jpg",
    excavation: "/images/20260508_105213.jpg",
    "commercial-snow-removal": "/images/20260508_093859.jpg",
  } satisfies Record<ServiceSlug, string>,
  featuredGalleryPaths: [
    "/images/20260508_110755.jpg",
    "/images/20260508_105454.jpg",
    "/images/20260508_105228.jpg",
    "/images/20260508_110051.jpg",
    "/images/20260508_102632.jpg",
    "/images/20260508_105445.jpg",
  ],
  areaHeroes: {
    "tiny-township": "/images/20260508_110106.jpg",
    "wasaga-beach": "/images/20260508_105448.jpg",
    collingwood: "/images/20260508_110056.jpg",
  },
} as const;

export function getServiceHero(slug: ServiceSlug): string {
  return media.serviceDefaults[slug];
}
