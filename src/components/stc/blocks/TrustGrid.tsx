import { Container } from "@/components/layout/Container";
import { Band } from "@/components/stc/primitives/Band";
import { SectionTitle } from "@/components/stc/primitives/SectionTitle";

export function TrustGrid({
  items,
}: {
  items: readonly { title: string; description: string }[];
}) {
  return (
    <Band tone="surface" pad="lg">
      <Container>
        <SectionTitle label="Standards" title="Built On Substance" />
        <div className="mt-10 grid gap-px border-2 border-stc-border-strong bg-stc-border-strong sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="border-l-4 border-stc-lime bg-stc-white p-8 sm:p-10">
              <h3 className="stc-display-md text-xl text-stc-charcoal">{item.title}</h3>
              <p className="stc-body mt-3 text-stc-charcoal/70">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Band>
  );
}
