import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { seoConfig } from '@/data/seo';

export function NotFound() {
  return (
    <div id="page-not-found" className="page page-not-found">
      <section className="hero wave-section">
        <Seo {...seoConfig.notFound} path={window.location.pathname} noIndex />
        <div className="container text-center">
          <h1>Página no encontrada</h1>
          <p className="coming-soon-copy">La página que buscas no existe o fue movida.</p>
          <div className="coming-soon-actions">
            <Link className="btn btn-primary" to="/">Volver al inicio <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
