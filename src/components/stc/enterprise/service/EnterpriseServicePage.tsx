import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { areas } from "@/data/areas";
import { conversion } from "@/data/conversion";
import { media } from "@/data/media";
import type { ServiceDetail } from "@/data/services";
import { getAdjacentServices, getServiceBySlug } from "@/data/services";
import { ServicePager } from "./ServicePager";

type Props = {
  service: ServiceDetail;
};

export function EnterpriseServicePage({ service }: Props) {
  const heroSrc = media.serviceDefaults[service.slug];
  const { prev, next } = getAdjacentServices(service.slug);
  const capImages = [
    heroSrc,
    media.serviceDefaults[service.relatedSlugs[0] ?? service.slug] ?? heroSrc,
    media.featuredGalleryPaths[2] ?? heroSrc,
  ];

  return (
    <>
      <section className="stc-svc-page__hero turner-band turner-band--dark" aria-labelledby="svc-heading">
        <Image src={heroSrc} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="stc-svc-page__hero-scrim" aria-hidden />
        <div className="stc-svc-page__hero-copy">
          <Link className="stc-page-back" href="/">
            ← Back to homepage
          </Link>
          <p className="stc-svc-page__breadcrumb">
            <Link href="/services">Services</Link> / {service.title}
          </p>
          <p className="eyebrow eyebrow--on-dark">Structural Stone</p>
          <h1 id="svc-heading" className="text-display stack-eyebrow">
            {service.title}
          </h1>
          <p className="lead-on-dark">{service.shortDescription}</p>
          <Link href="/contact" className="btn-green stack-cta cta-inline">
            Get a Quote
          </Link>
        </div>
      </section>

      <section className="stc-svc-page__intro turner-band turner-band--light">
        <div className="container">
          <div className="stc-svc-page__intro-grid">
            <div>
              <p className="eyebrow green">Overview</p>
              <h2 className="text-display text-display--section stack-title">
                Built To Read As <span className="text-accent-green">Permanent</span>
              </h2>
              {service.overview.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div>
              <p className="eyebrow green">Why STC</p>
              <ul className="stc-svc-page__benefits stack-title">
                {service.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="turner-band turner-band--light" aria-label="Capabilities">
        {service.subServices.map((sub, i) => (
          <div
            key={sub.title}
            className={`stc-svc-page__cap-row${i % 2 === 1 ? " stc-svc-page__cap-row--flip" : ""}`}
          >
            <div className="stc-svc-page__cap-media">
              <Image src={capImages[i] ?? heroSrc} alt="" fill loading="lazy" sizes="50vw" className="object-cover" />
            </div>
            <div className="stc-svc-page__cap-copy">
              <p className="eyebrow green">Capability</p>
              <h3>{sub.title}</h3>
              <p>{sub.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section
        className="stc-svc-page__process turner-band turner-band--dark turner-band--seam"
        aria-labelledby="process-heading"
      >
        <div className="container">
          <p className="eyebrow eyebrow--on-dark">Our Process</p>
          <h2 id="process-heading" className="text-display stack-title">
            How We <span className="text-accent-gold">Build</span>
          </h2>
          <ol className="stc-svc-page__process-grid">
            {service.process.map((step, i) => (
              <li key={step.title} className="stc-svc-page__process-step">
                <span className="num">0{i + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {service.faqs.length > 0 && (
        <section className="stc-svc-page__faq turner-band turner-band--light">
          <div className="container">
            <p className="eyebrow green">FAQ</p>
            <h2 className="text-display text-display--faq stack-title">
              Common <span className="text-accent-green">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="enterprise-faq">
              {service.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} className="enterprise-faq__item">
                  <AccordionTrigger className="enterprise-faq__trigger">{f.q}</AccordionTrigger>
                  <AccordionContent className="enterprise-faq__content">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <section className="stc-svc-page__related turner-band turner-band--light">
        <div className="container">
          <p className="eyebrow">Related Services</p>
          <ul className="stc-svc-page__related-pills">
            {service.relatedSlugs.map((rel) => {
              const r = getServiceBySlug(rel);
              if (!r) return null;
              return (
                <li key={rel}>
                  <Link href={`/services/${rel}`}>{r.title}</Link>
                </li>
              );
            })}
          </ul>
          <p className="eyebrow stack-section-lg">Areas We Serve</p>
          <ul className="stc-svc-page__related-pills">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link href={`/areas/${area.slug}`}>{area.name}</Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-green stack-section cta-inline">
            {conversion.serviceCta.button}
          </Link>
        </div>
      </section>

      <ServicePager prev={prev} next={next} />
    </>
  );
}
