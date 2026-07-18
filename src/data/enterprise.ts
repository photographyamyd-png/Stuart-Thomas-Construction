import { media } from "./media";
import { cta } from "./nav";

export const enterpriseInsights = [
  {
    image: media.featuredGalleryPaths[0],
    category: "Waterfront",
    title: "Shoreline Wall Complete",
    description: "80-foot armour stone retaining wall, Georgian Bay waterfront",
    href: "/projects",
  },
  {
    image: media.featuredGalleryPaths[1],
    category: "Redi-Rock",
    title: "Retaining Wall Installed",
    description: "Redi-Rock retaining system installed for residential access, Tiny Township",
    href: "/materials/redi-rock",
  },
  {
    image: media.featuredGalleryPaths[2],
    category: "Hardscaping",
    title: "Patio Finished",
    description: "Natural stone patio and steps, Wasaga Beach lakefront",
    href: "/services/hardscaping",
  },
  {
    image: media.featuredGalleryPaths[4],
    category: "Excavation",
    title: "Site Grading Complete",
    description: "Full site grading and drainage prep before wall construction, Tiny Township",
    href: "/services/excavation",
  },
] as const;

export const enterpriseCommitments = [
  {
    id: "1",
    label: "Integrity",
    title: "Honest Work On Every Site",
    body: "Itemized quotes with materials, labour, and equipment listed separately. No lump-sum guessing, no change-order surprises.",
    cta: { label: "Learn More", href: "/about" },
    image: media.serviceDefaults.hardscaping,
  },
  {
    id: "2",
    label: "Quality",
    title: "Built For Real Winters",
    body: "Structural base, drainage aggregate, and compaction verified before stone is placed. Walls survive Georgian Bay freeze-thaw because the work below grade is done right.",
    cta: { label: "See Our Work", href: "/projects" },
    image: media.serviceDefaults["armour-stone"],
  },
  {
    id: "3",
    label: "Safety",
    title: "Safe, Organized Job Sites",
    body: "Marked work zones, matting on soft ground, and daily cleanup. Equipment operators are certified and insured under our WSIB coverage.",
    cta: { label: "Our Approach", href: "/about" },
    image: media.serviceDefaults.excavation,
  },
  {
    id: "4",
    label: "Community",
    title: "Rooted In Tiny Township",
    body: "15+ seasons building on the same shorelines. Stone sourced regionally, Redi-Rock supplied by The Sarjeant Co., and crews who know Georgian Bay access by name.",
    cta: { label: "Our Areas", href: "/areas" },
    image: media.serviceDefaults.landscaping,
  },
  {
    id: "5",
    label: "Craftsmanship",
    title: "Stone Work You Can See",
    body: "Largest stones placed first and checked for fit. Cap stones aligned to within a finger width. Walk any finished wall and see the difference.",
    cta: { label: "Explore Services", href: "/services" },
    image: media.serviceDefaults["waterfront-stone-work"],
  },
  {
    id: "6",
    label: "Sustainability",
    title: "Built To Last On Your Land",
    body: "Drainage designed into every grade change. Erosion control at the shoreline. Builds that reduce future repair work instead of creating it.",
    cta: { label: "Learn More", href: "/about" },
    image: media.serviceCapabilityImages.landscaping[2],
  },
] as const;

export const enterpriseFeaturedProject = {
  image: media.featuredGalleryPaths[0],
  eyebrow: "Featured Project",
  title: "Georgian Bay",
  titleAccent: "Shoreline",
  description:
    "Armour stone retaining wall on Georgian Bay — built for wind, ice push, and winter freeze-thaw.",
  href: "/projects",
} as const;

export const enterpriseHomeShowcase = {
  eyebrow: "Full Outdoor Builds",
  headline: "From Grade",
  headlineAccent: "To Finish",
  statement: "Same crew from excavation day through final walkthrough — no subcontractor handoffs.",
  body:
    "We handle grading, drainage, armour stone, hardscaping, and landscape finishing as one scope. Your property is built as one project, not pieced together by three different contractors.",
  imageAlt: "Modern three-storey residential home built by Stuart Thomas Construction",
  cta: { label: cta.primaryLabel, href: cta.primaryHref },
} as const;

export const enterpriseQuote = {
  text: "They engineered our retaining tiers like a structural trade — clean lines, real mass, and zero drama through two winters.",
  highlight: "zero drama through two winters",
  attribution: "James R. · Tiny Township waterfront rebuild",
} as const;

/** Homepage capability divider — four service cards between built-strong and regional */
export const enterpriseCapabilityStrip = [
  "armour-stone",
  "waterfront-stone-work",
  "hardscaping",
  "landscaping",
] as const;

/** Homepage icon strip — six tiles below showcase panorama */
export const enterpriseIconStripOrder = [
  "armour-stone",
  "waterfront-stone-work",
  "landscaping",
  "hardscaping",
  "excavation",
  "commercial-snow-removal",
] as const;

/** Homepage service grid display order (matches Hybrid F mockup) */
export const enterpriseServiceGridOrder = [
  "armour-stone",
  "excavation",
  "hardscaping",
  "landscaping",
] as const;
