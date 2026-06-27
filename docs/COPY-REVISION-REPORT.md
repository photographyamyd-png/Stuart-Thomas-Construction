# Site Copy Language Revision — Full Report

**Completed:** 2026-06-27  
**Voice direction:** Plain, local cottage-country language (Grade 8–10 reading level)  
**Baseline archive (pre-revision):** `/copy-baseline` and `src/data/archive/copy-baseline/`

---

## SEO keywords and location language retained

### Primary keywords (woven into meta, body, schema, and alt text)

| Keyword / phrase | Where used |
|------------------|------------|
| **Tiny Township construction** | Homepage meta, about meta, excavation meta, contact meta, about body, enterprise showcase, schema `knowsAbout` |
| **Tiny Township landscaping** | Landscaping service title/meta/overview/FAQ, areas hub, Tiny Township area page, schema `knowsAbout` |
| **Armour stone / retaining walls** | All service pages, gallery alts, Redi-Rock compare |
| **Waterfront stone work** | Service rename + meta, conversion hero, contact intro |
| **Hardscaping / excavation / snow removal** | Service metas, contact intro, projects meta |

### Location language retained or added

| Location | Usage |
|----------|--------|
| **Tiny Township** | Primary geo — hero eyebrow, site description, area page H1, regional band, testimonial attribution, schema `areaServed`, gallery/OG alts |
| **Wasaga Beach** | Service metas, area page, regional lists, schema |
| **Collingwood** | Service metas, area page, regional lists, schema |
| **South Georgian Bay** | Hero, services hub, projects, schema, gallery alts (default area) |
| **Perkinsfield** | Homepage regional band (new), areas hub, schema |
| **Balm Beach, Thunder Beach** | Homepage regional band (new micro-locations) |
| **Georgian Bay** | Featured project, armour/waterfront copy, freeze-thaw context |
| **Tiny Beaches area** | Landscaping FAQ (new) |
| **Blue Mountain country** | Collingwood area meta |

### Words removed site-wide (live copy)

`premium`, `luxury`, `extraordinary`, `calibre`, `estates`, `assemblies` (most instances), `unyielding`, `industrial capability`, `architectural precision`, `accountable team`, `discipline` (as brand adjective), `elevate estates`, `performance architecture`

---

## Page-by-page: previous → new language

### Global (`site.ts`, `conversion.ts`, layout schema)

| Element | Previous | New |
|---------|----------|-----|
| `site.description` | "Premium armour stone, luxury waterfront stone work…" | "Armour stone, waterfront stone work, landscaping… for **Tiny Township**, Wasaga Beach, Collingwood, and South Georgian Bay." |
| Homepage `<title>` | `LANDSCAPE. BUILD. ELEVATE. \| Premium Construction` | `Tiny Township Construction & Landscaping \| Stuart Thomas Construction` |
| Hero eyebrow | South Georgian Bay | **Tiny Township & South Georgian Bay** |
| Hero lead | "Premium armour stone, waterfront assemblies… Muskoka and South Georgian Bay" | "Armour stone, waterfront stone work, and full outdoor builds across **Tiny Township** and South Georgian Bay — from grading to finished stone." |
| Home CTA headline | "Ready to build something extraordinary?" | "Ready to talk about your project?" |
| Home CTA subline | "Tell us about your property — call for clear next steps." | "Tell us where the property is and what you're thinking — even a rough idea is enough to start." |
| Service CTA headline | "Let's scope your project" | "Let's talk about your site" |
| Contact intro | Service list only | "**Tiny Township construction and landscaping** — armour stone, waterfront work…" |
| LocalBusiness schema | 3 areas | 5 areas + `knowsAbout` with Tiny Township construction/landscaping |
| OG image alt | Site name only | Site name + "Tiny Township construction and landscaping, South Georgian Bay" |

---

### Homepage (`/`)

| Section | Previous | New |
|---------|----------|-----|
| Pathfinder — Services | "Six disciplines… one accountable team on site" | "Six services, one crew — excavation, stone, landscaping, and snow removal." |
| Pathfinder — About | "builds engineered to last" | "Twenty years of honest work on local properties." |
| Featured project | "Luxury armour stone retaining… engineered for wave action… generations" | "Armour stone retaining wall on Georgian Bay — built for wind, ice push, and winter freeze-thaw." |
| Insight cards | "Engineered Retaining Installation", "Full-Site Prep Wrapped" | "Retaining Wall Installed", "Site Grading Complete" (plain descriptions) |
| Showcase headline | "Custom Homes & Estates" | "**From Grade To Finish**" |
| Showcase body | "Full-site excavation… Muskoka and South Georgian Bay" | "**Tiny Township construction and landscaping**… South Georgian Bay" |
| Built-strong band | "waterfront assemblies… discipline and honesty" | "Armour stone, waterfront steps… straight talk from quote to finish." |
| Regional eyebrow | Muskoka & South Georgian Bay | **Tiny Township & South Georgian Bay** |
| Regional body | "elevate estates… neighbours can trust… Muskoka" | Retaining walls, patios, waterfront stone — **Balm Beach, Thunder Beach, Perkinsfield** named |
| Commitments (sample) | "Built To Last Generations", "Disciplined Sites", "Rooted In Muskoka" | "Built For Real Winters", "Safe, Organized Job Sites", "**Rooted In Tiny Township**" |

