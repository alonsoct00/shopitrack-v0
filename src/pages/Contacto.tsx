import { useId, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { InfoCard } from "@/components/InfoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import {
  blockedEmailDomains,
  closingLines,
  contactSteps,
  contactoImages,
  faqItems,
  formCopy,
  industryOptions,
  operationContextItems,
  volumeOptions,
} from "@/data/contacto";
import { seoConfig } from "@/data/seo";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ImageWithFallback } from "@/components/ImageWithFallback";


interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  industry: string;
  volume: string;
  message: string;
  privacyAccepted: boolean;
}

const emptyForm: ContactFormData = {
  firstName: "",
  lastName: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  industry: "",
  volume: "",
  message: "",
  privacyAccepted: false,
};

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

function isCorporateEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase().trim();
  if (!domain) return false;
  return !blockedEmailDomains.includes(domain);
}

function validate(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = formCopy.errorRequired;
  if (!data.lastName.trim()) errors.lastName = formCopy.errorRequired;
  if (!data.company.trim()) errors.company = formCopy.errorRequired;
  if (!data.email.trim()) {
    errors.email = formCopy.errorRequired;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || !isCorporateEmail(data.email)) {
    errors.email = formCopy.errorEmail;
  }
  if (!data.privacyAccepted) errors.privacyAccepted = formCopy.errorPrivacy;
  return errors;
}

// API integration will be added later.
async function submitContactRequest(data: ContactFormData): Promise<void> {
  void data;
  return Promise.resolve();
}

