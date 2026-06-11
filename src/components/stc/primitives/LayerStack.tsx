import Image from "next/image";
import { cn } from "@/lib/utils";

export type LayerScrim = "hero" | "tile" | "footer" | "cta" | "none";
export type LayerTone = "charcoal" | "green" | "white" | "surface";

const scrimClass: Record<Exclude<LayerScrim, "none">, string> = {
  hero: "stc-scrim-hero",
  tile: "stc-scrim-tile",
  footer: "stc-scrim-footer",
  cta: "stc-scrim-cta",
};

const toneClass: Record<LayerTone, string> = {
  charcoal: "bg-stc-charcoal",
  green: "bg-stc-dark-green",
  white: "bg-stc-white",
  surface: "bg-stc-surface",
};

export function LayerStack({
  imageSrc,
  imageAlt,
  scrim = "tile",
  frame = false,
  tone = "charcoal",
  interactive = false,
  priority = false,
  imageSizes = "100vw",
  imageQuality = 85,
  className,
  contentClassName,
  children,
}: {
  imageSrc?: string;
  imageAlt?: string;
  scrim?: LayerScrim;
  frame?: boolean;
  tone?: LayerTone;
  interactive?: boolean;
  priority?: boolean;
  imageSizes?: string;
  imageQuality?: number;
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}) {
  const group = interactive ? "group" : undefined;

  return (
    <div className={cn("relative isolate overflow-hidden", group, className)}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          fill
          priority={priority}
          className={cn(
            "object-cover",
            interactive && "transition-transform duration-700 ease-out group-hover:scale-105",
          )}
          sizes={imageSizes}
          quality={imageQuality}
        />
      ) : (
        <div className={cn("absolute inset-0", toneClass[tone])} aria-hidden />
      )}

      {scrim !== "none" ? (
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            scrimClass[scrim],
            interactive && "group-hover:opacity-90",
          )}
          aria-hidden
        />
      ) : null}

      {frame ? (
        <>
          <div className="pointer-events-none absolute inset-0 stc-frame-lime" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-stc-lime/60" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-stc-lime/40" aria-hidden />
        </>
      ) : null}

      {children ? (
        <div className={cn("relative z-10 flex h-full flex-col", contentClassName)}>{children}</div>
      ) : null}
    </div>
  );
}
