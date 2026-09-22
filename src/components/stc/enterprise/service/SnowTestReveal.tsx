"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms for sibling reveals */
  delay?: number;
};

/**
 * Scroll-triggered fade-up for /test-snow premium landing.
 * Visible by default (no-JS safe). Arms hide only after mount for below-fold.
 */
export function SnowTestReveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const onScreen = rect.top < vh * 0.85 && rect.bottom > 0;

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
      { root: null, rootMargin: "0px 0px -15% 0px", threshold: 0.01 },
    );

    el.classList.add("is-armed");
    observer.observe(el);

    const fallback = window.setTimeout(finish, 2200);

    return () => {
      done = true;
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`stc-snow-test__reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
