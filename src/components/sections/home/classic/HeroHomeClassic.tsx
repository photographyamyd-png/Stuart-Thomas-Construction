"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { BackgroundVideo } from "@/components/media/BackgroundVideo";
import { cta } from "@/data/nav";
import { site } from "@/data/site";
import { fadeUp, transition } from "@/lib/motion";

/** Live homepage hero before the mockup hybrid (May 2026): centered copy on drone video, no scrim. */
export function HeroHomeClassic({
  videoSrc,
  videoWebmSrc,
  posterSrc,
  posterAlt,
}: {
  videoSrc: string;
  videoWebmSrc?: string;
  posterSrc: string;
  posterAlt: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden bg-stc-black">
      <BackgroundVideo
        mp4Src={videoSrc}
        webmSrc={videoWebmSrc}
        posterSrc={posterSrc}
        posterAlt={posterAlt}
      />

      <div className="relative z-[1] flex min-h-screen items-center justify-center">
        <Container className="py-20">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={reduce ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            transition={transition}
          >
            <p className="label-stamp text-accent-gold drop-shadow-[0_1px_6px_rgba(0,0,0,0.75)]">
              {site.name}
            </p>
            <h1 className="mt-4 text-display-lg text-role-headline-on-dark drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              {site.tagline}
            </h1>
            <p className="text-utility mx-auto mt-5 max-w-lg text-role-headline-on-dark drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              Quality craftsmanship. Reliable service. Exceptional results across Tiny Township,
              Wasaga Beach, and Collingwood.
            </p>
            <Button asChild variant="stcSolid" size="lg" className="mt-8">
              <Link href={cta.primaryHref}>{cta.primaryLabel}</Link>
            </Button>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
