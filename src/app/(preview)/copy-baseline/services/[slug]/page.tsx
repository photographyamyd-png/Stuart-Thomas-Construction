import { notFound } from "next/navigation";
import { BaselineEnterpriseServicePage } from "@/components/stc/enterprise/baseline/service/BaselineEnterpriseServicePage";
import { getAllServiceSlugs, getServiceBySlug } from "@/data/archive/copy-baseline/services";
import { getGalleryItemsByCategory } from "@/data/gallery.server";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export default async function CopyBaselineServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const rediRockInstalls = getGalleryItemsByCategory("redi-rock");
  const rediRockInstallPhoto = rediRockInstalls[0];

  return (
    <BaselineEnterpriseServicePage service={service} rediRockInstallPhoto={rediRockInstallPhoto} />
  );
}
