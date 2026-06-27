import type { GalleryItem } from "@/data/gallery";
import { media } from "@/data/media";
import { ProjectsExplorer } from "@/components/gallery/ProjectsExplorer";
import { EnterpriseCtaBand } from "./blocks/EnterpriseCtaBand";
import { EnterprisePageHero } from "./blocks/EnterprisePageHero";

import type { GalleryCategoryId } from "@/data/gallery";

type Props = {
  galleryItems: GalleryItem[];
  initialCategory?: GalleryCategoryId;
};

export function EnterpriseProjectsPage({ galleryItems, initialCategory }: Props) {
  return (
    <>
      <EnterprisePageHero
        eyebrow="Portfolio"
        title="Project Gallery"
        description={`${galleryItems.length} photos from Tiny Township construction and landscaping — armour stone, waterfront, hardscaping, excavation, Redi-Rock, and snow removal across South Georgian Bay.`}
        imageSrc={media.projectsHero}
        imageAlt="Construction project gallery"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />
      <section className="stc-projects-explorer turner-band turner-band--light">
        <div className="container">
          <ProjectsExplorer items={galleryItems} initialCategory={initialCategory} />
        </div>
      </section>
      <EnterpriseCtaBand />
    </>
  );
}
