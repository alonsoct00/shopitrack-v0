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
  Fuel,
  Headphones,
  Layers,
  Megaphone,
  Package,
  PackageCheck,
  Puzzle,
  ShieldCheck,
  ShoppingCart,
  Smile,
  TrendingUp,
  Truck,
  UsersRound,
} from "lucide-react";
import { InfoCard } from "@/components/InfoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import {
  costCards,
  coordinationSteps,
  empresasImages,
  integrationItems,
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

function StatCard({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return (
    <article className="info-card stat-card">
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

const coordinationIcons = [CalendarDays, Check, BellIcon, Truck, PackageCheck];
const benefitIcons = [Building2, Package, Truck, ShoppingCart, Headphones, Megaphone];
const integrationIcons = [Puzzle, Layers, CheckCircle2];
const roiIcons = [Clock3, Smile, TrendingUp, ShieldCheck];

export function Empresas() {
  return (
    <>
      <Seo {...seoConfig.empresas} />
      <div id="page-empresas" className="page page-empresas">
        <section className="hero wave-section-bottom" aria-labelledby="empresas-hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1 id="empresas-hero-title">La reputación de tu marca también se entrega.</h1>
              <p>
                Tus clientes no separan el producto de la experiencia de recibirlo. Para ellos,
                todo forma parte de la misma compra.
              </p>
              <Link className="btn btn-primary" to="/contacto">
                Agenda una demostración <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hero-art">
              <img
                src={empresasImages.hero}
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
                  title="Toda compra comienza con una promesa: puedes confiar en nosotros."
                />
              </div>
              <div className="split-copy">
                <p>
                  Esa promesa no termina cuando se aprueba el pago. Termina cuando el cliente
                  recibe exactamente lo que esperaba.
                </p>
                <p>Cada entrega puede fortalecer esa confianza... o debilitarla.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cost-section section" data-reveal>
          <div className="container">
            <SectionHeading eyebrow="El costo de una entrega fallida" title="Una entrega fallida cuesta dos veces." />
            <div className="split-grid">
              <StatCard icon={<Fuel />} title={costCards[0].title} items={costCards[0].items} />
              <StatCard icon={<UsersRound />} title={costCards[1].title} items={costCards[1].items} />
            </div>
          </div>
        </section>

        <section className="split-section section wave-section-bottom" data-reveal>
          <div className="container">
            <div className="split-grid stretch">
              <div className="photo-frame">
                <img
                  src={empresasImages.lastImpression}
                  alt="Cliente recibiendo su pedido con una sonrisa"
                  loading="lazy"
                  className="photo-frame-img"
                />
              </div>
              <div className="split-copy">
                <SectionHeading
                  eyebrow="La última impresión"
                  title="La compra termina en la entrega. El recuerdo empieza ahí."
                />
                <p>
                  Puedes tener el mejor producto, el mejor precio y la mejor atención. Pero si la
                  entrega falla, todo lo anterior pierde valor en la mente del cliente. La última
                  experiencia define la próxima decisión.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="split-section section" data-reveal>
          <div className="container">
            <div className="split-grid">
              <div className="split-copy">
                <SectionHeading
                  eyebrow="Lo que la logística no resuelve sola"
                  title="Puedes optimizar toda la operación y seguir sin saber si alguien podrá recibir."
                />
              </div>
              <div className="split-copy">
                <p>
                  Más vehículos. Mejores rutas. Más capacidad. Mayor eficiencia. Todo esto es
                  necesario, pero no suficiente.
                </p>
                <p>
                  <strong>¿La persona estará disponible cuando llegue la entrega?</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="steps-section section wave-section-bottom" data-reveal>
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

        <section className="changes section" data-reveal>
          <div className="container">
            <SectionHeading
              eyebrow="Beneficios para toda la organización"
              title="Protege la reputación de la marca y fortalece la lealtad del cliente con cada entrega cumplida."
              centered
            />
            <div className="change-grid">
              {orgBenefits.map((benefit, index) => {
                const BenefitIcon = benefitIcons[index];
                return (
                  <InfoCard
                    key={benefit.title}
                    icon={<BenefitIcon />}
                    title={benefit.title}
                    label={benefit.label}
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
            <SectionHeading eyebrow="Integración natural" title="Shopitrack se adapta a tu operación." centered />
            <p className="coming-soon-copy">
              No sustituye tu ERP, WMS, TMS ni tu sistema de ruteo. Se integra a lo que ya
              funciona sin obligarte a cambiarlo.
            </p>
            <div className="change-grid">
              {integrationItems.map((item, index) => {
                const ItemIcon = integrationIcons[index];
                return (
                  <InfoCard key={item.title} icon={<ItemIcon />} title={item.title} label={item.label}>
                    {item.description}
                  </InfoCard>
                );
              })}
            </div>
          </div>
        </section>

        <section className="usecases-section section" data-reveal>
          <div className="container">
            <SectionHeading eyebrow="Casos de uso" title="Dónde Shopitrack marca más la diferencia." centered />
            <div className="usecases-grid">
              {useCases.map((useCase) => (
                <article className="usecase-card" key={useCase.title}>
                  <div className="usecase-card-media" role="img" aria-label={`Imagen pendiente: ${useCase.title}`}>
                    <span>ASSET FALTANTE</span>
                  </div>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="roi-section section wave-section-bottom" data-reveal>
          <div className="container">
            <SectionHeading
              eyebrow="ROI"
              title="La pregunta no es sólo cuánto cuesta Shopitrack. También cuánto cuesta seguir trabajando igual."
              centered
            />
            <div className="roi-grid">
              {roiCards.map((card, index) => {
                const RoiIcon = roiIcons[index];
                return <StatCard key={card.title} icon={<RoiIcon />} title={card.title} items={card.items} />;
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

        <section className="contact-section section wave-section-bottom" id="contacto" data-reveal>
          <div className="container contact-grid">
            <div>
              <h2>Convierte cada entrega en una oportunidad para fortalecer tu marca.</h2>
              <p>Shopitrack te ayuda a cumplir tu promesa donde más importa: en la puerta de tu cliente.</p>
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