---

### About (`/about`)

| Element | Previous | New |
|---------|----------|-----|
| Meta description | "premium stone, waterfront…" | "**Tiny Township construction and landscaping since 2004**" |
| Hero title | "Built On Integrity. Engineered To Last." | "Built On Integrity. **Built To Last.**" |
| Hero description | "luxury waterfront assemblies… equipment discipline and architectural finishing" | Plain service list + "clear communication and careful work" |
| Our Story | Repeated jargon; "unyielding capability" | "**Tiny Township construction company**… grading, stone, landscaping, snow routes" |
| Regional band | "elevate estates… Muskoka" | "Shoreline walls, patios, and landscaping… Georgian Bay winters" |

---

### Services hub (`/services`)

| Element | Previous | New |
|---------|----------|-----|
| Meta | "luxury waterfront stone work…" | "**Construction and landscaping in Tiny Township**, Wasaga Beach, Collingwood…" |
| Hero title | "Six Disciplines. One Accountable Team." | "**Six Services. One Crew.**" |
| Hero description | "Industrial capability meets architectural precision… waterfront assemblies" | Plain service list + "**Tiny Township** and South Georgian Bay" |
| Explore copy | "Select a discipline above…" | "Pick a service above for details, photos, and common questions." |
| Grid header | "Six Disciplines. One Team." | "**Our Services. One Crew.**" |

---

### Armour Stone (`/services/armour-stone`)

| Element | Previous | New |
|---------|----------|-----|
| Short description | "Structural mass, engineered aesthetics, and freeze–thaw discipline" | "Retaining walls and stone work built for Georgian Bay winters" |
| Meta title | (had Tiny Township) | "**Armour Stone & Retaining Walls \| Tiny Township Construction**" |
| Overview | "geology meets structure… batter, coursing… reads as permanent" | "Walls that look right and stay put — proper drainage, solid base, freeze-thaw" |
| Benefits | "Engineering-minded placement", "Premium finishing" | "Drainage and base work done properly", "Clean finishing" |

---

### Waterfront Stone Work (`/services/waterfront-stone-work`)

| Element | Previous | New |
|---------|----------|-----|
| **Title** | **Luxury Waterfront Stone Work** | **Waterfront Stone Work** |
| Overview opener | "Waterfront stone is performance architecture" | "Waterfront stone has to work hard — safe stairs, solid retaining…" |
| Meta | "Luxury… premium finishes" | "**Tiny Township & Wasaga Beach**… wind, ice, Georgian Bay exposure" |
| Benefits | "Premium finishes suited to luxury properties" | "Clean finishes that look good from the water and from the cottage" |

---

### Landscaping (`/services/landscaping`) — priority SEO page

| Element | Previous | New |
|---------|----------|-----|
| Meta title | "Luxury Landscaping \| Collingwood & South Georgian Bay" | "**Tiny Township Landscaping \| Stuart Thomas Construction**" |
| Short description | "Premium landscape construction integrated with stone…" | "**Tiny Township landscaping** that works with your stone, grade, and drainage" |
| Overview | "built for permanence… composed outdoor environment" | "**Tiny Township landscaping** that fits your property — proper grade, good drainage" |
| New FAQ | — | "Do you do landscaping in Tiny Township?" → Yes, including **Tiny Beaches area** |

---

### Hardscaping, Excavation, Snow Removal

| Service | Key change |
|---------|------------|
| Hardscaping | Removed "architectural precision", "premium hardscaping", "luxury homeowners" → plain patios/walkways language; meta keeps **Tiny Township & Collingwood** |
| Excavation | "Precision cuts… premium outdoor projects" → "Grading and site prep that sets up stone and landscaping"; meta **Tiny Township Construction** |
| Snow Removal | "Winter reliability is a contract, not a promise" softened; kept **Tiny Township & Wasaga Beach** in meta and FAQ |

---

### Areas

