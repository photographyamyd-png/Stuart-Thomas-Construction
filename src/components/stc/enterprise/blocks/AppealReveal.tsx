"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms for sibling reveals */
  delay?: number;
};

/**
 * Scroll-triggered reveal for Appeal marketing pages.
 * Visible by default (no-JS safe). Below-fold sections arm hide only after
 * mount; above-fold stays visible. Respects prefers-reduced-motion via CSS.
 */
export function AppealReveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const onScreen = rect.top < vh && rect.bottom > 0;

    if (onScreen) {
      el.classList.add("is-in");
      return;
    }

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      el.classList.add("is-in");
      observer.disconnect();
      window.clearTimeout(fallback);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) finish();
      },
      { root: null, rootMargin: "0px 0px -4% 0px", threshold: 0.01 },
    );

    el.classList.add("is-armed");
    observer.observe(el);

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
