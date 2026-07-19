import Link from "next/link";
import type { LegalPageContent } from "@/data/legal";
import { site } from "@/data/site";
import { AppealReveal } from "./blocks/AppealReveal";
import { EnterprisePageHero } from "./blocks/EnterprisePageHero";

type Props = {
  content: LegalPageContent;
  path: "/privacy" | "/terms";
};

export function EnterpriseLegalPage({ content, path }: Props) {
  return (
    <>
      <EnterprisePageHero
        eyebrow="Legal"
        title={content.title}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: content.title, path },
        ]}
      />
      <AppealReveal>
        <section className="stc-legal turner-band turner-band--light turner-band--seam">
          <div className="container stc-legal__inner">
            {content.sections.map((section) => (
              <article key={section.heading} className="stc-legal__section">
                <h2 className="text-display text-display--legal">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)} className="wf-type-supporting">
                    {p}
                  </p>
                ))}
              </article>
            ))}
            <p className="wf-type-supporting stack-section">
              Questions? Call us at{" "}
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a> or visit our{" "}
              <Link href="/contact">Contact page</Link>.
            </p>
          </div>
        </section>
      </AppealReveal>
    </>
  );
}
