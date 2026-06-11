import { Container } from "@/components/layout/Container";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import type { BreadcrumbItem } from "@/lib/seo";
import { LayerStack } from "@/components/stc/primitives/LayerStack";
import { cn } from "@/lib/utils";

export function GateHero({
  title,
  description,
  imageSrc,
  imageAlt,
  breadcrumbs,
  meta,
  actions,
  compact = false,
  icon,
  footerSlot,
}: {
  title: React.ReactNode;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  breadcrumbs?: BreadcrumbItem[];
  meta?: string;
  actions?: React.ReactNode;
  compact?: boolean;
  icon?: React.ReactNode;
  footerSlot?: React.ReactNode;
}) {
  const height = compact
    ? "min-h-[38vh] sm:min-h-[42vh]"
    : "min-h-[100svh] sm:min-h-[92vh]";

  return (
    <section className={cn("relative flex flex-col bg-stc-charcoal", height)}>
      <LayerStack
        imageSrc={imageSrc}
        imageAlt={imageAlt ?? "Hero"}
        scrim={imageSrc ? "hero" : "none"}
        tone="charcoal"
        priority
        imageSizes="100vw"
        imageQuality={88}
        className="absolute inset-0"
      />

      <Container
        className={cn(
          "relative z-10 flex flex-1 flex-col justify-end pb-8 pt-28 sm:pb-12 sm:pt-32",
          compact && "justify-end pb-10 pt-24",
        )}
      >
        {breadcrumbs ? <PageBreadcrumbs items={breadcrumbs} inverted /> : null}
        {meta ? <p className="stc-label text-stc-lime">{meta}</p> : null}
        {icon ? <div className="mb-4 text-stc-lime">{icon}</div> : null}
        <h1 className={cn("stc-display-xl max-w-5xl text-stc-white", meta && "mt-3")}>
          {title}
        </h1>
        {description ? (
          <p className="stc-body-lg mt-5 max-w-xl text-stc-white/85">{description}</p>
        ) : null}
        {actions ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">{actions}</div>
        ) : null}
      </Container>

      {!compact && imageSrc ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1 bg-stc-lime" aria-hidden />
      ) : null}

      {footerSlot ? <div className="relative z-20">{footerSlot}</div> : null}
    </section>
  );
}
