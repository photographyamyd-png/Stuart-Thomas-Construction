/** Condensed commercial snow landing — /services/commercial-snow-removal */

import { site } from "@/data/site";

export const snowLanding = {
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Service Areas", href: "#coverage" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "#close" },
    ] as const,
    cta: "Get a Commercial Quote",
  },

  hero: {
    eyebrow: "Commercial & Industrial Snow Removal",
    headlineLine1: "Commercial snow removal",
    headlineLine2: "when your site",
    headlineLine3: "cannot wait",
    supporting:
      "Factories, warehouses, offices, and retail lots across Midland & North Simcoe — 24/7 commercial storm response for industrial yards, docks, and parking.",
    primaryCta: "Request a Commercial Quote",
    secondaryCta: "Call Storm Desk",
    imageAlt:
      "Loader clearing snow on a commercial parking lot — North Simcoe industrial winter service",
    statValue: "24/7",
    statLabel: "Commercial Storm Response",
  },

  trust: {
    eyebrow: "Commercial credentials",
    items: [
      "Commercial liability insured",
      "Industrial & commercial sites",
      "Storm activation for businesses",
      "GPS-documented commercial service",
    ] as const,
  },

  services: {
    eyebrow: "Commercial winter scope",
    headline: "Commercial & industrial snow services",
    supporting:
      "Four essentials that keep commercial lots, truck courts, and industrial docks open all winter.",
    cards: [
      {
        title: "Commercial Lot Plowing",
        body: "Business parking lots, industrial yards, and drive lanes cleared after every storm.",
      },
      {
        title: "Commercial Salting & De-Icing",
        body: "Ice control on commercial lots, loading areas, and high-traffic industrial routes.",
      },
      {
        title: "Sidewalks & Building Entrances",
        body: "Commercial walkways and employee entrances kept open for staff, customers, and freight.",
      },
      {
        title: "Industrial Snow Hauling",
        body: "Pile push-back and haul-out when commercial lots and truck courts run out of room.",
      },
    ],
  },

  proof: {
    eyebrow: "For commercial operators",
    headline: "Built for commercial & industrial property managers",
    points: [
      {
        title: "Commercial storm activation",
        body: "Crews are scheduled before conditions disrupt factory shifts, shipping, or retail hours.",
      },
      {
        title: "Documented commercial service",
        body: "Photos, timestamps, and completion records for each commercial site visit.",
      },
      {
        title: "One accountable commercial partner",
        body: "A dedicated contact manages your industrial or commercial property all season.",
      },
    ],
    testimonial: {
      quote:
        "Every commercial storm was handled before our tenants arrived. The service reports made everything easy to track.",
      name: "Commercial Property Manager",
      role: "Regional Retail Center",
    },
  },

  coverage: {
    eyebrow: "Commercial quote request",
    headline: "Request a commercial snow quote",
    supporting:
      "Tell us about your commercial or industrial property — we’ll confirm North Simcoe coverage and follow up.",
    addressLabel: "Commercial property address",
    addressPlaceholder: "Street address, industrial or commercial site",
    submitLabel: "Get a Commercial Quote",
    panelEyebrow: "Commercial storm desk",
    panelHeadline: "Industrial sites. Commercial lots. Covered.",
    panelSupporting:
      "Call our commercial storm-response team if you need coverage confirmed for a factory, warehouse, or business plaza.",
    unsureLink: "Not sure if we serve your commercial property? Call the storm desk.",
    phoneLabel: "24/7 Commercial Storm Response",
    towns: [
      "Midland",
      "Penetanguishene",
      "Tay Township",
      "Tiny Township",
      "Wasaga Beach",
    ] as const,
    mapLabel: "Commercial service territory — North Simcoe",
    propertyTypes: [
      "Factory / Industrial",
      "Warehouse / Logistics",
      "Commercial Building / Office",
      "Retail / Plaza",
      "Other commercial",
    ] as const,
  },

  faqs: [
    {
      q: "Do you offer seasonal commercial contracts?",
      a: "Yes. Seasonal commercial contracts give your industrial or business property priority service and reliable coverage all winter.",
    },
    {
      q: "What properties do you service?",
      a: "Commercial and industrial only — factories, warehouses, offices, retail plazas, and business lots. We do not service residential driveways.",
    },
    {
      q: "How quickly can commercial crews respond?",
      a: "We prioritize contracted commercial sites as storms develop. Ask about response windows for your industrial or retail property when you request a quote.",
    },
    {
      q: "Are salt and de-icing materials included?",
      a: "Ice control for commercial lots can be included in a seasonal plan or quoted per visit — we tailor materials to your industrial or commercial site.",
    },
  ] as const,

  close: {
    eyebrow: "Commercial winter readiness",
    headline: "Be ready before the next commercial storm",
    supporting:
      "Request a custom commercial and industrial snow and ice management plan for your property.",
    primaryCta: "Get a Commercial Quote",
    phoneLabel: "24/7 Commercial Storm Response",
  },

  footer: {
    areasHref: "#coverage",
    areasLabel: "Commercial service areas",
    privacyHref: "/privacy",
    termsHref: "/terms",
    copyright: `© ${new Date().getFullYear()} ${site.name}`,
  },
} as const;

/** Prefill values for quote deep-links from other pages / CTAs. */
export const snowServicePrefill = {
  seasonal: "Seasonal contract",
  assessment: "Site assessment",
  haulOut: "Snow haul-out",
} as const;
