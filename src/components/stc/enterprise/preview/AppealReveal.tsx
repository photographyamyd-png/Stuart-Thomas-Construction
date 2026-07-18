"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms for sibling reveals */
  delay?: number;
};

/**
 * Scroll-triggered reveal for the landing-appeal preview.
 * Respects prefers-reduced-motion via CSS.
 * Falls back to visible if the observer never fires (e.g. odd iframe roots).
 */
export function AppealReveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-in");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      show();
      observer.disconnect();
      window.clearTimeout(fallback);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) finish();
      },
      { root: null, rootMargin: "0px 0px -4% 0px", threshold: 0.01 },
    );

    observer.observe(el);

    // Already on-screen (common in tall iframes / split panes)
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      // Defer so the initial opacity:0 frame can paint, then animate in
      requestAnimationFrame(() => finish());
    }

    // Safety net — never leave sections stuck invisible
    const fallback = window.setTimeout(finish, 1800);

    return () => {
      done = true;
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`landing-appeal__reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
