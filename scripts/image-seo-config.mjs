/** Shared SEO metadata config for Stuart Thomas Construction project images */

export const BUSINESS = {
  name: "Stuart Thomas Construction",
  copyright: "© Stuart Thomas Construction",
  website: "https://www.stuartthomasconstruction.ca",
};

export const AREAS = [
  {
    slug: "tiny-township",
    name: "Tiny Township",
    gps: { lat: 44.683, lng: -80.017 },
  },
  {
    slug: "wasaga-beach",
    name: "Wasaga Beach",
    gps: { lat: 44.520, lng: -80.017 },
  },
  {
    slug: "collingwood",
    name: "Collingwood",
    gps: { lat: 44.505, lng: -80.216 },
  },
  {
    slug: "south-georgian-bay",
    name: "South Georgian Bay",
    gps: { lat: 44.650, lng: -80.050 },
  },
  {
    slug: "perkinsfield",
    name: "Perkinsfield",
    gps: { lat: 44.683, lng: -79.933 },
  },
];

export const SERVICE_META = {
  "armour-stone": {
    label: "Armour Stone",
    keywords: [
      "armour stone",
      "retaining wall",
      "structural stone",
      "Georgian Bay",
      "stone retaining",
    ],
    descriptors: [
      "retaining-wall",
      "boulder-wall",
      "stone-terracing",
      "shoreline-retention",
      "structural-coursing",
    ],
  },
  waterfront: {
    label: "Waterfront Stone Work",
    keywords: [
      "waterfront hardscaping",
      "shoreline stone",
      "Georgian Bay",
      "waterfront stairs",
      "cottage country",
    ],
    descriptors: [
      "shoreline-stairs",
      "waterfront-patio",
      "lake-access",
      "shoreline-retaining",
      "waterfront-walkway",
    ],
  },
  landscaping: {
    label: "Landscaping",
    keywords: [
      "landscaping",
      "landscape construction",
      "site grading",
      "outdoor living",
      "premium landscaping",
    ],
    descriptors: [
      "backyard-landscape",
      "garden-establishment",
      "planting-beds",
      "wooded-property",
      "lawn-and-beds",
      "flagstone-yard",
    ],
  },
  hardscaping: {
    label: "Hardscaping",
    keywords: [
      "hardscaping",
      "stone patio",
      "flagstone walkway",
      "outdoor living",
      "natural stone",
    ],
    descriptors: [
      "flagstone-walkway",
      "stone-patio",
      "stone-steps",
      "fire-feature-pad",
      "walkway-foundation",
    ],
  },
  excavation: {
    label: "Excavation & Grading",
    keywords: [
      "excavation",
      "site grading",
      "earthwork",
      "mini excavator",
      "Bobcat loader",
      "site preparation",
    ],
    descriptors: [
      "hitachi-excavator",
      "bobcat-loader",
      "site-prep",
      "grading-earthwork",
      "gravel-spread",
      "fleet-on-site",
    ],
  },
  "snow-removal": {
    label: "Commercial Snow Removal",
    keywords: [
      "commercial snow removal",
      "snow plowing",
      "winter maintenance",
      "salting de-icing",
    ],
    descriptors: [
      "commercial-plow",
      "loader-clearing",
      "night-clear",
      "lot-clearing",
    ],
  },
  "redi-rock": {
    label: "Redi-Rock Installation",
    keywords: [
      "Redi-Rock",
      "engineered retaining",
      "modular retaining wall",
      "The Sarjeant Co",
    ],
    descriptors: ["retaining-install", "engineered-wall", "freestanding-wall"],
  },
};

