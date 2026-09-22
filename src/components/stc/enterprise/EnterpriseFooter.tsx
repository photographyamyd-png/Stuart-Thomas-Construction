"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerColumns, cta } from "@/data/nav";
import { site } from "@/data/site";
import { CONTACT_FORM_HREF, PREVIEW_3013_PATH } from "@/lib/contact-paths";
import { CtaLink } from "./primitives";

export function EnterpriseFooter() {
  const pathname = usePathname();
  if (pathname === PREVIEW_3013_PATH) return null;

  return (
    <footer className="turner-footer">
      <div className="container turner-footer__grid">
        <div className="turner-footer__col">
          <h3>Services</h3>
          <ul>
            {footerColumns.services.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="turner-footer__col">
          <h3>Company</h3>
          <ul>
            {footerColumns.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="turner-footer__col">
          <h3>Areas</h3>
          <ul>
            {footerColumns.areas.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="turner-footer__col">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <Link href={CONTACT_FORM_HREF}>Send a message</Link>
            </li>
            <li>
              <CtaLink href={cta.primaryHref}>{cta.primaryLabel}</CtaLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="turner-footer__cta">
        <div className="container turner-footer__cta-inner">
          <div className="turner-footer__cta-copy">
            <p className="eyebrow">Talk to us</p>
            <h3 className="text-display text-display--section">Questions about your property?</h3>
            <p className="wf-type-supporting">Call us for project questions — free site visit available.</p>
          </div>
          <div className="turner-footer__newsletter stc-contact-actions">
            <a href={`tel:${site.phoneTel}`} className="btn-green btn-green--lg">
              Call Us
            </a>
            <Link href={CONTACT_FORM_HREF} className="btn-ghost">
              Request a Site Consultation
            </Link>
          </div>
        </div>
      </div>
      <div className="turner-footer__legal">
        {footerColumns.legal.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <p className="turner-footer__bar">{site.tagline}</p>
    </footer>
  );
}
