"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

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
  }, [reduceMotion]);

  const showVideo = !reduceMotion;

  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden", className)} aria-hidden>
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
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          onCanPlay={() => setVideoReady(true)}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={mp4Src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
