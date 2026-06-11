"use client";

import { SectionReveal } from "@/components/layout/SectionReveal";
import { cn } from "@/lib/utils";

export function LayerReveal({
  children,
  className,
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  return (
    <SectionReveal className={cn(className)} stagger={stagger}>
      {children}
    </SectionReveal>
  );
}
