type NetworkInformation = {
  saveData?: boolean;
};

function getConnection(): NetworkInformation | undefined {
  if (typeof navigator === "undefined") return undefined;
  return (navigator as Navigator & { connection?: NetworkInformation }).connection;
}

export function shouldSkipVideoLoad(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  if (getConnection()?.saveData) return true;
  return false;
}

/** Run once after idle or first scroll/touch/keydown — whichever comes first. */
export function scheduleDeferredVideoLoad(onReady: () => void): () => void {
  let ran = false;

  const run = () => {
    if (ran) return;
    ran = true;
    onReady();
    cleanup();
  };

  const interactionEvents = ["scroll", "touchstart", "keydown"] as const;
  const onInteraction = () => run();

  for (const event of interactionEvents) {
    window.addEventListener(event, onInteraction, { once: true, passive: true });
  }

  let idleId: number | undefined;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  if (typeof requestIdleCallback !== "undefined") {
    idleId = requestIdleCallback(run, { timeout: 2000 });
  } else {
    timeoutId = setTimeout(run, 200);
  }

  function cleanup() {
    for (const event of interactionEvents) {
      window.removeEventListener(event, onInteraction);
    }
    if (idleId !== undefined && typeof cancelIdleCallback !== "undefined") {
      cancelIdleCallback(idleId);
    }
    if (timeoutId !== undefined) clearTimeout(timeoutId);
  }

  return cleanup;
}
