import Link from "next/link";
import { areas, areasHubCopy, getAreasByHubGroup } from "@/data/areas";
import { EnterpriseCtaBand } from "./blocks/EnterpriseCtaBand";
import { EnterprisePageHero } from "./blocks/EnterprisePageHero";

function AreaCardGrid({ groupAreas }: { groupAreas: typeof areas }) {
  return (
    <div className="stc-areas-hub__grid">
      {groupAreas.map((area) => (
        <Link key={area.slug} href={`/areas/${area.slug}`} className="stc-areas-hub__card">
          <p className="eyebrow green">{area.name}</p>
          <h2 className="text-display text-display--subsection stack-eyebrow">{area.headline}</h2>
          <p className="stc-enterprise-body">{area.intro[0]}</p>
          <span className="link-arrow stack-title">View area →</span>
        </Link>
      ))}
    </div>
  );
}

export function EnterpriseAreasHub() {
  const constructionAreas = getAreasByHubGroup("construction-landscaping");
  const commercialAreas = getAreasByHubGroup("commercial-winter");

  return (
    <>
      <EnterprisePageHero
        eyebrow="Service Areas"
        title={areasHubCopy.title}
        description={areasHubCopy.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/areas" },
        ]}
      />
      <section className="stc-areas-hub turner-band turner-band--light">
        <div className="container">
          <p className="eyebrow green">Construction &amp; Landscaping</p>
          <h2 className="text-display text-display--subsection stack-title">
            Tiny Township, Wasaga Beach &amp; Elmvale
          </h2>
          <p className="stc-enterprise-body stack-title">
            Armour stone, waterfront work, landscaping, and hardscaping across Simcoe County&apos;s
            Georgian Bay corridor — including Elmvale near Wasaga Beach.
          </p>
          <AreaCardGrid groupAreas={constructionAreas} />

          <p className="eyebrow green stack-section-lg">Commercial Winter &amp; Site Work</p>
          <h2 className="text-display text-display--subsection stack-title">
            Midland &amp; Penetanguishene
          </h2>
          <p className="stc-enterprise-body stack-title">
            Seasonal snow contracts and commercial excavation for business properties in Midland and
            Penetanguishene.
          </p>
          <AreaCardGrid groupAreas={commercialAreas} />
        </div>
      </section>
      <EnterpriseCtaBand />
    </>
  );
}
