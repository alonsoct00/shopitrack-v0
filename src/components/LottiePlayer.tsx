import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web/build/player/lottie_light";

export function LottiePlayer({
  src,
  className,
  ariaLabel,
}: {
  src: string;
  className?: string;
  ariaLabel?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let animation: AnimationItem | null = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: src,
    });

    return () => {
      animation?.destroy();
      animation = null;
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={className}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
    />
  );
}
