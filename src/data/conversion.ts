export const conversion = {
  hero: {
    eyebrow: "Wasaga Beach & Tiny Township",
    headline: "Armour Stone & Hardscaping",
    headlineAccent: "for Georgian Bay",
    lead:
      "Shoreline retaining walls and outdoor hardscaping for Tiny Township and Wasaga Beach cottages — built for ice, freeze-thaw, and drainage. Not lawn care.",
    pathfinderLabel: "Request a Site Consultation",
  },
  homeCta: {
    eyebrow: "Talk to us",
    headline: "Questions about your property?",
    subline: "Free site visit. Itemized quote. We call back within one business day.",
    button: "Request a Site Consultation",
  },
  serviceCta: {
    headline: "Book a free site visit",
    subline: "Call with your location, timeline, and scope. We call back within one business day.",
    button: "Request a Site Consultation",
  },
  contactIntro:
    "Free site visit on your Tiny Township or Wasaga Beach property. Itemized quote: materials, labour, equipment, timeline — not a ballpark number.",
} as const;

export const trustBar = [
  "Licensed & Insured",
  "WSIB Covered",
  "15+ Seasons on the Bay",
] as const;

export const problemSection = {
  fail: {
    eyebrow: "Why Shoreline Walls Fail",
    headline: "Georgian Bay winters",
    headlineAccent: "expose weak builds",
    items: [
      {
        title: "Freeze-thaw heave",
        body: "Improperly set stone lifts after one winter. Most failures start below grade.",
      },
      {
        title: "Wave undercut",
        body: "Fetch and water-level swings erase walls that weren't designed for exposure.",
      },
      {
        title: "Misgraded drainage",
        body: "Sloped lots push water to the bay — or into the foundation. Both matter.",
      },
      {
        title: "Garden-wall methods",
        body: "Subdivision wall detail on a shoreline. Those walls rarely last a few Bay winters.",
      },
    ],
  },
  hold: {
    eyebrow: "How We Build It",
    headline: "Base, drainage,",
    headlineAccent: "then armour stone",
    items: [
      {
        title: "Engineered base",
        body: "Structural base, drainage aggregate, and compaction — verified before stone goes down.",
      },
      {
        title: "Drainage designed in",
        body: "Water management built into every wall and grade change, not patched later.",
      },
      {
        title: "Stone set as structure",
        body: "Largest stones first, fit and alignment checked. No guessing.",
      },
      {
        title: "One crew, dig to set",
        body: "Same team from excavation to final stone — no rotating handoffs.",
      },
    ],
  },
} as const;

export const processIntro =
  "From the first site walk to final stone — one crew, an itemized quote, and a clear schedule." as const;

export const processSteps = [
  { id: "1", label: "Site Walk", title: "We Assess Before We Quote", body: "We walk your property, assess access, drainage, exposure, and protection for existing features — before any number is discussed." },
  { id: "2", label: "Design & Quote", title: "Itemized, Not a Ballpark", body: "You receive a detailed, itemized quote — materials, labour, equipment, timeline. No surprises buried in a lump sum." },
  { id: "3", label: "Build", title: "Start to Finish Without Handoffs", body: "You deal with us from dig to final stone — not a rotating list of subcontractors." },
  { id: "4", label: "Walkthrough", title: "Done When You Say It's Done", body: "We walk the finished site with you. Completion isn't declared until you agree it's right." },
] as const;

export const servicesGridIntro =
  "Armour stone, excavation, hardscaping, and landscaping for shoreline lots — built as structure, not decoration." as const;

export const homepageFaq = [
  { q: "Do you work on waterfront properties?", a: "Waterfront is our core work. Shoreline retaining walls, waterfront stairs, and erosion control on Georgian Bay properties make up the majority of our projects." },
  { q: "Can you help with drainage and grading?", a: "Yes. Every project starts with drainage planning. We grade and manage water flow before any stone or hardscaping goes in — it's what prevents failures down the line." },
  { q: "Do you handle both design and installation?", a: "We do. You deal with us from dig to final stone — not a rotating list of subcontractors — so there's no gap between what's drawn and what gets built." },
  { q: "What kinds of stone and materials do you use?", a: "Primarily natural armour stone and flagstone sourced regionally. We also install Redi-Rock engineered retaining systems supplied by The Sarjeant Co. when drawings call for it." },
  { q: "Do you take on smaller upgrades, or only full projects?", a: "Both. We handle single-wall repairs and patio additions as well as full-property builds. The site walk determines scope — there's no minimum." },
  { q: "What's the typical timeline for a project?", a: "Most single walls finish in a couple of weeks; bigger waterfront jobs often take 1–2 months — we put a schedule on the quote." },
  { q: "Do you handle permits for waterfront work?", a: "We advise on what permits shoreline work requires in your township and can coordinate with the municipality, but the property owner is ultimately the applicant. We'll walk you through it." },
] as const;
