import Link from "next/link";
import { conversion } from "@/data/archive/copy-baseline/conversion";
import { site } from "@/data/archive/copy-baseline/site";
import { COPY_BASELINE_PREFIX as B } from "@/data/archive/copy-baseline/constants";
import { PhoneIcon } from "../primitives";

export function BaselineConversionBar() {
  return (
    <section
      className="stc-conversion-bar turner-band turner-band--dark turner-band--seam-thin"
      aria-label="Contact call to action"
    >
      <div className="stc-conversion-bar__inner container">
        <p className="stc-conversion-bar__message">
          {conversion.homeCta.headline}{" "}
          <Link href={`${B}/contact`} className="stc-conversion-bar__contact">
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
