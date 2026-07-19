import Image from "next/image";
import Link from "next/link";
import {
  rediRockInstallerImage,
  rediRockInstallerScope,
  rediRockLinks,
  rediRockProductFacts,
  rediRockRoleChain,
} from "@/data/redi-rock";

export function RediRockInstallerBand() {
  return (
    <section
      id="install"
      className="stc-rr-installer turner-regional turner-band turner-band--green turner-band--seam"
      aria-labelledby="rr-install-heading"
    >
      <div className="turner-regional__media stc-rr-installer__media">
        <Image
          src={rediRockInstallerImage.src}
          alt={rediRockInstallerImage.alt}
          fill
          loading="lazy"
          sizes="55vw"
          className="object-cover"
        />
      </div>
      <div className="turner-regional__copy stc-rr-installer__copy">
        <p className="eyebrow eyebrow--on-dark">What STC Installs</p>
        <h2 id="rr-install-heading" className="text-display text-display--section stack-title">
          Installer Scope — <span className="text-accent-gold">We Dig &amp; Set</span>
        </h2>
        <p className="wf-type-supporting">
          Stuart Thomas Construction is your installation partner. Redi-Rock® is the engineered
          product. The Sarjeant Co. supplies materials for our region.
        </p>
        <ol className="stc-rr-installer__scope">
          {rediRockInstallerScope.map((item, i) => (
            <li key={item}>
              <span className="stc-rr-installer__scope-num">0{i + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <ul className="stc-rr-installer__chain" aria-label="Project roles">
          {rediRockRoleChain.map((role, i) => (
            <li key={role.label}>
              <strong>{role.label}</strong>
              <span>{role.detail}</span>
              {i < rediRockRoleChain.length - 1 && (
                <span className="stc-rr-installer__chain-arrow" aria-hidden>
                  →
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="stc-rr-installer__facts stack-section">
          <p className="eyebrow eyebrow--on-dark">About The Product</p>
          <ul className="stc-svc-page__benefits">
            {rediRockProductFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <Link href={rediRockLinks.supplier} target="_blank" rel="noopener noreferrer" className="link-arrow">
            The Sarjeant Co. Redi-Rock page →
          </Link>
        </div>
      </div>
    </section>
  );
}
