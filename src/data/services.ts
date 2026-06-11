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
  /** Wireframe icon row — one or two lines under each service icon */
  iconRowLabelLines: string[];
  /** Tailwind text color class for homepage icon row */
  homeIconColor: string;
  shortDescription: string;
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
    iconRowLabelLines: ["ARMOUR", "STONE"],
    homeIconColor: "text-stc-dark-green",
    shortDescription:
      "Structural mass, engineered aesthetics, and freeze–thaw discipline for Georgian Bay country.",
    metaTitle: "Armour Stone & Retaining Walls | Tiny Township & Collingwood",
    metaDescription:
      "Premium armour stone and retaining wall construction in Tiny Township, Wasaga Beach, and Collingwood. Structural mass, clean lines, waterfront-capable detailing.",
    icon: Mountain,
    heroAlt: "Heavy armour stone wall with precise cap and drainage reveal",
    overview: [
      "Armour stone work is where geology meets structure. We build walls that read as permanent — correct batter, clean coursing, and drainage that survives Canadian winters.",
      "From lake-effect wind exposure to tight cottage access, we plan lifts, protection, and staging so the finished wall feels inevitable, not improvised.",
    ],
    subServices: [
      { title: "Structural retention & terracing", description: "Tiered walls, load distribution, and clean transitions for driveways and living spaces." },
      { title: "Waterfront-capable assemblies", description: "Shoreline dynamics, splash zones, and seasonal ice movement — detailed like infrastructure." },
      { title: "Finishing & detailing", description: "Caps, reveal lines, and interfaces where wall meets grade, deck, or stair." },
    ],
    process: [
      { title: "Site review", description: "Access, equipment pathing, drainage exits, and protection for existing features." },
      { title: "Excavation & base", description: "Structural base, drainage aggregate, and compaction to spec." },
      { title: "Stone placement", description: "Mass-first sequencing, interlock discipline, and constant checks on line and plane." },
      { title: "Final interface", description: "Top of wall meets landscape cleanly — ready for the next trade without rework." },
    ],
    benefits: [
      "Engineering-minded placement and drainage",
      "Equipment capability without yard damage",
      "Premium finishing that reads in photographs and in person",
      "Local experience across South Georgian Bay",
    ],
    relatedSlugs: ["waterfront-stone-work", "hardscaping", "excavation"],
    faqs: [
      { q: "Do you work on waterfront retaining walls in Tiny Township?", a: "Yes — shoreline sites are a core focus. We plan for ice, wind, and drainage realities common to Georgian Bay properties." },
      { q: "Can you coordinate with an engineer?", a: "Absolutely. We're accustomed to stamped drawings, inspection schedules, and spec-driven placement." },
    ],
  },
  {
    slug: "waterfront-stone-work",
    title: "Luxury Waterfront Stone Work",
    shortLabel: "Waterfront Stone",
    iconRowLabelLines: ["WATERFRONT", "STONE WORK"],
    homeIconColor: "text-stc-icon-waterfront",
    shortDescription:
      "Stone stairs, shoreline transitions, and durable waterfront detailing for cottage country.",
    metaTitle: "Luxury Waterfront Stone Work | Wasaga Beach & Tiny Township",
    metaDescription:
      "Waterfront stone construction, stairs, and shoreline transitions in Wasaga Beach, Tiny Township, and Collingwood. Built for wind, ice, and premium finishes.",
    icon: Waves,
    heroAlt: "Luxury waterfront stone staircase and retaining detail",
    overview: [
      "Waterfront stone is performance architecture. We integrate access, retention, and finish so the shoreline feels intentional from the waterline to the cottage door.",
      "Our crews understand Georgian Bay exposure — wind, ice push, and seasonal grade movement — and we detail accordingly.",
    ],
    subServices: [
      { title: "Stone stairs & access", description: "Safe, beautiful transitions from cottage to shoreline with correct rise/run and drainage." },
      { title: "Shoreline retention", description: "Mass walls and transitions that respect wave action and municipal setbacks." },
      { title: "Cottage interface work", description: "Patios, landings, and walls that tie hardscape to the home's architecture." },
    ],
    process: [
      { title: "Shoreline assessment", description: "Exposure, access, protection, and sequencing around seasonal water levels." },
      { title: "Structural prep", description: "Base, drainage, and geotextile where the assembly demands it." },
      { title: "Stone installation", description: "Placement, jointing strategy, and protection during construction." },
      { title: "Finish & handoff", description: "Clean lines, safe edges, and a site ready for landscape completion." },
    ],
    benefits: [
      "Waterfront-specific detailing and sequencing",
      "Premium finishes suited to luxury properties",
      "Coordination with docks, decks, and landscape trades",
      "Trusted across Tiny Township and Wasaga Beach",
    ],
    relatedSlugs: ["armour-stone", "hardscaping", "landscaping"],
    faqs: [
      { q: "Do you handle steep waterfront lots?", a: "Yes. Terracing, stairs, and retention are common on Georgian Bay slopes." },
      { q: "Can you match existing stone on a renovation?", a: "We work with you on colour, scale, and coursing to blend new work with existing features." },
    ],
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    shortLabel: "Landscaping",
    iconRowLabelLines: ["LANDSCAPING"],
    homeIconColor: "text-stc-icon-landscape",
    shortDescription:
      "Premium landscape construction integrated with stone, grade, and long-term site performance.",
    metaTitle: "Luxury Landscaping | Collingwood & South Georgian Bay",
    metaDescription:
      "High-end landscaping and outdoor structure integration in Collingwood, Tiny Township, and Wasaga Beach. Stone, grade, and finishing discipline.",
    icon: Trees,
    heroAlt: "Premium landscaped property with stone and plantings",
    overview: [
      "Our landscaping work is built for permanence — correct grade, thoughtful drainage, and hardscape integration that survives freeze–thaw cycles.",
      "We coordinate earthwork, stone, and finishing so the property reads as one composed outdoor environment.",
    ],
    subServices: [
      { title: "Site grading & drainage", description: "Positive drainage, swales, and interfaces that protect structures and plantings." },
      { title: "Planting beds & finishing", description: "Topsoil, edging, and detail work that complements stone and architecture." },
      { title: "Outdoor living integration", description: "Patios, steps, and transitions tied to retaining and waterfront features." },
    ],
    process: [
      { title: "Design alignment", description: "Review plans, access, and protection for existing features." },
      { title: "Earthwork", description: "Cut/fill, compaction, and drainage prep." },
      { title: "Hardscape coordination", description: "Stone, pavers, and structures installed in logical sequence." },
      { title: "Finish & establish", description: "Final grade, beds, and handoff ready for planting or occupancy." },
    ],
    benefits: [
      "Single contractor for stone and landscape structure",
      "Equipment access without unnecessary yard damage",
      "Finishing standards suited to luxury properties",
      "Local knowledge of cottage-country soils",
    ],
    relatedSlugs: ["hardscaping", "armour-stone", "excavation"],
    faqs: [
      { q: "Do you offer design services?", a: "We collaborate with your designer or architect and can advise on constructability and sequencing." },
      { q: "Can landscaping follow a major stone wall project?", a: "Yes — we often complete retention first, then finish grades and beds to match." },
    ],
  },
  {
    slug: "hardscaping",
    title: "Hardscaping",
    shortLabel: "Hardscaping",
    iconRowLabelLines: ["HARDSCAPING"],
    homeIconColor: "text-stc-icon-hardscape",
    shortDescription:
      "Patios, walkways, steps, and architectural stone assemblies with precision and durability.",
    metaTitle: "Hardscaping Contractor | Tiny Township & Collingwood",
    metaDescription:
      "Premium hardscaping — patios, walkways, steps, and stone assemblies — in Tiny Township, Wasaga Beach, and Collingwood.",
    icon: LayoutGrid,
    heroAlt: "Stone patio and walkway hardscaping detail",
    overview: [
      "Hardscaping is where daily use meets craft. We build patios, walkways, and steps with correct base, drainage, and edge restraint.",
      "Every joint line and elevation change is planned so the finished surface feels solid underfoot and clean in photographs.",
    ],
    subServices: [
      { title: "Patios & terraces", description: "Natural stone and architectural assemblies with proper base and drainage." },
      { title: "Walkways & steps", description: "Safe transitions, consistent rise/run, and interfaces to driveways and entries." },
      { title: "Outdoor kitchens & fire features", description: "Pads, veneers, and stone work coordinated with trades." },
    ],
    process: [
      { title: "Layout & grades", description: "Establish elevations, drainage direction, and edge conditions." },
      { title: "Base construction", description: "Excavation, aggregate, and compaction to performance standards." },
      { title: "Surface installation", description: "Stone or unit placement with alignment and joint discipline." },
      { title: "Detail & seal", description: "Edges, cuts, and protection before handoff." },
    ],
    benefits: [
      "Architectural precision on every plane and edge",
      "Integration with retaining and waterfront stone",
      "Durable assemblies for high-traffic outdoor living",
      "Trusted by luxury homeowners across the region",
    ],
    relatedSlugs: ["landscaping", "armour-stone", "waterfront-stone-work"],
    faqs: [
      { q: "What materials do you work with?", a: "Natural stone, armour stone caps, and premium unit pavers — selected for site conditions and aesthetics." },
      { q: "How long does a typical patio take?", a: "Timeline depends on access, size, and weather. We provide a clear schedule after site review." },
    ],
  },
  {
    slug: "excavation",
    title: "Excavation",
    shortLabel: "Excavation",
    iconRowLabelLines: ["EXCAVATION"],
    homeIconColor: "text-stc-icon-excavation",
    shortDescription:
      "Precision cuts, drainage-aware grading, and site-ready finishes for stone and landscape trades.",
    metaTitle: "Excavation & Grading | South Georgian Bay",
    metaDescription:
      "Excavation, grading, and site preparation in Tiny Township, Wasaga Beach, and Collingwood. Drainage-aware earthwork for premium outdoor projects.",
    icon: Tractor,
    heroAlt: "Excavation and grading on a residential site",
    overview: [
      "Excavation sets the truth for everything above grade. We cut and fill with drainage in mind, protect existing features, and leave sites ready for stone and landscape.",
      "Tight access is common in cottage country — our equipment mix handles both open lots and constrained waterfront approaches.",
    ],
    subServices: [
      { title: "Cut & fill grading", description: "Correct slopes, swales, and compaction for structural and landscape work." },
      { title: "Foundation & utility trenches", description: "Clean digs with protection for adjacent hardscape and structures." },
      { title: "Site clearing & prep", description: "Clearing, grubbing, and staging for the next phase of construction." },
    ],
    process: [
      { title: "Site walk & constraints", description: "Access, utilities, protection, and export/import planning." },
      { title: "Mobilization", description: "Equipment on site with matting and protection as required." },
      { title: "Earthwork", description: "Cuts, fills, and drainage per plan or field conditions." },
      { title: "Finish grade", description: "Ready for stone base, footings, or landscape installation." },
    ],
    benefits: [
      "Drainage-first grading philosophy",
      "Right-sized equipment for access constraints",
      "Clean sites that respect neighbouring properties",
      "Seamless handoff to our stone and landscape crews",
    ],
    relatedSlugs: ["armour-stone", "landscaping", "hardscaping"],
    faqs: [
      { q: "Do you handle small residential digs?", a: "Yes — from trench work to full lot grading for outdoor transformations." },
      { q: "Can excavation and stone be one contract?", a: "Absolutely. Single-point accountability reduces rework and scheduling gaps." },
    ],
  },
  {
    slug: "commercial-snow-removal",
    title: "Commercial Snow Removal",
    shortLabel: "Snow Removal",
    iconRowLabelLines: ["SNOW REMOVAL"],
    homeIconColor: "text-stc-icon-snow",
    shortDescription:
      "Reliable commercial routes, heavy equipment, and night-clear protocols for South Georgian Bay.",
    metaTitle: "Commercial Snow Removal | Tiny Township & Wasaga Beach",
    metaDescription:
      "Commercial snow removal and winter property maintenance in Tiny Township, Wasaga Beach, Collingwood, and surrounding areas.",
    icon: Snowflake,
    heroAlt: "Commercial snow removal equipment clearing a property",
    overview: [
      "Winter reliability is a contract, not a promise. We run commercial routes with defined trigger depths, equipment redundancy, and clear communication.",
      "From retail frontages to multi-unit sites, our crews prioritize safety, access, and liability-aware clearing.",
    ],
    subServices: [
      { title: "Seasonal contracts", description: "Defined service levels, trigger depths, and priority response." },
      { title: "Salting & de-icing", description: "Application protocols suited to surface type and traffic." },
      { title: "Loader & blower service", description: "Heavy accumulation management and pile relocation." },
    ],
    process: [
      { title: "Site audit", description: "Map lots, walks, loading zones, and hazard areas." },
      { title: "Contract & triggers", description: "Clear expectations for depth, timing, and communication." },
      { title: "Storm response", description: "Crew dispatch, clearing sequence, and documentation." },
      { title: "Post-storm review", description: "Touch-up passes and client confirmation." },
    ],
    benefits: [
      "Reliable night and early-morning clearing",
      "Commercial-grade equipment on every route",
      "Local coverage across South Georgian Bay",
      "Accountability you can reach by phone",
    ],
    relatedSlugs: ["excavation"],
    faqs: [
      { q: "What areas do you service in winter?", a: "Tiny Township, Wasaga Beach, Collingwood, Perkinsfield, and surrounding commercial corridors." },
      { q: "When do contracts typically start?", a: "We finalize routes in fall; contact us early to secure priority scheduling." },
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
