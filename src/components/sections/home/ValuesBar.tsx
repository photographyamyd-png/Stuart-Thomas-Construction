import { Container } from "@/components/layout/Container";
import { LayeredSection } from "@/components/layout/LayeredSection";
import { values } from "@/data/sections";
import { Shield, Award, Clock, Hammer, Users } from "lucide-react";

const icons = [Shield, Award, Clock, Hammer, Users];

export function ValuesBar() {
  return (
    <LayeredSection id="values" tone="beige" pad="default">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {values.map((v, i) => {
            const Icon = icons[i] ?? Shield;
            return (
              <div key={v.title} className="text-center lg:text-left">
                <Icon className="mx-auto size-8 text-stc-green lg:mx-0" strokeWidth={1.25} />
                <h3 className="text-utility mt-4 text-stc-black">{v.title}</h3>
                <p className="mt-2 font-body text-xs leading-relaxed text-stc-black/65">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </LayeredSection>
  );
}
