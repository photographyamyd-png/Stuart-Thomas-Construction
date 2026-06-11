import { Container } from "@/components/layout/Container";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { featuredTestimonial } from "@/data/sections";

export function TestimonialStrip() {
  const parts = featuredTestimonial.quote.split(featuredTestimonial.highlight);

  return (
    <section className="border-y border-stc-white/10 bg-stc-black/80">
      <Container>
        <SectionBlock>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-utility text-xl leading-relaxed font-normal text-stc-white sm:text-2xl lg:text-3xl">
              &ldquo;{parts[0]}
              <span className="font-semibold text-stc-gold">{featuredTestimonial.highlight}</span>
              {parts[1]}&rdquo;
            </p>
            <footer className="text-utility mt-6 text-xs tracking-[0.2em] text-stc-white/45 uppercase">
              — {featuredTestimonial.author}
            </footer>
          </blockquote>
        </SectionBlock>
      </Container>
    </section>
  );
}
