import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web/build/player/lottie_light";

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
    const container = containerRef.current;
    if (!container) return;

    let animation: AnimationItem | null = null;
    let cancelled = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        import("lottie-web/build/player/lottie_light").then(({ default: lottie }) => {
          if (cancelled) return;
          animation = lottie.loadAnimation({
            container,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: src,
          });
        }).catch((error: unknown) => {
          console.error("[LottiePlayer] No se pudo cargar la animación", error);
        });
      },
      { rootMargin: "200px" }
    );
    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
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
