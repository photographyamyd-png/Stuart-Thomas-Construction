import Link from "next/link";
import { conversion } from "@/data/conversion";
import { site } from "@/data/site";
import { PhoneIcon } from "./primitives";

export function ConversionBar() {
  return (
    <section
      className="stc-conversion-bar turner-band turner-band--light turner-band--seam-thin"
      aria-label="Contact call to action"
    >
      <div className="stc-conversion-bar__inner container">
        <p className="stc-conversion-bar__message wf-type-supporting">
          {conversion.homeCta.headline}{" "}
          <Link href="/contact" className="stc-conversion-bar__contact">
            {conversion.homeCta.contactLink}
          </Link>
        </p>
        <a className="stc-conversion-bar__phone" href={`tel:${site.phoneTel}`}>
          <PhoneIcon /> {site.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
