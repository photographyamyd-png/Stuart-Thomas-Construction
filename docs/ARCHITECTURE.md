# Site Architecture (v3 — Hybrid F Enterprise Authority)

**Canonical production design.** Hybrid F Enterprise Authority is the only live UI stack. Theme sandboxes and `design-export/` mockups were removed from the repo; they are not imported by Next.js at runtime.

Turner-inspired enterprise design. All marketing routes use `src/components/stc/enterprise/`.

## Component tree

```
src/components/stc/enterprise/
  chrome/     EnterpriseHeader, EnterpriseFooter, ConversionBar (layout)
  blocks/     TurnerHero, CommitmentsAccordion, ServiceOverlayGrid,
              EnterprisePageHero, EnterpriseCtaBand
  service/    EnterpriseServicePage, ServicePager
  EnterpriseHome.tsx
  EnterpriseServicesHub.tsx
  EnterpriseAboutPage.tsx
  EnterpriseProjectsPage.tsx
  EnterpriseAreasHub.tsx
  EnterpriseAreaPage.tsx
  EnterpriseContactForm.tsx
  EnterpriseLegalPage.tsx
  primitives.tsx (Wordmark, LinkArrow)
```

Styles: `src/styles/enterprise-tokens.css` (single dial — colors, fonts, spacing) + `src/styles/enterprise-authority.css` (imported via `globals.css`).

## Routes

| Route | Component |
|-------|-----------|
| `/` | `EnterpriseHome` |
| `/services` | `EnterpriseServicesHub` |
| `/services/[slug]` | `EnterpriseServicePage` + `ServicePager` |
| `/about` | `EnterpriseAboutPage` |
| `/projects` | `EnterpriseProjectsPage` |
| `/areas` | `EnterpriseAreasHub` |
| `/areas/[slug]` | `EnterpriseAreaPage` |
| `/contact` | `EnterpriseContactForm` band |
| `/privacy`, `/terms` | `EnterpriseLegalPage` |

## Rules

- Import UI only from `@/components/stc/enterprise/*` on marketing pages
- Do not use `LayeredSection`, `PageHero`, `CtaBanner`, or `PromoCard` on marketing routes
- Data: `src/data/services.ts`, `src/data/areas.ts`, `src/data/site.ts`, `src/data/legal.ts`
- SEO: `src/lib/seo.ts`, `sitemap.ts`, `robots.ts`, per-page metadata + JSON-LD breadcrumbs
- Contact form: `mailto:` until post-launch backend (see comment in `site.ts`)
