import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Shuffle, Target } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import {
  featuredSectors,
  otherSectors,
  sectoresImages,
  sectors,
} from "@/data/sectores";
import { seoConfig } from "@/data/seo";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { RichText } from "@/components/RichText";
import { ImageWithFallback } from "@/components/ImageWithFallback";

type SectorTone = "challenge" | "today" | "change";

function SectorBlock({
  icon,
  title,
  items,
  tone,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
  tone: SectorTone;
}) {
  if (items.length === 0) return null;
  return (
    <div className={`sector-block sector-block--${tone}`}>
      <h3>
        <span className="sector-block-icon" aria-hidden="true">
          {icon}
        </span>
        {title}
      </h3>
      <ul className="industry-list">
        {items.map((item) => (
          <li key={item}>
            <RichText text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Sectores() {
  return (
    <>
      <Seo {...seoConfig.sectores} />
      <div id="page-sectores" className="page page-sectores">
        <ErrorBoundary name="Sectores: hero">
          <section
            className="hero wave-section-bottom"
            aria-labelledby="sectores-hero-title"
          >
            <div className="container hero-grid">
              <div className="hero-copy">
                <span className="sr-only eyebrow">Sectores</span>
                <h1 id="sectores-hero-title">
                  No importa qué vendas. Importa cómo termina la experiencia de
                  compra.
                </h1>
                <p>
                  Cada sector tiene desafíos distintos. Pero todas dependen de
                  que una entrega ocurra en el momento correcto y con la
                  información adecuada.
                </p>
                <p className="statement">
                  <strong>
                    Coordinación en la entrega; es lo que los clientes exigen.
                  </strong>
                </p>
                <Link className="btn btn-primary" to="/contacto">
                  Agenda una demostración <ArrowRight size={16} />
                </Link>
              </div>
              <div className="hero-art">
                <ImageWithFallback
                  src={sectoresImages.hero}
                  srcSet={sectoresImages.heroSrcSet}
                  sizes="(max-width: 800px) 100vw, 50vw"
                  alt="Repartidor entregando un paquete"
                  width={1400}
                  height={782}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="photo-frame-img visible md:invisible"
                />
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Sectores: split-section">
          <section className="hero-bottom split-section section" data-reveal>
            <div className="container">
              <div className="split-grid stretch">
                <div className="split-copy">
                  <SectionHeading
                    eyebrow=""
                    title="Existe un punto donde toda entrega o visita coincide."
                  />
                  <h2 className="sr-only">
                    Todas dependen de que alguien esté disponible para recibir.
                  </h2>
                  <p>
                    Existe un punto donde toda entrega o visita coincide. <br />
                  </p>
                  <ul className="industry-list">
                    <li>No importa el producto.</li>
                    <li>No importa el servicio.</li>
                    <li>No importa el tamaño.</li>
                    <li>No importa el sector.</li>
                  </ul>
                  <p>
                    Todas dependen de que alguien esté disponible para recibir.
                    <br />
                    <strong>Ese momento es crucial.</strong>
                  </p>
                  <p className="strong" style={{ marginBottom: "6px" }}>
                    La incertidumbre siempre tiene el mismo efecto:
                  </p>
                  <h3 className="strong">
                    Entregas fallidas, tiempo perdido, clientes frustrados{" "}
                    <br /> y costos que aumentan.
                  </h3>
                </div>
                <div className="photo-frame">
                  <ImageWithFallback
                    src={sectoresImages.commonProblem}
                    width={1200}
                    height={655}
                    alt="Empresa gestionando el contexto de una entrega"
                    loading="lazy"
                    className="photo-frame-img"
                  />
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Sectores: sectores">
          <section className="sectors-section section" aria-label="Sectores">
            <div className="container sectors-list">
              {sectors.map((sector) => {
                const SectorIcon = sector.icon;
                const titleId = `sector-${sector.number}-title`;
                return (
                  <ErrorBoundary
                    key={sector.number}
                    name={`Sectores: ${sector.name}`}
                  >
                    <article
                      className="sector-card"
                      aria-labelledby={titleId}
                      data-reveal
                    >
                      <ImageWithFallback
                        className="sector-card-media"
                        src={sector.image.src}
                        alt={sector.image.alt}
                        width={1672}
                        height={941}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="sector-card-body">
                        <header className="sector-card-header">
                          <div
                            className="round-icon sector-icon"
                            aria-hidden="true"
                          >
                            <SectorIcon />
                          </div>
                          <div>
                            <span className="sector-number">
                              Sector {sector.number}
                            </span>
                            <h2 id={titleId}>{sector.name}</h2>
                          </div>
                        </header>
                        <div className="sector-blocks">
                          <SectorBlock
                            tone="challenge"
                            icon={<Target />}
                            title="El desafío"
                            items={sector.challenge}
                          />
                          <SectorBlock
                            tone="today"
                            icon={<Clock3 />}
                            title="Lo que ocurre hoy"
                            items={sector.today}
                          />
                          <SectorBlock
                            tone="change"
                            icon={<Shuffle />}
                            title="Cómo cambia con Shopitrack"
                            items={sector.change}
                          />
                        </div>
                      </div>
                    </article>
                  </ErrorBoundary>
                );
              })}
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Sectores: changes">
          <section className="changes section wave-section-bottom" data-reveal>
            <div className="container">
              <SectionHeading eyebrow="" title="Otros sectores" centered />
              <div className="text-content-copy">
                <h3 className="text-center mb-6">
                  La naturaleza del producto o servicio puede cambiar.
                  <br />
                  El principio permanece.
                </h3>
                <ul className="other-sectors-list other-sectors-list--featured">
                  {featuredSectors.map(({ text, icon: ItemIcon }) => (
                    <li key={text}>
                      <span className="round-icon" aria-hidden="true">
                        <ItemIcon />
                      </span>
                      <RichText text={text} />
                    </li>
                  ))}
                </ul>
                <ul className="sr-only other-sectors-list">
                  {otherSectors.map(({ text, icon: ItemIcon }) => (
                    <li key={text}>
                      <span className="round-icon" aria-hidden="true">
                        <ItemIcon />
                      </span>
                      <RichText text={text} />
                    </li>
                  ))}
                </ul>
                <h3
                  style={{
                    textAlign: "center",
                    fontSize: "1.4rem",
                    lineHeight: "1.35",
                    fontWeight: "600",
                  }}
                >
                  La experiencia termina cuando alguien recibe lo que esperaba.
                </h3>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Sectores: contact-section">
          <section
            className="contact-section section wave-section-bottom"
            id="contacto"
            data-reveal
          >
            <div className="container contact-grid">
              <div>
                <h2 style={{ marginBottom: "1rem" }}>
                  Cada sector tiene productos distintos. <br />
                </h2>
                <h2 style={{ marginBottom: "1rem" }}>
                  Todos necesitan generar confianza.
                </h2>
                <p className="lead">
                  Conversemos sobre la forma en que Shopitrack puede adaptarse a
                  la operación de tu empresa y ayudarte a convertir cada entrega
                  en una mejor experiencia para tus clientes.
                </p>
                <div className="contact-actions">
                  <Link className="btn btn-coral" to="/contacto">
                    Agenda una demostración <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
              <div className="photo-frame">
                <ImageWithFallback
                  src={sectoresImages.cta}
                  width={1672}
                  height={941}
                  alt="Dos profesionales cierran un acuerdo frente a una camioneta de reparto, con distintos sectores conectados"
                  loading="lazy"
                  className="photo-frame-img"
                />
              </div>
            </div>
          </section>
        </ErrorBoundary>
      </div>
    </>
  );
}
