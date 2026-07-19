"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { WorkDuoFrame } from "./ServiceWorkDuo";

type Props = {
  eyebrow: string;
  headline: string;
  statement: string;
  frames: WorkDuoFrame[];
  ctaHref?: string;
  ctaLabel?: string;
};

/**
 * Collage stage — stacked media planes + dark call card + docked light control.
 * Not “big image beside thumb rail.”
 */
export function ServiceWorkDuoStage({
  eyebrow,
  headline,
  statement,
  frames,
  ctaHref = "/projects",
  ctaLabel = "Browse finished job photos",
}: Props) {
  const [active, setActive] = useState(0);
  const current = frames[active] ?? frames[0];
  const backdrop = frames[(active + 1) % Math.max(frames.length, 1)] ?? current;
  if (!current) return null;

  return (
    <div className="stc-work-proof stc-work-proof--collage">
      {/* L1 — light chamber */}
      <div className="stc-work-proof__chamber">
        <header className="stc-work-proof__intro stc-work-proof__intro--compact">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="text-display text-display--section">{headline}</h2>
          <p className="stc-work-proof__lede wf-type-supporting">{statement}</p>
        </header>

        <div className="stc-work-proof__collage">
          {/* L2 — offset charcoal plate */}
          <div className="stc-work-proof__plate" aria-hidden />

          {/* L3 — stacked photographs */}
          {backdrop && backdrop.src !== current.src ? (
            <div className="stc-work-proof__collage-back">
              <Image
                src={backdrop.src}
                alt=""
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <div className="stc-work-proof__collage-front">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              priority
              sizes="60vw"
              className="object-cover"
            />
          </div>

          {/* L4 — dark call card overlapping collage */}
          <aside className="stc-work-proof__call">
            <p className="stc-work-proof__call-kicker">Now showing</p>
            <p className="stc-work-proof__call-title">{current.caption}</p>
            <p className="stc-work-proof__call-body">{current.alt}</p>
          </aside>
        </div>

        {/* Docked light control plane — bridges under collage */}
        <div className="stc-work-proof__dock">
          <div className="stc-work-proof__dock-tabs" role="tablist" aria-label="Finished scopes">
            {frames.map((frame, i) => {
              const isActive = i === active;
              return (
                <button
                  key={frame.caption}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`stc-work-proof__dock-tab${isActive ? " is-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className="stc-work-proof__scope-index" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {frame.caption}
                </button>
              );
            })}
          </div>
          <Link href={ctaHref} className="btn-accent stc-work-proof__dock-cta">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
