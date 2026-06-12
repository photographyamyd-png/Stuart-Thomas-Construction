"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { scheduleDeferredVideoLoad, shouldSkipVideoLoad } from "@/lib/defer-video-load";
import { cn } from "@/lib/utils";

type BackgroundVideoProps = {
  mp4Src: string;
  webmSrc?: string;
  posterSrc: string;
  posterAlt: string;
  className?: string;
};

export function BackgroundVideo({
  mp4Src,
  webmSrc,
  posterSrc,
  posterAlt,
  className,
}: BackgroundVideoProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const skipVideo = reduceMotion || shouldSkipVideoLoad();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || skipVideo) return;
    return scheduleDeferredVideoLoad(() => setShouldLoadVideo(true));
  }, [inView, skipVideo]);

  useEffect(() => {
    if (!shouldLoadVideo || skipVideo) return;

    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      void video.play().catch(() => {
        /* autoplay blocked — poster remains visible */
      });
    };

    tryPlay();

    const onVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else {
        tryPlay();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [shouldLoadVideo, skipVideo]);

  const showVideo = !skipVideo && shouldLoadVideo;

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden
    >
      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        priority
        className={cn(
          "object-cover transition-opacity duration-700",
          showVideo && videoReady ? "opacity-0" : "opacity-100",
        )}
        sizes="100vw"
        quality={80}
      />

      {showVideo && (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            videoReady ? "opacity-100" : "opacity-0",
          )}
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setVideoReady(true)}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={mp4Src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
