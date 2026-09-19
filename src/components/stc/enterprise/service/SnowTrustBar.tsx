import { MapPin, Shield, Truck, Zap, type LucideIcon } from "lucide-react";
import { snowTrustItems } from "@/data/snow-page";

const snowTrustIcons: LucideIcon[] = [Shield, Zap, Truck, MapPin];

export function SnowTrustBar() {
  return (
    <section
      className="stc-trust-bar stc-trust-bar--snow turner-band"
      id="trust"
      aria-label="Credentials"
    >
      <div className="stc-trust-bar__inner container">
        {snowTrustItems.map((item, i) => {
          const Icon = snowTrustIcons[i] ?? Shield;
          return (
            <span key={item} className="stc-trust-bar__item">
              <Icon className="stc-trust-bar__icon" aria-hidden strokeWidth={2} />
              {item}
            </span>
          );
        })}
      </div>
    </section>
  );
}
