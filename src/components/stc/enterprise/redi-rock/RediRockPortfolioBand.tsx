import Image from "next/image";
import Link from "next/link";
import type { GalleryItem } from "@/data/gallery";
import { rediRockLinks } from "@/data/redi-rock";

type Props = {
  installs?: GalleryItem[];
};

export function RediRockPortfolioBand({ installs = [] }: Props) {
  const hasInstalls = installs.length > 0;
  const preview = installs.slice(0, 3);

  return (
    <section
      id="portfolio"
      className="stc-rr-portfolio turner-band turner-band--light turner-band--seam"
      aria-labelledby="rr-portfolio-heading"
    >
      <div className="container stc-rr-portfolio__inner">
        <div className="stc-rr-portfolio__copy">
          <p className="eyebrow">STC Project Work</p>
          <h2 id="rr-portfolio-heading" className="text-display text-display--section stack-title">
            Our Redi-Rock <span className="text-accent-gold">Installations</span>
          </h2>
          <p className="wf-type-supporting">
            Stuart Thomas Construction install photography — clearly separated from manufacturer
            reference imagery elsewhere on this page.
          </p>
          <Link href={rediRockLinks.projectsFilter} className="btn-green cta-inline stack-cta">
            Finished install photos
          </Link>
        </div>
        {hasInstalls ? (
          <ul className="stc-rr-portfolio__grid">
            {preview.map((item) => (
              <li key={item.id}>
                <Link href={rediRockLinks.projectsFilter} className="stc-rr-portfolio__tile">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 900px) 20vw, 33vw"
                    className="object-cover"
                  />
                  <span className="stc-rr-portfolio__tile-label">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="stc-rr-portfolio__placeholder" aria-hidden>
            <div className="stc-rr-portfolio__placeholder-grid">
              <span />
              <span />
              <span />
            </div>
            <p className="wf-type-supporting stc-rr-portfolio__placeholder-note">
              Install photos coming soon — check Projects for the latest STC work.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
