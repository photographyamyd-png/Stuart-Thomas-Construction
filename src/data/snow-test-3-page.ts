/** Commercial / industrial snow sandbox for /preview-3015 — not live / not indexed. */

import { site } from "@/data/site";

export const snowTest3 = {
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Coverage", href: "#proof" },
    ] as const,
    cta: "Get a Quote",
  },

  hero: {
    eyebrow: "Commercial & Industrial Snow",
    headline: "Reliable commercial snow removal across Midland & North Simcoe",
    supporting:
      "Parking lots, yards, docks, and industrial sites — with 24/7 response when winter storms hit.",
    primaryCta: "Request a Quote",
    secondaryCta: "Call Now",
    imageAlt:
      "Heavy loader clearing a commercial lot after a winter storm — North Simcoe",
  },

  services: {
    eyebrow: "Capabilities",
    headline: "Commercial snow services",
    supporting: "Built for lots, entrances, and freight access — not residential driveways.",
    cards: [
      {
        label: "Lots & yards",
        title: "Parking Lot Plowing",
        items: [
          "Lots, yards & drive lanes",
          "Seasonal commercial contracts",
          "Pile push-back & haul-out",
        ] as const,
        link: "Get a commercial quote →",
        offset: false,
      },
      {
        label: "Ice & access",
        title: "De-Icing & Walkways",
        items: [
          "Salting & ice control",
          "Sidewalks, doors & docks",
          "24/7 storm response",
        ] as const,
        link: "Get a commercial quote →",
        offset: true,
      },
    ] as const,
  },

  howItWorks: {
    eyebrow: "Process",
    headline: "How commercial coverage works",
    supporting: "From site walkthrough to reliable storm coverage.",
    steps: [
      {
        step: "1",
        title: "Request a Quote",
        desc: "Tell us about your commercial or industrial property and timeline.",
      },
      {
        step: "2",
        title: "Confirm Scope",
        desc: "We confirm pricing and service levels for your site.",
      },
      {
        step: "3",
        title: "We Clear Snow",
        desc: "Crews keep lots and access open through every storm.",
      },
    ] as const,
  },

  quote: {
    eyebrow: "Get started",
    headline: "Get a commercial snow quote",
    supporting: "We'll confirm coverage for your property and follow up within one business day.",
    panelEyebrow: "Storm-ready sites",
    panelHeadline: "Reliable coverage all season",
    panelBody:
      "Factories, warehouses, plazas, and industrial yards — one accountable partner for the season.",
    panelCta: "Prefer to call?",
    propertyTypes: [
      "Factory / Industrial",
      "Warehouse / Logistics",
      "Commercial Building / Office",
      "Retail / Plaza",
      "Other",
    ] as const,
    timelines: ["This season", "After next storm", "Emergency now"] as const,
    submitLabel: "Request My Quote",
    disclaimer: "Commercial & industrial only. No spam.",
  },

  proof: {
    eyebrow: "Proof",
    headline: "Trusted by commercial properties",
    supporting:
      "We've cleared commercial and industrial lots across Midland and North Simcoe with fast, dependable response.",
    testimonials: [
      {
        quote:
          "Every storm was handled before our tenants arrived. Easy to work with all season.",
        attribution: "Property manager · Regional retail",
      },
      {
        quote:
          "Our lot is always clear by 6 AM. Zero complaints from tenants or freight.",
        attribution: "Operations lead · Industrial site",
      },
    ] as const,
    area: {
      label: "Territory",
      title: "Service area",
      body: "Midland, Penetanguishene, Tay Township, Tiny Township, Wasaga Beach, and surrounding North Simcoe commercial corridors.",
    },
  },

  footerCta: {
    eyebrow: "Ready when you are",
    headline: "Need commercial snow cleared this season?",
    supporting:
      "Get a fast, no-obligation quote for your parking lot or industrial site.",
    cta: "Get a Commercial Quote",
  },

  footer: {
    tagline: `Commercial snow · Midland & North Simcoe · ${site.phoneDisplay}`,
    copyright: `© ${new Date().getFullYear()} ${site.name}`,
  },
} as const;
