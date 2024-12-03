import { Media } from "payload-types";

export function BackgroundVideo({ video }: { video: Media | number }) {
  if (typeof video === "number") {
    return null;
  }

  return (
    <video
      preload="none"
      autoPlay
      muted
      loop
      playsInline
      className="pointer-events-none absolute inset-0 -z-10 h-full w-screen object-cover object-bottom brightness-[0.65]"
      aria-label="Video player"
    >
      <source src={video.url as string} type={video.mimeType as string} />
      Your browser does not support the video tag.
    </video>
  );
}
