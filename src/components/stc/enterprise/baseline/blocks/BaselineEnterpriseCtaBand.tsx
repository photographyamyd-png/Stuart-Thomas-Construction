import Link from "next/link";
import { conversion } from "@/data/archive/copy-baseline/conversion";

type Props = {
  headline?: string;
  subline?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function BaselineEnterpriseCtaBand({
  headline = conversion.serviceCta.headline,
  subline = conversion.serviceCta.subline,
  buttonLabel = conversion.serviceCta.button,
  buttonHref = "/contact",
}: Props) {
  return (
    <section className="stc-enterprise-cta turner-band turner-band--green turner-band--seam" aria-label="Contact call to action">
      <div className="container stc-enterprise-cta__inner">
        <div>
          <p className="eyebrow eyebrow--on-dark">Start Your Project</p>
          <h2 className="text-display stack-eyebrow stc-enterprise-cta__headline">
            {headline}
          </h2>
          <p className="stc-enterprise-cta__subline">{subline}</p>
        </div>
        <Link href={buttonHref} className="btn-green">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
