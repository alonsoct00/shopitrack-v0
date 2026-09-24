import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";

type Slide = { src: string; alt: string };

const SLIDES: Slide[][] = [
  [
    { src: "https://images.pexels.com/photos/5498024/pexels-photo-5498024.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Retail" },
    { src: "https://images.pexels.com/photos/19599329/pexels-photo-19599329.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Electrodomésticos" },
    { src: "https://images.pexels.com/photos/8987432/pexels-photo-8987432.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Muebles" },
    { src: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Mejoramiento del hogar" },
    { src: "https://images.pexels.com/photos/16051964/pexels-photo-16051964.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Farmacias" },
    { src: "https://images.pexels.com/photos/5827831/pexels-photo-5827831.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Tecnología" },
  ],
  [
    { src: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Departamentales" },
    { src: "https://images.pexels.com/photos/6214474/pexels-photo-6214474.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Marketplace" },
    { src: "https://images.pexels.com/photos/15500197/pexels-photo-15500197.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Materiales para construcción" },
    { src: "https://images.pexels.com/photos/34003822/pexels-photo-34003822.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Artículos deportivos" },
    { src: "https://images.pexels.com/photos/6682787/pexels-photo-6682787.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Repartidor entregando pedido" },
    { src: "https://images.pexels.com/photos/4440842/pexels-photo-4440842.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Cliente recibiendo su pedido" },
  ],
  [
    { src: "https://images.pexels.com/photos/8387128/pexels-photo-8387128.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Retail" },
    { src: "https://images.pexels.com/photos/6588592/pexels-photo-6588592.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Muebles" },
    { src: "https://images.pexels.com/photos/14797864/pexels-photo-14797864.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Farmacias" },
    { src: "https://images.pexels.com/photos/4526395/pexels-photo-4526395.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Tecnología" },
    { src: "https://images.pexels.com/photos/29055439/pexels-photo-29055439.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Artículos deportivos" },
    { src: "https://images.pexels.com/photos/6721908/pexels-photo-6721908.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Cliente recibiendo su pedido" },
  ],
];

const AUTOPLAY_MS = 5000;

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
            <ImageWithFallback key={slide.src} src={slide.src} alt={slide.alt} width={800} height={533} loading="lazy" />
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
