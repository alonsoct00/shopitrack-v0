import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Cpu,
  HeartPulse,
  Sofa,
  Store,
  Target,
  WashingMachine,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import { otherSectors, sectoresImages, sectors } from "@/data/sectores";
import { seoConfig } from "@/data/seo";

const sectorIcons = [Store, Sofa, WashingMachine, Wrench, Cpu, HeartPulse];

function SectorBlock({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <article className="info-card stat-card sector-block">
      <div className="round-icon">{icon}</div>
      <div>
        <h2>{title}</h2>
        <ul className="industry-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Sectores() {
  return (
    <>
      <Seo {...seoConfig.sectores} />
      <div id="page-sectores" className="page page-sectores">
        <section className="hero wave-section-bottom" aria-labelledby="sectores-hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Sectores</span>
              <h1 id="sectores-hero-title">No importa qué vendas. Importa cómo termina la experiencia de compra.</h1>
              <p>
                Cada sector tiene desafíos distintos. Pero todas dependen de que una entrega
                ocurra en el momento correcto y con la información adecuada.
              </p>
              <p>
                <strong>Coordinación en la entrega; es lo que los clientes exigen.</strong>
              </p>
              <Link className="btn btn-primary" to="/contacto">
                Agenda una demostración <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hero-art">
              <img
                src={sectoresImages.hero}
                alt="Repartidor entregando un paquete"
                width={1400}
                height={782}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="split-section section" data-reveal>
          <div className="container">
            <div className="split-grid stretch">
              <div className="photo-frame">
                <img
                  src={sectoresImages.commonProblem}
                  alt="Empresa gestionando el contexto de una entrega"
                  loading="lazy"
                  className="photo-frame-img"
                />
              </div>
              <div className="split-copy">
                <SectionHeading eyebrow="El problema común" title="Todas dependen de que alguien esté disponible para recibir." />
                <p>
                  Las empresas creen que su operación es demasiado particular: que su logística es
                  diferente, que sus procesos son únicos. Y, en efecto, lo son.
                </p>
                <p>
                  Pero existe un punto donde todas coinciden: todas dependen de que alguien esté
                  disponible para recibir. <strong>Ese momento es universal.</strong>
                </p>
                <p>No importa el producto. No importa el tamaño. No importa el sector.</p>
                <p>
                  La incertidumbre siempre tiene el mismo efecto: entregas fallidas, tiempo
                  perdido, clientes frustrados y costos que suben.
                </p>
              </div>
            </div>
          </div>
        </section>

        {sectors.map((sector, index) => {
          const SectorIcon = sectorIcons[index];
          const reverse = index % 2 === 1;
          return (
            <section
              className={`split-section section sector-section${reverse ? "" : " wave-section-bottom"}`}
              key={sector.number}
              data-reveal
            >
              <div className="container">
                <div className={`split-grid stretch${reverse ? " split-grid--reverse" : ""}`}>
                  <div className="photo-frame">
                    <div
                      className="usecase-card-media"
                      role="img"
                      aria-label={`Imagen pendiente: ${sector.name}`}
                    >
                      <span>ASSET FALTANTE</span>
                    </div>
                  </div>
                  <div className="split-copy sector-copy">
                    <div className="round-icon sector-icon">
                      <SectorIcon />
                    </div>
                    <SectionHeading eyebrow={`Sector ${sector.number}`} title={sector.name} />
                    <div className="sector-blocks">
                      <SectorBlock icon={<Target />} title="El desafío" items={sector.challenge} />
                      <SectorBlock icon={<Clock3 />} title="Lo que ocurre hoy" items={sector.today} />
                      <SectorBlock icon={<CheckCircle2 />} title="Cómo cambia con Shopitrack" items={sector.change} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="changes section wave-section-bottom" data-reveal>
          <div className="container">
            <SectionHeading eyebrow="Otros sectores" title="La naturaleza del producto puede cambiar. El principio permanece." centered />
            <ul className="industry-list">
              {otherSectors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="coming-soon-copy">
              <strong>La compra termina cuando alguien recibe aquello que esperaba.</strong>
            </p>
          </div>
        </section>

        <section className="contact-section section wave-section-bottom" id="contacto" data-reveal>
          <div className="container contact-grid">
            <div>
              <h2>Cada sector tiene productos distintos. Todos necesitan generar confianza.</h2>
              <p>
                Conversemos sobre la forma en que Shopitrack puede adaptarse a la operación de tu
                empresa y ayudarte a convertir cada entrega en una mejor experiencia para tus
                clientes.
              </p>
              <div className="contact-actions">
                <Link className="btn btn-coral" to="/contacto">
                  Agenda una demostración <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div className="photo-frame">
              <img
                src={sectoresImages.cta}
                alt="Cliente recibiendo su pedido con una sonrisa"
                loading="lazy"
                className="photo-frame-img"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
