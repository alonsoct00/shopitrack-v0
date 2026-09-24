import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Frown,
  Fuel,
  Headphones,
  Layers,
  Megaphone,
  MessageSquareWarning,
  Package,
  PackageCheck,
  PackageX,
  PhoneCall,
  Puzzle,
  Route,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Smile,
  ThumbsDown,
  TrendingUp,
  Truck,
  UserX,
  UsersRound,
  Warehouse,
} from "lucide-react";
import { InfoCard } from "@/components/InfoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import {
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

function BellIcon() {
  return (
    <span className="bell-icon">
      <Bell size={14} strokeWidth={2.5} />
    </span>
  );
}

function StatCard({
  icon,
  icons,
  title,
  items,
  bullet = "check",
}: {
  icon?: ReactNode;
  icons?: ReactNode[];
  title?: string;
  items: string[];
  bullet?: "check" | "cross";
}) {
  return (
    <article
      className={`info-card stat-card${icons ? " stat-card--icons" : ""}`}
    >
      {icons ? (
        <div className="stat-card-icons" aria-hidden="true">
          {icons.map((itemIcon, index) => (
            <span className="round-icon" key={index}>
              {itemIcon}
            </span>
          ))}
        </div>
      ) : (
        <div className="round-icon">{icon}</div>
      )}
      <div className="info-card-content">
        {title && <h2>{title}</h2>}
        <ul
          className={`industry-list${bullet === "cross" ? " industry-list--cross" : ""}`}
        >
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

const costIcons = [
  [Fuel, Route, Clock3, Warehouse, PackageX, PhoneCall],
  [Frown, ShieldAlert, ThumbsDown, UserX, MessageSquareWarning],
];
const logisticIcons = [Truck, UsersRound, Route, Warehouse];
const coordinationIcons = [CalendarDays, Check, BellIcon, Truck, PackageCheck];
const benefitIcons = [
  Building2,
  Package,
  Truck,
  ShoppingCart,
  Headphones,
  Megaphone,
  MessageSquareWarning,
];
const integrationIcons = [Puzzle, Layers, CheckCircle2];
const roiIcons = [Clock3, Smile, TrendingUp, ShieldCheck];

export function Empresas() {
  return (
    <>
      <Seo {...seoConfig.empresas} />
      <div id="page-empresas" className="page page-empresas">
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
                Los clientes no separan quién vendió, la calidad del producto ni
                la experiencia en recibirlo. Para ellos, todo forma la misma
                experiencia de compra.
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
                    Cada entrega es momento donde esa promesa se fortalece o se
                    rompe.
                  </h3>
                </div>
              </div>
              <div className="split-copy"></div>
            </div>
          </div>
        </section>

        <section className="cost-section section" data-reveal>
          <div className="container">
            <SectionHeading
              eyebrow="El verdadero costo de una entrega fallida"
              title="Una entrega fallida cuesta dos veces."
            />
            <div className="split-grid stretch mt-4">
              <div className="cost-grid">
                {costCards.map((card, index) => (
                  <StatCard
                    key={card.title}
                    icons={costIcons[index].map((CostIcon, iconIndex) => (
                      <CostIcon key={iconIndex} />
                    ))}
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

        <section className="logistic-problem split-section section" data-reveal>
          <div className="container">
            <div className="split-grid">
              <div className="split-copy">
                <SectionHeading
                  eyebrow="El problema nunca fue la logística"
                  title=""
                />
                <div className="logistic-grid">
                  <StatCard
                    icons={logisticIcons.map((LogisticIcon, index) => (
                      <LogisticIcon key={index} />
                    ))}
                    items={logisticItems}
                  />
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
            <div className="steps-list">
              {coordinationSteps.map(([number, text], index) => {
                const StepIcon = coordinationIcons[index];
                return (
                  <div
                    className="step"
                    key={number}
                    data-reveal
                    data-reveal-delay={String(Math.min(index, 4))}
                  >
                    <div className="step-line">
                      <span>
                        <StepIcon />
                      </span>
                      {index < coordinationSteps.length - 1 && (
                        <i>
                          <ArrowRight />
                        </i>
                      )}
                    </div>
                    <small>{number}</small>
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="benefits-section section" data-reveal>
          <div className="container">
            <SectionHeading
              eyebrow="Beneficios para toda la organización"
              title="Protege la reputación de la marca y fortalece la lealtad del cliente con cada entrega cumplida."
              centered
            />
            <div className="benefits-grid">
              {orgBenefits.map((benefit, index) => {
                const BenefitIcon = benefitIcons[index];
                return (
                  <InfoCard
                    key={benefit.title}
                    icon={<BenefitIcon />}
                    title={benefit.title}
                    label={benefit.label}
                    items={benefit.items}
                  >
                    {benefit.description}
                  </InfoCard>
                );
              })}
            </div>
          </div>
        </section>

        <section className="changes section wave-section-bottom" data-reveal>
          <div className="container">
            <SectionHeading
              eyebrow="Integración natural"
              title="Shopitrack se adapta a tu operación."
              centered
            />
            <p className="coming-soon-copy">
              No sustituye tu ERP, WMS, TMS ni tu sistema de ruteo. Se integra a
              lo que ya funciona sin obligarte a cambiarlo.
            </p>
            <div className="change-grid">
              {integrationItems.map((item, index) => {
                const ItemIcon = integrationIcons[index];
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
          </div>
        </section>

        <section className="usecases-section section" data-reveal>
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

        <section
          className="roi-section section wave-section-bottom"
          data-reveal
        >
          <div className="container">
            <SectionHeading
              eyebrow="ROI"
              title="La pregunta no es sólo cuánto cuesta Shopitrack. También cuánto cuesta seguir trabajando igual."
              centered
            />
            <div className="roi-grid">
              {roiCards.map((card, index) => {
                const RoiIcon = roiIcons[index];
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

        <section className="split-section section" data-reveal>
          <div className="container">
            <div className="split-grid">
              <div className="split-copy">
                <SectionHeading
                  eyebrow="Confianza"
                  title="La confianza no se construye en una sola entrega. Se construye en la consistencia."
                />
              </div>
              <div className="split-copy">
                <ul className="industry-list industry-list--stack">
                  {trustItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

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
                  Agenda una demostración personalizada <ArrowRight size={15} />
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
      </div>
    </>
  );
}
