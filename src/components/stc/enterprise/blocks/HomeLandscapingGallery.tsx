import Image from "next/image";
import { enterpriseHomeLandscapingGallery } from "@/data/enterprise";

export function HomeLandscapingGallery() {
  const [hero, ...supporting] = enterpriseHomeLandscapingGallery;

  return (
    <section
      className="stc-home-landscape-gallery turner-band turner-band--light turner-band--seam"
      id="landscaping-work"
      aria-labelledby="landscaping-work-heading"
    >
      <div className="container">
        <header className="stc-home-landscape-gallery__head">
          <p className="eyebrow">From The Field</p>
          <h2 id="landscaping-work-heading" className="text-display stack-eyebrow">
            Recent <span className="text-accent-green">Landscaping Work</span>
          </h2>
        </header>

        <div className="stc-home-landscape-gallery__grid">
          <figure className="stc-home-landscape-gallery__hero">
            <Image
              src={hero.image}
              alt={hero.alt}
              fill
              priority
              sizes="(max-width: 899px) 100vw, 60vw"
              className="object-cover"
            />
            <figcaption className="stc-home-landscape-gallery__label">{hero.title}</figcaption>
          </figure>

          <ul className="stc-home-landscape-gallery__supporting">
            {supporting.map((item) => (
              <li key={item.title}>
                <figure className="stc-home-landscape-gallery__tile">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 899px) 50vw, 20vw"
                    className="object-cover"
                  />
                  <figcaption className="stc-home-landscape-gallery__label">{item.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
