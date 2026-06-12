import { Container } from "@/components/layout/Container";
import { Band } from "@/components/stc/primitives/Band";
import { LayerStack } from "@/components/stc/primitives/LayerStack";
import { ActionSolid } from "@/components/stc/primitives/Action";

export function QuoteBand({
  headline,
  subline,
  buttonLabel,
  buttonHref = "/contact",
  imageSrc,
}: {
  headline: string;
  subline?: string;
  buttonLabel: string;
  buttonHref?: string;
  imageSrc?: string;
}) {
  if (imageSrc) {
    return (
      <section className="relative overflow-hidden border-y-2 border-stc-lime/30">
        <LayerStack
          imageSrc={imageSrc}
          imageAlt=""
          scrim="cta"
          frame
          className="min-h-[280px] sm:min-h-[320px]"
          imageSizes="100vw"
          contentClassName="justify-center"
        >
          <Container className="py-16 sm:py-20">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="stc-display-lg text-role-headline-on-dark">{headline}</h2>
                {subline ? <p className="stc-body mt-4 text-role-statement-on-dark">{subline}</p> : null}
              </div>
              <ActionSolid href={buttonHref} className="shrink-0 px-10">
                {buttonLabel}
              </ActionSolid>
            </div>
          </Container>
        </LayerStack>
      </section>
    );
  }

  return (
    <Band tone="green" pad="default" border="none">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="stc-display-lg text-role-headline-on-dark">{headline}</h2>
            {subline ? <p className="stc-body mt-4 text-role-statement-on-dark">{subline}</p> : null}
          </div>
          <ActionSolid href={buttonHref} className="shrink-0 px-10">
            {buttonLabel}
          </ActionSolid>
        </div>
      </Container>
    </Band>
  );
}
