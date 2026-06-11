import { Container } from "@/components/layout/Container";
import { Band } from "@/components/stc/primitives/Band";

export function TestimonialCards({
  items,
}: {
  items: readonly { quote: string; name: string; context: string }[];
}) {
  return (
    <Band tone="white" pad="lg" id="testimonials">
      <Container>
        <h2 className="stc-display-md">Client Words</h2>
        <ul className="mt-10 grid gap-px border-2 border-stc-border-strong bg-stc-border-strong sm:grid-cols-3">
          {items.map((t) => (
            <li key={t.name} className="bg-stc-white p-6 sm:p-8">
              <blockquote className="stc-body text-stc-charcoal/80">&ldquo;{t.quote}&rdquo;</blockquote>
              <footer className="mt-6 border-t-2 border-stc-lime pt-4">
                <cite className="not-italic">
                  <span className="stc-label block text-stc-charcoal">{t.name}</span>
                  <span className="stc-body-sm mt-1 block text-stc-charcoal/55">{t.context}</span>
                </cite>
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </Band>
  );
}
