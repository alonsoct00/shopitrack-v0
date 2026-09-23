import { Link } from "react-router-dom";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`brand ${light ? "brand--light" : ""}`}
      aria-label="Shopitrack, inicio"
    >
      <span className="brand-logo" />
    </Link>
  );
}
