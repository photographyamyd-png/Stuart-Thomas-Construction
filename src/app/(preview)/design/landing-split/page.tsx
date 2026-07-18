import type { Metadata } from "next";
import { LandingCompareBanner } from "@/components/stc/enterprise/preview/LandingCompareBanner";
import "@/styles/landing-appeal.css";

export const metadata: Metadata = {
  title: "Landing Side-by-Side Compare",
  description: "Current vs appeal landing pages in split view — not indexed.",
  robots: { index: false, follow: false },
};

export default function LandingSplitComparePage() {
  return (
    <div className="enterprise-layout">
      <LandingCompareBanner active="split" />
      <div className="landing-split">
        <div className="landing-split__pane">
          <p className="landing-split__label">Current</p>
          <iframe
            className="landing-split__frame"
            title="Current landing page"
            src="/design/landing-current?embed=1"
          />
        </div>
        <div className="landing-split__pane">
          <p className="landing-split__label">Appeal</p>
          <iframe
            className="landing-split__frame"
            title="Appeal landing page"
            src="/design/landing-appeal?embed=1"
          />
        </div>
      </div>
    </div>
  );
}
