import { cn } from "@/lib/utils";

export function EditorialAccentRule({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-0.5 w-12 bg-copper", className)}
      aria-hidden="true"
    />
  );
}
