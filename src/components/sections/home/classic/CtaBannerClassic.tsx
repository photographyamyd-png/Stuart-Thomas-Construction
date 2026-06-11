import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { LayeredSection } from "@/components/layout/LayeredSection";

/** Pre–mockup CTA band: image background, headline left + gold button right on desktop. */
export function CtaBannerClassic({
  headline,
  subline,
  buttonLabel = "Get in Touch",
  buttonHref = "/contact",
  imageSrc,
}: {
  headline: string;
  subline?: string;
  buttonLabel?: string;
  buttonHref?: string;
  imageSrc?: string;
}) {
  return (
    <LayeredSection
      tone="dark"
      pad="lg"
      background={
        imageSrc ? (
          <>
            <Image src={imageSrc} alt="" fill className="object-cover" sizes="100vw" quality={80} />
            <div className="absolute inset-0 bg-stc-black/70" />
          </>
        ) : undefined
      }
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-display text-stc-white">{headline}</h2>
            {subline && (
              <p className="mt-3 font-body text-base leading-relaxed text-stc-white/85">
                {subline}
              </p>
            )}
          </div>
          <Button asChild variant="stcSolid" size="lg" className="shrink-0">
            <Link href={buttonHref}>{buttonLabel}</Link>
          </Button>
        </div>
      </Container>
    </LayeredSection>
  );
}
