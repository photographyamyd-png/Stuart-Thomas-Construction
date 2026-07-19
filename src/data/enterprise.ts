import { media } from "./media";
import { cta } from "./nav";

export const enterpriseInsights = [
  {
    image: media.featuredGalleryPaths[0],
    category: "Waterfront",
    title: "Shoreline Wall Complete",
    description: "Armour stone retaining wall on Georgian Bay waterfront",
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
    label: "Clear Quotes",
    title: "Honest Work On Every Site",
    body: "Itemized quotes with materials, labour, and equipment listed separately. No lump-sum guessing, no change-order surprises.",
    cta: { label: "Meet the Owner", href: "/about" },
    image: media.serviceDefaults.hardscaping,
  },
  {
    id: "2",
    label: "Winter-Proof Stone",
    title: "Built For Real Winters",
    body: "Structural base, drainage aggregate, and compaction verified before stone is placed. Walls survive Georgian Bay freeze-thaw because the work below grade is done right.",
    cta: { label: "See finished walls", href: "/projects" },
    image: media.serviceDefaults["armour-stone"],
  },
  {
    id: "3",
    label: "Clean Job Sites",
    title: "Safe, Organized Job Sites",
    body: "Marked work zones, matting on soft ground, and daily cleanup. Equipment operators are certified and insured under our WSIB coverage.",
    cta: { label: "See how we quote", href: "/about" },
    image: media.serviceDefaults.excavation,
  },
  {
    id: "4",
    label: "Local Roots",
    title: "Rooted In Tiny Township",
    body: "15+ seasons building on the same shorelines. Stone sourced regionally, Redi-Rock supplied by The Sarjeant Co., and people who know Georgian Bay access by name.",
    cta: { label: "Areas We Serve", href: "/areas" },
    image: media.serviceDefaults.landscaping,
  },
  {
    id: "5",
    label: "Visible Fit & Finish",
    title: "Stone Work You Can See",
    body: "Largest stones placed first and checked for fit and alignment. Walk any finished wall and see the difference.",
    cta: { label: "See what we build", href: "/services" },
    image: media.serviceDefaults["waterfront-stone-work"],
  },
  {
    id: "6",
    label: "Built to Need Less Repair",
    title: "Built for Freeze-Thaw",
    body: "Drainage designed into every grade change. Erosion control at the shoreline. Builds that reduce future repair work instead of creating it.",
    cta: { label: "Book a Site Visit", href: "/#contact" },
    image: media.serviceCapabilityImages.landscaping[2],
  },
] as const;

export const enterpriseFeaturedProject = {
  image: media.featuredGalleryPaths[0],
  eyebrow: "Recent Armour Stone Project",
  title: "Armour Stone Retaining Wall",
  titleAccent: "on Georgian Bay",
  description:
    "Waterfront armour stone retaining — set for wind, ice push, and winter freeze-thaw.",
  href: "/projects",
} as const;

export const enterpriseHomeShowcase = {
  eyebrow: "Yard to Water",
  headline: "Tiny Township Construction",
  headlineAccent: "from Grade to Finish",
  statement:
    "We dig the grade, set the stone, and finish the yard — no mid-job handoff to another contractor.",
  body:
    "Outdoor work from the cottage door to the water in Tiny Township. Same approach on Wasaga Beach and Georgian Bay lots.",
  imageAlt: "Outdoor stone work and finished yard on a Georgian Bay property",
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
