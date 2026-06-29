"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { scheduleDeferredVideoLoad, shouldSkipVideoLoad } from "@/lib/defer-video-load";
import { applyVideoClip } from "@/lib/video-clip";
import { media } from "@/data/media";

const CLIP_TOLERANCE = 0.25;

type TurnerHeroVideoOptions = {
  clipStartSec?: number;
};

export function useTurnerHeroVideo(options: TurnerHeroVideoOptions = {}) {
  const clipStart = options.clipStartSec ?? media.homeHeroVideoStartSec;
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPlayingRef = useRef(true);
  const [userPlaying, setUserPlaying] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [usePosterFallback, setUsePosterFallback] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const showPoster = !userPlaying || usePosterFallback;

  const showPosterOnly = useCallback(() => {
    const video = videoRef.current;
    if (video) video.pause();
    setUserPlaying(false);
    userPlayingRef.current = false;
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
    userPlayingRef.current = true;
  }, [markPosterFallback]);

  const toggleVideo = useCallback(() => {
    if (userPlaying) showPosterOnly();
    else playVideo();
  }, [userPlaying, playVideo, showPosterOnly]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const enterPosterMode = () => {
      setUsePosterFallback(true);
      showPosterOnly();
    };

    const tryStartVideo = () => {
      if (shouldSkipVideoLoad() || reducedMotion.matches) {
        enterPosterMode();
        return;
      }
      setUsePosterFallback(false);
      setShouldLoadVideo(true);
    };

    let cleanupDefer: (() => void) | undefined;

    if (shouldSkipVideoLoad() || reducedMotion.matches) {
      enterPosterMode();
    } else {
      cleanupDefer = scheduleDeferredVideoLoad(() => setShouldLoadVideo(true));
    }

    const onMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) enterPosterMode();
      else tryStartVideo();
    };
    reducedMotion.addEventListener("change", onMotionChange);

    return () => {
      cleanupDefer?.();
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, [showPosterOnly]);

  useEffect(() => {
    if (!shouldLoadVideo) return;

    const video = videoRef.current;
    if (!video) return;

    const cleanupClip = applyVideoClip(video, clipStart);

    const tryMarkReady = () => {
      if (video.currentTime >= clipStart - CLIP_TOLERANCE) {
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

    playVideo();

    const onVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else if (userPlayingRef.current) {
        void video.play().catch(markPosterFallback);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cleanupClip();
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("error", onError);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [shouldLoadVideo, playVideo, markPosterFallback, clipStart]);

  return { videoRef, userPlaying, videoReady, showPoster, shouldLoadVideo, toggleVideo };
}
