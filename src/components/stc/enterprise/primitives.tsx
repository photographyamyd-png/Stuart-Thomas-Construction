import Link from "next/link";
import type { ComponentProps } from "react";

export function LinkArrow({
  href,
  children,
  className = "",
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={`link-arrow ${className}`.trim()} {...props}>
      {children}{" "}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}

type WordmarkProps = {
  compact?: boolean;
  href?: string;
  className?: string;
};

export function Wordmark({ compact, href = "/", className = "" }: WordmarkProps) {
  const classes = [
    "stc-wordmark",
    compact ? "stc-wordmark--compact" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={href}
      className={classes}
      aria-label="Stuart Thomas Construction and Landscaping — home"
    >
      <span className="stc-wordmark__name">Stuart Thomas</span>
      <span className="stc-wordmark__primary">Construction</span>
      <span className="stc-wordmark__secondary">&amp; Landscaping</span>
    </Link>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
