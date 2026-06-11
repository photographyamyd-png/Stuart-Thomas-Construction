import Image from "next/image";
import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo";

type Props = {
  title: string;
  eyebrow?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
};

export function EnterprisePageHero({
  title,
  eyebrow,
  description,
  imageSrc,
  imageAlt = "",
  breadcrumbs,
  children,
}: Props) {
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
      <div className="container stc-enterprise-hero__copy">
        {breadcrumbs ? (
          <nav className="stc-svc-page__breadcrumb" aria-label="Breadcrumb">
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
        {eyebrow ? <p className="eyebrow eyebrow--on-dark">{eyebrow}</p> : null}
        <h1 id="enterprise-hero-heading" className={`text-display${eyebrow ? " stack-eyebrow" : ""}`}>
          {title}
        </h1>
        {description ? (
          <p className="stc-enterprise-hero__lead">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
