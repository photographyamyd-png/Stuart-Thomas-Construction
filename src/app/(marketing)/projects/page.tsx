import type { Metadata } from "next";
import { EnterpriseProjectsPage } from "@/components/stc/enterprise/EnterpriseProjectsPage";
import { JsonLdScript } from "@/components/seo/JsonLd";
import type { GalleryCategoryId } from "@/data/gallery";
import { galleryCategories } from "@/data/gallery";
import { getGalleryItems } from "@/data/gallery.server";
import { buildBreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Project Gallery",
  description:
    "Photos from Tiny Township armour stone and hardscaping jobs on Georgian Bay properties.",
  path: "/projects",
});

type Props = {
  searchParams: Promise<{ category?: string }>;
};

function parseCategory(value: string | undefined): GalleryCategoryId | undefined {
  if (!value) return undefined;
  return galleryCategories.find((c) => c.id === value)?.id;
}

export default async function ProjectsPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const galleryItems = getGalleryItems();
  const initialCategory = parseCategory(category);

  return (
    <>
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <EnterpriseProjectsPage galleryItems={galleryItems} initialCategory={initialCategory} />
    </>
  );
}
