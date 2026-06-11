import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { LayeredSection } from "@/components/layout/LayeredSection";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import type { BreadcrumbItem } from "@/lib/seo";

export function PageHero({
  imageSrc,
  imageAlt,
  title,
  description,
  breadcrumbs,
  minHeight = "40vh",
}: {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  minHeight?: string;
}) {
  return (
    <LayeredSection
      tone="dark"
      pad="none"
      background={
        imageSrc ? (
          <Image src={imageSrc} alt={imageAlt ?? title} fill className="object-cover" sizes="100vw" quality={80} />
        ) : undefined
      }
      panel={
        imageSrc ? <div className="absolute inset-0 bg-stc-black/65" /> : undefined
      }
    >
      <Container className="flex items-end py-12 sm:py-14" style={{ minHeight }}>
        <div>
          <PageBreadcrumbs items={breadcrumbs} inverted={!!imageSrc} />
          <h1 className="text-display-lg text-stc-white">{title}</h1>
          {description && (
            <p className="mt-3 max-w-xl font-body text-sm text-stc-white/80">{description}</p>
          )}
        </div>
      </Container>
    </LayeredSection>
  );
}
