"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { EditorialAccentRule } from "@/components/stc/primitives/EditorialAccentRule";
import { ActionCopper, ActionMockupOutline } from "@/components/stc/primitives/Action";
import { conversion } from "@/data/conversion";
import { cta } from "@/data/nav";
import { media } from "@/data/media";
import { applyVideoClip } from "@/lib/video-clip";

export function HomeHeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const { kicker, headline, subline } = conversion.hero;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const video = section.querySelector("video");
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const unclip = applyVideoClip(video, media.homeHeroVideoStartSec);

    const sync = () => {
      if (reduced.matches) {
        section.classList.add("is-reduced-motion");
        section.classList.remove("is-playing");
        video.pause();
        return;
      }
      section.classList.remove("is-reduced-motion");
      void video.play().then(() => section.classList.add("is-playing")).catch(() => {
        section.classList.add("is-reduced-motion");
      });
    };

    const onPlaying = () => section.classList.add("is-playing");
    video.addEventListener("playing", onPlaying);
    sync();
    reduced.addEventListener("change", sync);
    return () => {
      unclip();
      reduced.removeEventListener("change", sync);
      video.removeEventListener("playing", onPlaying);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stc-hero-video relative flex min-h-[min(88vh,780px)] items-end overflow-hidden bg-charcoal"
      aria-label="Hero"
    >
      <video
        className="stc-hero-video__el absolute inset-0 z-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        poster={media.homeHeroPoster}
      >
        <source src={media.homeHeroVideo} type="video/mp4" />
      </video>
      <img
        src={media.homeHeroPoster}
        alt=""
        width={1920}
        height={1080}
        decoding="async"
        className="stc-hero-video__poster pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
        aria-hidden
      />
      <div className="stc-scrim-hero absolute inset-0 z-[1]" aria-hidden />
      <Container className="relative z-[2] w-full pb-16 pt-28 sm:pb-20 sm:pt-32">
        <p className="stc-mockup-eyebrow text-copper">{kicker}</p>
        <EditorialAccentRule className="mt-3" />
        <h1 className="stc-mockup-display mt-4 max-w-[16ch] text-5xl leading-[0.95] text-white drop-shadow-lg lg:text-7xl">
          {headline[0]}
          <br />
          <span className="text-copper">{headline[1]}</span>
        </h1>
        <p className="stc-mockup-body mt-4 max-w-lg text-lg text-white/90">{subline}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ActionCopper href="/services">Our services</ActionCopper>
          <ActionMockupOutline href={cta.secondaryHref}>View projects</ActionMockupOutline>
        </div>
      </Container>
    </section>
  );
}
