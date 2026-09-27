import { useState, type ImgHTMLAttributes } from "react";

const DEFAULT_FALLBACK_SRC = "/images/image-fallback.svg";

type ImageWithFallbackProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export function ImageWithFallback({
  src,
  srcSet,
  sizes,
  fallbackSrc = DEFAULT_FALLBACK_SRC,
  onError,
  fetchPriority,
  ...props
}: ImageWithFallbackProps) {
  // Se guarda qué src falló (no un booleano) para reintentar si el src cambia.
  const [failedSrc, setFailedSrc] = useState<string | undefined>();
  const showFallback = !src || failedSrc === src;

  return (
    <img
      {...props}
      // react-dom 18 no reconoce fetchPriority en camelCase y avisa en consola; en minúsculas llega igual al DOM.
      {...(fetchPriority && { fetchpriority: fetchPriority })}
      src={showFallback ? fallbackSrc : src}
      srcSet={showFallback ? undefined : srcSet}
      sizes={showFallback ? undefined : sizes}
      onError={(event) => {
        // Si el fallback también falla no se vuelve a actualizar: evita un bucle.
        if (!showFallback) setFailedSrc(src);
        onError?.(event);
      }}
    />
  );
}
