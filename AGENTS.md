<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Production UI (Hybrid F Enterprise Authority)

All marketing UI lives in `src/components/stc/enterprise/`. See `docs/ARCHITECTURE.md`.

**Typography on enterprise pages:** Use distinct levels — eyebrow (L1), display headline (L2), statement (L3), optional feature labels (L4), supporting body (L5), short CTA (L6). Classes: `eyebrow`, `text-display`, `lead`, `wf-type-supporting` where applicable in `enterprise-authority.css`.

**Forbidden:** Headline + paragraph + button only; keyword middot lines as sole description; identical weight/color across levels.

**Surfaces:** Band and control backgrounds use `--ent-band-dark`, `--ent-band-light`, or `--ent-band-green` only. No beige or gold section fills (`turner-band--beige`, `bg-stc-beige`, gold CTA fills). Gold/beige are accent colors (eyebrows, `text-accent-gold`, borders, 1–4px seams).

**Data:** `src/data/services.ts`, `src/data/media.ts`, `src/data/enterprise.ts`, `src/data/site.ts`.

**After CSS edits:** `npm run build` to verify.
