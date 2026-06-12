import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BrandStamp } from "@/components/brand/BrandStamp";
import { Container } from "@/components/layout/Container";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { stats, values } from "@/data/sections";
import { media } from "@/data/media";

export function AboutPreview() {
  return (
    <section id="about-preview" className="bg-stc-black text-role-body-on-dark">
      <Container>
        <SectionBlock pad="lg">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative">
              <div className="relative aspect-square max-w-md overflow-hidden border border-stc-gold/20 bg-stc-green/20">
                <Image
                  src={media.integritySection}
                  alt="Stone craftsmanship"
                  fill
                  className="object-cover opacity-40"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <BrandStamp ring="beige" className="size-40 sm:size-48" />
                </div>
              </div>
              <div className="absolute -right-2 -bottom-4 flex size-24 flex-col items-center justify-center rounded-full bg-stc-green text-role-headline-on-dark sm:size-28">
                <span className="text-display text-3xl leading-none">{stats[0].value}</span>
                <span className="mt-1 text-center font-utility text-[0.5rem] leading-tight tracking-wide uppercase">
                  Years
                  <br />
                  Building
                </span>
              </div>
            </div>
            <div>
              <SectionEyebrow>About Us</SectionEyebrow>
              <h2 className="text-display mt-6">
                Built on <span className="text-accent-gold">Reputation</span>
              </h2>
              <p className="mt-6 font-body text-base leading-relaxed text-role-statement-on-dark">
                Stuart Thomas Construction combines heavy equipment capability with refined
                finishing — armour stone, waterfront assemblies, and full-site outdoor builds
                executed with discipline and honesty.
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-role-statement-on-dark">
                Based in South Georgian Bay, we plan every lift, drainage exit, and interface so
                the finished work reads permanent, not improvised.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {values.map((v) => (
                  <li key={v.title} className="flex items-center gap-3">
                    <span className="size-2 shrink-0 rounded-full bg-stc-gold" aria-hidden />
                    <span className="font-utility text-sm tracking-wide text-role-body-on-dark uppercase">
                      {v.title} — {v.description}
                    </span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="stc" size="lg" className="mt-8">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </SectionBlock>
      </Container>
    </section>
  );
}