| Page | Previous headline / intro | New |
|------|---------------------------|-----|
| Hub | Lists towns only | Adds "**Tiny Township construction and landscaping**" in description |
| **Tiny Township** | "Premium outdoor construction… waterfront assemblies… equipment discipline" | "**Tiny Township construction and landscaping**" + shoreline, sandy lots, tight access, **Balm Beach, Thunder Beach, Perkinsfield, Lafontaine** |
| Wasaga Beach | "Luxury hardscaping… industrial capability and architectural precision" | Coastal wind/sand; plain "full outdoor scope" |
| Collingwood | "Luxury outdoor builds… calibre of the home… upscale patios" | Sloped escarpment lots; one crew for grade + stone + landscape |

**Schema added:** `Place` JSON-LD on each area page via `buildAreaJsonLd()`.

---

### Projects (`/projects`)

| Element | Previous | New |
|---------|----------|-----|
| Meta + hero | No Tiny Township | "**Tiny Township construction and landscaping** projects… South Georgian Bay" |
| Gallery alt pattern | "Stuart Thomas Construction — {title}" | "{Service type} in **Tiny Township** or **South Georgian Bay** — {title}" |

---

### Contact (`/contact`)

| Element | Previous | New |
|---------|----------|-----|
| Meta title | "Contact & Request a Quote" | "Contact & Request a Quote \| **Tiny Township Construction**" |
| Body | `conversion.contactIntro` (updated globally) | Includes Tiny Township construction and landscaping |
| Form copy | "site conditions" | "We serve **Tiny Township**, Wasaga Beach, Collingwood, and surrounding areas." |

---

### Redi-Rock (`/materials/redi-rock`)

| Element | Previous | New |
|---------|----------|-----|
| Meta description | South Georgian Bay only | "**Tiny Township** and South Georgian Bay" + install/supplier split |
| Hero body | "engineered… structural grade changes" | Plain install scope + **Tiny Township** |
| Compare taglines | "Geological mass, hand-placed permanence" / "Modular precision, engineer-ready specs" | "Natural stone, placed by hand" / "Modular blocks, engineer-friendly" |
| CTA subline | "waterfront interfaces, or engineered wall requirements" | "waterfront work, or retaining wall requirements" |
| Related services | "Georgian Bay country", "architectural stone assemblies" | "**South Georgian Bay and Tiny Township**", plain hardscaping |

---

### Header / footer / global chrome

| Element | Previous | New |
|---------|----------|-----|
| Company blurb | "Premium outdoor construction… waterfront assemblies…" | "Outdoor construction… from our base in **Tiny Township**" |
| Mega-menu projects | "Georgian Bay Assembly", "Estate Retaining Wall", "Muskoka estate build" | "Georgian Bay Shoreline", "Armour Stone Retaining Wall", Georgian Bay shoreline copy |
| Capability strip | "Built With Discipline. Finished Right." | "**Built Carefully. Finished Right.**" |
| Conversion bar | Uses updated `homeCta.headline` | "Ready to talk about your project?" |

---

## Metadata, schema, and alt text updates (this pass)

| Asset | Change |
|-------|--------|
| `src/lib/seo.ts` | Expanded `areaServed`, added `knowsAbout`, richer OG alt, new `buildAreaJsonLd()` |
| `src/components/seo/JsonLd.tsx` | Inherits updated LocalBusiness + WebSite descriptions from `site.description` |
| `src/data/gallery.server.ts` | Category- and location-aware gallery `alt` text |
| `src/data/media.ts` | Armour stone showcase statement/alts; default OG image = `stc-tiny-township-landscaping.jpg` |
| `src/app/(marketing)/areas/[slug]/page.tsx` | Place schema per area |
| `src/app/(marketing)/contact/page.tsx` | Title includes Tiny Township Construction |
| `src/app/robots.ts` | Disallow `/copy-baseline/` (baseline archive) |

---

## Baseline archive (revert reference)

| Resource | Purpose |
|----------|---------|
| `/copy-baseline` | Index hub linking to all pre-revision page mirrors |
| `/copy-baseline/home` | Homepage as it read before revision |
| `src/data/archive/copy-baseline/` | Frozen data files — copy fields back to live `src/data/` to revert text |

---

## Files changed (live revision)

- **Data:** `site.ts`, `conversion.ts`, `enterprise.ts`, `services.ts`, `areas.ts`, `redi-rock.ts`, `media.ts`, `gallery.server.ts`
- **SEO:** `lib/seo.ts`, page metadata in `app/(marketing)/*/page.tsx`, `robots.ts`
- **Components:** `EnterpriseHome`, `EnterpriseAboutPage`, `EnterpriseServicesHub`, `EnterpriseHeader`, `EnterpriseProjectsPage`, `EnterpriseContactForm`, `EnterpriseRediRockPage`, `RediRockHero`, `CapabilityFeatureStrip`, `ServiceOverlayGrid`, `EnterpriseServicePage`
- **Archive (new):** `src/data/archive/copy-baseline/`, `src/app/(preview)/copy-baseline/`, `src/components/stc/enterprise/baseline/`
