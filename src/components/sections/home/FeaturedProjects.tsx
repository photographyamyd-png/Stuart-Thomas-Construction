import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { cta } from "@/data/nav";

const captions = [
  { cat: "Waterfront · Armour Stone", title: "Georgian Bay Shoreline" },
  { cat: "Hardscaping", title: "Lakeside Patio & Steps" },
  { cat: "Landscaping", title: "Residential Estate" },
  { cat: "Excavation", title: "Site Preparation" },
  { cat: "Snow Removal", title: "Commercial Contract" },
];

export function FeaturedProjects({ paths }: { paths: readonly string[] }) {
  const tiles = paths.slice(0, 5);

  return (
    <section id="projects" className="bg-stc-black text-stc-white">
      <Container>
        <SectionBlock pad="lg">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionEyebrow>Our Work</SectionEyebrow>
              <h2 className="text-display mt-6">
                Featured <span className="text-stc-gold">Projects</span>
              </h2>
            </div>
            <Button asChild variant="stcGhost" size="lg" className="shrink-0">
              <Link href={cta.secondaryHref}>
                View All Projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-0.5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {tiles.map((src, i) => {
              const meta = captions[i] ?? { cat: "Project", title: `Project ${i + 1}` };
              const isTall = i === 0;
              return (
                <Link
                  key={src}
                  href="/projects"
                  className={`group relative min-h-[240px] overflow-hidden ${
                    isTall ? "md:min-h-[320px] lg:row-span-2 lg:min-h-0" : ""
                  } ${isTall ? "lg:col-span-2" : ""}`}
                >
                  <Image
                    src={src}
                    alt={meta.title}
                    fill
                    className="object-cover brightness-[0.75] saturate-90 transition duration-500 group-hover:scale-105 group-hover:brightness-90"
                    sizes={isTall ? "(max-width: 1024px) 100vw, 50vw" : "33vw"}
                    quality={75}
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-stc-black/90 via-stc-black/20 to-transparent"
                    aria-hidden
                  />
                  <span className="absolute inset-x-0 bottom-0 p-6">
                    <span className="font-utility text-[0.625rem] tracking-[0.2em] text-stc-gold uppercase">
                      {meta.cat}
                    </span>
                    <span className="text-utility mt-2 block text-lg text-stc-white">
                      {meta.title}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </SectionBlock>
      </Container>
    </section>
  );
}
