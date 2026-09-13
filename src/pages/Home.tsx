import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  Check,
  CircleUserRound,
  Clock3,
  PackageCheck,
  UsersRound,
} from "lucide-react";
import { InfoCard } from "@/components/InfoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import { images, industries, steps } from "@/data/home";
import { seoConfig } from "@/data/seo";

function BellIcon() {
  return (
    <span className="bell-icon">
      <span />
    </span>
  );
}

export function Home() {
  return (
    <>
      <Seo {...seoConfig.home} />
      <div id="page-home" className="page page-home">
        <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 id="hero-title">
              La entrega no falla cuando un repartidor llega tarde. Falla mucho
              antes.
            </h1>
            <p>
              Cada día miles de entregas dependen de una suposición. Que habrá
              alguien para recibir. Cuando esa suposición falla... Todo lo demás
              también.
            </p>
            <a className="btn btn-primary" href="#como-funciona">
              Descubre por qué <ArrowRight size={16} />
            </a>
          </div>
          <div className="hero-art">
          </div>
        </div>
        </section>

        <section
        className="split-section wave-section"
        id="como-funciona"
        data-reveal
      >
        <div className="container split-grid stretch">
          <div className="photo-frame">
            <img
              src={images.courier}
              alt="Repartidor caminando con una caja junto a un vehículo"
              loading="lazy"
            />
          </div>
          <div className="split-copy">
            <h2>
              La mayoría de las entregas fallidas no se deben a la logística. Se
              deben a la falta de comunicación.
            </h2>
            <p>
              Vehículos recorriendo kilómetros innecesarios. Clientes esperando
              todo el día. Empresas reprogramando entregas. Operadores perdiendo
              tiempo. Call centers saturados. Clientes molestos. Y todo ocurre
              porque nadie confirmó algo muy sencillo. ¿La fecha realmente
              funciona para ambas partes?
            </p>
          </div>
        </div>
        </section>

        <section className="stories section wave-section" data-reveal>
        <div className="container">
          <SectionHeading title="Dos historias. Un mismo problema." />
          <div className="story-grid">
            <InfoCard
              icon={<Building2 />}
              title="Empresa"
              label="Programó. Preparó. Asignó."
            >
              Despatch. Pero encontró una puerta cerrada.
            </InfoCard>
            <article className="story-card">
              <img
                src={images.customer}
                alt="Cliente esperando una entrega en casa"
                loading="lazy"
              />
              <div>
                <div className="round-icon">
                  <CircleUserRound />
                </div>
                <strong>Cliente</strong>
                <h3>
                  Compró. Canceló actividades. Nunca supo exactamente cuándo
                  llegaría.
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

        <section className="cost-section section wave-section" data-reveal>
        <div className="container cost-grid">
          <div>
            <SectionHeading title="El costo invisible" />
            <p>
              Hasta ahora hablamos de emociones. Ahora hablamos de negocios. Una
              entrega fallida cuesta combustible. Tiempo. Reprogramación.
              Llamadas. Horas de trabajo. Pero también cuesta algo normalmente
              nadie mide. Confianza. Una mala entrega puede borrar una excelente
              experiencia de compra. Porque el cliente recuerda como terminó. No
              cómo empezó.
            </p>
          </div>
          <div className="cost-art">
            <img
              src={images.operator}
              alt="Operadora revisando información de entregas"
              loading="lazy"
            />
            <div className="dashboard-card">
              <div />
              <div />
              <div />
              <div />
              <b />
              <b />
              <b />
            </div>
          </div>
        </div>
        </section>

        <section className="new-way section wave-section" data-reveal>
        <div className="container split-grid split-grid--reverse">
          <div className="split-copy">
            <h2>Una nueva forma de entender la última milla.</h2>
            <p>
              Aquí ocurre el cambio real. La industria lleva años preguntándose:
              ¿Cómo entrego más rápido? Shopitrack propone otra pregunta. ¿Cómo
              logramos que empresa y cliente estén listos al mismo tiempo? La
              diferencia parece pequeña. En realidad cambia completamente la
              conversación.
            </p>
          </div>
          <div className="photo-frame photo-frame--wide">
            <img
              src={images.delivery}
              alt="Cliente y repartidor coordinando la entrega de un paquete"
              loading="lazy"
            />
            <div className="calendar-card">
              <CalendarDays size={23} />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        </section>

        <section className="steps-section section wave-section" data-reveal>
        <div className="container">
          <SectionHeading
            title="Cinco pasos. Una mejor experiencia de entrega."
            centered
          />
          <div className="steps-list">
            {steps.map(([number, text], index) => (
              <div
                className="step"
                key={number}
                data-reveal
                data-reveal-delay={String(Math.min(index, 4))}
              >
                <div className="step-line">
                  <span>
                    {index === 0 ? (
                      <CalendarDays />
                    ) : index === 1 ? (
                      <Check />
                    ) : index === 2 ? (
                      <BellIcon />
                    ) : index === 3 ? (
                      <Clock3 />
                    ) : (
                      <PackageCheck />
                    )}
                  </span>
                  {index < steps.length - 1 && (
                    <i>
                      <ArrowRight />
                    </i>
                  )}
                </div>
                <small>{number}</small>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
        </section>

        <section className="changes section wave-section" data-reveal>
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

        <section className="trust-section section" data-reveal>
        <div className="container trust-grid">
          <div>
            <h2>Confianza</h2>
            <p>
              Las empresas entregan productos. Pero realmente cumplen promesas.
              Shopitrack ayuda a que esas promesas lleguen completas hasta la
              puerta del cliente. No vendemos notificaciones. Vendemos
              confianza.
            </p>
          </div>
          <img
            src={images.customer}
            alt="Cliente recibiendo un paquete de su repartidor"
            loading="lazy"
          />
        </div>
        </section>

        <section
        className="industries section wave-section"
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
              Cada industria comparte exactamente el mismo reto. Coordinar
              personas. No únicamente entregas.
            </p>
            <Link className="btn btn-primary" to="/industrias">
              Explorar industrias <ArrowRight size={16} />
            </Link>
          </div>
          <div className="collage">
            <img src={images.delivery} alt="Entrega en tienda" loading="lazy" />
            <img
              src={images.courier}
              alt="Repartidor llevando una caja"
              loading="lazy"
            />
            <img
              src={images.customer}
              alt="Cliente recibiendo un pedido"
              loading="lazy"
            />
          </div>
        </div>
        </section>

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

        <section
        className="contact-section section wave-section"
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
            <div className="laptop-screen">
              <div className="mock-chart">
                <BarChart3 />
              </div>
              <div className="mock-bars">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="phone-screen">
              <div />
              <div />
              <strong />
              <span />
            </div>
          </div>
        </div>
        </section>
      </div>
    </>
  );
}
