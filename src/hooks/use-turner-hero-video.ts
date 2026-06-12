"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { applyVideoClip } from "@/lib/video-clip";
import { media } from "@/data/media";

const CLIP_START = media.homeHeroVideoStartSec;
const CLIP_TOLERANCE = 0.25;

export function useTurnerHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userPlaying, setUserPlaying] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [usePosterFallback, setUsePosterFallback] = useState(false);

  const showPoster = !userPlaying || usePosterFallback;

  const showPosterOnly = useCallback(() => {
    const video = videoRef.current;
    if (video) video.pause();
    setUserPlaying(false);
    setVideoReady(false);
  }, []);

  const markPosterFallback = useCallback(() => {
    setUsePosterFallback(true);
    showPosterOnly();
  }, [showPosterOnly]);

  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(markPosterFallback);
    setUserPlaying(true);
  }, [markPosterFallback]);

  const toggleVideo = useCallback(() => {
    if (userPlaying) showPosterOnly();
    else playVideo();
  }, [userPlaying, playVideo, showPosterOnly]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const cleanupClip = applyVideoClip(video, CLIP_START);

    const tryMarkReady = () => {
      if (video.currentTime >= CLIP_START - CLIP_TOLERANCE) {
        setVideoReady(true);
      }
    };

    const onPlaying = () => tryMarkReady();
    const onTimeUpdate = () => tryMarkReady();

    const onError = () => {
      video.style.display = "none";
      markPosterFallback();
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("error", onError);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyMotionPreference = (matches: boolean) => {
      if (matches) {
        setUsePosterFallback(true);
        showPosterOnly();
      } else {
        setUsePosterFallback(false);
        playVideo();
      }
    };

    applyMotionPreference(reducedMotion.matches);

    const onMotionChange = (e: MediaQueryListEvent) => {
      applyMotionPreference(e.matches);
    };
    reducedMotion.addEventListener("change", onMotionChange);

    return () => {
      cleanupClip();
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("error", onError);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, [playVideo, showPosterOnly, markPosterFallback]);

  return { videoRef, userPlaying, videoReady, showPoster, toggleVideo };
}
