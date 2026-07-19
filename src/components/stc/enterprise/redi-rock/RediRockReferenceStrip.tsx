import Image from "next/image";
import { rediRockReferenceImages } from "@/data/redi-rock";

export function RediRockReferenceStrip() {
  const [primary] = rediRockReferenceImages;

  if (!primary) return null;

  return (
    <section
      className="stc-rr-reference turner-band turner-band--dark turner-band--seam"
      aria-labelledby="rr-reference-heading"
    >
      <div className="stc-rr-reference__inner">
        <div className="stc-rr-reference__copy container">
          <p className="eyebrow eyebrow--on-dark">Reference Installation</p>
          <h2 id="rr-reference-heading" className="text-display text-display--section stack-title">
            Manufacturer <span className="text-accent-gold">Showcase</span>
          </h2>
          <p className="wf-type-supporting">
            This image illustrates Redi-Rock® product appearance and waterfront application — not
            Stuart Thomas Construction project photography.
          </p>
          <p className="stc-rr-reference__caption">{primary.caption}</p>
        </div>
        <div className="stc-rr-reference__media">
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            loading="lazy"
            sizes="60vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
