"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EditorialAccentRule } from "@/components/stc/primitives/EditorialAccentRule";
import { ActionCopper } from "@/components/stc/primitives/Action";
import { media } from "@/data/media";
import { applyVideoClip } from "@/lib/video-clip";

export function DroneImmersiveBand() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const video = section.querySelector("video");
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const unclip = applyVideoClip(video, media.droneSiteRevealStartSec);

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
      id="drone-immersive"
      className="stc-drone-immersive relative flex min-h-[clamp(420px,72vh,820px)] items-end overflow-hidden bg-charcoal"
      aria-label="Aerial site view"
    >
      <video
        className="stc-drone-immersive__el absolute inset-0 z-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={media.droneSiteRevealPoster}
        data-start-sec={media.droneSiteRevealStartSec}
      >
        <source src={media.droneSiteRevealVideo} type="video/mp4" />
      </video>
      <img
        src={media.droneSiteRevealPoster}
        alt=""
        width={1920}
        height={1080}
        decoding="async"
        className="stc-drone-immersive__poster pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-charcoal/90 via-charcoal/35 to-charcoal/10"
        aria-hidden
      />
      <Container className="relative z-[2] w-full pb-16 pt-12 sm:pb-20">
        <p className="stc-mockup-eyebrow text-copper">From above</p>
        <EditorialAccentRule className="mt-3" />
        <h2 className="stc-mockup-headline mt-4 max-w-[16ch] text-3xl leading-[0.9] text-white sm:text-4xl lg:text-5xl">
          Every stone. Every grade. Every detail.
        </h2>
        <p className="stc-mockup-body mt-4 max-w-lg text-lg text-white/88">
          Georgian Bay properties deserve work that reads clearly from the waterline to the treeline.
        </p>
        <ActionCopper href="/projects" className="mt-8">
          View projects
        </ActionCopper>
      </Container>
    </section>
  );
}
