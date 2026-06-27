import type { GalleryCategoryId } from "@/data/gallery";
import { galleryCategories } from "@/data/gallery";
import { getGalleryItems } from "@/data/gallery.server";
import { BaselineEnterpriseProjectsPage } from "@/components/stc/enterprise/baseline/BaselineEnterpriseProjectsPage";

type Props = {
  searchParams: Promise<{ category?: string }>;
};

function parseCategory(value: string | undefined): GalleryCategoryId | undefined {
  if (!value) return undefined;
  return galleryCategories.find((c) => c.id === value)?.id;
}

export default async function CopyBaselineProjectsPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const galleryItems = getGalleryItems();
  const initialCategory = parseCategory(category);

  return (
    <BaselineEnterpriseProjectsPage galleryItems={galleryItems} initialCategory={initialCategory} />
  );
}
