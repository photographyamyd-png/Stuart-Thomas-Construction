import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  Mountain,
  Snowflake,
  Tractor,
  Trees,
  Waves,
} from "lucide-react";

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
  /** Service page overview section headline (plain text before optional accent span). */
  overviewHeadline?: string;
  /** Optional accent span rendered in green on the overview headline. */
  overviewHeadlineAccent?: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  heroAlt: string;
  overview: string[];
  subServices: { title: string; description: string }[];
  process: { title: string; description: string }[];
  benefits: string[];
  relatedSlugs: ServiceSlug[];
  faqs: { q: string; a: string }[];
};

export const services: ServiceDetail[] = [
  {
    slug: "armour-stone",
    title: "Armour Stone",
    shortLabel: "Armour Stone",
    gridCtaLabel: "Explore Armour Stone",
    iconRowLabelLines: ["ARMOUR", "STONE"],
    iconStripAccent: "var(--ent-icon-strip-armour)",
    shortDescription:
      "Retaining walls and stone work built for Georgian Bay winters.",
    overviewHeadline: "Built To Read As",
    overviewHeadlineAccent: "Permanent",
    metaTitle: "Armour Stone & Retaining Walls | Tiny Township Construction",
    metaDescription:
      "Armour stone and retaining walls in Tiny Township, Wasaga Beach, Elmvale, and Collingwood. Built for shoreline exposure and freeze-thaw.",
    icon: Mountain,
    heroAlt: "Heavy armour stone wall with cap and drainage",
    overview: [
      "We build armour stone walls that look right and stay put — proper drainage, a solid base, and stone placed to handle freeze-thaw.",
      "From tight cottage access to open waterfront lots, we plan equipment paths and staging so the finished wall fits the property. When engineers specify modular retaining, we also install Redi-Rock® systems supplied by The Sarjeant Co.",
    ],
    subServices: [
      { title: "Retaining walls & terracing", description: "Tiered walls for driveways, slopes, and outdoor living areas." },
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
    overviewHeadline: "Built For",
    overviewHeadlineAccent: "Georgian Bay",
    metaTitle: "Waterfront Stone Work | Tiny Township & Wasaga Beach",
    metaDescription:
      "Waterfront stone construction, stairs, and shoreline work in Tiny Township, Wasaga Beach, Elmvale, and Collingwood. Built for wind, ice, and Georgian Bay exposure.",
    icon: Waves,
    heroAlt: "Waterfront stone stairs leading to the shoreline on Georgian Bay",
    overview: [
      "Waterfront stone has to work hard — safe stairs, solid retaining, and finishes that stand up to wind and ice.",
      "Our crews know Georgian Bay conditions: lake-effect wind, ice push, and grade movement through the seasons. We build accordingly.",
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
    gridCtaLabel: "See Landscaping",
    iconRowLabelLines: ["LANDSCAPING"],
    iconStripAccent: "var(--ent-icon-strip-landscape)",
    shortDescription:
      "Tiny Township landscaping that works with your stone, grade, and drainage.",
    overviewHeadline: "Outdoor Spaces That",
    overviewHeadlineAccent: "Fit Together",
    metaTitle: "Tiny Township Landscaping | Stuart Thomas Construction",
    metaDescription:
      "Landscaping and outdoor finishing in Tiny Township, Wasaga Beach, Elmvale, and Collingwood. Grading, beds, and hardscape integration for Simcoe County cottage country.",
    icon: Trees,
    heroAlt: "Landscaped property with stone and plantings",
    overview: [
      "Tiny Township landscaping that fits your property — proper grade, good drainage, and hardscape tied to stone and retaining work.",
      "We handle earthwork, stone, and finishing together so the yard reads as one complete outdoor space.",
    ],
    subServices: [
      { title: "Grading & drainage", description: "Slopes, swales, and drainage that protect structures and plantings — including terraces tied to retaining walls." },
      { title: "Beds & finishing", description: "Topsoil, edging, and detail work that complements stone and the home." },
      { title: "Outdoor living ties", description: "Patios, steps, and transitions connected to retaining and waterfront features." },
    ],
    process: [
      { title: "Plan review", description: "Review layout, access, and protection for existing features." },
      { title: "Earthwork", description: "Cut and fill, compaction, and drainage prep." },
      { title: "Hardscape coordination", description: "Stone, pavers, and structures installed in the right order." },
      { title: "Finish & establish", description: "Final grade, beds, and handoff ready for planting or use." },
    ],
    benefits: [
      "One contractor for stone and landscape structure",
      "Equipment access without unnecessary yard damage",
      "Finishing suited to cottage-country properties",
      "Local knowledge of Tiny Township soils and conditions",
    ],
    relatedSlugs: ["hardscaping", "armour-stone", "excavation"],
    faqs: [
      { q: "Do you do landscaping in Tiny Township?", a: "Yes — grading, beds, patios, and full outdoor finishing across Tiny Township, Elmvale, and the Tiny Beaches area." },
      { q: "Do you offer design services?", a: "We collaborate with your designer or architect and advise on what will build well on your site." },
      { q: "Can landscaping follow a major stone wall project?", a: "Yes — we often finish grades and beds after retaining walls are complete." },
    ],
  },
  {
    slug: "hardscaping",
    title: "Hardscaping",
    shortLabel: "Hardscaping",
    gridCtaLabel: "View Hardscaping",
    iconRowLabelLines: ["HARDSCAPING"],
    iconStripAccent: "var(--ent-icon-strip-hardscape)",
    shortDescription:
      "Patios, walkways, and steps built with a solid base and clean finishes.",
    overviewHeadline: "Surfaces Built To",
    overviewHeadlineAccent: "Last",
    metaTitle: "Hardscaping Contractor | Tiny Township & Collingwood",
    metaDescription:
      "Hardscaping in Tiny Township, Wasaga Beach, Elmvale, and Collingwood — patios, walkways, steps, and stone work built to last.",
    icon: LayoutGrid,
    heroAlt: "Stone patio and walkway detail",
    overview: [
      "Hardscaping is what you walk on every day. We build patios, walkways, and steps with the right base, drainage, and edge restraint.",
      "Every elevation change and joint line is planned so the surface feels solid and looks clean.",
    ],
    subServices: [
      { title: "Patios & terraces", description: "Natural stone and unit pavers with proper base and drainage." },
      { title: "Walkways & steps", description: "Safe transitions with consistent rise and run to driveways and entries." },
      { title: "Outdoor kitchens & fire features", description: "Pads, veneers, and stone work coordinated with other trades." },
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
      "Grading and site prep that sets up stone and landscaping to last.",
    overviewHeadline: "Solid Ground",
    overviewHeadlineAccent: "From The Start",
    metaTitle: "Excavation & Grading | Tiny Township Construction",
    metaDescription:
      "Excavation and grading in Tiny Township, Wasaga Beach, Midland, Penetanguishene, and Collingwood. Site prep for stone, landscaping, and commercial outdoor builds.",
    icon: Tractor,
    heroAlt: "Excavation and grading on a residential site",
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
      "Smooth handoff to our stone and landscape crews",
    ],
    relatedSlugs: ["armour-stone", "landscaping", "hardscaping"],
    faqs: [
      { q: "Do you handle small residential digs?", a: "Yes — from trench work to full lot grading for outdoor projects in Tiny Township, Wasaga Beach, and Elmvale." },
      { q: "Can excavation and stone be one contract?", a: "Yes. One contract reduces scheduling gaps and rework." },
      {
        q: "Do you excavate commercial sites in Midland or Penetanguishene?",
        a: "Yes — commercial grading and site prep in Midland, Penetanguishene, and surrounding Simcoe County corridors.",
      },
    ],
  },
  {
    slug: "commercial-snow-removal",
    title: "Commercial Snow Removal",
    shortLabel: "Snow Removal",
    gridCtaLabel: "Snow Services",
    iconRowLabelLines: ["SNOW REMOVAL"],
    iconStripAccent: "var(--ent-icon-strip-snow)",
    shortDescription:
      "Reliable commercial snow clearing across Tiny Township, Midland, and Simcoe County.",
    overviewHeadline: "Winter Access",
    overviewHeadlineAccent: "Kept Open",
    metaTitle: "Commercial Snow Removal | Midland, Penetanguishene & Wasaga Beach",
    metaDescription:
      "Commercial snow removal in Midland, Penetanguishene, Tiny Township, Wasaga Beach, and Collingwood. Seasonal contracts, salting, and loader service.",
    icon: Snowflake,
    heroAlt:
      "Stuart Thomas Construction commercial snow removal loader clearing snow in Midland, Ontario",
    overview: [
      "Winter service is a contract with clear expectations — trigger depths, response times, and a crew you can reach by phone.",
      "From retail frontages to multi-unit sites, we clear safely and keep access open across Midland, Penetanguishene, and our South Georgian Bay routes.",
    ],
    subServices: [
      { title: "Seasonal contracts", description: "Defined service levels, trigger depths, and priority response." },
      { title: "Salting & de-icing", description: "Application suited to surface type and traffic." },
      { title: "Loader & blower service", description: "Heavy accumulation management and pile relocation." },
    ],
    process: [
      { title: "Site audit", description: "Map lots, walks, loading zones, and hazard areas." },
      { title: "Contract & triggers", description: "Clear expectations for depth, timing, and communication." },
      { title: "Storm response", description: "Crew dispatch, clearing sequence, and documentation." },
      { title: "Post-storm review", description: "Touch-up passes and client confirmation." },
    ],
    benefits: [
      "Night and early-morning clearing",
      "Commercial-grade equipment on every route",
      "Local coverage across Midland, Penetanguishene, and South Georgian Bay",
      "Accountability you can reach by phone",
    ],
    relatedSlugs: ["excavation"],
    faqs: [
      {
        q: "What areas do you service in winter?",
        a: "Midland, Penetanguishene, Tiny Township, Wasaga Beach, Collingwood, Perkinsfield, and surrounding commercial corridors in Simcoe County.",
      },
      {
        q: "Do you serve commercial snow routes in Midland and Penetanguishene?",
        a: "Yes — seasonal contracts, salting, and loader clearing for business properties in Midland and Penetanguishene.",
      },
      { q: "When do contracts typically start?", a: "We finalize routes in fall — contact us early to secure a spot on the schedule." },
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
