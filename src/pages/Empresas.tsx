import { ComingSoonSection } from '@/components/ComingSoonSection';
import { Seo } from '@/components/Seo';
import { seoConfig } from '@/data/seo';

export function Empresas() {
  return (
    <>
      <Seo {...seoConfig.empresas} />
      <div id="page-empresas" className="page page-empresas">
        <ComingSoonSection
          eyebrow="Para empresas"
          title="La página para empresas está en construcción."
          description="Estamos preparando el software de seguimiento de entregas para empresas: cómo Shopitrack ayuda a reducir entregas fallidas, coordinar operadores y fortalecer la confianza de sus clientes. Mientras tanto, agenda una conversación con nuestro equipo."
        />
      </div>
    </>
  );
}
