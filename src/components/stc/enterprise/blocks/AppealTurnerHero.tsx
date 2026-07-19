"use client";

import Link from "next/link";
import { conversion } from "@/data/conversion";
import { media } from "@/data/media";
import { site } from "@/data/site";
import { useTurnerHeroVideo } from "@/hooks/use-turner-hero-video";

/**
 * Appeal hero: brand-first, full-bleed cinematic plane,
 * staggered entrance. Scoped styles live under `.landing-appeal`.
 */
export function AppealTurnerHero() {
  const { videoRef, userPlaying, videoReady, showPoster, shouldLoadVideo, toggleVideo } =
    useTurnerHeroVideo();
  const { hero } = conversion;

  return (
    <section className="turner-hero appeal-hero" id="hero" aria-labelledby="hero-heading">
      <video
        ref={videoRef}
        className={`turner-hero__video appeal-hero__media${videoReady ? " is-ready" : ""}${!userPlaying ? " is-paused" : ""}`}
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
          className="turner-hero__poster appeal-hero__media is-visible"
          src={media.homeHeroPoster}
          alt=""
          aria-hidden
        />
      )}
      <div className="turner-hero__scrim appeal-hero__scrim" aria-hidden />
      <div className="appeal-hero__grain" aria-hidden />
      <div className="appeal-hero__seam" aria-hidden />

      <div className="turner-hero__inner appeal-hero__inner">
        <p className="appeal-hero__brand" aria-label={site.name}>
          <span className="appeal-hero__brand-name">Stuart Thomas</span>
          <span className="appeal-hero__brand-primary">Construction</span>
        </p>
        <p className="eyebrow appeal-hero__enter appeal-hero__enter--1">{hero.eyebrow}</p>
        <h1 id="hero-heading" className="text-display text-display-xl appeal-hero__enter appeal-hero__enter--2">
          {hero.headline} <span className="accent">{hero.headlineAccent}</span>
        </h1>
        <p className="wf-type-supporting appeal-hero__enter appeal-hero__enter--3">{hero.lead}</p>
        <div className="appeal-hero__actions appeal-hero__enter appeal-hero__enter--4">
          <Link href="#contact" className="btn-accent btn-accent--lg">
            {hero.pathfinderLabel}
          </Link>
        </div>
      </div>

      <p className="turner-hero__scroll appeal-hero__scroll" aria-hidden>
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
