import { ComingSoonSection } from '@/components/ComingSoonSection';
import { Seo } from '@/components/Seo';
import { seoConfig } from '@/data/seo';

export function Industrias() {
  return (
    <>
      <Seo {...seoConfig.industrias} />
      <ComingSoonSection
        eyebrow="Industrias"
        title="La página de industrias está en construcción."
        description="Retail, electrodomésticos, muebles, farmacias, tecnología y más: cada industria de e-commerce comparte el mismo reto de coordinar la última milla. Esta página detallará cómo Shopitrack se adapta a cada una."
      />
    </>
  );
}
