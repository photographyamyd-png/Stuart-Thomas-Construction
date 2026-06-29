# Google Business Profile — SEO Copy

Paste-ready copy for Stuart Thomas Construction GBP setup. Aligned with [services.ts](../src/data/services.ts), [areas.ts](../src/data/areas.ts), [geo.ts](../src/data/geo.ts), and [site.ts](../src/data/site.ts).

**Last verified:** Primary description trimmed to fit GBP 750-character limit.

---

## Setup checklist

- [ ] Paste **Primary business description** below into **Edit profile → Business description**
- [ ] Set **Primary category:** Landscaper or Masonry contractor (stone/wall focus → Masonry contractor)
- [ ] Add **Additional categories:** Excavating contractor, Snow removal service, Masonry contractor or Landscaper (whichever is not primary)
- [ ] Add all **7 custom services** below under **Edit profile → Services**
- [ ] Set **Service areas:** Tiny Township, Wasaga Beach, Elmvale, Midland, Penetanguishene, Collingwood, Perkinsfield, Simcoe County (+ South Georgian Bay if available)
- [ ] Fill dedicated fields for phone `(705) 727-7308` and website — do **not** put these in the description body
- [ ] Upload photos tagged to armour stone, waterfront, hardscape, excavation, and snow projects (include Midland snow loader photo)
- [ ] Replace placeholder social URLs in [site.ts](../src/data/site.ts) with real profiles before adding `sameAs` to schema
- [ ] Verify domain in Google Search Console; submit `https://www.stuartthomasconstruction.ca/sitemap.xml`
- [ ] Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in production env for Search Console HTML tag verification
- [ ] Solicit Google reviews from clients in each target town — mention service type and location in review text when natural

---

## Primary business description (750 / 750 chars)

```
Stuart Thomas Construction delivers landscaping, waterfront hardscaping, armour stone retaining walls, excavation, and commercial snow removal in Tiny Township, Wasaga Beach, Elmvale, Midland, Penetanguishene, Collingwood, and Simcoe County. We build waterfront stone stairs, shoreline retention, patios, walkways, and grading for Georgian Bay cottage country. We install natural armour stone and engineered Redi-Rock retaining systems with drainage-first earthwork for Ontario freeze-thaw cycles. Commercial snow removal includes salting, loader service, and reliable night-clear response for retail and multi-unit properties in Midland, Penetanguishene, and South Georgian Bay. One accountable team for stone, grade, landscape structure, and winter property maintenance.
```

### Alternate (680 chars — use if Google rejects primary length)

```
Stuart Thomas Construction serves Tiny Township, Wasaga Beach, Elmvale, Midland, Penetanguishene, Collingwood, and Simcoe County. We specialize in landscaping, waterfront hardscaping, armour stone retaining walls, excavation, grading, and commercial snow removal. From Georgian Bay shoreline stone stairs and retention to patios and site prep, our crews build drainage-first outdoor environments for cottage country properties. We install natural armour stone and Redi-Rock retaining systems. Winter commercial routes include salting and night-clear snow service in Midland, Penetanguishene, and the South Georgian Bay corridor.
```

---

## Tagline (optional field)

```
Landscaping, stone work, excavation & commercial snow — Tiny Township, Wasaga Beach, Elmvale, Midland & Penetanguishene.
```

---

## Custom services (7 entries)

Add under **Edit profile → Services**. Use **Add custom service** when Google's preset list does not match.

### 1. Landscaping

**Description:**

```
Landscape construction in Tiny Township, Wasaga Beach, Elmvale, and Collingwood — site grading, drainage, planting beds, and outdoor living integration tied to stone and hardscape. Built for Simcoe County and South Georgian Bay soils.
```

### 2. Waterfront hardscaping

**Description:**

```
Waterfront hardscaping and stone work on Georgian Bay — shoreline stairs, retention, patios, and cottage-to-water transitions in Tiny Township and Wasaga Beach. Engineered for wind, ice, and freeze-thaw exposure.
```

### 3. Hardscaping

**Description:**

```
Hardscaping contractor for Collingwood, Tiny Township, Wasaga Beach, and Elmvale — natural stone patios, walkways, steps, and assemblies with engineered base and drainage.
```

### 4. Armour stone & retaining walls

**Description:**

```
Structural armour stone and retaining wall construction across South Georgian Bay and Simcoe County. Terracing, waterfront-capable assemblies, caps, and drainage detailing for Tiny Township, Wasaga Beach, and Collingwood properties.
```

### 5. Excavation & grading

**Description:**

```
Excavation, cut-and-fill grading, and site preparation in Tiny Township, Wasaga Beach, Midland, Penetanguishene, and Collingwood. Drainage-first earthwork for stone, landscape, hardscape, and commercial site prep.
```

### 6. Redi-Rock installation

**Description:**

```
Redi-Rock retaining and freestanding wall installation in South Georgian Bay and Simcoe County. Engineered modular retention for slopes, shorelines, and terraced outdoor living — installed by STC, materials supplied by The Sarjeant Co.
```

### 7. Commercial snow removal

**Description:**

```
Commercial snow removal and winter property maintenance in Midland, Penetanguishene, Tiny Township, Wasaga Beach, Collingwood, and Perkinsfield. Seasonal contracts, salting, de-icing, loader service, and reliable night-clear response for business properties.
```

---

## Service areas

Select in GBP **Service areas** (or equivalent):

1. Tiny Township
2. Wasaga Beach
3. Elmvale
4. Midland
5. Penetanguishene
6. Collingwood
7. Perkinsfield
8. Simcoe County
9. South Georgian Bay (custom area, if available)

---

## Categories

| Role | Recommendation |
|------|----------------|
| **Primary** | Landscaper *(broad outdoor projects)* or Masonry contractor *(stone/retaining wall focus)* |
| **Additional** | Excavating contractor, Snow removal service, Masonry contractor or Landscaper (whichever is not primary) |

---

## Citations & NAP consistency

Use identical business information everywhere:

| Field | Value |
|-------|-------|
| **Name** | Stuart Thomas Construction |
| **Phone** | (705) 727-7308 |
| **Website** | https://www.stuartthomasconstruction.ca |
| **Service area** | Tiny Township, ON (no public street address required for service-area businesses) |

Recommended citation sources: Facebook, Instagram, HomeStars, local chambers (Midland, Penetanguishene, Wasaga Beach), BBB, and industry directories. Match the website URL exactly (www subdomain).

---

## Do not include in description body

- Phone number or website URL (use dedicated GBP fields)
- Promotional claims ("best," "#1," "lowest prices")
- "We sell Redi-Rock" — positioning is **installation**; materials supplied by The Sarjeant Co.

---

## Post-publish verification

1. Description shows Tiny Township, Wasaga Beach, Elmvale, Midland, and Penetanguishene without truncation.
2. Each custom service lists at least one geo name.
3. Primary category matches top lead source (Landscaper vs Masonry contractor).
4. Photos represent armour stone, waterfront, hardscape, excavation, and snow work.
5. Search Console shows impressions for geo-modified queries within 4–8 weeks of indexing.

---

## Search Console monitoring queries

Track monthly:

- `construction tiny township`
- `landscaping wasaga beach`
- `landscaping elmvale`
- `commercial snow removal midland`
- `excavation penetanguishene`
- `stuart thomas construction`
