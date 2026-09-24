import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CircleUserRound,
  UsersRound,
} from "lucide-react";
import { IndustriesShowcase } from "@/components/IndustriesShowcase";
import { InfoCard } from "@/components/InfoCard";
import { LottiePlayer } from "@/components/LottiePlayer";
import { StepsList } from "@/components/StepsList";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import { images, industries, steps } from "@/data/home";
import { seoConfig } from "@/data/seo";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export function Home() {
  return (
    <>
      <Seo {...seoConfig.home} />
      <div id="page-home" className="page page-home">
        <ErrorBoundary name="Home: hero">
          <section
            className="hero wave-section-bottom"
            aria-labelledby="hero-title"
          >
            <div className="container hero-grid">
              <div className="hero-copy">
                <h1 id="hero-title">
                  La entrega no falla cuando un repartidor llega tarde. Falla
                  mucho antes.
                </h1>
                <p>
                  Cada día miles de entregas dependen de una suposición. Que habrá
                  alguien para recibir. Cuando esa suposición falla... Todo lo
                  demás también.
                </p>
                <a className="btn btn-primary" href="#como-funciona">
                  Descubre por qué <ArrowRight size={16} />
                </a>
              </div>
              <div className="hero-art">
                <img
                  src="/images/hero-img.webp"
                  srcSet="/images/hero-img-800.webp 800w, /images/hero-img.webp 1400w"
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

        <ErrorBoundary name="Home: split-section">
          <section
            className="split-section section wave-section wave-section-bottom"
            id="como-funciona"
            data-reveal
          >
            <div className="container">
              <div className="split-grid stretch">
                <div className="photo-frame photo-frame">
                  <img
                    src={images.courier}
                    width={1024}
                    height={506}
                    alt="Repartidor caminando con una caja junto a un vehículo"
                    loading="lazy"
                    className="photo-frame-img visible md:invisible"
                  />
                </div>
                <div className="split-copy md:flex md:items-center md:content-center flex-wrap">
                  <h2>
                    La mayoría de las entregas fallidas no se deben a la
                    logística. Se deben a la falta de comunicación.
                  </h2>
                  <p>
                    Vehículos recorriendo kilómetros innecesarios. Clientes
                    esperando todo el día. Empresas reprogramando entregas.
                    Operadores perdiendo tiempo. Call centers saturados. Clientes
                    molestos. Y todo ocurre porque nadie confirmó algo muy
                    sencillo. ¿La fecha realmente funciona para ambas partes?
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Home: stories">
          <section className="stories section wave-section-bottom" data-reveal>
            <div className="container">
              <SectionHeading title="Dos historias. Un mismo problema." />
              <div className="story-grid">
                <article className="story-card blur-right">
                  <img
                    src={images.company}
                    width={1200}
                    height={655}
                    alt="Empresa recibiendo una entrega"
                    loading="lazy"
                  />
                  <div className="story-text">
                    <div className="round-icon">
                      <Building2 />
                    </div>
                    <strong>Empresa</strong>
                    <h3>
                      Programó. Preparó. Asigno. Despachó. <br />
                      Pero encontró una puerta cerrada.
                    </h3>
                  </div>
                </article>
                <article className="story-card blur-left story-reverse">
                  <img
                    src={images.customerAngry}
                    width={1050}
                    height={592}
                    alt="Cliente esperando una entrega en casa"
                    loading="lazy"
                  />
                  <div className="story-text">
                    <div className="round-icon">
                      <CircleUserRound />
                    </div>
                    <strong>Cliente</strong>
                    <h3>
                      Compró. Canceló actividades. <br />
                      Nunca supo exactamente cuándo llegaría.
                    </h3>
                  </div>
                </article>
              </div>
              <div className="story-divider">
                <span />
                <b>Dos historias. Una misma causa. La incertidumbre.</b>
                <span />
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Home: cost-section">
          <section className="cost-section wave-section-bottom" data-reveal>
            <div className="container cost-grid split-grid">
              <div className="split-copy cost-text">
                <SectionHeading title="El costo invisible" />
                <p>
                  Hasta ahora hablamos de emociones. Ahora hablamos de negocios.
                  Una entrega fallida cuesta combustible. Tiempo. Reprogramación.
                  Llamadas. Horas de trabajo. Pero también cuesta algo normalmente
                  nadie mide. Confianza. Una mala entrega puede borrar una
                  excelente experiencia de compra. Porque el cliente recuerda como
                  terminó. No cómo empezó.
                </p>
              </div>
              <div className="cost-art photo-frame-blur photo-frame photo-frame--wide">
                <img
                  src={images.operator}
                  width={1200}
                  height={655}
                  alt="Operadora revisando información de entregas"
                  loading="lazy"
                  className="photo-frame-img visible md:invisible"
                />
                <div className="over-img dashboard-card-image">
                  <LottiePlayer
                    src="/lottie/costo-invisible.json"
                    className="dashboard-card-lottie"
                    ariaLabel="Costos de una entrega fallida en aumento mientras la confianza del cliente cae"
                  />
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Home: new-way-section">
          <section
            className="new-way-section mt-0 wave-section-bottom"
            data-reveal
          >
            <div className="container lastmile-grid split-grid split-grid--reverse">
              <div className="split-copy lastmile-text">
                <h2>Una nueva forma de entender la última milla.</h2>
                <p>
                  Aquí ocurre el cambio real. La industria lleva años
                  preguntándose: ¿Cómo entrego más rápido? Shopitrack propone otra
                  pregunta. ¿Cómo logramos que empresa y cliente estén listos al
                  mismo tiempo? La diferencia parece pequeña. En realidad cambia
                  completamente la conversación.
                </p>
              </div>
              <div className="lastmile-art photo-frame-blur photo-frame photo-frame--wide">
                <img
                  src={images.delivery}
                  width={1024}
                  height={559}
                  alt="Cliente y repartidor coordinando la entrega de un paquete"
                  loading="lazy"
                  className="photo-frame-img visible md:invisible"
                />
                <div className="over-img calendar-card">
                  <img
                    src={images.calendarCard}
                    width={600}
                    height={529}
                    alt="Calendario con la fecha de entrega confirmada"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Home: steps-section">
          <section
            className="steps-section section wave-section-bottom"
            data-reveal
          >
            <div className="container">
              <SectionHeading
                title="Cinco pasos. Una mejor experiencia de entrega."
                centered
              />
              <StepsList steps={steps} />
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Home: changes">
          <section className="changes section wave-section-bottom" data-reveal>
            <div className="container">
              <SectionHeading title="Lo que cambia" centered />
              <div className="change-grid">
                <InfoCard
                  icon={<Building2 />}
                  title="Para la empresa"
                  label="Menos entregas fallidas."
                >
                  Menos costos. Más confianza. Más recompra.
                </InfoCard>
                <InfoCard
                  icon={<CircleUserRound />}
                  title="Para el operador"
                  label="Menos recorridos innecesarios."
                >
                  Mayor productividad. Menos frustración.
                </InfoCard>
                <InfoCard
                  icon={<UsersRound />}
                  title="Para el cliente"
                  label="Más libertad. Más información."
                >
                  Más tranquilidad. Más control.
                </InfoCard>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Home: trust-section">
          <section className="trust-section section" data-reveal>
            <div className="container trust-grid">
              <div className="trust-text">
                <h2>Confianza</h2>
                <p>
                  Las empresas entregan productos. Pero realmente cumplen
                  promesas. Shopitrack ayuda a que esas promesas lleguen completas
                  hasta la puerta del cliente. No vendemos notificaciones.
                  Vendemos confianza.
                </p>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Home: industries">
          <section
            className="industries section wave-section-bottom"
            id="industrias"
            data-reveal
          >
            <div className="container industry-grid">
              <div>
                <h2>
                  Una plataforma para cualquier empresa que entregue a domicilio.
                </h2>
                <ul className="industry-list">
                  {industries.map((industry) => (
                    <li key={industry}>{industry}</li>
                  ))}
                </ul>
                <p>
                  Cada sector comparte exactamente el mismo reto. Coordinar
                  personas. No únicamente entregas.
                </p>
                <Link className="btn btn-primary" to="/sectores">
                  Explorar sectores <ArrowRight size={16} />
                </Link>
              </div>
              <IndustriesShowcase />
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Home: promise-section">
          <section className="promise-section section" data-reveal>
            <div className="container">
              <p>
                No importa qué tan bueno sea un producto. No importa qué tan
                eficiente sea una operación. No importa qué tan atractivo sea un
                precio. Si la entrega termina mal... La compra también. Por eso la
                última milla no es el final de la logística. Es el final de la
                promesa.
              </p>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Home: contact-section">
          <section
            className="contact-section section wave-section-bottom"
            id="contacto"
            data-reveal
          >
            <div className="container contact-grid">
              <div>
                <h2>
                  Transforma cada entrega en una mejor experiencia para tus
                  clientes.
                </h2>
                <p>
                  Conoce cómo transformar la entrega en una experiencia que
                  fortalezca la confianza de tus clientes.
                </p>
                <div className="contact-actions">
                  <Link className="btn btn-coral" to="/contacto">
                    Agenda una demostración <ArrowRight size={15} />
                  </Link>
                  <a className="btn btn-outline" href="#como-funciona">
                    Explora cómo funciona Shopitrack
                  </a>
                </div>
              </div>
              <div className="device-mockup">
                <img
                  src={images.deviceMockup}
                  width={712}
                  height={351}
                  alt="Panel de Shopitrack con el seguimiento de una entrega en curso"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </ErrorBoundary>
      </div>
    </>
  );
}
