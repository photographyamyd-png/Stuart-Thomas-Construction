import { media } from "./media";

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
    category: "Armour Stone",
    title: "Retaining Wall Milestone",
    description: "Structural mass and drainage integrated on a Muskoka estate.",
    href: "/services/armour-stone",
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
    image: "/images/20260508_102632.jpg",
  },
  {
    id: "2",
    label: "Quality",
    title: "Built To Last Generations",
    body: "Correct bases, proper drainage, and stone placement engineered for Canadian seasons.",
    cta: { label: "See Our Work", href: "/projects" },
    image: "/images/20260508_105454.jpg",
  },
  {
    id: "3",
    label: "Safety",
    title: "Disciplined Sites Every Day",
    body: "Equipment protocols, clear zones, and trained crews on every residential and commercial project.",
    cta: { label: "Our Approach", href: "/about" },
    image: "/images/20260508_105835.jpg",
  },
  {
    id: "4",
    label: "Community",
    title: "Rooted In Muskoka",
    body: "Local relationships, regional suppliers, and builds that strengthen the communities we serve.",
    cta: { label: "Our Areas", href: "/areas" },
    image: "/images/20260508_105228.jpg",
  },
  {
    id: "5",
    label: "Craftsmanship",
    title: "Stonecraft You Can See",
    body: "Mass placement, joint discipline, and finishing details that elevate every outdoor space.",
    cta: { label: "Explore Services", href: "/services" },
    image: "/images/20260508_110755.jpg",
  },
  {
    id: "6",
    label: "Sustainability",
    title: "Responsible Land Stewardship",
    body: "Erosion control, native planting, and durable builds that reduce long-term site disturbance.",
    cta: { label: "Learn More", href: "/about" },
    image: "/images/20260508_102504.jpg",
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

export const enterpriseQuote = {
  text: "Stuart Thomas delivered exactly what they promised — quality work, honest communication, and a shoreline we are proud of.",
  highlight: "quality work",
  attribution: "Residential Client · Tiny Township",
} as const;

/** Homepage service grid display order (matches Hybrid F mockup) */
export const enterpriseServiceGridOrder = [
  "armour-stone",
  "hardscaping",
  "landscaping",
  "commercial-snow-removal",
  "excavation",
  "waterfront-stone-work",
] as const;
