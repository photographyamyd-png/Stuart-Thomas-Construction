"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = hash.replace(/^#/, "");
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior, block: "start" });
}

/**
 * Next.js App Router often skips native hash scroll on client navigations,
 * especially same-path links with ?query#hash. Force scroll on route changes
 * and on same-page hash link clicks.
 */
export function HashScrollFix() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    function scrollFromLocation() {
      const hash = window.location.hash;
      if (!hash) return;
      window.setTimeout(() => scrollToHash(hash), 80);
    }

    scrollFromLocation();
    window.addEventListener("hashchange", scrollFromLocation);
    return () => window.removeEventListener("hashchange", scrollFromLocation);
  }, [pathname, searchParams]);

  useEffect(() => {
    function onDocumentClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const target = e.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      const raw = anchor.getAttribute("href");
      if (!raw || !raw.includes("#")) return;

      let url: URL;
      try {
        url = new URL(raw, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname) return;

      const hash = url.hash;
      if (!hash) return;

      // Same-path hash CTAs: ensure we land on the target even when Next.js
      // treats the navigation as a no-op (identical URL) or skips hash scroll.
      window.setTimeout(() => scrollToHash(hash), 100);
    }

    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, []);

  return null;
}
