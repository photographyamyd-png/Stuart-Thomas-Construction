import { trustBar } from "@/data/conversion";

export function TrustBar() {
  return (
    <section
      className="stc-trust-bar turner-band turner-band--light turner-band--seam"
      id="trust"
      aria-label="Credentials"
    >
      <div className="stc-trust-bar__inner container">
        {trustBar.map((item, i) => (
          <span key={i} className="stc-trust-bar__item">{item}</span>
        ))}
      </div>
    </section>
  );
}
