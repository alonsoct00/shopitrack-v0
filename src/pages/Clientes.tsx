import { ComingSoonSection } from '@/components/ComingSoonSection';
import { Seo } from '@/components/Seo';
import { seoConfig } from '@/data/seo';

export function Clientes() {
  return (
    <>
      <Seo {...seoConfig.clientes} />
      <ComingSoonSection
        eyebrow="Para clientes"
        title="La página para clientes está en construcción."
        description="Aquí explicaremos cómo los clientes ganan control sobre sus entregas: confirmar la ventana de entrega, conocer el ETA y evitar la incertidumbre de esperar todo el día sin comunicación durante la entrega. Muy pronto con más detalle."
      />
    </>
  );
}
