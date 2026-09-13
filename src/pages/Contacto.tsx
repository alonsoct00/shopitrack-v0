import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Seo } from '@/components/Seo';
import { seoConfig } from '@/data/seo';

export function Contacto() {
  return (
    <section className="hero wave-section">
      <Seo {...seoConfig.contacto} />
      <div className="container" data-reveal>
        <SectionHeading eyebrow="Contacto" title="La página de contacto está en construcción." centered />
        <p className="coming-soon-copy">Mientras terminamos el formulario de contacto, escríbenos directamente y te responderemos lo antes posible.</p>
        <div className="coming-soon-actions">
          <a className="btn btn-primary" href="mailto:hola@shopitrack.com">Escríbenos a hola@shopitrack.com <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
