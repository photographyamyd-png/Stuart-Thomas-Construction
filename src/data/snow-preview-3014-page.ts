/** High-stakes sandbox for /preview-3014 only � private client preview — not live / not indexed.
 *  Commercial & industrial snow removal focus only.
 */

import { site } from "@/data/site";

export const snowPreview3014 = {
  nav: {
    links: [
      { label: "Approach", href: "#statement" },
      { label: "Services", href: "#services" },
      { label: "Quote", href: "#coverage" },
      { label: "About", href: "/about" },
    ] as const,
    cta: "Get a Quote",
  },

  hero: {
    eyebrow: "Commercial & Industrial Snow Removal",
    headlineLine1: "Zero-downtime clearing",
    headlineLine2: "for commercial sites",
    headlineLine3: "that cannot close",
    supporting:
      "Industrial yards, utility compounds, and commercial plazas across Midland & North Simcoe — including Hydro One facilities and Tim Hortons 24/7 lots — cleared to keep freight, staff, and customers moving.",
    primaryCta: "Request a Commercial Quote",
    secondaryCta: "Call Now",
    imageAlt:
      "Industrial loader clearing a commercial lot for continuous winter operations — North Simcoe",
  },

  statement: {
    eyebrow: "Who we serve",
    headline: "Built for commercial and industrial properties",
    supporting:
      "Factories, warehouses, utility substations, and commercial retail lots that cannot shut down — one accountable snow partner with storm triggers matched to industrial risk.",
    trust: [
      "Licensed & insured",
      "Commercial specialists",
      "Industrial storm response",
      "GPS-documented service",
    ] as const,
  },

  services: {
    eyebrow: "Commercial services",
    headline: "Industrial-grade snow & ice control",
    supporting:
      "Heavy equipment and contract discipline for commercial lots, docks, and plant access — from Hydro One compounds to high-traffic Tim Hortons sites.",
    cards: [
      {
        title: "Mission-Critical Site Clearing",
        body: "Heavy-duty commercial plowing keeps Hydro One facilities, Tim Hortons lots, and 24/7 industrial operations open without interruption.",
      },
      {
        title: "Critical Infrastructure De-Icing",
        body: "Strategic ice control on commercial access routes, industrial yards, and high-liability parking for utility and retail sites.",
      },
      {
        title: "Utility-Grade Reliability",
        body: "Contract clearing to commercial standards — covering industrial campuses, Tim Hortons 24/7 sites, and other high-consequence properties.",
      },
    ] as const,
  },

  process: {
    eyebrow: "Commercial process",
    headline: "From industrial walkthrough to storm response",
    supporting:
      "A clear path from first commercial site visit to season-long industrial coverage.",
    steps: [
      {
        title: "Commercial site walkthrough",
        body: "We map docks, truck lanes, plant gates, and high-liability zones unique to your commercial or industrial property.",
      },
      {
        title: "Written industrial proposal",
        body: "Custom plow and salt triggers matched to commercial traffic, shift schedules, and liability requirements.",
      },
      {
        title: "Storm response",
        body: "Crews activate before conditions block freight access, employee lots, or continuous commercial operations.",
      },
      {
        title: "Season support",
        body: "One point of contact all winter for property managers and industrial facilities that cannot wait on a callback.",
      },
    ],
  },

  coverage: {
    eyebrow: "Commercial quote",
    headline: "Request industrial site coverage",
    supporting:
      "Tell us about your commercial or industrial property — we’ll confirm Midland & North Simcoe coverage and follow up.",
    submitLabel: "Request My Commercial Quote",
    unsureLink: "Not sure if we serve your industrial site? Call our storm-response team.",
    panelEyebrow: "24/7 storm desk",
    panelHeadline: "Commercial lots cleared before the first shift",
    panelBody:
      "Seasonal contracts for factories, warehouses, utility yards, and commercial plazas across North Simcoe.",
    panelCta: "Or call us now",
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
      "Utility / Infrastructure",
      "Commercial Plaza / Retail",
      "Other commercial",
    ] as const,
  },

  testimonial: {
    quote:
      "Every storm was handled before our first commercial shift. For an industrial site, that reliability is non-negotiable.",
    name: "Facilities Manager",
    role: "Industrial Campus — North Simcoe",
  },

  close: {
    eyebrow: "Commercial contracts",
    headline: "Secure industrial snow coverage before the next storm",
    supporting:
      "Seasonal commercial snow removal for properties that cannot afford downtime.",
    primaryCta: "Get a Commercial Quote",
  },

  footer: {
    tagline: `Commercial snow · Midland & North Simcoe · ${site.phoneDisplay}`,
    links: [
      { label: "Quote", href: "#coverage" },
      { label: "About", href: "/about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ] as const,
    copyright: `© ${new Date().getFullYear()} ${site.name}`,
  },
} as const;
