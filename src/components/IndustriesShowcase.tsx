import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";

type Slide = { src: string; alt: string };

const IMAGES: Slide[] = [
  { src: "/images/home-mosaico-departamental.webp", alt: "Departamental" },
  { src: "/images/home-mosaico-autoservicio.webp", alt: "Autoservicio" },
  { src: "/images/home-mosaico-muebles-decoracion.webp", alt: "Muebles y decoración" },
  {
    src: "/images/home-mosaico-linea-blanca-electrodomesticos.webp",
    alt: "Línea blanca y electrodomésticos",
  },
  { src: "/images/home-mosaico-internet.webp", alt: "Internet" },
  { src: "/images/home-mosaico-mudanzas.webp", alt: "Mudanzas" },
  { src: "/images/home-mosaico-reparaciones.webp", alt: "Reparaciones" },
  { src: "/images/home-mosaico-seguros.webp", alt: "Seguros" },
  { src: "/images/home-mosaico-transporte-escolar.webp", alt: "Transporte escolar" },
];

// 9 imágenes en un grid de 6: cada página avanza 3, así cada imagen sale dos veces y ninguna se repite dentro de una página.
const SLIDES: Slide[][] = [0, 3, 6].map((start) =>
  Array.from({ length: 6 }, (_, i) => IMAGES[(start + i) % IMAGES.length]),
);

const AUTOPLAY_MS = 8000;

export function IndustriesShowcase() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((current) => (current + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setPage((index + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="industries-showcase">
      <div className="industries-showcase-viewport">
        <div className="industries-collage-grid" key={page}>
          {SLIDES[page].map((slide) => (
            <ImageWithFallback
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              width={800}
              height={533}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        className="industries-showcase-arrow prev"
        aria-label="Ver sectores anteriores"
        onClick={() => goTo(page - 1)}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        className="industries-showcase-arrow next"
        aria-label="Ver más sectores"
        onClick={() => goTo(page + 1)}
      >
        <ChevronRight size={18} />
      </button>

      <div className="industries-showcase-dots">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === page ? "is-active" : undefined}
            aria-label={`Ir al grupo ${index + 1}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
