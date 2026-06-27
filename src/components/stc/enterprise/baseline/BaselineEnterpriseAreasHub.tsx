import Link from "next/link";
import { areas, areasHubCopy } from "@/data/archive/copy-baseline/areas";
import { COPY_BASELINE_PREFIX as B } from "@/data/archive/copy-baseline/constants";
import { BaselineEnterpriseCtaBand } from "./blocks/BaselineEnterpriseCtaBand";
import { BaselineEnterprisePageHero } from "./blocks/BaselineEnterprisePageHero";

export function BaselineEnterpriseAreasHub() {
  return (
    <>
      <BaselineEnterprisePageHero
        eyebrow="Service Areas"
        title={areasHubCopy.title}
        description={areasHubCopy.description}
        breadcrumbs={[
          { name: "Home", path: B },
          { name: "Service Areas", path: `${B}/areas` },
        ]}
      />
      <section className="stc-areas-hub turner-band turner-band--light">
        <div className="container">
          <div className="stc-areas-hub__grid">
            {areas.map((area) => (
              <Link key={area.slug} href={`${B}/areas/${area.slug}`} className="stc-areas-hub__card">
                <p className="eyebrow green">{area.name}</p>
                <h2 className="text-display text-display--subsection stack-eyebrow">{area.headline}</h2>
                <p className="stc-enterprise-body">{area.intro[0]}</p>
                <span className="link-arrow stack-title">View area →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <BaselineEnterpriseCtaBand />
    </>
  );
}
