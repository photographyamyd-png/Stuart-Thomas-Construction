import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Band } from "@/components/stc/primitives/Band";
import { LayerStack } from "@/components/stc/primitives/LayerStack";
import { SectionTitle } from "@/components/stc/primitives/SectionTitle";
import { ActionCopper } from "@/components/stc/primitives/Action";
import { cta } from "@/data/nav";
import { cn } from "@/lib/utils";

type ProjectItem = { src: string; title: string; alt?: string };

function ProjectTile({
  item,
  size,
  className,
  mockup = false,
}: {
  item: ProjectItem;
  size: "hero" | "secondary";
  className?: string;
  mockup?: boolean;
}) {
  const isHero = size === "hero";

  return (
    <Link
      href="/projects"
      className={cn("group relative block min-h-[280px] overflow-hidden sm:min-h-[320px]", className)}
    >
      <LayerStack
        imageSrc={item.src}
        imageAlt={item.alt ?? item.title}
        scrim="tile"
        frame
        interactive
        imageSizes={isHero ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 50vw, 30vw"}
        className="h-full min-h-[inherit]"
        contentClassName="justify-end p-5 sm:p-6 lg:p-8"
      >
        <p className={cn("stc-mockup-eyebrow text-white/90", !mockup && "stc-label text-stc-lime/90")}>
          Project
        </p>
        <h3
          className={cn(
            "mt-2 font-bold uppercase tracking-wide text-stc-white transition-transform duration-300 group-hover:-translate-y-1",
            mockup ? "font-oswald" : "font-display",
            isHero ? "text-2xl sm:text-3xl lg:text-4xl" : "text-lg sm:text-xl",
          )}
        >
          {item.title}
        </h3>
        <div
          className={cn(
            "mt-4 h-0.5 w-12 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
            mockup ? "bg-copper" : "bg-stc-lime",
          )}
        />
      </LayerStack>
    </Link>
  );
}

export function ProjectShowcase({
  items,
  palette = "production",
}: {
  items: readonly ProjectItem[];
  palette?: "production" | "mockup";
}) {
  const mockup = palette === "mockup";
  const [hero, ...rest] = items;
  if (!hero) return null;

  const secondary = rest.slice(0, 2);

  return (
    <Band tone="white" pad="lg" border="y">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle label="Work" title="Recent Projects" palette={palette} />
          <ActionCopper href={cta.secondaryHref} className="shrink-0">
            {cta.secondaryLabel}
          </ActionCopper>
        </div>

        {/* Desktop asymmetric layout */}
        <div className="mt-10 hidden gap-px bg-charcoal/10 lg:grid lg:grid-cols-[1.55fr_1fr] lg:grid-rows-2 lg:min-h-[560px]">
          <ProjectTile item={hero} size="hero" className="row-span-2 min-h-[560px]" mockup={mockup} />
          {secondary[0] ? (
            <ProjectTile item={secondary[0]} size="secondary" className="min-h-[279px]" mockup={mockup} />
          ) : null}
          {secondary[1] ? (
            <ProjectTile item={secondary[1]} size="secondary" className="min-h-[279px]" mockup={mockup} />
          ) : null}
        </div>

        {/* Mobile / tablet scroll-snap strip */}
        <div className="-mx-[var(--container-pad,1rem)] mt-10 flex snap-x snap-mandatory gap-px overflow-x-auto bg-charcoal/10 px-[var(--container-pad,1rem)] pb-2 lg:hidden">
          {[hero, ...secondary].map((item, i) => (
            <div
              key={item.src}
              className={cn(
                "w-[85vw] shrink-0 snap-center sm:w-[70vw]",
                i === 0 && "w-[92vw] sm:w-[75vw]",
              )}
            >
              <ProjectTile
                item={item}
                size={i === 0 ? "hero" : "secondary"}
                className="min-h-[360px]"
                mockup={mockup}
              />
            </div>
          ))}
        </div>
      </Container>
    </Band>
  );
}
