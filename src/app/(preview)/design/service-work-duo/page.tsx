import type { Metadata } from "next";
import Link from "next/link";
import { ServiceWorkDuo } from "@/components/stc/enterprise/service/ServiceWorkDuo";
import { serviceWorkShowcase } from "@/data/media";

export const metadata: Metadata = {
  title: "Service Work — BuildStitch Clone",
  description: "BuildStitch layout clone with STC brand — internal, not indexed.",
  robots: { index: false, follow: false },
};

export default function ServiceWorkDuoComparePage() {
  const showcase = serviceWorkShowcase["armour-stone"];
  if (!showcase) return null;

  return (
    <div className="landing-appeal work-duo-compare enterprise-layout">
      <div className="work-duo-compare__banner" role="navigation" aria-label="Work composition preview">
        <p>
          BuildStitch layout clone — STC gold / type / photos only. Live on{" "}
          <Link href="/services/armour-stone#work">armour-stone #work</Link>.
        </p>
      </div>
      <ServiceWorkDuo
        variant="overlap"
        eyebrow={showcase.eyebrow}
        headline={showcase.headline}
        statement={
          showcase.statement ??
          "Finished armour stone work on Georgian Bay and Tiny Township properties."
        }
        frames={showcase.supporting}
        ctaHref="/projects"
        ctaLabel="Discover our projects"
        headingId="svc-work-heading"
      />
    </div>
  );
}
