"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { applyVideoClip } from "@/lib/video-clip";
import { media } from "@/data/media";

export function useTurnerHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const showPosterOnly = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.classList.add("is-paused");
    setPlaying(false);
  }, []);

  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.classList.remove("is-paused");
    video.play().catch(showPosterOnly);
    setPlaying(true);
  }, [showPosterOnly]);

  const toggleVideo = useCallback(() => {
    if (playing) showPosterOnly();
    else playVideo();
  }, [playing, playVideo, showPosterOnly]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const cleanupClip = applyVideoClip(video, media.homeHeroVideoStartSec);

    const onError = () => {
      video.style.display = "none";
      showPosterOnly();
    };
    video.addEventListener("error", onError);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) showPosterOnly();
    else playVideo();

    const onMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) showPosterOnly();
    };
    reducedMotion.addEventListener("change", onMotionChange);

    return () => {
      cleanupClip();
      video.removeEventListener("error", onError);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, [playVideo, showPosterOnly]);

  return { videoRef, playing, toggleVideo };
}
