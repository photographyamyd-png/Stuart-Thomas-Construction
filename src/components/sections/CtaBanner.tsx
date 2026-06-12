import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { LayeredSection } from "@/components/layout/LayeredSection";

export function CtaBanner({
  headline,
  subline,
  buttonLabel = "Get in Touch",
  buttonHref = "/contact",
  imageSrc,
  variant = "default",
}: {
  headline: string;
  subline?: string;
  buttonLabel?: string;
  buttonHref?: string;
  imageSrc?: string;
  variant?: "default" | "solidGreen";
}) {
  if (variant === "solidGreen") {
    return (
      <section className="bg-stc-green text-role-body-on-dark">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 px-6 py-14 sm:px-10 lg:flex-row lg:items-center lg:px-20 lg:py-16">
            <div>
              <h2 className="text-display text-role-headline-on-dark">{headline}</h2>
              {subline && (
                <p className="mt-2 font-body text-base text-role-statement-on-dark">{subline}</p>
              )}
            </div>
            <Button asChild variant="stcSolid" size="lg" className="shrink-0">
              <Link href={buttonHref}>{buttonLabel}</Link>
            </Button>
          </div>
        </Container>
      </section>
    );
  }

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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display text-role-headline-on-dark">{headline}</h2>
          {subline && (
            <p className="mt-4 font-body text-base leading-relaxed text-role-statement-on-dark">{subline}</p>
          )}
          <Button asChild variant="stcSolid" size="lg" className="mt-8">
            <Link href={buttonHref}>{buttonLabel}</Link>
          </Button>
        </div>
      </Container>
    </LayeredSection>
  );
}
