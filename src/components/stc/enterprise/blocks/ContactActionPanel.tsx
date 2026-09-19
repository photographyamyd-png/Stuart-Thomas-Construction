import { site } from "@/data/site";
import { siteMailtoHref } from "@/lib/site-mailto";
import { LinkArrow } from "../primitives";

/**
 * Spacious dual Call / Email action panel for the contact page.
 * Email address is never shown — mailto only.
 */
export function ContactActionPanel() {
  return (
    <section
      className="stc-contact-actions-panel turner-band turner-band--light turner-band--seam"
      aria-labelledby="contact-actions-heading"
    >
      <div className="container stc-contact-actions-panel__inner">
        <header className="stc-contact-actions-panel__head">
          <p className="eyebrow">Ways to Reach Us</p>
          <h2 id="contact-actions-heading" className="text-display">
            Talk about your <span className="text-accent-gold">shoreline or yard</span>
          </h2>
          <p className="wf-type-supporting stc-contact-actions-panel__lead">
            Free site visit. Itemized quote. Pick the channel that works for you — we reply within
            one business day.
          </p>
        </header>

        <ul className="stc-contact-actions-panel__grid">
          <li className="stc-contact-actions-panel__card">
            <p className="stc-contact-actions-panel__label">Phone</p>
            <h3 className="stc-contact-actions-panel__title">Speak with us</h3>
            <p className="wf-type-supporting stc-contact-actions-panel__help">
              Weekday callbacks for Tiny Township, Wasaga Beach, and Collingwood properties.
            </p>
            <a href={`tel:${site.phoneTel}`} className="btn-green btn-green--lg stc-contact-actions-panel__btn">
              Call {site.phoneDisplay}
            </a>
          </li>
          <li className="stc-contact-actions-panel__card">
            <p className="stc-contact-actions-panel__label">Email</p>
            <h3 className="stc-contact-actions-panel__title">Send an inquiry</h3>
            <p className="wf-type-supporting stc-contact-actions-panel__help">
              Opens a pre-filled message in your mail app — location, project type, and timeline.
            </p>
            <a href={siteMailtoHref()} className="btn-accent btn-accent--lg stc-contact-actions-panel__btn">
              Email an inquiry
            </a>
          </li>
        </ul>

        <p className="stc-contact-actions-panel__secondary">
          <LinkArrow href="/services">Armour stone &amp; hardscaping</LinkArrow>
        </p>
      </div>
    </section>
  );
}
