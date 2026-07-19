import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { BreadcrumbItem } from "@/lib/seo";

type Props = {
  title: string;
  /** Gold accent span appended after title */
  titleAccent?: string;
  eyebrow?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  breadcrumbs?: BreadcrumbItem[];
  /** Primary conversion CTA — Appeal stack */
  ctaHref?: string;
  ctaLabel?: string;
  children?: ReactNode;
};

/**
 * Interior page hero — Appeal atmosphere (grain, seam, centered stack, enter).
 */
export function EnterprisePageHero({
  title,
  titleAccent,
  eyebrow,
  description,
  imageSrc,
  imageAlt = "",
  breadcrumbs,
  ctaHref,
  ctaLabel = "Get a Quote",
  children,
}: Props) {
  const hasCta = Boolean(ctaHref);
  const hasChildren = Boolean(children);

  return (
    <section
      className={`stc-enterprise-hero turner-band turner-band--dark${imageSrc ? " stc-enterprise-hero--media" : ""}`}
      aria-labelledby="enterprise-hero-heading"
    >
      {imageSrc ? (
        <>
          <Image src={imageSrc} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
          <div className="stc-enterprise-hero__scrim" aria-hidden />
        </>
      ) : null}
      <div className="stc-enterprise-hero__grain" aria-hidden />
      <div className="stc-enterprise-hero__seam" aria-hidden />
      <div className="container stc-enterprise-hero__copy">
        {breadcrumbs ? (
          <nav
            className="stc-svc-page__breadcrumb stc-enterprise-hero__enter stc-enterprise-hero__enter--1"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((item, i) => (
              <span key={item.path}>
                {i > 0 ? " / " : null}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={item.path}>{item.name}</Link>
                ) : (
                  <span>{item.name}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        {eyebrow ? (
          <p className="eyebrow eyebrow--on-dark stc-enterprise-hero__enter stc-enterprise-hero__enter--2">
            {eyebrow}
          </p>
        ) : null}
        <h1
          id="enterprise-hero-heading"
          className={`text-display stc-enterprise-hero__enter stc-enterprise-hero__enter--3${eyebrow ? " stack-eyebrow" : ""}`}
        >
          {title}
          {titleAccent ? (
            <>
              {" "}
              <span className="text-accent-gold">{titleAccent}</span>
            </>
          ) : null}
        </h1>
        {description ? (
          <p className="stc-enterprise-hero__lead wf-type-supporting stc-enterprise-hero__enter stc-enterprise-hero__enter--4">
            {description}
          </p>
        ) : null}
        {hasCta || hasChildren ? (
          <div className="stc-enterprise-hero__children stc-enterprise-hero__enter stc-enterprise-hero__enter--5">
            {hasCta ? (
              <Link href={ctaHref!} className="btn-accent btn-accent--lg cta-inline">
                {ctaLabel}
              </Link>
            ) : null}
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
