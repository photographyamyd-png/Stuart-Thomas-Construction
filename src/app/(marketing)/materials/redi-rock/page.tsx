import type { Metadata } from "next";
import { EnterpriseRediRockPage } from "@/components/stc/enterprise/EnterpriseRediRockPage";
import { JsonLdScript } from "@/components/seo/JsonLd";
import { getGalleryItemsByCategory } from "@/data/gallery.server";
import { rediRockMeta } from "@/data/redi-rock";
import { buildBreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: rediRockMeta.title,
  description: rediRockMeta.description,
  path: "/materials/redi-rock",
});

export default function RediRockMaterialsPage() {
  const stcInstalls = getGalleryItemsByCategory("redi-rock");

  return (
    <>
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Redi-Rock", path: "/materials/redi-rock" },
        ])}
      />
      <EnterpriseRediRockPage stcInstalls={stcInstalls} />
    </>
  );
}
