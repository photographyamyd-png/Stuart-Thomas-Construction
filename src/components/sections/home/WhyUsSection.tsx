import { Container } from "@/components/layout/Container";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { whyUsCards } from "@/data/sections";

export function WhyUsSection() {
  return (
    <section className="bg-stc-black text-stc-white">
      <Container>
        <SectionBlock pad="lg">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionEyebrow>Why Stuart Thomas</SectionEyebrow>
              <h2 className="text-display mt-6">
                Quality.
                <br />
                <span className="text-stc-gold">Integrity.</span>
                <br />
                Results.
              </h2>
              <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-stc-white/75">
                We have built our reputation one project at a time. Every site is treated with
                the same respect and craftsmanship — from a cottage retaining wall to a full
                waterfront assembly.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
              {whyUsCards.map((card) => (
                <div
                  key={card.num}
                  className="relative border-l-[3px] border-stc-gold bg-stc-green/20 p-7"
                >
                  <span className="text-display pointer-events-none absolute top-4 right-4 text-4xl text-stc-gold/20">
                    {card.num}
                  </span>
                  <h3 className="text-utility relative text-base text-stc-white">{card.title}</h3>
                  <p className="relative mt-3 font-body text-sm leading-relaxed text-stc-white/55">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionBlock>
      </Container>
    </section>
  );
}
