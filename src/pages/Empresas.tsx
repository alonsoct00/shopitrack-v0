import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { InfoCard } from "@/components/InfoCard";
import { StepsList } from "@/components/StepsList";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import {
  communicationActors,
  costCards,
  coordinationSteps,
  empresasImages,
  integrationItems,
  logisticItems,
  orgBenefits,
  roiCards,
  trustItems,
  useCases,
} from "@/data/empresas";
import { seoConfig } from "@/data/seo";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import type { Icon, IconItem } from "@/data/types";
import { RichText } from "@/components/RichText";

function StatCard({
  icon,
  title,
  items,
  bullet = "check",
}: {
  icon?: ReactNode;
  title?: string;
  items: (string | IconItem)[];
  bullet?: "check" | "cross";
}) {
  const entries: { text: string; icon?: Icon }[] = items.map((item) =>
    typeof item === "string" ? { text: item } : item,
  );
  const hasItemIcons = entries.some((entry) => entry.icon);

  return (
    <article
      className={`info-card stat-card${hasItemIcons ? " stat-card--icons" : ""}`}
    >
      {hasItemIcons ? (
        <div className="stat-card-icons" aria-hidden="true">
          {entries.map(
            ({ text, icon: ItemIcon }) =>
              ItemIcon && (
                <span className="round-icon" key={text}>
                  <ItemIcon />
                </span>
              ),
          )}
        </div>
      ) : (
        <div className="round-icon">{icon}</div>
      )}
      <div className="info-card-content">
        {title && (
          <h2>
            <RichText text={title} />
          </h2>
        )}
        <ul
          className={`industry-list${bullet === "cross" ? " industry-list--cross" : ""}`}
        >
          {entries.map((entry) => (
            <li key={entry.text}>
              <RichText text={entry.text} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Empresas() {
  return (
    <>
      <Seo {...seoConfig.empresas} />
      <div id="page-empresas" className="page page-empresas">
        <ErrorBoundary name="Empresas: hero">
          <section
            className="hero wave-section-bottom"
            aria-labelledby="empresas-hero-title"
          >
            <div className="container hero-grid">
              <div className="hero-copy">
                <h1 id="empresas-hero-title">
                  Cada entrega enaltece o sepulta la lealtad a tu marca
                </h1>
                <p>
                  Los clientes no separan quién vendió, la calidad del producto
                  ni la experiencia en recibirlo. Para ellos, todo forma la
                  misma experiencia de compra.
                </p>
                <Link className="btn btn-primary" to="/contacto">
                  Quiero una demostración <ArrowRight size={16} />
                </Link>
              </div>
              <div className="hero-art">
                <img
                  src={empresasImages.hero}
                  srcSet={empresasImages.heroSrcSet}
                  sizes="(max-width: 800px) 100vw, 50vw"
                  alt="Repartidor entregando un paquete a una clienta sonriente"
                  width={1400}
                  height={782}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Empresas: split-section">
          <section className="split-section section" data-reveal>
            <div className="container">
              <div className="split-grid">
                <div className="split-copy">
                  <SectionHeading
                    eyebrow="La promesa invisible"
                    title="Toda empresa hace una promesa cuando acepta una compra. No importa si vende muebles, electrodomésticos, instalaciones tecnológicas o moda."
                  />
                  <div className="text-content">
                    <h4>
                      La promesa siempre es la misma. <q>Confía en nosotros.</q>
                    </h4>
                    <p>
                      Esa promesa no termina cuando se aprueba el pago. <br />
                      Termina cuando el cliente <b>recibe exactamente</b> lo que
                      esperaba.
                    </p>
                    <h3>
                      Cada entrega es momento donde esa promesa se fortalece o
                      se rompe.
                    </h3>
                  </div>
                </div>
                <div className="split-copy"></div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Empresas: cost-section">
          <section className="cost-section section" data-reveal>
            <div className="container">
              <SectionHeading
                eyebrow="El verdadero costo de una entrega fallida"
                title="Una entrega fallida cuesta dos veces."
              />
              <div className="split-grid stretch mt-4">
                <div className="cost-grid">
                  {costCards.map((card) => (
                    <StatCard
                      key={card.title}
                      title={card.title}
                      items={card.items}
                      bullet="cross"
                    />
                  ))}
                </div>
                <div
                  className="usecase-card-media cost-media"
                  role="img"
                  aria-label="Imagen pendiente: costo de una entrega fallida"
                >
                  <span>ASSET FALTANTE</span>
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Empresas: last-impression">
          <section
            className="last-impression split-section section wave-section-bottom"
            data-reveal
          >
            <div className="container">
              <div className="split-grid stretch">
                <div className="split-copy">
                  <SectionHeading
                    eyebrow="La última impresión"
                    title="Las personas recuerdan especialmente cómo terminan las experiencias."
                  />
                  <h3>
                    La última milla no es el final de la operación. <br />
                    Es el principio del recuerdo.
                  </h3>
                  <p>
                    Cada entrega es momento donde esa promesa se fortalece o se
                    rompe.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Empresas: logistic-problem">
          <section
            className="logistic-problem split-section section"
            data-reveal
          >
            <div className="container">
              <div className="split-grid">
                <div className="split-copy">
                  <SectionHeading
                    eyebrow="El problema nunca fue la logística"
                    title=""
                  />
                  <div className="logistic-grid">
                    <StatCard items={logisticItems} />
                  </div>
                </div>
                <div className="text-content">
                  <h4>Todo ello, sin duda, mejora la operación.</h4>
                  <p>Pero ninguno responde la pregunta más importante:</p>
                  <h3>
                    ¿La persona que va a recibir, puede recibir cuándo llegue la
                    unidad?
                  </h3>
                  <p>
                    Mientras esas respuestas sigan siendo una suposición, la
                    suerte seguirá decidiendo.
                  </p>
                  <h3>Shopitrack renueva la suposición por certeza.</h3>
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Empresas: steps-section">
          <section
            className="steps-section section wave-section-bottom"
            data-reveal
          >
            <div className="container">
              <SectionHeading
                eyebrow="Una nueva manera de coordinar"
                title="Programar una entrega no es lo mismo que coordinarla."
                centered
              />
              <StepsList steps={coordinationSteps} />
            </div>

            <div className="container mt-6 communication-flow">
              <h3>Constante comunicación</h3>
              <StepsList steps={communicationActors} variant="flow" />
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Empresas: benefits-section">
          <section className="benefits-section section" data-reveal>
            <div className="container">
              <SectionHeading
                eyebrow="Beneficios para toda la organización"
                title="Protege la reputación de la marca y fortalece la lealtad del cliente con cada entrega cumplida."
                centered
              />
              <div className="benefits-grid">
                {orgBenefits.map((benefit) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <InfoCard
                      key={benefit.title}
                      icon={<BenefitIcon />}
                      title={benefit.title}
                      label={benefit.label}
                      image={benefit.image}
                      items={benefit.items}
                    >
                      {benefit.description}
                    </InfoCard>
                  );
                })}
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Empresas: tech-integration">
          <section
            className="tech-integration section wave-section-bottom"
            data-reveal
          >
            <div className="split-grid stretch mt-4">
              <div className="container">
                <SectionHeading eyebrow="Integración natural" title="" />
                <div className="text-copy">
                  <ul className="integration-list industry-list industry-list--stack">
                    <li>
                      <span>
                        <b>Shopitrack</b> no sustituye el <strong>ERP</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        No sustituye el <strong>WMS</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        No sustituye el <strong>TMS</strong>.
                      </span>
                    </li>
                  </ul>
                  <h3>No es un sistema de Ruteo.</h3>
                </div>
                <div className="change-grid">
                  {integrationItems.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <InfoCard
                        key={item.title}
                        icon={<ItemIcon />}
                        title={item.title}
                        label={item.label}
                      >
                        {item.description}
                      </InfoCard>
                    );
                  })}
                </div>
                <div className="text-copy">
                  <h4>El objetivo no es reemplazar.</h4>
                  <div className="communication-flow">
                    <span>Es comunicar:</span>
                    <StepsList steps={communicationActors} variant="flow" />
                  </div>
                  <h3>La meta es coordinar.</h3>
                  <h3>El objetivo es potenciar.</h3>
                </div>
              </div>
              <div
                className="usecase-card-media cost-media"
                role="img"
                aria-label="Imagen pendiente: costo de una entrega fallida"
              >
                <span>ASSET FALTANTE</span>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Empresas: usecases-section">
          <section className="sr-only usecases-section section" data-reveal>
            <div className="container">
              <SectionHeading
                eyebrow="Casos de uso"
                title="Dónde Shopitrack marca más la diferencia."
                centered
              />
              <div className="usecases-grid">
                {useCases.map((useCase) => (
                  <article className="usecase-card" key={useCase.title}>
                    <div
                      className="usecase-card-media"
                      role="img"
                      aria-label={`Imagen pendiente: ${useCase.title}`}
                    >
                      <span>ASSET FALTANTE</span>
                    </div>
                    <h3>{useCase.title}</h3>
                    <p>{useCase.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Empresas: roi-section">
          <section
            className="sr-only roi-section section wave-section-bottom"
            data-reveal
          >
            <div className="container">
              <SectionHeading
                eyebrow="ROI"
                title="La pregunta no es sólo cuánto cuesta Shopitrack. También cuánto cuesta seguir trabajando igual."
                centered
              />
              <div className="roi-grid">
                {roiCards.map((card) => {
                  const RoiIcon = card.icon;
                  return (
                    <StatCard
                      key={card.title}
                      icon={<RoiIcon />}
                      title={card.title}
                      items={card.items}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Empresas: confidence-section">
          <section
            className="confidence-section split-section section"
            data-reveal
          >
            <div className="container">
              <div className="split-grid">
                <div className="split-copy">
                  <SectionHeading
                    eyebrow="La confianza como ventaja competitiva"
                    title="La confianza no se construye en una sola entrega. Se construye en la consistencia."
                  />
                  <div className="text-copy">
                    <ul className="confidence-list">
                      <li>Los productos pueden copiarse</li>
                      <li>Los precios cambian</li>
                      <li>Las promociones terminan</li>
                      <li>La tecnología evoluciona</li>
                      <li>La confianza se debe mantener</li>
                    </ul>
                    <p>
                      Las empresas que logren entregar sistemáticamente una
                      experiencia predecible, construirán relaciones más fuertes
                      con sus clientes.
                    </p>
                    <h3>
                      <b>Shopitrack</b> construye consistencia
                    </h3>
                    <h3>Y la consistencia se convierte en reputación</h3>

                    <ul className="sr-only industry-list industry-list--stack">
                      {trustItems.map((item) => (
                        <li key={item}>
                          <RichText text={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="split-copy"></div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Empresas: contact-section">
          <section
            className="contact-section section wave-section-bottom"
            id="contacto"
            data-reveal
          >
            <div className="container contact-grid">
              <div>
                <h2>
                  Convierte cada entrega en una oportunidad para fortalecer tu
                  marca.
                </h2>
                <p>
                  Shopitrack te ayuda a cumplir tu promesa donde más importa: en
                  la puerta de tu cliente.
                </p>
                <div className="contact-actions">
                  <Link className="btn btn-coral" to="/contacto">
                    Agenda una demostración personalizada{" "}
                    <ArrowRight size={15} />
                  </Link>
                  <Link className="btn btn-outline" to="/contacto">
                    Habla con un especialista
                  </Link>
                </div>
              </div>
              <div className="photo-frame">
                <img
                  src={empresasImages.cta}
                  width={1024}
                  height={559}
                  alt="Cliente y repartidor coordinando la entrega de un paquete"
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
