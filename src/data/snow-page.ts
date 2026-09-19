/** Commercial snow page content — exclusive to /services/commercial-snow-removal */

export const snowTrustItems = [
  "Commercial liability insured",
  "Rapid storm response",
  "Heavy equipment on every job",
  "Tiny Township based since 2004",
] as const;

export const snowWhy = {
  headline: "When the snow falls, your business shouldn't stop",
  /** Primary supporting line — keep short for section density */
  paragraphs: [
    "Georgian Bay weather moves fast. We plow and treat commercial and industrial properties so your doors open on time, your people get in safely, and your operation keeps moving.",
  ],
} as const;

export const snowAudience = [
  {
    title: "Factories & industrial facilities",
    body: "Keep yards and access routes clear so shifts start on time.",
  },
  {
    title: "Warehouses & distribution",
    body: "Open truck routes and loading areas for shipping and receiving.",
  },
  {
    title: "Commercial & office buildings",
    body: "Safe lots and entrances for staff and visitors.",
  },
  {
    title: "Retail plazas & commercial lots",
    body: "Clear parking and walkways that keep customers coming.",
  },
] as const;

export const snowHaulOut = {
  eyebrow: "Snow Haul-Outs",
  headline: "When the snow gets too deep, we move it off-site",
  paragraphs: [
    "When banks eat into parking and loading space, we bring heavy equipment for a one-time haul-out so your lot gets its space back.",
  ],
  checklist: [
    "One-time service, whenever you need it",
    "Heavy equipment for large volumes",
    "Parking, loading areas and access restored",
  ],
  ctaLabel: "Request a Haul-Out",
  underCta: "Haul-outs are available when your snow banks get out of control.",
  imageAlt:
    "Excavator clearing deep snow banks on a commercial lot in Midland — illustrative stock",
} as const;

export const snowContracts = {
  headline: "Lock in your winter before the first snowfall",
  body: "A seasonal contract puts your property first in line — consistent coverage all winter and a clearer picture of your costs.",
  bullets: [
    "Priority service throughout the season",
    "Consistent coverage from first snowfall to last",
    "Plowing, salting and sanding around your property",
    "One less thing to worry about all winter",
  ],
  ctaLabel: "Secure Your Seasonal Contract",
} as const;

export const snowSafety = {
  headline: "Keep your people safe. Keep your doors open.",
  paragraphs: [
    "We're commercial liability insured and treat every lot for safe access — from the first plow pass to the final salting.",
  ],
  points: [
    { label: "Insured", body: "Commercial liability coverage" },
    { label: "Prepared", body: "Local crews and heavy equipment ready for the season" },
    { label: "Focused", body: "Safe access for staff, customers and deliveries" },
  ],
  imageAlt:
    "Night plow clearing a commercial corridor in North Simcoe — illustrative stock",
} as const;

export const snowServiceAreas = [
  {
    title: "Midland",
    body: "Commercial and industrial properties in and around Midland.",
  },
  {
    title: "Penetanguishene",
    body: "Business and industrial sites across Penetanguishene.",
  },
  {
    title: "Tay Township",
    body: "Commercial properties throughout Tay Township.",
  },
  {
    title: "Tiny Township",
    body: "Our home base, serving commercial and industrial sites across Tiny.",
  },
  {
    title: "Wasaga Beach",
    body: "Commercial properties in Wasaga Beach and the surrounding area.",
  },
] as const;

export const snowFinalCta = {
  headline: "Don't get locked out of your business this winter",
  subline: "Tell us about your property — or tap Call Us below.",
  button: "Request a Quote",
  imageAlt:
    "Loader clearing a rural commercial access road after snowfall — illustrative stock",
} as const;

/** FAQ topic tabs for the compact snow FAQ band (2–3 items each) */
export const snowFaqTopics = [
  { id: "pricing", label: "Pricing", indices: [0, 1, 2] },
  { id: "service", label: "Service", indices: [3, 4, 5] },
  { id: "coverage", label: "Coverage", indices: [6, 7, 8] },
  { id: "start", label: "Get started", indices: [9, 10] },
] as const;

export const snowProcessHeading = {
  eyebrow: "How It Works",
  headlineBefore: "From first call to",
  headlineAccent: "first storm",
} as const;

export const snowServicesHeading = {
  eyebrow: "Services",
  headlineBefore: "Commercial snow &",
  headlineAccent: "ice management",
} as const;

/** Prefill values for #quote-form?service= */
export const snowServicePrefill = {
  seasonal: "Seasonal contract",
  haulOut: "Snow haul-out",
  assessment: "Seasonal contract",
} as const;
