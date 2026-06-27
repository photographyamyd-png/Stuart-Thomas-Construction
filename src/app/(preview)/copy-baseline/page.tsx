import Link from "next/link";
import { getAllAreaSlugs, areas } from "@/data/archive/copy-baseline/areas";
import { COPY_BASELINE_CAPTURED, COPY_BASELINE_PREFIX as B } from "@/data/archive/copy-baseline/constants";
import { getAllServiceSlugs, services } from "@/data/archive/copy-baseline/services";

export default function CopyBaselineIndexPage() {
  return (
    <section className="turner-band turner-band--light" style={{ padding: "3rem 0" }}>
      <div className="container" style={{ maxWidth: "48rem" }}>
        <p className="eyebrow green">Archive</p>
        <h1 className="text-display stack-title">Copy baseline — pre-revision snapshot</h1>
        <p className="stc-enterprise-body stack-body">
          Frozen marketing copy captured <strong>{COPY_BASELINE_CAPTURED}</strong>, before the plain-language
          site-wide revision. These pages are not indexed and not linked from the live site.
        </p>

        <h2 className="text-display text-display--subsection stack-title">Main pages</h2>
        <ul className="stc-enterprise-body stack-body">
          <li>
            <Link href={`${B}/home`}>Homepage</Link>
          </li>
          <li>
            <Link href={`${B}/about`}>About</Link>
          </li>
          <li>
            <Link href={`${B}/services`}>Services hub</Link>
          </li>
          <li>
            <Link href={`${B}/projects`}>Projects</Link>
          </li>
          <li>
            <Link href={`${B}/contact`}>Contact</Link>
          </li>
          <li>
            <Link href={`${B}/areas`}>Areas hub</Link>
          </li>
          <li>
            <Link href={`${B}/materials/redi-rock`}>Redi-Rock</Link>
          </li>
        </ul>

        <h2 className="text-display text-display--subsection stack-title">Services</h2>
        <ul className="stc-enterprise-body stack-body">
          {getAllServiceSlugs().map((slug) => {
            const s = services.find((x) => x.slug === slug);
            return (
              <li key={slug}>
                <Link href={`${B}/services/${slug}`}>{s?.title ?? slug}</Link>
              </li>
            );
          })}
        </ul>

        <h2 className="text-display text-display--subsection stack-title">Areas</h2>
        <ul className="stc-enterprise-body stack-body">
          {getAllAreaSlugs().map((slug) => {
            const a = areas.find((x) => x.slug === slug);
            return (
              <li key={slug}>
                <Link href={`${B}/areas/${slug}`}>{a?.name ?? slug}</Link>
              </li>
            );
          })}
        </ul>

        <p className="stc-enterprise-body stack-title">
          Source files: <code>src/data/archive/copy-baseline/</code>
        </p>
      </div>
    </section>
  );
}
