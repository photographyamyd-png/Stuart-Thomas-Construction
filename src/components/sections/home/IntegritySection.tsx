import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SplitContentSection } from "@/components/layout/SplitContentSection";

export function IntegritySection({ imageSrc }: { imageSrc: string }) {
  return (
    <SplitContentSection
      id="integrity"
      imageSrc={imageSrc}
      imageAlt="Stone walkway and landscape craftsmanship"
      imagePosition="right"
    >
      <h2 className="text-display text-role-headline-on-dark">Built on Integrity</h2>
      <p className="mt-5 font-body text-base leading-relaxed text-role-statement-on-dark">
        We combine heavy equipment capability with refined finishing — armour stone, waterfront
        assemblies, and full-site outdoor builds executed with discipline and honesty.
      </p>
      <Button asChild variant="stcLight" size="lg" className="mt-8">
        <Link href="/about">Learn More</Link>
      </Button>
    </SplitContentSection>
  );
}
