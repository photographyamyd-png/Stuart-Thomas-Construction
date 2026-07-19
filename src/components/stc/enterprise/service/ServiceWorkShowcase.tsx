import type { ServiceWorkShowcase as WorkData } from "@/data/media";
import { ServiceWorkDuo } from "./ServiceWorkDuo";

type Props = {
  data: WorkData;
};

/**
 * Work plane — BuildStitch proof composition (field credibility + gallery bridge).
 */
export function ServiceWorkShowcase({ data }: Props) {
  return (
    <section className="stc-svc-work landing-appeal" id="work" aria-labelledby="svc-work-heading">
      <ServiceWorkDuo
        variant="overlap"
        eyebrow={data.eyebrow}
        headline={data.headline}
        statement={
          data.statement ??
          "Finished work on Georgian Bay and Tiny Township properties."
        }
        frames={data.supporting}
        ctaHref="/projects"
        ctaLabel="Browse finished job photos"
        headingId="svc-work-heading"
      />
    </section>
  );
}
