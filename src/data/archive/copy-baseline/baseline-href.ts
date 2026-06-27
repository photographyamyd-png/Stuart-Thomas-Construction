import { COPY_BASELINE_PREFIX } from "./constants";

/** Prefix internal paths for baseline preview routes */
export function baselineHref(path: string): string {
  if (path.startsWith("http") || path.startsWith("tel:") || path.startsWith("mailto:")) {
    return path;
  }
  if (path.startsWith("#")) {
    return `${COPY_BASELINE_PREFIX}${path}`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return COPY_BASELINE_PREFIX;
  return `${COPY_BASELINE_PREFIX}${normalized}`;
}
