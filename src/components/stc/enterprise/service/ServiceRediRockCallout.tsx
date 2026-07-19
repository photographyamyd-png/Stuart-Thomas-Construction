import Image from "next/image";
import Link from "next/link";
import type { GalleryItem } from "@/data/gallery";
import type { RediRockCallout } from "@/data/redi-rock";
import { rediRockLinks } from "@/data/redi-rock";
import { ManufacturerAttribution } from "../blocks/ManufacturerAttribution";

type Props = {
  callout: RediRockCallout;
  installPhoto?: GalleryItem;
};

export function ServiceRediRockCallout({ callout, installPhoto }: Props) {
  return (
    <section
      className={`stc-rr-callout turner-regional turner-band turner-band--light turner-band--seam${installPhoto ? "" : " stc-rr-callout--copy-only"}`}
      aria-label="Redi-Rock installation services"
    >
      {installPhoto && (
        <div className="turner-regional__media">
          <Image
            src={installPhoto.image}
            alt={installPhoto.alt}
            fill
            loading="lazy"
            sizes="50vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="turner-regional__copy">
        <p className="eyebrow">{callout.eyebrow}</p>
        <h2 className="text-display text-display--subsection stack-eyebrow">
          Redi-Rock{" "}
          <span className="text-accent-gold">
            {callout.headline.replace(/^Redi-Rock\s*/, "")}
          </span>
        </h2>
        <p className="wf-type-supporting">{callout.body}</p>
        <ManufacturerAttribution variant="compact" className="stack-title" />
        <Link href={rediRockLinks.materialsPage} className="btn-green stack-cta cta-inline">
          {callout.linkLabel}
        </Link>
      </div>
    </section>
  );
}
