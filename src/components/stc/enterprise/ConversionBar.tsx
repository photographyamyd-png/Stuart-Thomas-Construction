import Link from "next/link";
import { conversion } from "@/data/conversion";
import { site } from "@/data/site";
import { PhoneIcon, Wordmark } from "./primitives";

export function ConversionBar() {
  return (
    <div className="stc-conversion-bar">
      <div className="stc-conversion-bar__inner">
        <Wordmark compact href="/" />
        <p className="stc-conversion-bar__message">
          {conversion.homeCta.headline}{" "}
          <Link href="/contact" className="stc-conversion-bar__contact-link">
            {conversion.homeCta.contactLink}
          </Link>
        </p>
        <a className="stc-conversion-bar__phone" href={`tel:${site.phoneTel}`}>
          <PhoneIcon /> {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
