"use client";

import { useState } from "react";
import { homepageFaq } from "@/data/conversion";

type Props = {
  /** Band fill — defaults to dark. Use light when the previous section is already dark. */
  band?: "dark" | "light";
};

export function FaqAccordion({ band = "dark" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const onDark = band === "dark";

  return (
    <section
      className={`stc-faq turner-band turner-band--${band} turner-band--seam`}
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="stc-faq__inner container">
        <p className={onDark ? "eyebrow eyebrow--on-dark" : "eyebrow"}>Common Questions</p>
        <h2 id="faq-heading" className="text-display">
          What Property Owners <span className="text-accent-gold">Ask</span>
        </h2>

        <dl className="stc-faq__list">
          {homepageFaq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`stc-faq__item${isOpen ? " is-open" : ""}`}>
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
                <dd
                  className="stc-faq__answer"
                  hidden={!isOpen}
                >
                  <p className="wf-type-supporting">{item.a}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
