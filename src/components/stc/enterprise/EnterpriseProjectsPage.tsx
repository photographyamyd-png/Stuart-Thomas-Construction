import type { GalleryItem } from "@/data/gallery";
import { media } from "@/data/media";
import { ProjectsExplorer } from "@/components/gallery/ProjectsExplorer";
import { EnterpriseCtaBand } from "./blocks/EnterpriseCtaBand";
import { EnterprisePageHero } from "./blocks/EnterprisePageHero";

type Props = {
  galleryItems: GalleryItem[];
};

export function EnterpriseProjectsPage({ galleryItems }: Props) {
  return (
    <>
      <EnterprisePageHero
        eyebrow="Portfolio"
        title="Project Gallery"
        description={`${galleryItems.length} photos from armour stone, waterfront, landscaping, hardscaping, excavation, and snow removal sites across South Georgian Bay.`}
        imageSrc={media.projectsHero}
        imageAlt="Construction project gallery"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />
      <section className="stc-projects-explorer turner-band turner-band--light">
        <div className="container">
          <ProjectsExplorer items={galleryItems} />
        </div>
      </section>
      <EnterpriseCtaBand />
    </>
  );
}
