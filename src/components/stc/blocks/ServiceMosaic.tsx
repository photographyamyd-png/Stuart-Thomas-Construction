import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Band } from "@/components/stc/primitives/Band";
import { EditorialAccentRule } from "@/components/stc/primitives/EditorialAccentRule";
import { LayerStack } from "@/components/stc/primitives/LayerStack";
import { SectionTitle } from "@/components/stc/primitives/SectionTitle";
import { media } from "@/data/media";
import type { ServiceSlug } from "@/data/services";
import { cn } from "@/lib/utils";

type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
};

const bentoSpans: Record<string, string> = {
  "waterfront-stone-work":
    "col-span-2 row-span-2 min-h-[280px] sm:min-h-[320px] lg:min-h-[440px]",
  landscaping: "col-span-1 row-span-1 min-h-[180px] sm:min-h-[200px]",
  hardscaping: "col-span-1 row-span-1 min-h-[180px] sm:min-h-[200px]",
  excavation: "col-span-2 row-span-1 min-h-[180px] sm:min-h-[200px]",
  "armour-stone": "col-span-2 row-span-1 min-h-[180px] sm:min-h-[200px]",
  "commercial-snow-removal": "col-span-2 row-span-1 min-h-[180px] sm:min-h-[200px]",
};

const displayOrder: ServiceSlug[] = [
  "waterfront-stone-work",
  "landscaping",
  "hardscaping",
  "excavation",
  "armour-stone",
  "commercial-snow-removal",
];

function sortServices(services: readonly ServiceItem[]) {
  const order = new Map(displayOrder.map((slug, i) => [slug, i]));
  return [...services].sort(
    (a, b) => (order.get(a.slug as ServiceSlug) ?? 99) - (order.get(b.slug as ServiceSlug) ?? 99),
  );
}

function ServiceTile({
  service,
  variant,
  mockup = false,
}: {
  service: ServiceItem;
  variant: "full" | "compact";
  mockup?: boolean;
}) {
  const imageSrc =
    media.serviceDefaults[service.slug as ServiceSlug] ?? media.homeHero;
  const isLarge = service.slug === "waterfront-stone-work" && variant === "full";
  const spanClass =
    variant === "compact"
      ? "col-span-1 min-h-[200px] sm:min-h-[220px]"
      : (bentoSpans[service.slug] ?? "col-span-1 min-h-[180px]");

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn("group relative block overflow-hidden", spanClass)}
    >
      <LayerStack
        imageSrc={imageSrc}
        imageAlt={service.title}
        scrim="tile"
        frame
        interactive
        imageSizes={
          isLarge
            ? "(max-width: 1024px) 100vw, 50vw"
            : "(max-width: 640px) 50vw, 25vw"
        }
        className="h-full min-h-[inherit]"
        contentClassName="justify-end p-5 sm:p-6"
      >
        <div className="flex items-end justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-2">
            {mockup ? (
              <span className="stc-mockup-eyebrow text-[0.65rem] text-copper">Service</span>
            ) : null}
            <h3
              className={cn(
                mockup
                  ? "stc-mockup-headline text-role-headline-on-dark transition-transform duration-300 group-hover:-translate-y-0.5"
                  : "font-display font-bold uppercase tracking-wide text-role-headline-on-dark transition-transform duration-300 group-hover:-translate-y-0.5",
                isLarge ? "text-xl leading-[0.85] sm:text-2xl lg:text-3xl" : "text-base sm:text-lg",
              )}
            >
              {service.title}
            </h3>
            {mockup ? <EditorialAccentRule className="!w-8" /> : null}
            <p
              className={cn(
                "max-w-sm text-sm leading-relaxed",
                mockup
                  ? "stc-mockup-body stc-mockup-body--on-dark text-[0.9375rem]"
                  : "stc-body-sm text-stc-white/0 transition-all duration-300 group-hover:text-role-statement-on-dark group-focus-visible:text-role-statement-on-dark sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100",
              )}
            >
              {service.shortDescription}
            </p>
          </div>
          <ArrowUpRight
            className={cn(
              "size-5 shrink-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
              mockup ? "text-copper" : "text-stc-lime",
            )}
            strokeWidth={2}
          />
        </div>
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
            mockup ? "bg-copper" : "bg-stc-lime",
          )}
        />
      </LayerStack>
    </Link>
  );
}

export function ServiceMosaic({
  services,
  label = "Capabilities",
  title = "What We Build",
  variant = "full",
  palette = "production",
  bandTone = "white",
}: {
  services: readonly ServiceItem[];
  label?: string;
  title?: string;
  variant?: "full" | "compact";
  palette?: "production" | "mockup";
  bandTone?: "white" | "beige";
}) {
  const mockup = palette === "mockup";
  const sorted = sortServices(services);
  const gridClass =
    variant === "compact"
      ? "mt-10 grid grid-cols-1 gap-px bg-stc-border-strong sm:grid-cols-2 lg:grid-cols-3"
      : "mt-10 grid grid-cols-2 gap-px bg-stc-border-strong lg:grid-cols-4 lg:auto-rows-fr";

  return (
    <Band tone={bandTone} pad="lg" border="y">
      <Container>
        <SectionTitle label={label} title={title} palette={palette} />
        <div className={gridClass}>
          {sorted.map((service) => (
            <ServiceTile key={service.slug} service={service} variant={variant} mockup={mockup} />
          ))}
        </div>
      </Container>
    </Band>
  );
}