function FormField({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {required && (
          <span className="required-mark" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p className="field-hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function Contacto() {
  const formBaseId = useId();
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const fieldId = (name: keyof ContactFormData) => `${formBaseId}-${name}`;
  const describedBy = (name: keyof ContactFormData, hasHint?: boolean) =>
    errors[name] ? fieldId(name) + "-error" : hasHint ? fieldId(name) + "-hint" : undefined;

  function updateField<K extends keyof ContactFormData>(name: K, value: ContactFormData[K]) {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleTextChange(name: keyof ContactFormData) {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      updateField(name, e.target.value as ContactFormData[typeof name]);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitContactRequest(formData);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <>
        <Seo {...seoConfig.contacto} />
        <div id="page-contacto" className="page page-contacto">
          <section className="hero section" aria-labelledby="contacto-success-title">
            <div className="container form-success">
              <h1 id="contacto-success-title">{formCopy.successTitle}</h1>
              <p>{formCopy.successBody}</p>
              <Link className="btn btn-primary" to="/">
                {formCopy.successCta} <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <Seo {...seoConfig.contacto} />
      <div id="page-contacto" className="page page-contacto">
        <ErrorBoundary name="Contacto: hero">
          <section className="hero wave-section-bottom" aria-labelledby="contacto-hero-title">
            <div className="container hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Contacto</span>
                <h1 id="contacto-hero-title">
                  Hablemos sobre cómo hacer que cada entrega fortalezca tu marca.
                </h1>
                <p>
                  Cada empresa enfrenta desafíos distintos. Por eso preferimos comprender primero tu
                  operación antes de hablar de soluciones.
                </p>
                <a className="btn btn-primary" href="#formulario-contacto">
                  Agenda una conversación con nuestro equipo <ArrowRight size={16} />
                </a>
              </div>
              <div className="hero-art">
                <ImageWithFallback
                  src={contactoImages.hero}
                  srcSet={contactoImages.heroSrcSet}
                  sizes="(max-width: 800px) 100vw, 50vw"
                  alt="Especialista de soporte de Shopitrack atendiendo una llamada"
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

        <ErrorBoundary name="Contacto: changes">
          <section className="changes section" data-reveal>
            <div className="container">
              <SectionHeading
                eyebrow="Qué ocurrirá cuando nos contactes"
                title="¿Qué ocurrirá cuando nos contactes?"
                centered
              />
              <div className="change-grid contact-steps-grid">
                {contactSteps.map(([label, text], index) => (
                  <InfoCard key={label} icon={<span className="step-number">{index + 1}</span>} title={label}>
                    {text}
                  </InfoCard>
                ))}
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Contacto: split-section">
          <section className="split-section section wave-section-bottom" data-reveal>
            <div className="container">
              <SectionHeading eyebrow="Hablemos de tu operación" title="Queremos conocer tu operación" centered />
              <p className="coming-soon-copy">
                Antes de vender una solución debemos comprender el problema. Por ello, durante la
                conversación nos interesará conocer aspectos como:
              </p>
              <div className="change-grid contact-context-grid">
                {operationContextItems.map(({ text, icon: ItemIcon }) => (
                  <InfoCard key={text} icon={<ItemIcon />} title={text} />
                ))}
              </div>
              <p className="coming-soon-copy">
                <strong>No buscamos recopilar información. Buscamos comprender el contexto.</strong>
              </p>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Contacto: section">
          <section className="section contact-form-section" id="formulario-contacto" data-reveal>
            <div className="container">
              <SectionHeading eyebrow="Formulario" title="Solicita una demostración" />
              <p className="coming-soon-copy contact-form-intro">
                Cuéntanos un poco sobre tu operación. Uno de nuestros especialistas se pondrá en
                contacto contigo.
              </p>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-grid">
                  <FormField id={fieldId("firstName")} label="Nombre" required error={errors.firstName}>
                    <input
                      id={fieldId("firstName")}
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      value={formData.firstName}
                      onChange={handleTextChange("firstName")}
                      aria-invalid={!!errors.firstName}
                      aria-describedby={describedBy("firstName")}
                    />
                  </FormField>

                  <FormField id={fieldId("lastName")} label="Apellidos" required error={errors.lastName}>
                    <input
                      id={fieldId("lastName")}
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      value={formData.lastName}
                      onChange={handleTextChange("lastName")}
                      aria-invalid={!!errors.lastName}
                      aria-describedby={describedBy("lastName")}
                    />
                  </FormField>

                  <FormField id={fieldId("company")} label="Empresa" required error={errors.company}>
                    <input
                      id={fieldId("company")}
                      name="company"
                      type="text"
                      autoComplete="organization"
                      required
                      value={formData.company}
                      onChange={handleTextChange("company")}
                      aria-invalid={!!errors.company}
                      aria-describedby={describedBy("company")}
                    />
                  </FormField>

                  <FormField id={fieldId("role")} label="Cargo" error={errors.role}>
                    <input
                      id={fieldId("role")}
                      name="role"
                      type="text"
                      autoComplete="organization-title"
                      value={formData.role}
                      onChange={handleTextChange("role")}
                      aria-invalid={!!errors.role}
                      aria-describedby={describedBy("role")}
                    />
                  </FormField>

                  <FormField
                    id={fieldId("email")}
                    label="Correo electrónico"
                    required
                    error={errors.email}
                    hint={formCopy.helperEmail}
                  >
                    <input
                      id={fieldId("email")}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleTextChange("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={describedBy("email", true)}
                    />
                  </FormField>

                  <FormField id={fieldId("phone")} label="Teléfono" error={errors.phone}>
                    <input
                      id={fieldId("phone")}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleTextChange("phone")}
                      aria-invalid={!!errors.phone}
                      aria-describedby={describedBy("phone")}
                    />
                  </FormField>

                  <FormField id={fieldId("industry")} label="Sector" error={errors.industry}>
                    <select
                      id={fieldId("industry")}
                      name="industry"
                      value={formData.industry}
                      onChange={handleTextChange("industry")}
                      aria-invalid={!!errors.industry}
                      aria-describedby={describedBy("industry")}
                    >
                      <option value="">Selecciona una opción</option>
                      {industryOptions.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField
                    id={fieldId("volume")}
                    label="Número aproximado de entregas mensuales"
                    error={errors.volume}
                  >
                    <select
                      id={fieldId("volume")}
                      name="volume"
                      value={formData.volume}
                      onChange={handleTextChange("volume")}
                      aria-invalid={!!errors.volume}
                      aria-describedby={describedBy("volume")}
                    >
                      <option value="">Selecciona una opción</option>
                      {volumeOptions.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <div className="form-field form-field--full">
                    <label htmlFor={fieldId("message")}>Mensaje</label>
                    <textarea
                      id={fieldId("message")}
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleTextChange("message")}
                      aria-invalid={!!errors.message}
                      aria-describedby={describedBy("message")}
                    />
                    {errors.message && (
                      <p className="field-error" id={`${fieldId("message")}-error`} role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-privacy">
                  <input
                    id={fieldId("privacyAccepted")}
                    name="privacyAccepted"
                    type="checkbox"
                    required
                    checked={formData.privacyAccepted}
                    onChange={(e) => updateField("privacyAccepted", e.target.checked)}
                    aria-invalid={!!errors.privacyAccepted}
                    aria-describedby={describedBy("privacyAccepted")}
                  />
                  <label htmlFor={fieldId("privacyAccepted")}>{formCopy.privacyLabel}</label>
                </div>
                {errors.privacyAccepted && (
                  <p className="field-error" id={`${fieldId("privacyAccepted")}-error`} role="alert">
                    {errors.privacyAccepted}
                  </p>
                )}

                {status === "error" && (
                  <p className="field-error form-system-error" role="alert">
                    {formCopy.errorSystem}
                  </p>
                )}

                <button className="btn btn-primary" type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? formCopy.submitLoadingLabel : formCopy.submitLabel}
                </button>
              </form>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Contacto: section">
          <section className="section faq-section" data-reveal>
            <div className="container">
              <SectionHeading eyebrow="Preguntas frecuentes" title="FAQ" />
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

        <ErrorBoundary name="Contacto: section">
          <section className="section closing-section" data-reveal>
            <div className="container closing-copy">
              {closingLines.map((line) => (
                <p key={line}>
                  <strong>{line}</strong>
                </p>
              ))}
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary name="Contacto: contact-section">
          <section className="contact-section section wave-section-bottom" data-reveal>
            <div className="container">
              <SectionHeading eyebrow="CTA final" title="Comencemos la conversación." />
              <p>
                Descubre cómo una mejor comunicación puede transformar la forma en que tus clientes
                viven la última etapa de una compra.
              </p>
              <div className="contact-actions">
                <a className="btn btn-coral" href="#formulario-contacto">
                  Agenda una demostración personalizada <ArrowRight size={15} />
                </a>
                <a className="btn btn-outline" href="#formulario-contacto">
                  Habla con un especialista
                </a>
              </div>
            </div>
          </section>
        </ErrorBoundary>
      </div>
    </>
  );
}
