import type { FC } from "react";
import type { ServiceSlug } from "@/data/services";

const GREEN = "#2d5a27";
const TAN = "#d4a24e";

type StripIconProps = { className?: string };
type StripIcon = FC<StripIconProps>;

export function ArmourStoneIcon({ className }: StripIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <rect x="10" y="28" width="28" height="10" rx="2" fill={GREEN} />
      <rect x="12" y="18" width="24" height="9" rx="2" fill={GREEN} />
      <rect x="14" y="9" width="20" height="8" rx="2" fill={GREEN} />
    </svg>
  );
}

export function WaterfrontIcon({ className }: StripIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <path
        d="M6 18c4-4 8-4 12 0s8 4 12 0 8-4 12 0"
        fill="none"
        stroke={TAN}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M6 26c4-4 8-4 12 0s8 4 12 0 8-4 12 0"
        fill="none"
        stroke={TAN}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M6 34c4-4 8-4 12 0s8 4 12 0 8-4 12 0"
        fill="none"
        stroke={TAN}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LandscapingIcon({ className }: StripIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <path d="M14 38V22l6-10 6 10v16H14z" fill={GREEN} />
      <path d="M26 38V26l5-8 5 8v12H26z" fill={GREEN} />
      <rect x="14" y="38" width="8" height="2" fill={GREEN} />
      <rect x="26" y="38" width="10" height="2" fill={GREEN} />
    </svg>
  );
}

export function HardscapingIcon({ className }: StripIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <rect x="8" y="30" width="10" height="8" rx="2" fill={TAN} />
      <rect x="19" y="30" width="10" height="8" rx="2" fill={TAN} />
      <rect x="30" y="30" width="10" height="8" rx="2" fill={TAN} />
      <rect x="14" y="20" width="10" height="8" rx="2" fill={TAN} />
      <rect x="25" y="20" width="10" height="8" rx="2" fill={TAN} />
    </svg>
  );
}

export function ExcavationIcon({ className }: StripIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <path
        d="M8 34h22l4-6h6l-3 6H8z"
        fill={GREEN}
      />
      <path
        d="M12 28l6-14h4l-2 8h8l10-6 2 4-12 8H12z"
        fill={GREEN}
      />
      <circle cx="14" cy="36" r="3" fill={GREEN} />
      <circle cx="28" cy="36" r="3" fill={GREEN} />
      <rect x="32" y="10" width="3" height="14" rx="1" fill={GREEN} />
      <path d="M35 10l8-4v3l-8 4V10z" fill={GREEN} />
    </svg>
  );
}

export function SnowRemovalIcon({ className }: StripIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <path
        d="M24 8v32M8 24h32M12.7 12.7l21.2 21.2M35.3 12.7L14.1 33.9"
        fill="none"
        stroke={GREEN}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="3" fill={GREEN} />
      <circle cx="24" cy="8" r="2" fill={GREEN} />
      <circle cx="24" cy="40" r="2" fill={GREEN} />
      <circle cx="8" cy="24" r="2" fill={GREEN} />
      <circle cx="40" cy="24" r="2" fill={GREEN} />
      <circle cx="12.7" cy="12.7" r="2" fill={GREEN} />
      <circle cx="35.3" cy="12.7" r="2" fill={GREEN} />
      <circle cx="12.7" cy="35.3" r="2" fill={GREEN} />
      <circle cx="35.3" cy="35.3" r="2" fill={GREEN} />
    </svg>
  );
}

export const serviceStripIcons: Record<ServiceSlug, StripIcon> = {
  "armour-stone": ArmourStoneIcon,
  "waterfront-stone-work": WaterfrontIcon,
  landscaping: LandscapingIcon,
  hardscaping: HardscapingIcon,
  excavation: ExcavationIcon,
  "commercial-snow-removal": SnowRemovalIcon,
};
