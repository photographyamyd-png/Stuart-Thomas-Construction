import Image from "next/image";
import { EditorialAccentRule } from "@/components/stc/primitives/EditorialAccentRule";
import { cn } from "@/lib/utils";

export type EditorialCopyTone = "white" | "forest";

const copyTones: Record<EditorialCopyTone, string> = {
  white: "bg-stc-white text-charcoal",
  forest: "bg-forest text-white",
};

export function EditorialSplitPanel({
  copyTone = "white",
  kicker,
  headline,
  body,
  actions,
  children,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  imagePriority = false,
  minHeight = "min-h-[750px]",
  className,
}: {
  copyTone?: EditorialCopyTone;
  kicker?: string;
  headline: React.ReactNode;
  body?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  imagePriority?: boolean;
  minHeight?: string;
  className?: string;
}) {
  const copyPanel = (
    <div
      className={cn(
        "flex flex-col justify-center gap-5 p-12 lg:gap-6 lg:p-24",
        copyTones[copyTone],
      )}
    >
      {kicker ? (
        <span
          className={cn(
            "stc-mockup-eyebrow",
            copyTone === "forest" && "text-copper",
          )}
        >
          {kicker}
        </span>
      ) : null}
      {kicker ? <EditorialAccentRule /> : null}
      <div className="stc-mockup-display text-5xl leading-[0.85] lg:text-7xl">{headline}</div>
      {body ? (
        <p
          className={cn(
            "stc-mockup-body mt-6 max-w-xl text-lg leading-relaxed",
            copyTone === "forest" ? "text-white/90" : "",
          )}
        >
          {body}
        </p>
      ) : null}
      {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      {children}
    </div>
  );

  const imagePanel = (
    <div className="relative min-h-[400px] w-full lg:min-h-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={imagePriority}
      />
    </div>
  );

  return (
    <section className={cn("w-full", className)}>
      <div className={cn("grid w-full grid-cols-1 lg:grid-cols-2", minHeight)}>
        {imagePosition === "left" ? (
          <>
            {imagePanel}
            {copyPanel}
          </>
        ) : (
          <>
            {copyPanel}
            {imagePanel}
          </>
        )}
      </div>
    </section>
  );
}
