"use client";

import Link from "next/link";
import { conversion } from "@/data/archive/copy-baseline/conversion";
import { site } from "@/data/archive/copy-baseline/site";
import { COPY_BASELINE_PREFIX as B } from "@/data/archive/copy-baseline/constants";

export function BaselineConversionBar() {
  return (
    <section
      className="stc-prefooter-cta turner-band turner-band--green turner-band--seam"
      aria-label="Contact call to action"
    >
      <div className="stc-prefooter-cta__inner container">
        <div className="stc-prefooter-cta__copy">
          <p className="eyebrow eyebrow--on-dark">Talk to us</p>
          <h2 className="stc-prefooter-cta__headline">{conversion.homeCta.headline}</h2>
          <p className="stc-prefooter-cta__subline">{conversion.homeCta.subline}</p>
        </div>
        <div className="stc-prefooter-cta__actions">
          <a className="btn-accent btn-accent--lg" href={`tel:${site.phoneTel}`}>
            Call Us
          </a>
          <Link className="btn-ghost" href={`${B}/contact`}>
            {conversion.homeCta.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
