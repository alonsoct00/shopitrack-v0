import { ArrowRight, Check, X } from "lucide-react";
import { InfoCard } from "@/components/InfoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import {
  appFeatureItems,
  appScreens,
  appStoreLinks,
  ctaStoreLinks,
  beforeAfterItems,
  clientSteps,
  clientesImages,
  faqItems,
  heroQuotes,
  stepsFootnote,
  waitingCostItems,
} from "@/data/clientes";
import { seoConfig } from "@/data/seo";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { RichText } from "@/components/RichText";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { ImageSlider } from "@/components/ImageSlider";

function StoreLinks({ links }: { links: typeof appStoreLinks }) {
  return links.map(({ text, icon: StoreIcon, href }) => (
    <a
      key={text}
      className="btn btn-outline"
      href={href || undefined}
      aria-disabled={!href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StoreIcon />
      {text}
    </a>
  ));
}

export function Clientes() {
  return (
    <>
      <Seo {...seoConfig.clientes} />
      <div id="page-clientes" className="page page-clientes">
        <ErrorBoundary name="Clientes: hero">
          <section
            className="hero wave-section-bottom"
            aria-labelledby="clientes-hero-title"
          >
            <div className="container hero-grid">
              <div className="hero-copy">
                <h1 id="clientes-hero-title">
                  Mi vida no debería detenerse porque espero una entrega.
                </h1>
                <ul className="pain-list">
                  {heroQuotes.map((quote) => (
                    <li key={quote}>&ldquo;{quote}&rdquo;</li>
                  ))}
                </ul>
                <p>
                  Esperar una entrega me condiciona a la conveniencia de quien
                  entrega.
                </p>
                <p>
                  <strong>Y eso no debiera ser lo normal.</strong>
                </p>
                <p style={{ fontSize: "1.5rem" }}>
                  <strong>Esto debe cambiar.</strong>
                </p>
              </div>
              <div className="hero-art">
                <ImageWithFallback
                  src={clientesImages.hero}
                  srcSet={clientesImages.heroSrcSet}
                  sizes="(max-width: 800px) 100vw, 50vw"
                  alt="Persona asomándose a la ventana mientras espera una entrega"
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

        <ErrorBoundary name="Clientes: split-section">
          <section
            className="split-section section wave-section-bottom"
            data-reveal
          >
            <div className="container">
              <div className="split-grid stretch">
                <div className="split-copy text-content">
                  <SectionHeading eyebrow="" title="Lo que implica esperar" />
                  <ul className="pain-list">
                    {waitingCostItems.map((item) => (
                      <li key={item}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                  <h3>
                    El verdadero costo de una entrega incierta <br />
                    es el tiempo que dejo de vivir.
                  </h3>
                </div>
                <div className="photo-frame">
                  <div
                    className="usecase-card-media"
                    role="img"
                    aria-label="Imagen pendiente: persona utilizando su tiempo mientras espera una entrega"
                  >
                    <span>ASSET FALTANTE</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Clientes: section">
          <section className="section" data-reveal>
            <div className="container">
              <div className="clientes-intro-copy split-copy">
                <SectionHeading
                  eyebrow=""
                  title="Una entrega debe adaptarse a mi vida"
                  centered
                />
                <div className="text-content">
                  <p>
                    Durante años hemos adaptado nuestra agenda a la
                    disponibilidad de las empresas que hacen entregas.
                  </p>
                  <p>Shopitrack propone exactamente lo contrario.</p>
                  <h3>Las entregas deben adaptarse a mi vida.</h3>
                  <p>
                    Comprar un producto nunca debería convertirse en una
                    limitación para dejar de vivir el resto de mi día.
                  </p>
                  <h3>La tecnología existe para simplificar la vida.</h3>
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Clientes: steps-section">
          <section
            className="steps-section section wave-section-bottom"
            data-reveal
          >
            <div className="container">
              <SectionHeading
                eyebrow="Así funciona"
                title="Una experiencia simple de principio a fin."
                centered
              />
              <div className="change-grid experience-steps-grid">
                {clientSteps.map((step) => (
                  <InfoCard
                    key={step.label}
                    image={step.image}
                    title={step.label}
                  >
                    {step.text}
                  </InfoCard>
                ))}
              </div>
              <p className="coming-soon-copy steps-footnote">{stepsFootnote}</p>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Clientes: section">
          <section className="section" data-reveal>
            <div className="container">
              <SectionHeading title="Lo que cambia para ti" centered />
              <div className="before-after-legend" aria-hidden="true">
                <span className="before-after-legend-item">
                  <X className="before-after-mark" /> Antes
                </span>
                <span className="before-after-legend-item before-after-legend-item--after">
                  <Check className="before-after-mark" /> Ahora
                </span>
              </div>
              <div className="before-after-list">
                {beforeAfterItems.map((item) => (
                  <div className="before-after-row" key={item.before}>
                    <div className="before-after-item">
                      <X className="before-after-mark" aria-hidden="true" />
                      <p>
                        <span className="before-after-label">Antes: </span>
                        {item.before}
                      </p>
                    </div>
                    <span className="before-after-arrow" aria-hidden="true">
                      <ArrowRight />
                    </span>
                    <div className="before-after-item before-after-item--after">
                      <Check className="before-after-mark" aria-hidden="true" />
                      <p>
                        <span className="before-after-label">Ahora: </span>
                        {item.after}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Clientes: split-section">
          <section
            className="split-section section wave-section-bottom"
            data-reveal
          >
            <div className="container">
              <div className="split-grid stretch">
                <div className="split-copy">
                  <SectionHeading title="La aplicación" />
                  <p>
                    Desde el momento en que aceptas una fecha hasta el instante
                    en que recibes tu compra:
                  </p>
                  <ul className="app-features-list industry-list">
                    {appFeatureItems.map((item) => (
                      <li key={item}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                  <p>
                    <strong>
                      La mejor tecnología es aquella que trabaja para mí.
                    </strong>
                  </p>
                  <div className="store-buttons">
                    <StoreLinks links={appStoreLinks} />
                  </div>
                </div>
                <div className="app-demo-slider photo-frame">
                  <ImageSlider
                    slides={appScreens}
                    label="Características de la aplicación"
                    arrows
                    dots
                  />
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Clientes: section">
          <section className="section faq-section" data-reveal>
            <div className="container">
              <SectionHeading centered title="Preguntas frecuentes" />
              <div className="faq-list">
                {faqItems.map((item) => (
                  <details className="faq-item" key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Clientes: contact-section">
          <section
            className="contact-section section wave-section-bottom"
            data-reveal
          >
            <div className="container contact-grid">
              <div className="text-content">
                <h2 style={{ fontSize: "2.4rem" }}>
                  Recupera el control de tu día a día.
                </h2>
                <p>
                  La próxima vez que una tienda utilice Shopitrack, tendrás una
                  forma mucho más sencilla de coordinar el momento de recibir tu
                  compra.
                </p>
                <h3>La incertidumbre,</h3>
                <h3>YA NO ES parte de la experiencia de compra.</h3>
                <div className="contact-actions store-buttons">
                  <StoreLinks links={ctaStoreLinks} />
                </div>
              </div>
              <div className="photo-frame">
                <div
                  className="usecase-card-media"
                  role="img"
                  aria-label="Imagen pendiente: mockup real de la aplicación"
                >
                  <span>ASSET FALTANTE</span>
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>
      </div>
    </>
  );
}
