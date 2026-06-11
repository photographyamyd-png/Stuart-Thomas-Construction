"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { GalleryItem, GalleryCategoryId } from "@/data/gallery";
import { galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function MediaGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<GalleryCategoryId | "all">("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => i.categories.includes(filter));
  }, [items, filter]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={cn(
            "stc-label min-h-10 px-4 transition-colors",
            filter === "all"
              ? "bg-stc-charcoal text-stc-white"
              : "border-2 border-stc-border-strong bg-stc-white text-stc-charcoal hover:border-stc-lime",
          )}
        >
          All ({items.length})
        </button>
        {galleryCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setFilter(c.id)}
            className={cn(
              "stc-label min-h-10 px-4 transition-colors",
              filter === c.id
                ? "bg-stc-charcoal text-stc-white"
                : "border-2 border-stc-border-strong bg-stc-white text-stc-charcoal hover:border-stc-lime",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightbox(item)}
            className="mb-4 block w-full break-inside-avoid border-2 border-stc-border-strong bg-stc-charcoal text-left"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={75}
              />
            </div>
            <p className="border-t-2 border-stc-lime bg-stc-charcoal px-3 py-2 font-display text-xs font-bold uppercase tracking-wide text-stc-white">
              {item.title}
            </p>
          </button>
        ))}
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stc-charcoal/95 p-4"
          role="dialog"
          aria-modal
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-stc-white"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="size-8" />
          </button>
          <div className="relative max-h-[90vh] max-w-5xl flex-1">
            <Image
              src={lightbox.image}
              alt={lightbox.alt}
              width={1920}
              height={1280}
              className="max-h-[85vh] w-auto object-contain"
              quality={85}
            />
          </div>
        </div>
      )}
    </>
  );
}
