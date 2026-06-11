import { cn } from "@/lib/utils";

export type BandTone = "white" | "surface" | "charcoal" | "green" | "forest" | "beige";

const tones: Record<BandTone, string> = {
  white: "bg-stc-white text-stc-charcoal border-stc-border-strong",
  surface: "bg-stc-surface text-stc-charcoal border-stc-border-strong",
  charcoal: "bg-stc-charcoal text-stc-white border-stc-charcoal",
  green: "bg-stc-dark-green text-stc-white border-stc-dark-green",
  forest: "bg-forest text-white border-forest",
  beige: "bg-beige text-charcoal border-stc-border-strong",
};

export function Band({
  tone = "white",
  pad = "default",
  border = "y",
  className,
  children,
  id,
}: {
  tone?: BandTone;
  pad?: "none" | "sm" | "default" | "lg";
  border?: "none" | "y" | "t" | "b";
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  const padClass =
    pad === "none"
      ? ""
      : pad === "sm"
        ? "py-10 sm:py-12"
        : pad === "lg"
          ? "py-24 sm:py-32"
          : "py-16 sm:py-20 lg:py-24";

  const borderClass =
    border === "y"
      ? "border-y"
      : border === "t"
        ? "border-t"
        : border === "b"
          ? "border-b"
          : "";

  return (
    <section id={id} className={cn(tones[tone], borderClass, padClass, className)}>
      {children}
    </section>
  );
}
