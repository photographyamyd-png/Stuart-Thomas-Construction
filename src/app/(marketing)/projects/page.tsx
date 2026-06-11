import type { Metadata } from "next";
import { EnterpriseProjectsPage } from "@/components/stc/enterprise/EnterpriseProjectsPage";
import { JsonLdScript } from "@/components/seo/JsonLd";
import { getGalleryItems } from "@/data/gallery.server";
import { buildBreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Project Gallery",
  description:
    "Explore Stuart Thomas Construction project photography — armour stone, waterfront, landscaping, hardscaping, excavation, and snow removal.",
  path: "/projects",
});

export default function ProjectsPage() {
  const galleryItems = getGalleryItems();
  return (
    <>
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <EnterpriseProjectsPage galleryItems={galleryItems} />
    </>
  );
}
