import { media } from "./media";

const img = {
  armourRiverRockRetaining: media.serviceCapabilityImages["armour-stone"][0],
  armourStoneStairs: media.serviceCapabilityImages["armour-stone"][1],
  landscapeOutdoorLiving: media.serviceDefaults.hardscaping,
  patioWaterfront: media.serviceDefaults["waterfront-stone-work"],
  pergolaRockGarden: media.featuredGalleryPaths[4],
  rediRockReferenceHero: media.rediRockReferenceHero,
} as const;

export const rediRockLinks = {
  product: "https://www.redi-rock.com/",
  supplier: "https://www.sarjeants.com/construction-materials/redi-rock/",
  materialsPage: "/materials/redi-rock",
  projectsFilter: "/projects?category=redi-rock",
} as const;

export const rediRockAttribution = {
  disclaimer:
    "Product information courtesy of Redi-Rock®. Materials supplied by The Sarjeant Co. Stuart Thomas Construction provides installation services.",
  referenceCaption: "Reference installation — image courtesy of Redi-Rock / The Sarjeant Co.",
  brochureLabel: "Brochures provided by The Sarjeant Co. — Redi-Rock® manufacturer literature",
  brochureCoverCredit: "Brochure cover — Redi-Rock / The Sarjeant Co.",
  supplierNote: "For material sales and product specifications, contact The Sarjeant Co.",
  applicationContext: "Application context — Stuart Thomas Construction site work",
} as const;

export const rediRockSectionNav = [
  { id: "install", label: "What We Install" },
  { id: "systems", label: "Systems" },
  { id: "compare", label: "Compare" },
  { id: "resources", label: "Resources" },
  { id: "portfolio", label: "Our Work" },
] as const;

export const rediRockInstallerImage = {
  src: img.armourRiverRockRetaining,
  alt: "Retaining and grading work by Stuart Thomas Construction",
} as const;

export const rediRockInstallerScope = [
  "Site preparation, structural base, and drainage to plan requirements",
  "Redi-Rock block placement, alignment, and interface detailing",
  "Coordination with stamped drawings, engineers, and inspection schedules",
  "Single-contract earthwork, install, and landscape handoff through STC crews",
] as const;

export const rediRockRoleChain = [
  { label: "STC installs", detail: "On-site placement & integration" },
  { label: "Redi-Rock", detail: "Engineered product system" },
  { label: "The Sarjeant Co.", detail: "Regional material supply" },
] as const;

export const rediRockProductLines = [
  {
    title: "Retaining Walls",
    description:
      "Engineered gravity retaining systems for grade changes, terracing, and shoreline stabilization.",
    image: img.rediRockReferenceHero,
    imageCredit: rediRockAttribution.referenceCaption,
    isReference: true,
  },
  {
    title: "Freestanding Walls",
    description:
      "Property edges, patio enclosures, and outdoor room definition with ledgestone texture.",
    image: media.featuredGalleryPaths[5],
    imageCredit: rediRockAttribution.applicationContext,
    isReference: false,
  },
  {
    title: "Columns & Accessories",
    description: "Entry features, caps, corners, and architectural accents integrated with wall systems.",
    image: img.armourStoneStairs,
    imageCredit: rediRockAttribution.applicationContext,
    isReference: false,
  },
  {
    title: "Ledgestone Texture",
    description:
      "Architectural-grade precast concrete with a natural limestone face at modular scale.",
    image: img.rediRockReferenceHero,
    imageCredit: rediRockAttribution.referenceCaption,
    isReference: true,
  },
] as const;

export const rediRockProductFacts = [
  "Wet-cast precast concrete blocks with a natural split limestone texture",
  "Knob-and-groove connections for efficient gravity wall assembly",
  "Geo-grid reinforcement available for taller engineered applications",
  "Curved layouts, integrated stairs, and waterfront-capable designs",
] as const;

export const rediRockComparison = {
  natural: {
    eyebrow: "Natural Stone",
    title: "Armour Stone",
    tagline: "Natural stone, placed by hand.",
    items: [
      "One-of-a-kind geological mass and hand-placed coursing",
      "Ideal when the brief calls for raw, permanent stone character",
      "Best for bespoke waterfront and estate retaining features",
    ],
    href: "/services/armour-stone",
    accent: "gold" as const,
  },
  engineered: {
    eyebrow: "Engineered System",
    title: "Redi-Rock",
    tagline: "Modular blocks, engineer-friendly.",
    items: [
      "Modular system with consistent texture and engineer-friendly specs",
      "Faster installation with predictable coursing and connections",
      "Strong choice when drawings call for Redi-Rock or ledgestone precision",
    ],
    href: "#resources",
    accent: "green" as const,
  },
} as const;

