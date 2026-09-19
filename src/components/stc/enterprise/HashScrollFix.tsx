"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Next.js App Router often skips native hash scroll on client navigations.
 * Re-runs on path / query / hash changes so snow CTAs land on #quote-form.
 */
export function HashScrollFix() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    function scrollToHash() {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      const el = document.getElementById(hash);
      if (!el) return;
      window.setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname, searchParams]);

  return null;
}