/** Explicit classification for known archive files (output basename without path) */
export const FILE_OVERRIDES = {
  "stc-tiny-township-landscaping.jpg": {
    category: "landscaping",
    descriptor: "backyard-flagstone-river-rock",
    areaSlug: "tiny-township",
    title: "Premium Backyard Landscaping — Tiny Township",
  },
  "stc-001.jpg": {
    category: "landscaping",
    descriptor: "flagstone-path-wooded-yard",
    areaSlug: "tiny-township",
  },
  "stc-006.jpg": {
    category: "hardscaping",
    descriptor: "flagstone-walkway-foundation",
    areaSlug: "wasaga-beach",
  },
  "stc-036.jpg": {
    category: "hardscaping",
    descriptor: "stone-stairs-handrail",
    areaSlug: "collingwood",
  },
  "stc-040.jpg": {
    category: "landscaping",
    descriptor: "flagstone-yard-drainage",
    areaSlug: "collingwood",
  },
  "stc-058.jpg": {
    category: "excavation",
    descriptor: "bobcat-t190-loader",
    areaSlug: "tiny-township",
  },
  "stc-090.jpg": {
    category: "excavation",
    descriptor: "bobcat-gravel-spread",
    areaSlug: "wasaga-beach",
  },
  "stc-114.jpg": {
    category: "excavation",
    descriptor: "hitachi-gravel-pile",
    areaSlug: "perkinsfield",
  },
  "stc-116.jpg": {
    category: "excavation",
    descriptor: "hitachi-bobcat-fleet",
    areaSlug: "tiny-township",
  },
  "stc-120.jpg": {
    category: "excavation",
    descriptor: "dual-machines-site-prep",
    areaSlug: "collingwood",
  },
  "stc-214.jpg": {
    category: "excavation",
    descriptor: "hitachi-action-grade",
    areaSlug: "south-georgian-bay",
  },
  "stc-228.jpg": {
    category: "excavation",
    descriptor: "hitachi-wooded-residential",
    areaSlug: "tiny-township",
  },
  "stc-250.jpg": {
    category: "excavation",
    descriptor: "hitachi-residential-grade",
    areaSlug: "wasaga-beach",
  },
  "stc-275.jpg": {
    category: "excavation",
    descriptor: "hitachi-site-prep-gravel",
    areaSlug: "collingwood",
  },
  "stc-321.jpg": {
    category: "landscaping",
    descriptor: "stone-steps-garden",
    areaSlug: "tiny-township",
  },
  "20260508_110404.jpg": {
    category: "armour-stone",
    descriptor: "boulder-wall-waterfront",
    areaSlug: "wasaga-beach",
  },
  "20260508_105516.jpg": {
    category: "armour-stone",
    descriptor: "river-rock-retaining",
    areaSlug: "tiny-township",
  },
  "20260508_110106.jpg": {
    category: "armour-stone",
    descriptor: "stone-stairs-finish",
    areaSlug: "collingwood",
  },
  "20260508_110056.jpg": {
    category: "waterfront",
    descriptor: "stone-stairs-slope",
    areaSlug: "wasaga-beach",
  },
  "20260508_093859.jpg": {
    category: "excavation",
    descriptor: "building-pad-prep",
    areaSlug: "tiny-township",
  },
  "20260508_110558.jpg": {
    category: "excavation",
    descriptor: "graded-pad-finish",
    areaSlug: "collingwood",
  },
  "20260508_105213.jpg": {
    category: "excavation",
    descriptor: "gravel-drive-grade",
    areaSlug: "perkinsfield",
  },
  "20260508_110917.jpg": {
    category: "excavation",
    descriptor: "long-drive-grade",
    areaSlug: "south-georgian-bay",
  },
  "20260508_102632.jpg": {
    category: "hardscaping",
    descriptor: "fire-pit-gravel-pad",
    areaSlug: "collingwood",
  },
  "20260508_102657.jpg": {
    category: "landscaping",
    descriptor: "estate-panorama",
    areaSlug: "tiny-township",
  },
  "20260508_105454.jpg": {
    category: "hardscaping",
    descriptor: "gravel-pad-finish",
    areaSlug: "wasaga-beach",
  },
  "20260508_105643.jpg": {
    category: "excavation",
    descriptor: "earthwork-berm",
    areaSlug: "tiny-township",
  },
  "20260508_110636.jpg": {
    category: "landscaping",
    descriptor: "finish-establishment",
    areaSlug: "collingwood",
  },
  "20260508_105741.jpg": {
    category: "hardscaping",
    descriptor: "outdoor-living-patio",
    areaSlug: "wasaga-beach",
  },
  "20260508_105457.jpg": {
    category: "landscaping",
    descriptor: "planting-beds",
    areaSlug: "tiny-township",
  },
  "20260508_110051.jpg": {
    category: "waterfront",
    descriptor: "patio-waterfront",
    areaSlug: "wasaga-beach",
  },
  "20260508_110330.jpg": {
    category: "hardscaping",
    descriptor: "pergola-rock-garden",
    areaSlug: "collingwood",
  },
  "20260508_105445.jpg": {
    category: "hardscaping",
    descriptor: "court-shed-pad",
    areaSlug: "south-georgian-bay",
  },
  "20260508_105835.jpg": {
    category: "waterfront",
    descriptor: "walkway-shoreline",
    areaSlug: "tiny-township",
  },
  "20260508_105448.jpg": {
    category: "waterfront",
    descriptor: "coastal-stone-detail",
    areaSlug: "wasaga-beach",
  },
};

export const CATEGORY_ORDER = [
  "landscaping",
  "hardscaping",
  "excavation",
  "armour-stone",
  "waterfront",
  "snow-removal",
  "redi-rock",
];
