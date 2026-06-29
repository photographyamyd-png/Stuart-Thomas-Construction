import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnterpriseServicePage } from "@/components/stc/enterprise/service/EnterpriseServicePage";
import { JsonLdScript } from "@/components/seo/JsonLd";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/data/services";
import { getGalleryItemsByCategory } from "@/data/gallery.server";
import { getServiceHero } from "@/data/media";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
    image: getServiceHero(service.slug),
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const rediRockInstalls = getGalleryItemsByCategory("redi-rock");
  const rediRockInstallPhoto = rediRockInstalls[0];

  return (
    <>
      <JsonLdScript
        data={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          buildServiceJsonLd({
            name: service.title,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
            serviceSlug: service.slug,
          }),
          ...(service.faqs.length ? [buildFaqJsonLd(service.faqs)] : []),
        ]}
      />
      <EnterpriseServicePage service={service} rediRockInstallPhoto={rediRockInstallPhoto} />
    </>
  );
}
