import { Container } from "@/components/layout/Container";
import { LayeredSection } from "@/components/layout/LayeredSection";
import { stats } from "@/data/sections";

export function StatsRow() {
  return (
    <LayeredSection id="stats" tone="dark" pad="default" className="border-y border-stc-white/10">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-stat text-accent-gold">{s.value}</p>
              <p className="text-utility mt-2 text-role-statement-on-dark">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </LayeredSection>
  );
}
