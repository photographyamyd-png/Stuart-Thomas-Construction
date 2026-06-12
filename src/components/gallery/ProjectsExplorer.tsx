"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { GalleryItem, GalleryCategoryId } from "@/data/gallery";
import { galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";

type Props = {
  items: GalleryItem[];
  initialCategory?: GalleryCategoryId;
};

export function ProjectsExplorer({ items, initialCategory }: Props) {
  const [filter, setFilter] = useState<GalleryCategoryId | "all">(initialCategory ?? "all");
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
            "text-utility px-3 py-1.5 text-xs",
            filter === "all" ? "bg-stc-black text-role-body-on-dark" : "border border-stc-black/15 bg-stc-white text-role-body-on-light",
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
              "text-utility px-3 py-1.5 text-xs",
              filter === c.id ? "bg-stc-black text-role-body-on-dark" : "border border-stc-black/15 bg-stc-white text-role-body-on-light",
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
            className="mb-4 block w-full break-inside-avoid overflow-hidden border border-stc-black/15 bg-stc-white text-left"
          >
            <div className="relative aspect-[4/3] w-full sm:aspect-auto sm:min-h-[200px]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={70}
              />
            </div>
            <p className="text-utility p-2 text-xs text-role-body-on-light">
              {item.title}
            </p>
          </button>
        ))}
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stc-black/90 p-4"
          role="dialog"
          aria-modal
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-role-headline-on-dark"
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
