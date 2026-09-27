import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { seoConfig } from "@/data/seo";

export function NotFound() {
  return (
    <div id="page-not-found" className="page page-not-found">
      <section className="hero wave-section min-h-screen">
        <Seo {...seoConfig.notFound} path={window.location.pathname} noIndex />
        <div className="container text-center items-center flex flex-col justify-center">
          <h1 className="text-4xl text-center mb-4">Página no encontrada</h1>
          <p
            className="text-copy"
            style={{ fontSize: "1.2rem", margin: "1.5rem 0" }}
          >
            La página que buscas no existe o fue movida.
          </p>
          <div className="coming-soon-actions">
            <Link className="btn btn-primary" to="/">
              Volver al inicio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
