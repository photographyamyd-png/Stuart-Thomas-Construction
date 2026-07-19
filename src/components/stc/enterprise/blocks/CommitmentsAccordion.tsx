"use client";

import Image from "next/image";
import { useState } from "react";
import { enterpriseCommitments } from "@/data/enterprise";
import { LinkArrow } from "../primitives";

export function CommitmentsAccordion() {
  const [activeId, setActiveId] = useState<string>(enterpriseCommitments[0].id);

  return (
    <section
      className="turner-commitments turner-band turner-band--light turner-band--seam"
      id="commitments"
      aria-labelledby="commitments-heading"
    >
      <div className="container">
        <p className="eyebrow" id="about">
          Why Georgian Bay homeowners hire us
        </p>
        <h2 id="commitments-heading" className="text-display stack-title">
          Why people hire us <span className="text-accent-gold">on the Bay</span>
        </h2>
        <div className="turner-commitments__layout" data-commitments>
          <ul className="turner-commitments__nav" role="tablist" aria-label="Commitment pillars">
            {enterpriseCommitments.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeId === item.id}
                  aria-controls={`panel-${item.id}`}
                  data-commitment={item.id}
                  onClick={() => setActiveId(item.id)}
                >
                  <span className="turner-commitments__num">0{item.id}</span> {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="turner-commitments__panels">
            {enterpriseCommitments.map((item) => {
              const active = activeId === item.id;
              return (
                <div
                  key={item.id}
                  className={`turner-commitments__panel${active ? " is-active" : ""}`}
                  role="tabpanel"
                  id={`panel-${item.id}`}
                  hidden={!active ? true : undefined}
                >
                  <div className="turner-commitments__panel-inner">
                    <div>
                      <p className="eyebrow eyebrow--plain">{item.label}</p>
                      <h3 className="text-display text-display--subsection">{item.title}</h3>
                      <p className="wf-type-supporting">{item.body}</p>
                      <LinkArrow href={item.cta.href}>{item.cta.label}</LinkArrow>
                    </div>
                    <Image
                      src={item.image}
                      alt=""
                      width={560}
                      height={400}
                      loading="lazy"
                      data-commitment-img={active ? true : undefined}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
