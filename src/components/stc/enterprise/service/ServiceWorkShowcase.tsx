import Image from "next/image";
import type { ServiceWorkShowcase } from "@/data/media";
import { site } from "@/data/site";
import { LinkArrow } from "../primitives";

type Props = {
  data: ServiceWorkShowcase;
};

export function ServiceWorkShowcase({ data }: Props) {
  const [wide, tall] = data.supporting;

  return (
    <section
      className="stc-svc-work turner-band turner-band--light turner-band--seam"
      aria-labelledby="svc-work-heading"
    >
      <div className="container stc-svc-work__head">
        <p className="eyebrow green">{data.eyebrow}</p>
        <h2 id="svc-work-heading" className="text-display text-display--section stack-title">
          {data.headline}
        </h2>
        {data.statement ? <p className="stc-svc-work__statement">{data.statement}</p> : null}
      </div>
      <div className="stc-svc-work__stage turner-band--dark">
        <div className="stc-svc-work__panorama">
          <Image
            src={data.leadImage}
            alt={data.leadAlt}
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container stc-svc-work__duo-wrap">
          <div className="stc-svc-work__duo">
            {wide && (
              <figure className="stc-svc-work__figure stc-svc-work__figure--wide">
                <div className="stc-svc-work__figure-media">
                  <Image
                    src={wide.src}
                    alt={wide.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 900px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="stc-svc-work__caption">{wide.caption}</figcaption>
              </figure>
            )}
            {tall && (
              <figure className="stc-svc-work__figure stc-svc-work__figure--tall">
                <div className="stc-svc-work__figure-media">
                  <Image
                    src={tall.src}
                    alt={tall.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 900px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="stc-svc-work__caption">{tall.caption}</figcaption>
              </figure>
            )}
          </div>
          {site.projectsGalleryVisible ? (
            <LinkArrow href="/projects" className="stc-svc-work__link stack-title">
              View project gallery
            </LinkArrow>
          ) : null}
        </div>
      </div>
    </section>
  );
}
