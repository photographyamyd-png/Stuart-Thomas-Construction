/** Video clip — skip opening seconds; keep loop from jumping back to t=0 */
export const HERO_VIDEO_START_SEC = 4;
export const DRONE_SITE_REVEAL_START_SEC = 12;

export function applyVideoClip(
  video: HTMLVideoElement,
  startSec: number,
): () => void {
  let hasStarted = false;

  const seekToStart = () => {
    if (!video.duration || Number.isNaN(video.duration)) return;
    const t = Math.min(startSec, Math.max(0, video.duration - 0.05));
    if (video.currentTime < t - 0.05) video.currentTime = t;
  };

  const onPlaying = () => {
    hasStarted = true;
  };

  const onTimeUpdate = () => {
    if (!hasStarted || !video.duration) return;
    if (video.currentTime < startSec - 0.25) seekToStart();
  };

  video.addEventListener("loadedmetadata", seekToStart);
  video.addEventListener("playing", onPlaying);
  video.addEventListener("timeupdate", onTimeUpdate);

  if (video.readyState >= 1) seekToStart();

  return () => {
    video.removeEventListener("loadedmetadata", seekToStart);
    video.removeEventListener("playing", onPlaying);
    video.removeEventListener("timeupdate", onTimeUpdate);
  };
}

/** @deprecated use applyVideoClip */
export const applyHeroVideoClip = applyVideoClip;
