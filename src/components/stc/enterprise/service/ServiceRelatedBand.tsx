import Link from "next/link";
import { areas } from "@/data/areas";
import { getServiceBySlug, type ServiceSlug } from "@/data/services";

type Props = {
  relatedSlugs: ServiceSlug[];
  showRediRock?: boolean;
  /** Kept for call-site compat; composition owns surfaces. */
  band?: "dark" | "light";
};

type PathItem = {
  key: string;
  href: string;
  title: string;
  body: string;
  cta: string;
};

/**
 * Related pathfinder — BuildStitch grammar:
 * dark lead + one overlapping white “next step” card + open features for the rest
 * (not equal boxed cards) + areas features row.
 */
export function ServiceRelatedBand({ relatedSlugs, showRediRock = false }: Props) {
  const items: PathItem[] = relatedSlugs.flatMap((rel) => {
    const r = getServiceBySlug(rel);
    if (!r) return [];
    return [
      {
        key: rel,
        href: `/services/${rel}`,
        title: r.title,
        body: r.shortDescription,
        cta: "Request a quote",
      },
    ];
  });

  if (showRediRock) {
    items.push({
      key: "redi-rock",
      href: "/materials/redi-rock",
      title: "Redi-Rock Installation",
      body: "Engineered retaining systems installed by STC — materials from The Sarjeant Co.",
      cta: "Request an install quote",
    });
  }

  const [lead, ...rest] = items;

  return (
    <section className="stc-svc-related landing-appeal" aria-labelledby="svc-related-heading">
      <div className="stc-rel">
        <div className="stc-rel__hero">
          <div className="stc-rel__scrim" aria-hidden />
          <div className="stc-rel__copy">
            <p className="stc-rel__eyebrow">Related Work</p>
            <h2 id="svc-related-heading" className="stc-rel__headline">
              Continue With Related Craft
            </h2>
            <p className="stc-rel__body">
              Most waterfront builds need more than one trade. Pick the next scope — we quote the
              work as one accountable crew.
            </p>
            <Link href="/contact" className="stc-rel__btn">
              Request a quote <span aria-hidden>↗</span>
            </Link>
          </div>

          {lead ? (
            <aside className="stc-rel__lead-card">
              <p className="stc-rel__card-kicker">Next step</p>
              <h3 className="stc-rel__card-title">{lead.title}</h3>
              <p className="stc-rel__card-text">{lead.body}</p>
              <Link href={lead.href} className="stc-rel__card-link">
                {lead.cta} →
              </Link>
            </aside>
          ) : null}
        </div>

        {/* Open features — BuildStitch three-up, not bordered equal cards */}
        {rest.length > 0 ? (
          <ul className="stc-rel__features">
            {rest.map((item, i) => (
              <li key={item.key} className="stc-rel__feature">
                <div className="stc-rel__feature-icon" aria-hidden>
                  {i % 3 === 0 ? (
                    <svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M4 26V14l12-8 12 8v12H4z" />
                      <path d="M12 26v-8h8v8" />
                    </svg>
                  ) : i % 3 === 1 ? (
                    <svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <circle cx="16" cy="16" r="12" />
                      <path d="M10 16.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M6 22l10-14 10 14H6z" />
                      <path d="M12 22v6h8v-6" />
                    </svg>
                  )}
                </div>
                <h3 className="stc-rel__feature-title">{item.title}</h3>
                <p className="stc-rel__feature-body">{item.body}</p>
                <Link href={item.href} className="stc-rel__card-link">
                  {item.cta} →
                </Link>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="stc-rel__areas">
          <p className="stc-rel__areas-eyebrow">Areas We Serve</p>
          <h2 className="stc-rel__areas-headline">
            Built Across <span>South Georgian Bay</span>
          </h2>
          <ul className="stc-rel__area-grid">
            {areas.map((area) => (
              <li key={area.slug} className="stc-rel__area">
                <div className="stc-rel__area-icon" aria-hidden>
                  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M16 4l10 8v16H6V12l10-8z" />
                    <path d="M12 28v-8h8v8" />
                  </svg>
                </div>
                <h3 className="stc-rel__area-title">{area.name}</h3>
                <p className="stc-rel__area-text">{area.highlights[0] ?? area.intro[0]}</p>
                <Link href={`/areas/${area.slug}`} className="stc-rel__card-link">
                  View area →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
