type Props = {
  quote: string;
  name: string;
  context: string;
};

/**
 * Single-quote proof strip — no card grid.
 */
export function ServiceProofBand({ quote, name, context }: Props) {
  return (
    <section
      className="stc-svc-proof turner-band turner-band--dark turner-band--seam"
      aria-labelledby="svc-proof-heading"
    >
      <div className="container stc-svc-proof__inner">
        <p className="eyebrow eyebrow--on-dark">From the Field</p>
        <h2 id="svc-proof-heading" className="text-display text-display--section">
          What property managers <span className="text-accent-gold">tell us</span>
        </h2>
        <blockquote className="stc-svc-proof__quote">
          <p className="wf-type-supporting">&ldquo;{quote}&rdquo;</p>
          <footer className="stc-svc-proof__attr">
            <cite className="stc-svc-proof__name">{name}</cite>
            <span className="stc-svc-proof__context">{context}</span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
