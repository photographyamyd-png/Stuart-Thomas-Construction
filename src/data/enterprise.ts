import { media } from "./media";
import { cta } from "./nav";

export const enterpriseInsights = [
  {
    image: media.insightWaterfront,
    category: "Waterfront",
    title: "Shoreline Wall Complete",
    description: "Armour stone retaining finished on a Georgian Bay property.",
    href: "/services/waterfront-stone-work",
  },
  {
    image: media.insightRediRock,
    category: "Redi-Rock",
    title: "Retaining Wall Installed",
    description: "Redi-Rock systems installed by STC — materials supplied by The Sarjeant Co.",
    href: "/materials/redi-rock",
  },
  {
    image: media.insightHardscaping,
    category: "Hardscaping",
    title: "Patio Finished",
    description: "Solid base and natural stone patio for outdoor living.",
    href: "/services/hardscaping",
  },
  {
    image: media.insightExcavation,
    category: "Excavation",
    title: "Site Grading Complete",
    description: "Grading and access done — stone work up next.",
    href: "/services/excavation",
  },
] as const;

export const enterpriseCommitments = [
  {
    id: "1",
    label: "Integrity",
    title: "Honest Work On Every Site",
    body: "We quote clearly, communicate directly, and stand behind the work we put in the ground.",
    cta: { label: "Learn More", href: "/about" },
    image: media.serviceDefaults.hardscaping,
  },
  {
    id: "2",
    label: "Quality",
    title: "Built For Real Winters",
    body: "Proper bases, good drainage, and stone work that holds up through Georgian Bay freeze-thaw.",
    cta: { label: "See Our Work", href: "/services/landscaping" },
    image: media.serviceDefaults["armour-stone"],
  },
  {
    id: "3",
    label: "Safety",
    title: "Safe, Organized Job Sites",
    body: "Clear work zones, trained crews, and equipment run safely on every residential and commercial job.",
    cta: { label: "Our Approach", href: "/about" },
    image: media.serviceDefaults.excavation,
  },
  {
    id: "4",
    label: "Community",
    title: "Rooted In Tiny Township",
    body: "Local relationships, regional suppliers, and outdoor builds that serve the communities we work in.",
    cta: { label: "Our Areas", href: "/areas" },
    image: media.serviceDefaults.landscaping,
  },
  {
    id: "5",
    label: "Craftsmanship",
    title: "Stone Work You Can See",
    body: "Careful stone placement and finishing details that make every outdoor space look right.",
    cta: { label: "Explore Services", href: "/services" },
    image: media.serviceDefaults["waterfront-stone-work"],
  },
  {
    id: "6",
    label: "Sustainability",
    title: "Built To Last On Your Land",
    body: "Erosion control, native planting where it fits, and durable builds that reduce long-term site work.",
    cta: { label: "Learn More", href: "/about" },
    image: media.serviceCapabilityImages.landscaping[2],
  },
] as const;

export const enterpriseHomeLandscapingGallery = [
  {
    image: media.serviceDefaults.landscaping,
    title: "Backyard finish · Tiny Township",
    alt: "Finished residential backyard landscaping with planting beds and lawn in Tiny Township",
  },
  {
    image: media.serviceCapabilityImages.landscaping[2],
    title: "Garden path",
    alt: "Natural stone garden path through a landscaped residential property",
  },
  {
    image: media.serviceCapabilityImages.landscaping[0],
    title: "Wooded path",
    alt: "Landscaped path through a wooded residential lot",
  },
  {
    image: media.serviceCapabilityImages.landscaping[1],
    title: "Flagstone yard",
    alt: "Flagstone patio and yard finishing with planting beds",
  },
  {
    image: media.landscapePlantingBeds,
    title: "Planting beds",
    alt: "Fresh planting beds and soil preparation on a residential landscape",
  },
  {
    image: media.landscapeFinishEstablish,
    title: "Establishment finish",
    alt: "Landscape establishment and finishing work on a custom home property",
  },
] as const;

export const enterpriseFeaturedProject = {
  image: media.serviceDefaults.landscaping,
  eyebrow: "Featured Project",
  title: "Tiny Township",
  titleAccent: "Backyard",
  description:
    "Full backyard landscape — grading, planting beds, paths, and establishment finish on a residential property in Tiny Township.",
  href: "/services/landscaping",
} as const;

export const enterpriseHomeShowcase = {
  eyebrow: "Full Outdoor Builds",
  headline: "From Grade",
  headlineAccent: "To Finish",
  statement:
    "Rough grade through finished stone and landscape — handled as one outdoor build on your property.",
  body:
    "Tiny Township construction and landscaping for custom homes and cottages — grading, hardscaping, and outdoor finishing across South Georgian Bay.",
  imageAlt: "Modern three-storey residential home built by Stuart Thomas Construction",
  cta: { label: cta.primaryLabel, href: cta.primaryHref },
} as const;

export const enterpriseQuote = {
  text: "Stuart Thomas delivered exactly what they promised — quality work, honest communication, and a shoreline we are proud of.",
  highlight: "quality work",
  attribution: "Residential Client · Tiny Township",
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
  "hardscaping",
  "landscaping",
  "commercial-snow-removal",
  "excavation",
  "waterfront-stone-work",
] as const;
