import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  Mountain,
  Snowflake,
  Tractor,
  Trees,
  Waves,
} from "lucide-react";
import { site } from "@/data/site";

export type ServiceSlug =
  | "armour-stone"
  | "waterfront-stone-work"
  | "landscaping"
  | "hardscaping"
  | "excavation"
  | "commercial-snow-removal";

export type ServiceDetail = {
  slug: ServiceSlug;
  title: string;
  shortLabel: string;
  /** Homepage service grid card button */
  gridCtaLabel: string;
  /** Wireframe icon row — one or two lines under each service icon */
  iconRowLabelLines: string[];
  /** CSS custom property for homepage icon strip accent (e.g. var(--ent-icon-strip-armour)) */
  iconStripAccent: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  heroAlt: string;
  overview: string[];
  /** Optional structured fact rows under statement lead (label + value) */
  statementFacts?: { label: string; value: string }[];
  subServices: { title: string; description: string }[];
  process: { title: string; description: string }[];
  benefits: string[];
  relatedSlugs: ServiceSlug[];
  faqs: { q: string; a: string }[];
  /** Statement-band eyebrow (service-specific — never a generic filler) */
  statementEyebrow: string;
  /** Statement-band H2: plain + gold accent word/phrase */
  statementHeadline: { before: string; accent: string };
  /** Hero primary CTA label */
  heroCtaLabel?: string;
  /** Statement-band CTA label */
  statementCtaLabel?: string;
  /** Prefer tel: as hero secondary instead of in-page scroll */
  heroSecondaryTel?: boolean;
  /** Closing green band overrides */
  closingCta?: {
    eyebrow: string;
    headlineBefore: string;
    headlineAccent: string;
    subline: string;
    button: string;
  };
};

