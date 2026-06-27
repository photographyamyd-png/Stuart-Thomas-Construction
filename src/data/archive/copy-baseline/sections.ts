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
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Commitment to Quality" },
] as const;

export const values = [
  { title: "Integrity", description: "Honest timelines, clear scope, and work we stand behind." },
  { title: "Quality", description: "Engineering-minded bases, drainage, and finishing." },
  { title: "Reliability", description: "Equipment, crews, and communication you can count on." },
  { title: "Craftsmanship", description: "Stone and hardscape that reads premium in person." },
  { title: "Community", description: "Proud to build across South Georgian Bay." },
] as const;

export const whyUsCards = [
  {
    num: "01",
    title: "Proven Expertise",
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
    title: "Consultation",
    description:
      "We visit your site, listen to your vision, and assess the scope. No pressure, just expertise.",
  },
  {
    title: "Design & Quote",
    description:
      "Detailed proposal with clear pricing, materials, and timeline. You approve before we start.",
  },
  {
    title: "Construction",
    description:
      "Expert crews, quality materials, clean site management. You are kept informed every step.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We walk the finished project with you. Only when you are satisfied is the job complete.",
  },
] as const;

export const featuredTestimonial = {
  quote:
    "Stuart Thomas Construction transformed our waterfront completely. The armour stone work is flawless — every rock placed with precision.",
  highlight: "armour stone work is flawless",
  author: "Homeowner, South Georgian Bay",
} as const;
