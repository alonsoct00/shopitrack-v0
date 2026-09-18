import { ComingSoonSection } from '@/components/ComingSoonSection';
import { Seo } from '@/components/Seo';
import { seoConfig } from '@/data/seo';

export function Sectores() {
  return (
    <>
      <Seo {...seoConfig.sectores} />
      <div id="page-sectores" className="page page-sectores">
        <ComingSoonSection
          eyebrow="Sectores"
          title="La página de sectores está en construcción."
          description="Retail, electrodomésticos, muebles, farmacias, tecnología y más: cada sector de e-commerce comparte el mismo reto de coordinar la última milla. Esta página detallará cómo Shopitrack se adapta a cada uno."
        />
      </div>
    </>
  );
}