export const services: ServiceDetail[] = [
  {
    slug: "armour-stone",
    title: "Armour Stone",
    shortLabel: "Armour Stone",
    gridCtaLabel: "Armour Stone Retaining Walls",
    iconRowLabelLines: ["ARMOUR", "STONE"],
    iconStripAccent: "var(--ent-icon-strip-armour)",
    shortDescription:
      "Stops erosion and holds slopes on waterfront properties through Georgian Bay freeze-thaw cycles.",
    metaTitle: "Armour Stone & Retaining Walls | Tiny Township Construction",
    metaDescription:
      "Armour stone retaining walls in Tiny Township — built for shoreline exposure and freeze-thaw.",
    icon: Mountain,
    heroAlt: "Heavy armour stone wall with cap and drainage",
    statementEyebrow: "Armour stone retaining",
    statementHeadline: { before: "Walls that hold through", accent: "freeze-thaw" },
    overview: [
      "We build armour stone walls that look right and stay put — proper drainage, a solid base, and stone placed to handle freeze-thaw.",
      "From tight cottage access to open waterfront lots, we plan equipment paths and staging so the finished wall fits the property. When engineers specify modular retaining, we also install Redi-Rock® systems supplied by The Sarjeant Co.",
    ],
    subServices: [
      { title: "Retaining walls & terracing", description: "Tiered walls for driveways, slopes, and yard terraces." },
      { title: "Waterfront retaining", description: "Shoreline walls built for wave action, ice, and seasonal water levels." },
      { title: "Caps & finishing", description: "Top-of-wall details where stone meets grade, deck, or stairs." },
    ],
    process: [
      { title: "Site walk", description: "Access, equipment path, drainage, and protection for existing features." },
      { title: "Excavation & base", description: "Structural base, drainage aggregate, and compaction to spec." },
      { title: "Stone placement", description: "Largest stones placed first, checked for fit and alignment throughout." },
      { title: "Final finish", description: "Top of wall tied cleanly into grade — ready for landscaping." },
    ],
    benefits: [
      "Drainage and base work done properly",
      "Equipment for tight lots without unnecessary yard damage",
      "Clean finishing that looks good in person and in photos",
      "Local experience across Tiny Township and South Georgian Bay",
    ],
    relatedSlugs: ["waterfront-stone-work", "hardscaping", "excavation"],
    faqs: [
      { q: "Do you work on waterfront retaining walls in Tiny Township?", a: "Yes — shoreline sites are a core part of our work. We plan for ice, wind, and drainage on Georgian Bay properties." },
      { q: "Can you coordinate with an engineer?", a: "Yes. We work with stamped drawings, inspection schedules, and spec-driven placement." },
      { q: "Do you install Redi-Rock as well as natural armour stone?", a: "Yes. Stuart Thomas Construction installs Redi-Rock retaining systems supplied by The Sarjeant Co. Natural armour stone remains our core craft — we help you choose the right approach for your site and drawings. See our Redi-Rock installation page for details." },
    ],
  },
  {
    slug: "waterfront-stone-work",
    title: "Waterfront Stone Work",
    shortLabel: "Waterfront Stone",
    gridCtaLabel: "Waterfront Stone Work",
    iconRowLabelLines: ["WATERFRONT", "STONE WORK"],
    iconStripAccent: "var(--ent-icon-strip-waterfront)",
    shortDescription:
      "Stone stairs, shoreline retaining, and waterfront details for cottage country.",
    metaTitle: "Waterfront Stone Work | Tiny Township & Wasaga Beach",
    metaDescription:
      "Waterfront stone stairs and shoreline work in Wasaga Beach — built for wind, ice, and Georgian Bay exposure.",
    icon: Waves,
    heroAlt: "Waterfront stone staircase and retaining detail",
    statementEyebrow: "Shoreline stone",
    statementHeadline: { before: "Stairs and retaining built for", accent: "the Bay" },
    overview: [
      "Waterfront stone has to work hard — safe stairs, solid retaining, and finishes that stand up to wind and ice.",
      "We know Georgian Bay conditions: lake-effect wind, ice push, and grade movement through the seasons. We build accordingly.",
    ],
    subServices: [
      { title: "Stone stairs & access", description: "Safe steps from cottage to shoreline with proper rise, run, and drainage." },
      { title: "Shoreline retaining", description: "Walls and transitions for wave action and setback requirements — including Redi-Rock when specified." },
      { title: "Cottage transitions", description: "Patios, landings, and walls that connect hardscape to the home." },
    ],
    process: [
      { title: "Shoreline review", description: "Exposure, access, protection, and timing around seasonal water levels." },
      { title: "Base & drainage", description: "Structural base, drainage, and geotextile where the site requires it." },
      { title: "Stone installation", description: "Placement, joint strategy, and protection during construction." },
      { title: "Finish & handoff", description: "Clean edges, safe surfaces, and a site ready for landscaping." },
    ],
    benefits: [
      "Waterfront-specific planning and build sequence",
      "Clean finishes that look good from the water and from the cottage",
      "Coordination with docks, decks, and landscape trades",
      "Trusted across Tiny Township and Wasaga Beach",
    ],
    relatedSlugs: ["armour-stone", "hardscaping", "landscaping"],
    faqs: [
      { q: "Do you handle steep waterfront lots?", a: "Yes. Terracing, stairs, and retaining are common on Georgian Bay slopes." },
      { q: "Can you match existing stone on a renovation?", a: "We work with you on colour, scale, and pattern to blend new work with what's already there." },
      { q: "Can you install engineered retaining at the shoreline?", a: "Yes. When drawings call for Redi-Rock or modular retention, STC installs systems supplied by The Sarjeant Co. with the same waterfront planning as our natural stone work." },
    ],
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    shortLabel: "Landscaping",
    gridCtaLabel: "Tiny Township Landscaping",
    iconRowLabelLines: ["LANDSCAPING"],
    iconStripAccent: "var(--ent-icon-strip-landscape)",
    shortDescription:
      "Grading, beds, and finishing that tie into your stone and drainage work — so the yard isn’t patchwork.",
    metaTitle: "Tiny Township Landscaping | Stuart Thomas Construction",
    metaDescription:
      "Landscaping and outdoor finishing in Tiny Township — grading, beds, and hardscape integration for cottage country.",
    icon: Trees,
    heroAlt: "Landscaped property with stone and plantings",
    statementEyebrow: "Outdoor finishing",
    statementHeadline: { before: "Grade, beds, and hardscape as", accent: "one yard" },
    overview: [
      "Tiny Township landscaping that fits your property — proper grade, good drainage, and hardscape tied to stone and retaining work.",
      "We handle earthwork, stone, and finishing together so the yard isn’t left as patchwork.",
    ],
    subServices: [
      { title: "Grading & drainage", description: "Slopes, swales, and drainage that protect structures and plantings — including terraces tied to retaining walls." },
      { title: "Beds & finishing", description: "Topsoil, edging, and detail work that complements stone and the home." },
      { title: "Patio and step ties", description: "Patios, steps, and transitions connected to retaining and waterfront features." },
    ],
    process: [
      { title: "Plan review", description: "Review layout, access, and protection for existing features." },
      { title: "Earthwork", description: "Cut and fill, compaction, and drainage prep." },
      { title: "Hardscape coordination", description: "Stone, pavers, and structures installed in the right order." },
      { title: "Finish & establish", description: "Final grade, beds, and handoff ready for planting or use." },
    ],
    benefits: [
      "Stone and landscape structure on one quote",
      "Equipment access without unnecessary yard damage",
      "Finishing suited to cottage-country properties",
      "Local knowledge of Tiny Township soils and conditions",
    ],
    relatedSlugs: ["hardscaping", "armour-stone", "excavation"],
    faqs: [
      { q: "Do you do landscaping in Tiny Township?", a: "Yes — grading, beds, patios, and full outdoor finishing across Tiny Township and the Tiny Beaches area." },
      { q: "Do you offer design services?", a: "We collaborate with your designer or architect and advise on what will build well on your site." },
      { q: "Can landscaping follow a major stone wall project?", a: "Yes — we often finish grades and beds after retaining walls are complete." },
    ],
  },
  {
    slug: "hardscaping",
    title: "Hardscaping",
    shortLabel: "Hardscaping",
    gridCtaLabel: "Waterfront Hardscaping",
    iconRowLabelLines: ["HARDSCAPING"],
    iconStripAccent: "var(--ent-icon-strip-hardscape)",
    shortDescription:
      "Patios, walkways, and steps that stay level through winter heave — because the base and drainage are done before the first stone goes down.",
    metaTitle: "Hardscaping Contractor | Tiny Township & Collingwood",
    metaDescription:
      "Hardscaping in Tiny Township — patios, walkways, and steps built to hold through winter heave.",
    icon: LayoutGrid,
    heroAlt: "Stone patio and walkway detail",
    statementEyebrow: "Patios & walkways",
    statementHeadline: { before: "Surfaces that stay level through", accent: "winter heave" },
    overview: [
      "Hardscaping is what you walk on every day. We build patios, walkways, and steps with the right base, drainage, and edge restraint.",
      "Every elevation change and joint line is planned so the surface feels solid and looks clean.",
    ],
    subServices: [
      { title: "Patios & terraces", description: "Natural stone and unit pavers with proper base and drainage." },
      { title: "Walkways & steps", description: "Safe transitions with consistent rise and run to driveways and entries." },
      { title: "Kitchen pads & fire features", description: "Pads, veneers, and stone work coordinated with other trades." },
    ],
    process: [
      { title: "Layout & grades", description: "Set elevations, drainage direction, and edge conditions." },
      { title: "Base construction", description: "Excavation, aggregate, and compaction for natural stone and Redi-Rock assemblies." },
      { title: "Surface installation", description: "Stone or unit placement with alignment and consistent joints." },
      { title: "Detail & protection", description: "Edges, cuts, and surface protection before handoff." },
    ],
    benefits: [
      "Clean lines on every plane and edge",
      "Integration with retaining and waterfront stone",
      "Surfaces built for daily outdoor use",
      "Trusted by homeowners across South Georgian Bay",
    ],
    relatedSlugs: ["landscaping", "armour-stone", "waterfront-stone-work"],
    faqs: [
      { q: "What materials do you work with?", a: "Natural stone, armour stone caps, unit pavers, and Redi-Rock freestanding walls and columns — installed by STC and supplied by The Sarjeant Co. when specified." },
      { q: "How long does a typical patio take?", a: "Timeline depends on access, size, and weather. We provide a clear schedule after a site walk." },
    ],
  },
  {
    slug: "excavation",
    title: "Excavation",
    shortLabel: "Excavation",
    gridCtaLabel: "Excavation & Grading",
    iconRowLabelLines: ["EXCAVATION"],
    iconStripAccent: "var(--ent-icon-strip-excavation)",
    shortDescription:
      "Gets your grade, drainage, and base right before stone or landscaping goes in — the step most contractors skip.",
    metaTitle: "Excavation & Grading | Tiny Township Construction",
    metaDescription:
      "Excavation and grading in Tiny Township — site prep for stone, landscaping, and outdoor builds.",
    icon: Tractor,
    heroAlt: "Excavation and grading on a residential site",
    statementEyebrow: "Site prep",
    statementHeadline: { before: "Grade and drainage", accent: "before stone" },
    overview: [
      "Good excavation sets up everything above grade. We cut and fill with drainage in mind, protect what's already on site, and leave a clean base for stone and landscaping.",
      "Tight access is normal in cottage country — our equipment handles open lots and narrow waterfront approaches.",
    ],
    subServices: [
      { title: "Cut & fill grading", description: "Correct slopes, swales, and compaction for structural and landscape work." },
      { title: "Trenches & digs", description: "Foundation and utility trenches with protection for adjacent structures." },
      { title: "Site clearing & prep", description: "Clearing, grubbing, and staging for the next phase of work." },
    ],
    process: [
      { title: "Site walk", description: "Access, utilities, protection, and material import/export planning." },
      { title: "Mobilization", description: "Equipment on site with matting and protection as needed." },
      { title: "Earthwork", description: "Cuts, fills, and drainage per plan or field conditions." },
      { title: "Finish grade", description: "Ready for stone base, footings, or landscape installation." },
    ],
    benefits: [
      "Drainage considered from the start",
      "Right-sized equipment for access constraints",
      "Clean sites that respect neighbouring properties",
      "Smooth handoff to stone and landscape work",
    ],
    relatedSlugs: ["armour-stone", "landscaping", "hardscaping"],
    faqs: [
      { q: "Do you handle small residential digs?", a: "Yes — from trench work to full lot grading for outdoor projects." },
      { q: "Can excavation and stone be one contract?", a: "Yes. One contract reduces scheduling gaps and rework." },
    ],
  },
  {
    slug: "commercial-snow-removal",
    title: "Commercial & Industrial Snow Removal",
    shortLabel: "Commercial & Industrial · North Simcoe",
    gridCtaLabel: "Snow Services",
    iconRowLabelLines: ["SNOW REMOVAL"],
    iconStripAccent: "var(--ent-icon-strip-snow)",
    shortDescription:
      "Don't let a storm lock you out of your own business. We keep commercial buildings, industrial yards and parking lots open, safe and working in Midland, Penetanguishene, Tay, Tiny and Wasaga Beach.",
    metaTitle: "Commercial Snow Removal Midland | Stuart Thomas Construction",
    metaDescription:
      "Commercial and industrial snow plowing, salting and snow haul-outs in Midland, Penetanguishene, Tay, Tiny and Wasaga Beach. Insured. Get a quote.",
    icon: Snowflake,
    heroAlt:
      "Front-end loader pushing snow on a commercial lot in Midland — illustrative stock imagery for North Simcoe winter service",
    statementEyebrow: "Commercial winter service",
    statementHeadline: { before: "When the snow falls, your business", accent: "shouldn't stop" },
    heroCtaLabel: "Secure Your Seasonal Contract",
    heroSecondaryTel: true,
    overview: [
      "Georgian Bay weather moves fast. Overnight snowfall, drifting across open lots and icy entrances can mean staff who can't get in, deliveries that can't get through and customers who turn around and leave.",
      "That's lost time, lost revenue and real safety risk. We plow and treat commercial and industrial properties so your doors open on time, your people get in safely, and your operation keeps moving when the weather doesn't cooperate.",
    ],
    subServices: [
      {
        title: "Plowing",
        description:
          "Lots, yards and drive lanes cleared fast, so access is never a question when you arrive.",
      },
      {
        title: "Salting",
        description:
          "Ice control on lots, entrances and traffic areas to cut slip-and-fall risk.",
      },
      {
        title: "Sanding",
        description:
          "Added traction where surfaces stay slick, keeping people and vehicles moving safely.",
      },
      {
        title: "Walkways & entrances",
        description:
          "Cleared and treated approaches to your doors, so nobody walks into a hazard.",
      },
      {
        title: "Loading dock & truck court clearing",
        description: "Working areas kept open so shipping doesn't stall.",
      },
      {
        title: "Snow haul-outs",
        description: "When banks get too deep, we move snow off-site. See the next section.",
      },
    ],
    process: [
      {
        title: "Site walkthrough",
        description: "We visit your property and note the layout, access points and problem areas.",
      },
      {
        title: "Written proposal",
        description: "You receive a clear quote for your site and the services you need.",
      },
      {
        title: "Storm response",
        description: "When snow hits, our crews respond quickly to keep your property open.",
      },
      {
        title: "Ongoing support",
        description: "One point of contact all season for questions and requests.",
      },
    ],
    benefits: [
      "Commercial liability insured",
      "Rapid storm response",
      "Heavy equipment on every job",
      "Tiny Township based since 2004",
    ],
    relatedSlugs: ["excavation", "hardscaping", "landscaping"],
    faqs: [
      {
        q: "How is commercial snow removal priced?",
        a: "Quotes are based on lot size and layout, services needed, frequency, and whether you choose a seasonal contract — after a site walkthrough.",
      },
      {
        q: "Do you offer seasonal contracts?",
        a: "Yes. Seasonal contracts give your property priority service and reliable coverage all winter. Request a quote before the first snowfall.",
      },
      {
        q: "How fast is your storm response?",
        a: "We respond quickly when snow hits. Ask us about response for your property when you request a quote.",
      },
      {
        q: "When do you plow?",
        a: "We plow when snowfall reaches the level agreed for your site. Details are set in your service plan.",
      },
      {
        q: "Do you do salting and sanding?",
        a: "Yes. We treat lots, entrances, walkways and other traffic areas to reduce slippery surfaces.",
      },
      {
        q: "What if the snow gets too deep for regular plowing?",
        a: "We offer one-time snow haul-outs — heavy equipment removes banks so you get parking and access back.",
      },
      {
        q: "Are you insured?",
        a: "Yes, we carry commercial liability insurance. Ask us about it when you request your quote.",
      },
      {
        q: "Do you plow driveways or residential properties?",
        a: "No. We work only on commercial and industrial properties.",
      },
      {
        q: "Does the township plow my commercial lot?",
        a: "Municipal crews maintain public roads. Your private lot and walkways are the owner's responsibility — that is where we come in.",
      },
      {
        q: "Which areas do you serve?",
        a: "Midland, Penetanguishene, Tay Township, Tiny Township and Wasaga Beach.",
      },
      {
        q: "How do we get started?",
        a: `Request a site assessment through the form or call ${site.phoneDisplay}. We'll visit and send a written proposal.`,
      },
    ],
  },

];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return services.map((s) => s.slug);
}

export function getAdjacentServices(slug: ServiceSlug) {
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? services[index - 1]! : null,
    next: index < services.length - 1 ? services[index + 1]! : null,
  };
}
