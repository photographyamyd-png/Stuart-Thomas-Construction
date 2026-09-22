# Site Architecture (v3 — Hybrid F Enterprise Authority)

**Canonical production design.** Hybrid F Enterprise Authority is the only live UI stack. Theme sandboxes and `design-export/` mockups were removed from the repo; they are not imported by Next.js at runtime.

Turner-inspired enterprise design. All marketing routes use `src/components/stc/enterprise/`.

## Component tree

```
src/components/stc/enterprise/
  chrome/     EnterpriseHeader, EnterpriseFooter, ConversionBar (layout)
  blocks/     AppealTurnerHero, CommitmentsAccordion, ServiceOverlayGrid,
              EnterprisePageHero, EnterpriseCtaBand
  service/    EnterpriseServicePage, SnowLandingClient / SnowTestPremiumPage (private previews), ServicePager
  EnterpriseHomeAppeal.tsx   ← live homepage
  EnterpriseHome.tsx         ← compare snapshot (`/design/landing-current`)
  EnterpriseServicesHub.tsx
  EnterpriseAboutPage.tsx
  EnterpriseProjectsPage.tsx
  EnterpriseAreasHub.tsx
  EnterpriseAreaPage.tsx
  EnterpriseContactForm.tsx
  EnterpriseLegalPage.tsx
  primitives.tsx (Wordmark, LinkArrow)
```

Styles: `src/styles/enterprise-tokens.css` (single dial — colors, fonts, spacing) + `src/styles/enterprise-authority.css` + `src/styles/landing-appeal.css` + `src/styles/snow-landing-condensed.css` + `src/styles/snow-test-premium.css` (imported via `globals.css`).

## Routes

| Route | Component |
|-------|-----------|
| `/` | `EnterpriseHomeAppeal` |
| `/services` | `EnterpriseServicesHub` |
| `/services/[slug]` | `EnterpriseServicePage` + `ServicePager` |
| `/preview-3012` | `SnowTestPremiumPage` (private client preview; noindex; owns sticky chrome; not in nav/sitemap) |
| `/preview-3013` | `SnowLandingClient` (private client preview; noindex; owns sticky chrome; not in nav/sitemap) |
| `/preview-3014` | private snow preview (noindex; owns sticky chrome) |
| `/preview-3015` | private snow preview (noindex; owns sticky chrome) |
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
- Contact form: POST `/api/contact` via Resend (`RESEND_API_KEY`); owner email never shown in UI
  - Without a verified Resend domain, `CONTACT_TO_EMAIL` must be the Resend account email (free-tier testing limit on `onboarding@resend.dev`)
