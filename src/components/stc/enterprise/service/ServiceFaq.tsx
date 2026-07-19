"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

type Props = {
  items: FaqItem[];
  band?: "dark" | "light";
};

/**
 * Service FAQ — same open/close response as homepage FaqAccordion.
 */
export function ServiceFaq({ items, band = "dark" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const onDark = band === "dark";

  return (
    <section
      className={`stc-faq stc-svc-page__faq turner-band turner-band--${band} turner-band--seam`}
      aria-labelledby="svc-faq-heading"
    >
      <div className="stc-faq__inner container">
        <p className={onDark ? "eyebrow eyebrow--on-dark" : "eyebrow"}>FAQ</p>
        <h2 id="svc-faq-heading" className="text-display text-display--faq">
          Common <span className="text-accent-gold">Questions</span>
        </h2>

        <dl className="stc-faq__list">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className={`stc-faq__item${isOpen ? " is-open" : ""}`}>
                <dt>
                  <button
                    type="button"
                    className="stc-faq__question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    {item.q}
                    <span className="stc-faq__icon" aria-hidden>
                      {isOpen ? "\u2212" : "+"}
                    </span>
                  </button>
                </dt>
                <dd className={`stc-faq__answer${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
                  <div className="stc-faq__answer-inner">
                    <p className="wf-type-supporting">{item.a}</p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
