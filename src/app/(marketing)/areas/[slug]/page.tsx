import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnterpriseAreaPage } from "@/components/stc/enterprise/EnterpriseAreaPage";
import { JsonLdScript } from "@/components/seo/JsonLd";
import { getAllAreaSlugs, getAreaBySlug } from "@/data/areas";
import { media } from "@/data/media";
import { buildAreaJsonLd, buildBreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return pageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${slug}`,
    image: media.areaHeroes[area.slug],
  });
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  return (
    <>
      <JsonLdScript
        data={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Areas", path: "/areas" },
            { name: area.name, path: `/areas/${area.slug}` },
          ]),
          buildAreaJsonLd({
            name: area.name,
            description: area.metaDescription,
            path: `/areas/${area.slug}`,
          }),
        ]}
      />
      <EnterpriseAreaPage area={area} />
    </>
  );
}
