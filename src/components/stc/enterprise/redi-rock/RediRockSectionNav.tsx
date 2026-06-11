"use client";

import { useEffect, useState } from "react";
import { rediRockSectionNav } from "@/data/redi-rock";

export function RediRockSectionNav() {
  const [active, setActive] = useState<string>(rediRockSectionNav[0].id);

  useEffect(() => {
    const sections = rediRockSectionNav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="stc-rr-nav turner-band turner-band--light turner-band--seam"
      aria-label="Redi-Rock page sections"
    >
      <div className="container stc-rr-nav__inner">
        <ul className="stc-rr-nav__list">
          {rediRockSectionNav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? "is-active" : undefined}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
