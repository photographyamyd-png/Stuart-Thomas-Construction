import { media } from "./media";
import { cta } from "./nav";

export const enterpriseInsights = [
  {
    image: media.featuredGalleryPaths[0],
    category: "Waterfront",
    title: "Shoreline Reveal Complete",
    description: "Armour stone placement finished ahead of schedule on Georgian Bay.",
    href: "/projects",
  },
  {
    image: media.featuredGalleryPaths[1],
    category: "Redi-Rock",
    title: "Engineered Retaining Installation",
    description: "Redi-Rock systems installed by STC — materials supplied by The Sarjeant Co.",
    href: "/materials/redi-rock",
  },
  {
    image: media.featuredGalleryPaths[2],
    category: "Hardscaping",
    title: "Patio Terrace Delivered",
    description: "Engineered base and natural stone finish for outdoor living.",
    href: "/services/hardscaping",
  },
  {
    image: media.featuredGalleryPaths[4],
    category: "Excavation",
    title: "Full-Site Prep Wrapped",
    description: "Grading and access complete — stone phase begins next week.",
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
    title: "Built To Last Generations",
    body: "Correct bases, proper drainage, and stone placement engineered for Canadian seasons.",
    cta: { label: "See Our Work", href: "/projects" },
    image: media.serviceDefaults["armour-stone"],
  },
  {
    id: "3",
    label: "Safety",
    title: "Disciplined Sites Every Day",
    body: "Equipment protocols, clear zones, and trained crews on every residential and commercial project.",
    cta: { label: "Our Approach", href: "/about" },
    image: media.serviceDefaults.excavation,
  },
  {
    id: "4",
    label: "Community",
    title: "Rooted In Muskoka",
    body: "Local relationships, regional suppliers, and builds that strengthen the communities we serve.",
    cta: { label: "Our Areas", href: "/areas" },
    image: media.serviceDefaults.landscaping,
  },
  {
    id: "5",
    label: "Craftsmanship",
    title: "Stonecraft You Can See",
    body: "Mass placement, joint discipline, and finishing details that elevate every outdoor space.",
    cta: { label: "Explore Services", href: "/services" },
    image: media.serviceDefaults["waterfront-stone-work"],
  },
  {
    id: "6",
    label: "Sustainability",
    title: "Responsible Land Stewardship",
    body: "Erosion control, native planting, and durable builds that reduce long-term site disturbance.",
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
    "Luxury armour stone retaining and shoreline protection — engineered for wave action, freeze-thaw cycles, and generations of use on Georgian Bay.",
  href: "/projects",
} as const;

export const enterpriseHomeShowcase = {
  eyebrow: "Residential Build",
  headline: "Custom Homes",
  headlineAccent: "& Estates",
  statement: "From foundation to finish — one accountable team on your property.",
  body:
    "Full-site excavation, hardscaping, and landscape establishment for custom residential builds across Muskoka and South Georgian Bay.",
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
