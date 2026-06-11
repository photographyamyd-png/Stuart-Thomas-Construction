import Image from "next/image";
import { areas } from "@/data/areas";
import { media } from "@/data/media";
import { navServices } from "@/data/nav";

export type HeaderTypeVariant = "current" | "light-a" | "light-b";

const VARIANT_META: Record<
  HeaderTypeVariant,
  { label: string; caption: string }
> = {
  current: {
    label: "A — Current (bold)",
    caption:
      "Today's production header: Oswald 600 nav, Poppins 600 wordmark. This is what the live site uses now.",
  },
  "light-a": {
    label: "B — Lighter weights",
    caption:
      "Same Oswald + Poppins families at weight 500 with slightly relaxed letter-spacing — less heavy, still uppercase.",
  },
  "light-b": {
    label: "C — Open Sans nav (live)",
    caption:
      "Now applied site-wide: Open Sans 500 for nav, mega-menu, and drawer — slightly larger and a touch heavier than the original preview.",
  },
};

type Props = {
  variant: HeaderTypeVariant;
};

export function HeaderTypePreviewPanel({ variant }: Props) {
  const meta = VARIANT_META[variant];
  const panelId = `preview-${variant}`;

  return (
    <section
      className={`header-type-preview-panel header-type-preview-panel--${variant}`}
      aria-labelledby={`${panelId}-label`}
    >
      <h2 className="header-type-preview-panel__label" id={`${panelId}-label`}>
        {meta.label}
      </h2>

      <div className="header-type-preview-panel__viewport">
        <div className="enterprise-layout">
          <header className="turner-header" aria-hidden="true">
            <div className="container turner-header__inner">
              <span className="turner-header__logo stc-wordmark">
                <span className="stc-wordmark__primary">Stuart Thomas</span>
                <span className="stc-wordmark__secondary">Construction &amp; Landscaping</span>
              </span>

              <nav className="stc-lux-nav" aria-label="Primary preview">
                <div className="stc-lux-nav__item">
                  <span className="stc-lux-nav__trigger" aria-expanded="true">
                    Services <span className="stc-lux-nav__caret" aria-hidden />
                  </span>
                </div>
                <div className="stc-lux-nav__item">
                  <span className="stc-lux-nav__trigger">Projects <span className="stc-lux-nav__caret" aria-hidden /></span>
                </div>
                <div className="stc-lux-nav__item">
                  <span className="stc-lux-nav__trigger">Company <span className="stc-lux-nav__caret" aria-hidden /></span>
                </div>
                <span className="stc-lux-nav__link">About</span>
                <span className="stc-lux-nav__link">Contact</span>
              </nav>

              <div className="turner-header__actions">
                <span className="btn-green">Get a Quote</span>
              </div>
            </div>
          </header>

          <div className="stc-lux-wrap is-open" aria-hidden="true">
            <div className="stc-lux-panel is-open" role="region" aria-label="Services preview">
              <div className="stc-lux-panel__inner">
                <div className="stc-lux-panel__grid stc-lux-panel__grid--services">
                  <ul className="stc-lux-panel__links">
                    {navServices.slice(0, 4).map((s) => (
                      <li key={s.slug}>
                        <span>
                          <span className="stc-lux-link__title">{s.label}</span>
                          <span className="stc-lux-link__desc">{s.description}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <aside className="stc-lux-panel__feature">
                    <p className="eyebrow eyebrow--plain eyebrow--on-dark">Featured</p>
                    <p className="text-utility text-on-dark-subtle stack-eyebrow">Georgian Bay Shoreline</p>
                    <Image
                      src={media.featuredGalleryPaths[0]}
                      alt=""
                      width={400}
                      height={260}
                      loading="lazy"
                    />
                    <p>Armour stone placement and shoreline protection on a Muskoka estate build.</p>
                  </aside>
                </div>
              </div>
            </div>
          </div>

          <div className="header-type-preview-panel__drawer-sample" aria-hidden="true">
            <aside className="turner-drawer is-open" aria-label="Mobile drawer preview">
              <div className="turner-drawer__wordmark">
                <span className="stc-wordmark stc-wordmark--compact">
                  <span className="stc-wordmark__primary">Stuart Thomas</span>
                  <span className="stc-wordmark__secondary">Construction &amp; Landscaping</span>
                </span>
              </div>
              <nav className="turner-drawer__nav">
                <span className="turner-drawer__section-label">Services</span>
                {navServices.slice(0, 3).map((s) => (
                  <span key={s.slug} className="stc-lux-drawer__sub">
                    {s.label}
                  </span>
                ))}
                <span className="turner-drawer__section-label">Areas</span>
                {areas.slice(0, 2).map((a) => (
                  <span key={a.slug} className="stc-lux-drawer__sub">
                    {a.name}
                  </span>
                ))}
                <span>Contact</span>
              </nav>
            </aside>
          </div>

          <main />
        </div>
      </div>

      <p className="header-type-preview-panel__caption">{meta.caption}</p>
    </section>
  );
}
