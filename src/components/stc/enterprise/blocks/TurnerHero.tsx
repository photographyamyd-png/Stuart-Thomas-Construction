"use client";

import Link from "next/link";
import { conversion } from "@/data/conversion";
import { media } from "@/data/media";
import { useTurnerHeroVideo } from "@/hooks/use-turner-hero-video";

export function TurnerHero() {
  const { videoRef, userPlaying, videoReady, showPoster, toggleVideo } = useTurnerHeroVideo();
  const { hero } = conversion;

  return (
    <section className="turner-hero" id="hero" aria-labelledby="hero-heading">
      <video
        ref={videoRef}
        className={`turner-hero__video${videoReady ? " is-ready" : ""}${!userPlaying ? " is-paused" : ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={media.homeHeroVideo} type="video/mp4" />
      </video>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`turner-hero__poster${showPoster ? " is-visible" : ""}`}
        src={media.homeHeroPoster}
        alt=""
        aria-hidden
      />
      <div className="turner-hero__scrim" aria-hidden />
      <div className="turner-hero__inner">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-heading" className="text-display text-display-xl">
          {hero.headline} <span className="accent">{hero.headlineAccent}</span>
        </h1>
        <p className="lead">{hero.lead}</p>
        <Link href="#pathfinder" className="turner-hero__pathfinder">
          {hero.pathfinderLabel}{" "}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
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
