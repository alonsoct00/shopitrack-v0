import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

export function ComingSoonSection({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="hero wave-section">
      <div className="container" data-reveal>
        <SectionHeading eyebrow={eyebrow} title={title} centered />
        <p className="coming-soon-copy">{description}</p>
        <div className="coming-soon-actions">
          <Link className="btn btn-primary" to="/contacto">Habla con nosotros <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
