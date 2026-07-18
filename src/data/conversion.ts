export const conversion = {
  hero: {
    eyebrow: "Wasaga Beach & Tiny Township",
    headline: "Armour Stone &",
    headlineAccent: "Waterfront Hardscaping",
    lead:
      "Shoreline retaining walls, waterfront stairs, and full outdoor builds engineered for Georgian Bay freeze-thaw, erosion, and drainage. Not lawn care — heavy hardscaping for waterfront properties.",
    pathfinderLabel: "Request a Site Consultation",
  },
  homeCta: {
    eyebrow: "Get In Touch",
    headline: "Tell us about your property",
    contactLink: "Contact us today",
    subline: "Free site consultation. Itemized quote. No lump-sum guessing.",
    button: "Request a Site Consultation",
  },
  serviceCta: {
    headline: "Let's talk about your site",
    subline: "Share your property location, timeline, and goals. We call back within one business day.",
    button: "Request a Site Consultation",
  },
  contactIntro:
    "Free site consultation for waterfront retaining walls, armour stone, hardscaping, excavation, and grading across Wasaga Beach, Tiny Township, and South Georgian Bay. You get an itemized quote — materials, labour, equipment, timeline — not a ballpark number.",
} as const;

export const trustBar = [
  "Licensed & Insured",
  "WSIB Covered",
  "15+ Seasons on the Bay",
] as const;

export const problemSection = {
  eyebrow: "Why Waterfront Work Is Different",
  headline: "Your Shoreline Is Not a Subdivision Lot",
  problems: [
    { title: "Freeze-Thaw Cycles", body: "Improperly-set stone heaves after one Georgian Bay winter. Most failures start below grade." },
    { title: "Shoreline Erosion", body: "Wave action and seasonal water level changes undermine walls that weren't designed for exposure." },
    { title: "Waterfront Drainage", body: "Sloped lots drain toward the water — or toward your foundation. Grading has to account for both." },
    { title: "Shortcut Construction", body: "Contractors who build shoreline walls the same way they'd build a subdivision garden wall. It fails within five years." },
  ],
  solutionEyebrow: "How We Build Differently",
  solutions: [
    { title: "Engineered Base Prep", body: "Structural base, drainage aggregate, and compaction — verified before a single stone is placed." },
    { title: "Drainage-First Planning", body: "Water management designed into every wall and grade change, not patched after the fact." },
    { title: "Correctly Set Armour Stone", body: "Largest stones placed first, checked for fit and alignment. No guessing, no shortcuts." },
    { title: "One Crew, Start to Finish", body: "The same team from excavation through final walkthrough. No rotating subcontractors." },
  ],
} as const;

export const processSteps = [
  { id: "1", label: "Site Walk", title: "We Assess Before We Quote", body: "We walk your property, assess access, drainage, exposure, and protection for existing features — before any number is discussed." },
  { id: "2", label: "Design & Quote", title: "Itemized, Not a Ballpark", body: "You receive a detailed, itemized quote — materials, labour, equipment, timeline. No surprises buried in a lump sum." },
  { id: "3", label: "Build", title: "Same Crew Throughout", body: "One team on your property from excavation through stone placement and finishing. No handoffs to subcontractors you haven't met." },
  { id: "4", label: "Walkthrough", title: "Done When You Say It's Done", body: "We walk the finished site with you. Completion isn't declared until you agree it's right." },
] as const;

export const homepageFaq = [
  { q: "Do you work on waterfront properties?", a: "Waterfront is our core work. Shoreline retaining walls, waterfront stairs, and erosion control on Georgian Bay properties make up the majority of our projects." },
  { q: "Can you help with drainage and grading?", a: "Yes. Every project starts with drainage planning. We grade and manage water flow before any stone or hardscaping goes in — it's what prevents failures down the line." },
  { q: "Do you handle both design and installation?", a: "We do. One team plans and builds your project, so there's no gap between what's drawn and what gets built on your property." },
  { q: "What kinds of stone and materials do you use?", a: "Primarily natural armour stone and flagstone sourced regionally. We also install Redi-Rock engineered retaining systems supplied by The Sarjeant Co. when drawings call for it." },
  { q: "Do you take on smaller upgrades, or only full projects?", a: "Both. We handle single-wall repairs and patio additions as well as full-property builds. The site walk determines scope — there's no minimum." },
  { q: "What's the typical timeline for a project?", a: "A single retaining wall is typically 1-2 weeks. A full waterfront build with excavation, walls, and hardscaping runs 4-8 weeks depending on access, weather, and scope. We give you a timeline at quoting." },
  { q: "Do you handle permits for waterfront work?", a: "We advise on what permits shoreline work requires in your township and can coordinate with the municipality, but the property owner is ultimately the applicant. We'll walk you through it." },
] as const;
