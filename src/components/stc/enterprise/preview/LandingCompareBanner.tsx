import Link from "next/link";

type Variant = "current" | "appeal" | "split";

const links: { id: Variant; href: string; label: string }[] = [
  { id: "current", href: "/design/landing-current", label: "Current" },
  { id: "appeal", href: "/design/landing-appeal", label: "Appeal" },
  { id: "split", href: "/design/landing-split", label: "Side-by-side" },
];

type Props = {
  active: Variant;
  /** Hide when embedded in the split iframe view */
  embed?: boolean;
};

export function LandingCompareBanner({ active, embed = false }: Props) {
  if (embed) return null;

  return (
    <div className="landing-compare-banner" role="navigation" aria-label="Landing page comparison">
      <p className="landing-compare-banner__note">
        Compare preview — not indexed. Primary home is now Appeal at{" "}
        <Link href="/">/</Link>.
      </p>
      <div className="landing-compare-banner__toggles" role="group" aria-label="Version">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`landing-compare-banner__toggle${active === link.id ? " is-active" : ""}`}
            aria-current={active === link.id ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
