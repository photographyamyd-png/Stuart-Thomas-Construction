import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  align = "center",
  tone = "green",
  rule = false,
  className,
}: {
  children: React.ReactNode;
  align?: "center" | "left";
  tone?: "green" | "black" | "white";
  rule?: boolean;
  className?: string;
}) {
  const toneClass = {
    green: "text-stc-green",
    black: "text-stc-black",
    white: "text-stc-white",
  }[tone];

  return (
    <div
      className={cn(
        align === "center" && "text-center",
        rule && "border-b border-stc-black/15 pb-4",
        className,
      )}
    >
      <h2 className={cn("text-utility", toneClass)}>{children}</h2>
    </div>
  );
}
