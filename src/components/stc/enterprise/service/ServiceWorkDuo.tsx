import Image from "next/image";
import Link from "next/link";
import { ServiceWorkDuoStage } from "./ServiceWorkDuoStage";

export type WorkDuoFrame = {
  src: string;
  alt: string;
  caption: string;
};

export type ServiceWorkDuoVariant = "overlap" | "filmstrip" | "stage";

export type ServiceWorkDuoContent = {
  eyebrow: string;
  headline: string;
  statement: string;
  frames: WorkDuoFrame[];
  ctaHref?: string;
  ctaLabel?: string;
  headingId?: string;
};

type Props = ServiceWorkDuoContent & {
  variant: ServiceWorkDuoVariant;
};

/** Three feature columns under the BuildStitch-style hero (reference clone). */
const FEATURES = [
  {
    title: "Shoreline Retention",
    body: "Armour stone walls built for ice, wave action, and Georgian Bay freeze–thaw.",
  },
  {
    title: "Stair Interfaces",
    body: "Finished stone stairs that tie cottage grade safely down to the water.",
  },
  {
    title: "Bay Craftsmanship",
    body: "Drainage-aware bases and stone work that holds up in Tiny Township winters.",
  },
] as const;

/**
 * Proof-of-work section.
 * Variant A clones the BuildStitch hero + features layout (STC colors/type only).
 */
export function ServiceWorkDuo({
  variant,
  eyebrow,
  headline,
  statement,
  frames,
  ctaHref = "/projects",
  ctaLabel = "Browse finished job photos",
  headingId,
}: Props) {
  const [primary, secondary] = frames;
  if (!primary) return null;

  if (variant === "stage") {
    return (
      <ServiceWorkDuoStage
        eyebrow={eyebrow}
        headline={headline}
        statement={statement}
        frames={frames.filter(Boolean)}
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
      />
    );
  }

  if (variant === "filmstrip") {
    /* Kept for compare only — not the selected direction */
    return (
      <div className="stc-work-proof stc-work-proof--rhythm">
        <header className="stc-work-proof__intro">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="text-display text-display--section">{headline}</h2>
          <p className="stc-work-proof__lede wf-type-supporting">{statement}</p>
        </header>
        <div className="stc-work-proof__band">
          <div className="stc-work-proof__band-primary">
            <Image src={primary.src} alt={primary.alt} fill sizes="70vw" className="object-cover" />
          </div>
          {secondary ? (
            <div className="stc-work-proof__band-secondary">
              <Image src={secondary.src} alt={secondary.alt} fill sizes="40vw" className="object-cover" />
            </div>
          ) : null}
          <div className="stc-work-proof__band-bar" aria-hidden />
        </div>
        <div className="stc-work-proof__bridge-panel">
          <div className="stc-work-proof__bridge-panel-head" aria-hidden />
          <ul className="stc-work-proof__scopes">
            {frames.map((frame, i) => (
              <li key={frame.caption} className="stc-work-proof__scope">
                <span className="stc-work-proof__scope-index" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="stc-work-proof__scope-title">{frame.caption}</p>
                  <p className="stc-work-proof__scope-note">{frame.alt}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href={ctaHref} className="btn-accent cta-inline">
            {ctaLabel}
          </Link>
        </div>
      </div>
    );
  }

  /* —— A: BuildStitch clone (STC brand) —— */
  return (
    <div className="stc-bs">
      {/* Hero — background photo + left copy + right subject + bridging card */}
      <div className="stc-bs__hero">
        <div className="stc-bs__bg">
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="stc-bs__scrim" aria-hidden />

        <div className="stc-bs__copy">
          <p className="stc-bs__eyebrow">{eyebrow}</p>
          <h2 id={headingId} className="stc-bs__headline">
            {headline}
          </h2>
          <p className="stc-bs__body">{statement}</p>
          <Link href={ctaHref} className="stc-bs__btn">
            {ctaLabel}
            <span aria-hidden>↗</span>
          </Link>
        </div>

        {secondary ? (
          <div className="stc-bs__cutout">
            <Image
              src={secondary.src}
              alt={secondary.alt}
              fill
              sizes="(min-width: 900px) 34vw, 70vw"
              className="object-cover"
            />
          </div>
        ) : null}

        <aside className="stc-bs__card">
          <div className="stc-bs__card-icon" aria-hidden>
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
              <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
              <path
                d="M14 25l6 6 14-14"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="stc-bs__card-stat">15+</p>
          <p className="stc-bs__card-label">Seasons on these shorelines</p>
          <p className="stc-bs__card-text">
            Armour stone and waterfront hardscape finished for Georgian Bay freeze–thaw — not stock
            catalogue looks.
          </p>
          <Link href={ctaHref} className="stc-bs__card-link">
            Let&apos;s work together →
          </Link>
        </aside>
      </div>

      {/* Features row — white band, 3 columns (reference clone) */}
      <div className="stc-bs__features">
        {FEATURES.map((f, i) => (
          <div key={f.title} className="stc-bs__feature">
            <div className="stc-bs__feature-icon" aria-hidden>
              {i === 0 ? (
                <svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M4 26V14l12-8 12 8v12H4z" />
                  <path d="M12 26v-8h8v8" />
                </svg>
              ) : i === 1 ? (
                <svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="16" cy="16" r="12" />
                  <path d="M10 16.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="11" cy="12" r="3.5" />
                  <circle cx="21" cy="12" r="3.5" />
                  <path d="M4 26c1.5-4 4.5-6 7-6s5.5 2 7 6" />
                  <path d="M14 26c1.5-4 4.5-6 7-6s5.5 2 7 6" />
                </svg>
              )}
            </div>
            <h3 className="stc-bs__feature-title">{f.title}</h3>
            <p className="stc-bs__feature-body">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
