import { Container } from "@/components/layout/Container";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { homeProcess } from "@/data/sections";

export function ProcessSection() {
  return (
    <section id="process" className="bg-stc-black text-stc-white">
      <Container>
        <SectionBlock pad="lg">
          <SectionEyebrow>How We Work</SectionEyebrow>
          <h2 className="text-display mt-6">
            Our <span className="text-stc-gold">Process</span>
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
            {homeProcess.map((step, i) => (
              <li
                key={step.title}
                className={`relative border-t-[3px] bg-stc-green/15 p-7 ${
                  i === 0 ? "border-stc-gold bg-stc-green/5" : "border-stc-green"
                }`}
              >
                <span className="text-display pointer-events-none absolute top-5 right-5 text-5xl text-stc-gold/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-utility relative text-base">{step.title}</h3>
                <p className="relative mt-3 font-body text-sm leading-relaxed text-stc-white/55">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </SectionBlock>
      </Container>
    </section>
  );
}
