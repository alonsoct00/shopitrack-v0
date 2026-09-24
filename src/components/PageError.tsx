import { ArrowRight } from "lucide-react";

export function PageError() {
  return (
    <div className="page page-error">
      <section className="hero wave-section">
        <div className="container text-center">
          <h1>Algo salió mal</h1>
          <p className="coming-soon-copy">
            No pudimos cargar esta página. Intenta recargarla o vuelve al
            inicio.
          </p>
          <div className="coming-soon-actions">
            <a className="btn btn-primary" href="/">
              Volver al inicio <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
