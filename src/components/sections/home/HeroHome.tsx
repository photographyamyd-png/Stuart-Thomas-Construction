"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { BackgroundVideo } from "@/components/media/BackgroundVideo";
import { cta } from "@/data/nav";
import { stats } from "@/data/sections";
import { site } from "@/data/site";
import { heroItem, heroStagger } from "@/lib/motion";

export function HeroHome({
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
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-stc-black/92 via-stc-black/55 to-stc-black/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(176,141,87,0.04) 60px, rgba(176,141,87,0.04) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(176,141,87,0.04) 60px, rgba(176,141,87,0.04) 61px)",
        }}
        aria-hidden
      />

      <div className="relative z-[2] flex min-h-screen flex-col justify-center">
        <Container className="py-24 lg:py-28">
          <motion.div
            className="max-w-xl text-left lg:max-w-2xl"
            initial={reduce ? false : "hidden"}
            animate="visible"
            variants={heroStagger}
          >
            <motion.div variants={heroItem}>
              <SectionEyebrow className="drop-shadow-sm">
                Luxury Waterfront · South Georgian Bay
              </SectionEyebrow>
            </motion.div>
            <motion.h1
              variants={heroItem}
              className="mt-6 text-display-lg text-stc-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
            >
              Building With
              <span className="mt-1 block text-stc-gold">Integrity</span>
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="text-utility mt-5 text-stc-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]"
            >
              {site.name}
            </motion.p>
            <motion.p
              variants={heroItem}
              className="mt-5 max-w-lg font-body text-base leading-relaxed text-stc-white/80 drop-shadow-md"
            >
              Premium armour stone, waterfront stone work, and full outdoor construction across
              Tiny Township, Wasaga Beach, and Collingwood.
            </motion.p>
            <motion.div variants={heroItem} className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="stcSolid" size="lg">
                <Link href={cta.primaryHref}>
                  Request a Consultation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="stcGhost" size="lg">
                <Link href={cta.secondaryHref}>View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        <div
          className="absolute right-6 bottom-8 hidden gap-10 lg:right-16 lg:flex xl:gap-12"
          aria-hidden
        >
          {stats.map((s) => (
            <div key={s.label} className="text-right">
              <p className="text-stat text-stc-gold">{s.value}</p>
              <p className="text-utility mt-1 text-[0.625rem] text-stc-white/50">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-6 hidden items-end gap-3 lg:left-16 lg:flex" aria-hidden>
          <div className="h-12 w-px bg-gradient-to-b from-stc-gold to-transparent" />
          <span className="font-utility text-[0.625rem] tracking-[0.2em] text-stc-white/40 uppercase [writing-mode:vertical-rl]">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
