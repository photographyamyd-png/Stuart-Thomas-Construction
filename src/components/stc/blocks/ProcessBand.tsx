import { Container } from "@/components/layout/Container";
import { Band } from "@/components/stc/primitives/Band";
import { LayerStack } from "@/components/stc/primitives/LayerStack";
import { SectionTitle } from "@/components/stc/primitives/SectionTitle";
import { media } from "@/data/media";
import { cn } from "@/lib/utils";

export function ProcessBand({
  steps,
  label = "Method",
  title = "How We Work",
  imageSrc = media.integritySection,
  palette = "production",
}: {
  steps: readonly { title: string; description: string }[];
  label?: string;
  title?: string;
  imageSrc?: string;
  palette?: "production" | "mockup";
}) {
  const mockup = palette === "mockup";
  const borderClass = mockup ? "border-copper/30" : "border-stc-border-strong";
  const divideClass = mockup ? "divide-copper/30" : "divide-stc-border-strong";

  return (
    <Band tone="white" pad="lg" border="y">
      <Container>
        <div className={cn("grid gap-px border-2 bg-stc-border-strong lg:grid-cols-2", borderClass)}>
          <LayerStack
            imageSrc={imageSrc}
            imageAlt="Construction craftsmanship on site"
            scrim="tile"
            frame
            className="relative min-h-[320px] lg:min-h-full"
            imageSizes="(max-width: 1024px) 100vw, 50vw"
            contentClassName="justify-end p-6 sm:p-8"
          >
            <p className={cn(mockup ? "stc-mockup-eyebrow text-copper" : "stc-label text-stc-lime")}>
              On Site
            </p>
            <p
              className={cn(
                "mt-2 text-xl text-stc-white sm:text-2xl",
                mockup ? "stc-mockup-headline" : "stc-display-md",
              )}
            >
              Built With Discipline
            </p>
          </LayerStack>

          <div className="bg-stc-white p-6 sm:p-8 lg:p-10">
            <SectionTitle label={label} title={title} palette={palette} />
            <ol className={cn("mt-8 space-y-0 border-y", divideClass, borderClass)}>
              {steps.map((step, i) => (
                <li key={step.title} className={cn("flex gap-5 py-6 sm:gap-6 sm:py-7", divideClass, i > 0 && "border-t")}>
                  <span
                    className={cn(
                      "text-3xl font-bold leading-[0.85] sm:text-4xl",
                      mockup ? "font-oswald text-copper" : "font-display text-stc-lime/40",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={cn(mockup ? "stc-mockup-eyebrow text-charcoal" : "stc-label text-stc-charcoal")}>
                      {step.title}
                    </h3>
                    <p className={cn("mt-2", mockup ? "stc-mockup-body text-base" : "stc-body-sm text-stc-charcoal/70")}>
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Band>
  );
}
