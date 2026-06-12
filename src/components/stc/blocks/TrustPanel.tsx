import { Container } from "@/components/layout/Container";
import { Band } from "@/components/stc/primitives/Band";
import { LayerStack } from "@/components/stc/primitives/LayerStack";
import { SectionTitle } from "@/components/stc/primitives/SectionTitle";
import { media } from "@/data/media";

export function TrustPanel({
  items,
  imageSrc = media.aboutHero,
}: {
  items: readonly { title: string; description: string }[];
  imageSrc?: string;
}) {
  return (
    <Band tone="charcoal" pad="lg" border="y">
      <Container>
        <div className="relative overflow-hidden border-2 border-stc-white/10">
          <LayerStack
            imageSrc={imageSrc}
            imageAlt="Premium construction standards"
            scrim="hero"
            className="min-h-[520px] lg:min-h-[480px]"
            imageSizes="100vw"
          >
            <div className="grid h-full lg:grid-cols-2">
              <div className="flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                <SectionTitle label="Standards" title="Built On Substance" tone="light" />
              </div>
              <div className="flex flex-col justify-end gap-px bg-stc-charcoal/80 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
                {items.map((item) => (
                  <div
                    key={item.title}
                    className="border-l-4 border-stc-lime py-4 pl-5 first:pt-0 last:pb-0"
                  >
                    <h3 className="stc-display-md text-lg text-role-headline-on-dark sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="stc-body-sm mt-2 text-role-body-on-dark">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </LayerStack>
        </div>
      </Container>
    </Band>
  );
}
