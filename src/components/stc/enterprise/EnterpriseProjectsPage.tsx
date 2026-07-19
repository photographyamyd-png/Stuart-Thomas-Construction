import type { GalleryItem } from "@/data/gallery";
import { media } from "@/data/media";
import { ProjectsExplorer } from "@/components/gallery/ProjectsExplorer";
import { AppealReveal } from "./blocks/AppealReveal";
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
        eyebrow="Finished Jobs"
        title="Project"
        titleAccent="Gallery"
        description="Finished armour stone, hardscaping, and landscaping on Tiny Township and South Georgian Bay properties."
        imageSrc={media.projectsHero}
        imageAlt="Construction project gallery"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
        ctaHref="/contact"
        ctaLabel="Get a Quote"
      />

      <AppealReveal>
        <section className="stc-projects-explorer turner-band turner-band--light turner-band--seam">
          <div className="container">
            <p className="eyebrow">Finished Work</p>
            <h2 className="text-display text-display--section stack-title">
              Armour stone to <span className="text-accent-gold">yard finishes</span>
            </h2>
            <p className="wf-type-supporting prose-narrow stack-body">
              Filter by category, then call for a free site visit on your property.
            </p>
            <ProjectsExplorer items={galleryItems} initialCategory={initialCategory} />
          </div>
        </section>
      </AppealReveal>

      <AppealReveal>
        <EnterpriseCtaBand />
      </AppealReveal>
    </>
  );
}