export const rediRockBrochures = [
  {
    shortLabel: "Retaining Walls",
    description: "Gravity wall systems, design charts, and engineering resources.",
    label: "Download — Redi-Rock Retaining Walls (PDF)",
    href: "/downloads/redi-rock/Retaining_Walls.pdf",
    coverImage: "/images/redi-rock/brochures/retaining-walls.jpg",
    coverAlt: "Redi-Rock Retaining Walls brochure cover",
    coverCredit: rediRockAttribution.brochureCoverCredit,
  },
  {
    shortLabel: "Freestanding Walls",
    description: "Outdoor room edges, caps, and freestanding assemblies.",
    label: "Download — Redi-Rock Freestanding Walls (PDF)",
    href: "/downloads/redi-rock/Freestanding_Walls.pdf",
    coverImage: "/images/redi-rock/brochures/freestanding-walls.jpg",
    coverAlt: "Redi-Rock Freestanding Walls brochure cover",
    coverCredit: rediRockAttribution.brochureCoverCredit,
  },
  {
    shortLabel: "Columns & Accessories",
    description: "Entry columns, corners, and architectural accessories.",
    label: "Download — Redi-Rock Columns & Accessories (PDF)",
    href: "/downloads/redi-rock/Columns_and_Accessories.pdf",
    coverImage: "/images/redi-rock/brochures/columns-accessories.jpg",
    coverAlt: "Redi-Rock Columns and Accessories brochure cover",
    coverCredit: rediRockAttribution.brochureCoverCredit,
  },
  {
    shortLabel: "Limestone Texture",
    description: "Ledgestone face profiles and texture specifications.",
    label: "Download — Redi-Rock Limestone Texture (PDF)",
    href: "/downloads/redi-rock/Limestone_Texture.pdf",
    coverImage: "/images/redi-rock/brochures/limestone-texture.jpg",
    coverAlt: "Redi-Rock Limestone Texture brochure cover",
    coverCredit: rediRockAttribution.brochureCoverCredit,
  },
  {
    shortLabel: "Products & Solutions",
    description: "Complete product overview and application guide.",
    label: "Download — Redi-Rock Products & Solutions (PDF)",
    href: "/downloads/redi-rock/Products_and_Solutions.pdf",
    coverImage: "/images/redi-rock/brochures/products-solutions.jpg",
    coverAlt: "Redi-Rock Products and Solutions brochure cover",
    coverCredit: rediRockAttribution.brochureCoverCredit,
  },
] as const;

export const rediRockReferenceImages = [
  {
    src: media.rediRockReferenceHero,
    alt: "Redi-Rock waterfront retaining wall reference installation",
    caption: rediRockAttribution.referenceCaption,
  },
] as const;

export const rediRockRelatedServices = [
  {
    title: "Armour Stone",
    description: "Natural stone retaining and structural stone for South Georgian Bay and Tiny Township.",
    href: "/services/armour-stone",
  },
  {
    title: "Waterfront Stone",
    description: "Shoreline stairs, retaining walls, and cottage waterfront stone work.",
    href: "/services/waterfront-stone-work",
  },
  {
    title: "Hardscaping",
    description: "Patios, walkways, and stone hardscaping in Tiny Township and Collingwood.",
    href: "/services/hardscaping",
  },
  {
    title: "Excavation",
    description: "Drainage-first grading and site prep for wall bases.",
    href: "/services/excavation",
  },
] as const;

export const rediRockMeta = {
  title: "Redi-Rock Installation | Stuart Thomas Construction — supplied by The Sarjeant Co.",
  description:
    "Redi-Rock retaining wall installation in Tiny Township and South Georgian Bay. Stuart Thomas Construction installs; The Sarjeant Co. supplies materials.",
} as const;

export type RediRockCallout = {
  eyebrow: string;
  headline: string;
  body: string;
  linkLabel: string;
};

export const rediRockServiceCallouts: Record<
  "armour-stone" | "waterfront-stone-work" | "hardscaping",
  RediRockCallout
> = {
  "armour-stone": {
    eyebrow: "Engineered Option",
    headline: "Redi-Rock Retaining Installation",
    body:
      "When engineers or clients specify a modular retaining system, Stuart Thomas Construction installs Redi-Rock® walls supplied by The Sarjeant Co. — with the same drainage planning and finishing standards as our natural armour stone work.",
    linkLabel: "Learn about Redi-Rock installation",
  },
  "waterfront-stone-work": {
    eyebrow: "Engineered Shoreline",
    headline: "Redi-Rock Waterfront Systems",
    body:
      "For shoreline terraces, integrated stairs, and retaining at setbacks, STC installs Redi-Rock systems sourced through The Sarjeant Co. alongside our natural stone work.",
    linkLabel: "Learn about Redi-Rock installation",
  },
  hardscaping: {
    eyebrow: "Engineered Hardscape",
    headline: "Redi-Rock Freestanding & Columns",
    body:
      "STC installs Redi-Rock freestanding walls and column features for outdoor rooms, entries, and property edges — materials supplied by The Sarjeant Co.",
    linkLabel: "Learn about Redi-Rock installation",
  },
};
