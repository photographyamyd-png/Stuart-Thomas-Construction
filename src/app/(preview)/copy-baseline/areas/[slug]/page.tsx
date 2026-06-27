import { notFound } from "next/navigation";
import { BaselineEnterpriseAreaPage } from "@/components/stc/enterprise/baseline/BaselineEnterpriseAreaPage";
import { getAllAreaSlugs, getAreaBySlug } from "@/data/archive/copy-baseline/areas";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export default async function CopyBaselineAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();
  return <BaselineEnterpriseAreaPage area={area} />;
}
