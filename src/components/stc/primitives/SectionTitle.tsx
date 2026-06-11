import { cn } from "@/lib/utils";

export function SectionTitle({
  label,
  title,
  description,
  tone = "dark",
  palette = "production",
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
  /** production = lime/Roboto; mockup = copper/Oswald (Greenick wireframes) */
  palette?: "production" | "mockup";
  className?: string;
}) {
  const isLight = tone === "light";
  const isMockup = palette === "mockup";

  return (
    <div className={cn("max-w-3xl", className)}>
      {label ? (
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "h-0 w-12 shrink-0 border-b-2",
              isMockup ? "border-copper" : "border-stc-lime bg-transparent",
            )}
            aria-hidden
          />
          <span
            className={cn(
              isMockup
                ? "stc-mockup-eyebrow"
                : cn("stc-label", isLight ? "text-stc-lime" : "text-stc-lime"),
            )}
          >
            {label}
          </span>
        </div>
      ) : null}
      <h2
        className={cn(
          isMockup
            ? "stc-mockup-headline mt-4 text-2xl sm:text-3xl lg:text-4xl"
            : "stc-display-md mt-4",
          isLight ? "text-white" : isMockup ? "text-charcoal" : "text-stc-charcoal",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            isMockup ? "stc-mockup-body mt-4 max-w-2xl" : "stc-body mt-4 max-w-2xl",
            isLight ? "text-white/90" : isMockup ? "text-charcoal/80" : "text-stc-charcoal/70",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
