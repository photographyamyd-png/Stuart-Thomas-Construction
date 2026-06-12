import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  accent = "gold",
  className,
}: {
  children: React.ReactNode;
  accent?: "gold" | "green";
  className?: string;
}) {
  const lineClass = accent === "green" ? "bg-stc-green" : "bg-stc-gold";
  const textClass = accent === "green" ? "text-stc-green" : "text-accent-gold";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("h-0.5 w-8 shrink-0 sm:w-10", lineClass)} aria-hidden />
      <span
        className={cn(
          "font-utility text-[0.6875rem] font-semibold tracking-[0.28em] uppercase sm:text-xs",
          textClass,
        )}
      >
        {children}
      </span>
    </div>
  );
}
