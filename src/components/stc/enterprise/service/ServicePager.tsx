import Link from "next/link";
import type { ServiceDetail } from "@/data/services";

type Props = {
  prev: ServiceDetail | null;
  next: ServiceDetail | null;
};

export function ServicePager({ prev, next }: Props) {
  return (
    <nav className="stc-svc-page__pager turner-band turner-band--light" aria-label="Service navigation">
      <div className="container stc-svc-page__pager-inner">
        {prev ? (
          <Link href={`/services/${prev.slug}`} className="stc-svc-page__pager-link stc-svc-page__pager-link--prev">
            <span className="stc-svc-page__pager-label">Previous</span>
            <span className="stc-svc-page__pager-title">← {prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        <Link href="/services" className="stc-svc-page__pager-hub">
          All Services
        </Link>
        {next ? (
          <Link href={`/services/${next.slug}`} className="stc-svc-page__pager-link stc-svc-page__pager-link--next">
            <span className="stc-svc-page__pager-label">Next</span>
            <span className="stc-svc-page__pager-title">{next.title} →</span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
