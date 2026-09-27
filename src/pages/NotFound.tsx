import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { seoConfig } from "@/data/seo";

function BrokenPackageIcon() {
  return (
    <svg
      className="not-found-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.5 7 12 2.5 20.5 7" />
      <path d="M12 11.5 3.5 7v9.5l7.7 4.4" />
      <path d="M12 11.5 20.5 7v9.5l-7.7 4.4" />
      <path d="m7.75 4.75 8.5 4.5" />
      <path className="not-found-crack" d="m12 11.5 1 2.7-1.8 2.2 1.4 2.4-.6 3" />
    </svg>
  );
}

export function NotFound() {
  return (
    <div id="page-not-found" className="page page-not-found">
      <section className="hero" aria-labelledby="not-found-title">
        <Seo {...seoConfig.notFound} path={window.location.pathname} noIndex />
        <div className="container not-found">
          <p className="not-found-code">
            <span className="sr-only">Error 404</span>
            <span aria-hidden="true">4</span>
            <BrokenPackageIcon />
            <span aria-hidden="true">4</span>
          </p>
          <h1 id="not-found-title">Esta entrega no llegó a su destino.</h1>
          <p className="lead">La página que buscas no existe o fue movida.</p>
          <Link className="btn btn-primary" to="/">
            Volver al inicio <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
