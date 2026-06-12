import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { LayeredSection } from "@/components/layout/LayeredSection";
import { PromoCard } from "@/components/layout/PromoCard";
import { SectionHeading } from "@/components/layout/SectionHeading";

/** Pre–mockup featured projects: 3-up gallery with black caption bars. */
export function FeaturedProjectsClassic({ paths }: { paths: readonly string[] }) {
  const featured = paths.slice(0, 3);
  const captions = [
    "Waterfront stone work",
    "Armour stone & retaining",
    "Landscape craftsmanship",
  ];

  return (
    <LayeredSection id="projects" tone="light" pad="lg">
      <Container>
        <SectionHeading tone="black" align="left">
          Recent Projects
        </SectionHeading>
        <p className="mt-4 max-w-2xl font-body text-base text-role-body-on-light">
          Representative work across armour stone, waterfront, landscaping, and excavation
          throughout South Georgian Bay.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {featured.map((src, i) => (
            <PromoCard
              key={src}
              href="/projects"
              imageSrc={src}
              imageAlt={`Featured project ${i + 1}`}
              title={captions[i] ?? `Project ${i + 1}`}
              variant="gallery"
              caption={captions[i]}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="stcSolid" size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </Container>
    </LayeredSection>
  );
}
