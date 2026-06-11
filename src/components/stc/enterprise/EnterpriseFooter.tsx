import Link from "next/link";
import { footerColumns } from "@/data/nav";
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
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Link href="/contact">Request a Quote</Link>
            </li>
          </ul>
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
