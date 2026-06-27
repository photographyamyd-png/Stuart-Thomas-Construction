# Copy baseline snapshot

Frozen marketing copy captured **2026-06-27**, before the site-wide plain-language revision.

## Browse visually

Open `/copy-baseline` in dev or production for browsable mirrors of every marketing page.

| Live route | Baseline mirror |
|------------|-----------------|
| `/` | `/copy-baseline/home` |
| `/about` | `/copy-baseline/about` |
| `/services` | `/copy-baseline/services` |
| `/services/[slug]` | `/copy-baseline/services/[slug]` |
| `/projects` | `/copy-baseline/projects` |
| `/contact` | `/copy-baseline/contact` |
| `/areas` | `/copy-baseline/areas` |
| `/areas/[slug]` | `/copy-baseline/areas/[slug]` |
| `/materials/redi-rock` | (see live — data archived in this folder) |
| `/privacy`, `/terms` | (legal unchanged) |

Index hub: `/copy-baseline`

These routes are **noindex** and disallowed in `robots.txt`.

## Revert copy

1. Compare live page to its baseline mirror URL.
2. Copy fields from the matching file in this folder back into `src/data/`.
3. Restore inline strings from `inline-copy.ts` into live enterprise components.

Do not edit files in this folder after capture unless taking a new intentional snapshot.
