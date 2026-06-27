import type { GalleryItem } from "@/data/gallery";
import { media } from "@/data/media";
import { ProjectsExplorer } from "@/components/gallery/ProjectsExplorer";
import { COPY_BASELINE_PREFIX as B } from "@/data/archive/copy-baseline/constants";
import { BaselineEnterpriseCtaBand } from "./blocks/BaselineEnterpriseCtaBand";
import { BaselineEnterprisePageHero } from "./blocks/BaselineEnterprisePageHero";

import type { GalleryCategoryId } from "@/data/gallery";

type Props = {
  galleryItems: GalleryItem[];
  initialCategory?: GalleryCategoryId;
};

export function BaselineEnterpriseProjectsPage({ galleryItems, initialCategory }: Props) {
  return (
    <>
      <BaselineEnterprisePageHero
        eyebrow="Portfolio"
        title="Project Gallery"
        description={`${galleryItems.length} photos from armour stone, waterfront, landscaping, hardscaping, excavation, Redi-Rock installs, and snow removal sites across South Georgian Bay.`}
        imageSrc={media.projectsHero}
        imageAlt="Construction project gallery"
        breadcrumbs={[
          { name: "Home", path: B },
          { name: "Projects", path: `${B}/projects` },
        ]}
      />
      <section className="stc-projects-explorer turner-band turner-band--light">
        <div className="container">
          <ProjectsExplorer items={galleryItems} initialCategory={initialCategory} />
        </div>
      </section>
      <BaselineEnterpriseCtaBand />
    </>
  );
}
