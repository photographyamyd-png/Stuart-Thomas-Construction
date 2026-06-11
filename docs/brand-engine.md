# Stuart Thomas Construction — Brand Engine

## Color tokens (CSS variables)

| Token | Hex | Tailwind |
|-------|-----|----------|
| Black | `#1A1A1A` | `stc-black` |
| White | `#FFFFFF` | `stc-white` |
| Armour Stone Green | `#2D5A27` | `stc-green` |
| Waterfront Beige | `#D9CDBF` | `stc-beige` |
| Quarry Gold | `#B08D57` | `stc-gold` |
| Copper (CTA active only) | `#B87333` | `--stc-copper` |

## Typography

| Role | Font | Utilities |
|------|------|-----------|
| Primary headlines | Poppins | `.text-display`, `.text-display-lg` |
| Utility / cards / stats / nav | Oswald | `.text-utility`, `.text-stat`, `.font-utility` |
| Body | Open Sans | `.font-body` |
| Eyebrow labels | — | `.label-stamp` |

## Layout primitives

- **`LayeredSection`** — 3 layers: `background`, `panel`, children (z-2).
- **`QuadrantGrid`** — 2×2 promotional grid (copy / image / metric).
- **`ServiceCard`** — Bordered service cell (`grid` | `compact` | `immersive`).
- **`BrandStamp`** — Round monogram frame for header.
- **Button `variant="stc"`** — Gold-framed marketing CTA.

## Assets

Place brand files in `public/brand/`:

- `logo.svg` — Full wordmark
- `logo-icon.svg` — Round monogram (STC stamp)

Replace SVG placeholders with final brand artwork when available.
