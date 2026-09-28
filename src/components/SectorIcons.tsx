import { useId } from "react";

// lucide-react no incluye labial ni oso de peluche; mismo estilo de trazo que lucide.
const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function LipstickIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps}>
      <rect x="6" y="13.5" width="12" height="8.5" rx="2" />
      <path d="M8 13.5V10h8v3.5" />
      <path d="M9.5 10V6l5-4v8" />
    </svg>
  );
}

const teddyShapes = (
  <>
    <circle cx="8.8" cy="4.6" r="1.6" />
    <circle cx="15.2" cy="4.6" r="1.6" />
    <circle cx="12" cy="7.6" r="3.8" />
    <ellipse cx="12" cy="15" rx="4.4" ry="4.8" />
    <ellipse cx="7" cy="12.8" rx="1.6" ry="2.4" transform="rotate(35 7 12.8)" />
    <ellipse cx="17" cy="12.8" rx="1.6" ry="2.4" transform="rotate(-35 17 12.8)" />
    <ellipse cx="8.8" cy="19.6" rx="2.2" ry="1.9" />
    <ellipse cx="15.2" cy="19.6" rx="2.2" ry="1.9" />
  </>
);

// Solo el contorno exterior de la silueta: se traza a 4px y la máscara recorta
// la mitad interior, así las formas superpuestas no dejan líneas internas.
export function TeddyBearIcon() {
  const maskId = `teddy-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="white" />
          <g fill="black">{teddyShapes}</g>
        </mask>
      </defs>
      <g
        mask={`url(#${maskId})`}
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinejoin="round"
      >
        {teddyShapes}
      </g>
    </svg>
  );
}
