import { cn } from "@/lib/utils";

export function SectionBlock({
  children,
  className,
  pad = "default",
}: {
  children: React.ReactNode;
  className?: string;
  pad?: "default" | "lg" | "none";
}) {
  const padClass =
    pad === "none" ? "" : pad === "lg" ? "py-20 sm:py-28" : "py-16 sm:py-20 lg:py-24";

  return <div className={cn(padClass, className)}>{children}</div>;
}
