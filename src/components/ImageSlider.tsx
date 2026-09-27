import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import type { ImageSource } from "@/data/types";

// Slider de una imagen a la vez. Usa scroll nativo con snap: el swipe táctil
// funciona sin JS; flechas y dots solo desplazan el track.
export function ImageSlider({
  slides,
  label,
  arrows = true,
  dots = true,
  className,
}: {
  slides: ImageSource[];
  label: string;
  arrows?: boolean;
  dots?: boolean;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = slides.length;
  const hasNav = count > 1;

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (index + count) % count;
    track.scrollTo({ left: next * track.clientWidth });
  };

  return (
    <div
      className={`image-slider${className ? ` ${className}` : ""}`}
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
    >
      <div className="image-slider-viewport">
        <div
          className="image-slider-track"
          ref={trackRef}
          onScroll={(event) => {
            const track = event.currentTarget;
            setActive(Math.round(track.scrollLeft / track.clientWidth));
          }}
        >
          {slides.map((slide, index) => (
            <div
              className="image-slider-slide"
              key={`${index}-${slide.src}`}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${count}`}
            >
              <ImageWithFallback
                src={slide.src}
                alt={slide.alt}
                loading={index === 0 ? undefined : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>

        {arrows && hasNav && (
          <>
            <button
              type="button"
              className="image-slider-arrow prev"
              aria-label="Imagen anterior"
              onClick={() => goTo(active - 1)}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="image-slider-arrow next"
              aria-label="Imagen siguiente"
              onClick={() => goTo(active + 1)}
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {dots && hasNav && (
        <div className="image-slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === active ? "is-active" : undefined}
              aria-label={`Ir a la imagen ${index + 1}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
