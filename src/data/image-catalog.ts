import catalogDoc from "./image-catalog.json";

const pathMigration = catalogDoc.pathMigration as Record<string, string>;

/** Map legacy flat paths to SEO category folders after apply-image-seo.mjs. */
export function resolveImagePath(legacyPath: string): string {
  const direct = pathMigration[legacyPath];
  if (direct) return direct;

  const flatRetouched = legacyPath.replace("/images/retouched/", "/images/");
  if (flatRetouched !== legacyPath) {
    const migrated = pathMigration[flatRetouched];
    if (migrated) return migrated;
  }

  return legacyPath;
}

export { pathMigration };
