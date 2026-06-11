import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/seo";
import { JsonLdScript } from "./JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

export function PageBreadcrumbs({
  items,
  inverted = false,
}: {
  items: BreadcrumbItem[];
  inverted?: boolean;
}) {
  const muted = inverted ? "text-stc-white/55" : "text-stc-black/60";
  const current = inverted ? "text-stc-white" : "text-stc-black";
  return (
    <>
      <JsonLdScript data={buildBreadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className={`flex flex-wrap items-center gap-1 text-xs font-semibold uppercase tracking-wider ${muted}`}>
          {items.map((item, i) => (
            <li key={item.path} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="size-3 opacity-50" aria-hidden />}
              {i === items.length - 1 ? (
                <span aria-current="page" className={current}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-stc-lime">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
