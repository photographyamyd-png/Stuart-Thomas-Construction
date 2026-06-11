"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MEGA_MAP = {
  services: "lux-services",
  projects: "lux-projects",
  company: "lux-company",
} as const;

export type LuxPanelId = keyof typeof MEGA_MAP;

export function useEnterpriseNav() {
  const [activeLux, setActiveLux] = useState<LuxPanelId | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const closeLux = useCallback(() => {
    clearCloseTimer();
    setActiveLux(null);
  }, [clearCloseTimer]);

  const openLux = useCallback(
    (id: LuxPanelId) => {
      clearCloseTimer();
      setActiveLux(id);
      setDrawerOpen(false);
    },
    [clearCloseTimer],
  );

  const scheduleCloseLux = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setActiveLux(null), 200);
  }, [clearCloseTimer]);

  const toggleLux = useCallback(
    (id: LuxPanelId) => {
      setActiveLux((current) => (current === id ? null : id));
      setDrawerOpen(false);
    },
    [],
  );

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((open) => {
      if (!open) setActiveLux(null);
      return !open;
    });
  }, []);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLux();
        setDrawerOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeLux]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const luxOpen = activeLux !== null;

  const cancelLuxClose = useCallback(() => {
    clearCloseTimer();
  }, [clearCloseTimer]);

  return {
    activeLux,
    luxOpen,
    drawerOpen,
    openLux,
    closeLux,
    scheduleCloseLux,
    cancelLuxClose,
    toggleLux,
    toggleDrawer,
    closeDrawer,
    isPanelOpen: (id: LuxPanelId) => activeLux === id,
  };
}
