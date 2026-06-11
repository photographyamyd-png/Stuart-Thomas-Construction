import { Container } from "@/components/layout/Container";
import { LayeredSection } from "@/components/layout/LayeredSection";
import { ServiceCard } from "@/components/layout/ServiceCard";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <LayeredSection id="services-grid" tone="light" pad="none">
      <Container className="py-10 sm:py-12">
        <p className="label-stamp text-stc-green">Our Services</p>
      </Container>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <ServiceCard
            key={s.slug}
            href={`/services/${s.slug}`}
            title={s.title}
            icon={s.icon}
            variant="masonry"
            toneIndex={i}
          />
        ))}
      </div>
    </LayeredSection>
  );
}
