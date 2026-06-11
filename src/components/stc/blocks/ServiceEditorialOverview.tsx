import Image from "next/image";
import Link from "next/link";
import { EditorialAccentRule } from "@/components/stc/primitives/EditorialAccentRule";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import type { BreadcrumbItem } from "@/lib/seo";
import type { ServiceDetail } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceEditorialOverview({
  service,
  imageSrc,
  imageAlt,
  breadcrumbs,
}: {
  service: ServiceDetail;
  imageSrc: string;
  imageAlt: string;
  breadcrumbs?: BreadcrumbItem[];
}) {
  const overviewLead = service.overview[0] ?? service.shortDescription;
  const listItems: { num: string; text: string }[] = [];
  for (const text of service.overview.slice(1)) {
    if (listItems.length >= 3) break;
    listItems.push({ num: String(listItems.length + 1).padStart(2, "0"), text });
  }
  for (const text of service.benefits) {
    if (listItems.length >= 3) break;
    listItems.push({ num: String(listItems.length + 1).padStart(2, "0"), text });
  }

  return (
    <section className="w-full bg-stc-white">
      {breadcrumbs ? (
        <div className="border-b border-copper/20 bg-stc-white px-6 py-4 lg:px-12">
          <PageBreadcrumbs items={breadcrumbs} />
        </div>
      ) : null}
      <div className="grid min-h-[800px] w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 bg-stc-white p-12 lg:gap-8 lg:p-20">
          <div className="flex flex-col gap-5">
            <span className="stc-mockup-eyebrow">Service Detail</span>
            <EditorialAccentRule />
            <h1 className="stc-mockup-display text-5xl leading-[0.85] text-forest lg:text-7xl">
              {service.title}
            </h1>
            <p className="stc-mockup-body max-w-[44ch] text-lg leading-relaxed">
              {service.shortDescription}
            </p>
          </div>

          <div className="flex flex-col gap-5 border-t border-copper/30 pt-8">
            <h2 className="stc-mockup-headline text-3xl leading-[0.85] text-charcoal">Overview</h2>
            <EditorialAccentRule />
            <p className="stc-mockup-body max-w-[44ch] text-lg leading-relaxed text-charcoal">
              {overviewLead}
            </p>

            <div className="flex w-full max-w-2xl flex-col">
              {listItems.map((item, index) => (
                <div
                  key={item.num}
                  className={cn(
                    "flex items-start gap-5 border-t border-copper/30 py-6",
                    index === listItems.length - 1 && "border-b border-copper/30",
                  )}
                >
                  <span className="w-12 shrink-0 font-oswald text-2xl font-bold leading-[0.85] text-copper">
                    {item.num}
                  </span>
                  <p className="stc-mockup-body text-base leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="stc-mockup-eyebrow inline-block text-copper hover:text-forest"
            >
              Request a quote →
            </Link>
          </div>
        </div>

        <div className="relative min-h-[500px] w-full lg:min-h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
