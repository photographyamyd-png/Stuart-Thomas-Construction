"use client";

import Link from "next/link";
import { conversion } from "@/data/conversion";
import { media } from "@/data/media";
import { useTurnerHeroVideo } from "@/hooks/use-turner-hero-video";

export function TurnerHero() {
  const { videoRef, userPlaying, videoReady, showPoster, shouldLoadVideo, toggleVideo } =
    useTurnerHeroVideo();
  const { hero } = conversion;

  return (
    <section className="turner-hero" id="hero" aria-labelledby="hero-heading">
      <video
        ref={videoRef}
        className={`turner-hero__video${videoReady ? " is-ready" : ""}${!userPlaying ? " is-paused" : ""}`}
        muted
        loop
        playsInline
        preload="none"
      >
        {shouldLoadVideo && <source src={media.homeHeroVideo} type="video/mp4" />}
      </video>
      {showPoster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="turner-hero__poster is-visible"
          src={media.homeHeroPoster}
          alt=""
          aria-hidden
        />
      )}
      <div className="turner-hero__inner">
        <p className="eyebrow eyebrow--plain turner-hero__eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-heading" className="text-display text-display-xl turner-hero__headline">
          {hero.headline} <span className="text-accent-green">{hero.headlineAccent}</span>
        </h1>
        <p className="wf-type-supporting">{hero.lead}</p>
        <p className="turner-hero__trust">{hero.trustLine}</p>
        <div className="turner-hero__actions">
          <Link href={hero.primaryCta.href} className="btn-green">
            {hero.primaryCta.label}
          </Link>
          <Link href={hero.secondaryCta.href} className="btn-ghost">
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
      <p className="turner-hero__scroll" aria-hidden>
        Scroll
      </p>
      <button
        type="button"
        className="turner-hero__video-btn"
        aria-pressed={userPlaying}
        onClick={toggleVideo}
      >
        {userPlaying ? "Pause video" : "Play video"}
      </button>
    </section>
  );
}
