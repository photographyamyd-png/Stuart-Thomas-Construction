/** Registry of homepage section IDs — each must use a unique layout variant. */
export const homeSectionIds = [
  "hero",
  "brand-bar",
  "services-showcase",
  "projects",
  "testimonial",
  "why-us",
  "process",
  "about-preview",
  "cta-banner",
  "areas-teaser",
] as const;

export type HomeSectionId = (typeof homeSectionIds)[number];

export const stats = [
  { value: "Since", label: "2004 on Georgian Bay" },
  { value: "15+", label: "Seasons on these shorelines" },
  { value: "Tiny", label: "Township home base" },
] as const;

export const values = [
  { title: "Integrity", description: "Honest timelines, clear scope, and work we stand behind." },
  { title: "Quality", description: "Solid bases, drainage, and finishing built for real winters." },
  { title: "Reliability", description: "Equipment and communication you can count on." },
  { title: "Craftsmanship", description: "Stone and hardscape that looks right in person and holds up over time." },
  { title: "Community", description: "Proud to build across South Georgian Bay." },
] as const;

export const whyUsCards = [
  {
    num: "01",
    title: "Waterfront Focus",
    description:
      "Years specializing in waterfront and armour stone work across South Georgian Bay.",
  },
  {
    num: "02",
    title: "Licensed & Insured",
    description: "Fully licensed and insured for commercial and residential projects.",
  },
  {
    num: "03",
    title: "Transparent Pricing",
    description: "Detailed quotes upfront. No surprises. No hidden costs.",
  },
  {
    num: "04",
    title: "Done Right",
    description: "We do not move on until the work meets our standards — and yours.",
  },
] as const;

export const homeProcess = [
  {
    title: "Site Visit",
    description:
      "We walk your property, check access and drainage, and talk through scope before any number.",
  },
  {
    title: "Design & Quote",
    description:
      "Itemized quote with materials, labour, equipment, and timeline. You approve before we start.",
  },
  {
    title: "Build",
    description:
      "You deal with us from dig to final stone. Clean site, clear updates, no rotating subcontractor list.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We walk the finished site with you. The job isn’t done until you agree it’s right.",
  },
] as const;

export const featuredTestimonial = {
  quote:
    "Stuart Thomas Construction rebuilt our waterfront. The armour stone work held through two winters with no drama.",
  highlight: "held through two winters",
  author: "Homeowner, South Georgian Bay",
} as const;
