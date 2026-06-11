import { cn } from "@/lib/utils";

type Tone = "dark" | "light" | "beige" | "green";

const toneBg: Record<Tone, string> = {
  dark: "bg-stc-black text-stc-white",
  light: "bg-stc-white text-stc-black",
  beige: "bg-stc-beige text-stc-black",
  green: "bg-stc-green text-stc-white",
};

export function LayeredSection({
  id,
  tone = "light",
  className,
  background,
  panel,
  children,
  pad = "default",
  edge = "hard",
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  background?: React.ReactNode;
  panel?: React.ReactNode;
  children: React.ReactNode;
  pad?: "default" | "none" | "lg";
  /** Hard edge: no vertical margin between monolithic color blocks */
  edge?: "hard" | "soft";
}) {
  const padClass =
    pad === "none" ? "" : pad === "lg" ? "py-20 sm:py-28" : "py-14 sm:py-20";

  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden",
        edge === "hard" && "m-0",
        toneBg[tone],
        className,
      )}
    >
      {background && <div className="absolute inset-0 z-0">{background}</div>}
      {panel && <div className="absolute inset-0 z-[1] pointer-events-none">{panel}</div>}
      <div className={cn("relative z-[2]", padClass)}>{children}</div>
    </section>
  );
}
