import { areasHubCopy } from "./areas";
import { serviceAreas } from "./geo";
import { services } from "./services";

function formatList(items: readonly string[], conjunction = "and"): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0]!;
  if (items.length === 2) return `${items[0]} ${conjunction} ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, ${conjunction} ${items[items.length - 1]}`;
}

/** Page-unique marketing headlines — avoid repeating the same H1/H2 across routes. */
export const pageHeadlines = {
  home: {
    pathfinderServices:
      "Stone, grade, landscaping, and snow routes — pick a service to see scope, photos, and FAQs.",
    servicesGrid: "What We Build Outdoors",
    contactHeadline: "Ready to Talk About Your Project?",
  },
  servicesHub: {
    title: "Landscape & Build Services",
    description:
      "Armour stone, waterfront work, landscaping, hardscaping, excavation, and commercial snow — explore each below.",
  },
  about: {
    heroDescription:
      "A Tiny Township construction company — grading, stone, landscaping, and winter routes since 2004.",
  },
  ctaEyebrows: {
    startProject: "Start Your Project",
    nextStep: "Next Step",
  },
} as const;

export const serviceCopy = {
  /** Canonical six-service list derived from service titles (for meta and services hub). */
  fullList(): string {
    const titles = services.map((s) => s.title.toLowerCase());
    const last = titles.pop()!;
    return `${titles.join(", ")}, and ${last}`;
  },

  /** Short four-item variant for hero and pathfinder contexts. */
  shortList(): string {
    return "armour stone, waterfront, landscaping, and excavation";
  },
};

export const areaCopy = {
  /** Construction corridor + commercial winter corridor — single source for regional prose. */
  corridorBlurb(): string {
    const construction = formatList(
      serviceAreas.constructionLandscaping.slice(0, 3),
      "and",
    );
    const commercial = formatList(
      serviceAreas.commercialWinter.slice(0, 2),
      "and",
    );
    return `We build retaining walls, patios, and waterfront stone across ${construction} — with commercial snow and excavation routes in ${commercial}.`;
  },

  hubDescription: areasHubCopy.description,
};
