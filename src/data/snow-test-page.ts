/** Premium sandbox content for /test-snow only — commercial & industrial snow. */

import { site } from "@/data/site";

export const snowTest = {
  nav: {
    links: [
      { label: "Why Us", href: "#statement" },
      { label: "Process", href: "#process" },
      { label: "Quote", href: "#coverage" },
      { label: "About", href: "/about" },
    ] as const,
    cta: "Get a Commercial Quote",
  },

  hero: {
    eyebrow: "Commercial & Industrial Snow Removal",
    headlineLine1: "Keep commercial lots",
    headlineLine2: "and industrial yards",
    headlineLine3: "open all winter",
    supporting:
      "Contract snow plowing, salting, sidewalk clearing, and haul-outs for factories, warehouses, plazas, and business parks across Midland & North Simcoe — with 24/7 storm response.",
    primaryCta: "Request a Commercial Quote",
    secondaryCta: "Call Now",
    imageAlt:
      "Loader clearing snow on a commercial parking lot — North Simcoe industrial winter service",
  },

  statement: {
    eyebrow: "Commercial & Industrial Only",
    headline: "Built for working properties",
    supporting:
      "We clear and treat commercial parking lots, industrial yards, loading docks, and truck courts — not residential driveways. One accountable partner, all season long.",
    trust: [
      "Licensed & insured",
      "Commercial & industrial routes",
      "24/7 storm response",
      "Reliable, documented service",
    ] as const,
  },

  process: {
    eyebrow: "Commercial Contract Process",
    headline: "From assessment to storm-ready coverage",
    supporting:
      "A clear path for commercial and industrial accounts — from first walkthrough to season-long lot and yard coverage.",
    steps: [
      {
        title: "Site walkthrough",
        body: "We map your lot layout, docks, fire lanes, employee entrances, and snow-storage areas.",
      },
      {
        title: "Written proposal",
        body: "A clear seasonal quote for plowing, ice control, sidewalks, and haul-outs, sized to your property.",
      },
      {
        title: "Priority storm response",
        body: "When winter hits, contracted sites get priority crews so staff, freight, and customers can keep moving.",
      },
      {
        title: "Season-long support",
        body: "One point of contact manages your account all winter — questions, extras, and service updates.",
      },
    ],
  },

  coverage: {
    eyebrow: "Commercial quote request",
    headline: "Confirm coverage for your commercial site",
    supporting:
      "Tell us about your factory, warehouse, plaza, or commercial building. We’ll confirm Midland & North Simcoe coverage and follow up with a winter service plan.",
    panelTitle: "Industrial & commercial properties",
    panelBody:
      "Plowing, salting, sidewalks, docks, and haul-outs — contract coverage for sites that can’t afford to shut down after a storm.",
    panelCta: "Call Now",
    submitLabel: "Request My Commercial Quote",
    unsureLink: `Not sure we serve your industrial site? Call ${site.phoneDisplay}.`,
    towns: [
      "Midland",
      "Penetanguishene",
      "Tay Township",
      "Tiny Township",
      "Wasaga Beach",
    ] as const,
    propertyTypes: [
      "Factory / Industrial",
      "Warehouse / Logistics",
      "Commercial Building / Office",
      "Retail / Plaza",
      "Other commercial",
    ] as const,
  },

  testimonial: {
    quote:
      "Every storm was handled before our commercial tenants arrived. The service reports made tracking our industrial lot easy.",
    name: "Property Manager",
    role: "Regional Retail & Commercial Center",
  },

  close: {
    eyebrow: "Commercial winter contracts",
    headline: "Lock in industrial snow coverage before the next storm",
    primaryCta: "Get a Commercial Quote",
  },

  footer: {
    tagline: `Commercial & industrial snow · Midland & North Simcoe · ${site.phoneDisplay}`,
    links: [
      { label: "Quote", href: "#coverage" },
      { label: "About", href: "/about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ] as const,
    copyright: `© ${new Date().getFullYear()} ${site.name}`,
  },
} as const;
