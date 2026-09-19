"use client";

import { useMemo, useState } from "react";
import { snowFaqTopics } from "@/data/snow-page";

type FaqItem = {
  q: string;
  a: string;
};

type Props = {
  items: FaqItem[];
};

/**
 * Compact snow FAQ — sticky topic tabs + 2–3 accordion items per topic.
 * Keeps the band short; remaining questions live behind the tab strip.
 */
export function SnowFaqBand({ items }: Props) {
  const [topicId, setTopicId] = useState<(typeof snowFaqTopics)[number]["id"]>(
    snowFaqTopics[0].id,
  );
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const topic = snowFaqTopics.find((t) => t.id === topicId) ?? snowFaqTopics[0];
  const visible = useMemo(() => {
    return topic.indices.flatMap((i) => {
      const item = items[i];
      return item ? [{ item, originalIndex: i as number }] : [];
    });
  }, [items, topic.indices]);

  function selectTopic(id: (typeof snowFaqTopics)[number]["id"]) {
    setTopicId(id);
    setOpenIndex(0);
  }

  return (
    <section
      className="stc-snow-faq turner-band turner-band--light turner-band--seam"
      aria-labelledby="snow-faq-heading"
    >
      <div className="container stc-snow-faq__layout">
        <aside className="stc-snow-faq__aside">
          <p className="eyebrow">FAQ</p>
          <h2 id="snow-faq-heading" className="text-display text-display--section">
            Common <span className="text-accent-gold">Questions</span>
          </h2>
          <p className="wf-type-supporting stc-snow-faq__hint">
            Pick a topic — only a few answers show at a time.
          </p>
          <div
            className="stc-snow-faq__tabs"
            role="tablist"
            aria-label="FAQ topics"
          >
            {snowFaqTopics.map((t) => {
              const selected = t.id === topicId;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`snow-faq-tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls="snow-faq-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`stc-snow-faq__tab${selected ? " is-active" : ""}`}
                  onClick={() => selectTopic(t.id)}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </aside>

        <div
          className="stc-snow-faq__panel"
          id="snow-faq-panel"
          role="tabpanel"
          aria-labelledby={`snow-faq-tab-${topicId}`}
        >
          <dl className="stc-snow-faq__list">
            {visible.map(({ item, originalIndex }, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={`${topicId}-${originalIndex}`}
                  className={`stc-snow-faq__item${isOpen ? " is-open" : ""}`}
                >
                  <dt>
                    <button
                      type="button"
                      className="stc-snow-faq__question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <span className="stc-snow-faq__num" aria-hidden>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="stc-snow-faq__q-text">{item.q}</span>
                      <span className="stc-snow-faq__icon" aria-hidden>
                        {isOpen ? "\u2212" : "+"}
                      </span>
                    </button>
                  </dt>
                  <dd
                    className={`stc-snow-faq__answer${isOpen ? " is-open" : ""}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="stc-snow-faq__answer-inner">
                      <p className="wf-type-supporting">{item.a}</p>
                    </div>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
