import Link from "next/link";
import { footerColumns, cta } from "@/data/nav";
import { site } from "@/data/site";

export function EnterpriseFooter() {
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
              <Link href="/contact">{cta.primaryLabel}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="turner-footer__cta container">
        <div className="turner-footer__cta-copy">
          <p className="eyebrow eyebrow--on-dark">From the field</p>
          <h3 className="text-display text-display--section">Project updates &amp; seasonal tips</h3>
          <p className="wf-type-supporting">Visual signup only — no backend yet. Call or use the contact form for project inquiries.</p>
        </div>
        <form className="turner-footer__newsletter" aria-label="Newsletter signup">
          <label className="turner-footer__sr-only" htmlFor="footer-email">
            Email address
          </label>
          <input id="footer-email" type="email" name="email" placeholder="Email address" autoComplete="email" />
          <button type="button" className="btn-green">
            Subscribe
          </button>
        </form>
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
