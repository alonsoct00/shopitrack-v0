import { Seo } from "@/components/Seo";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { legalReviewNote, type LegalDocument } from "@/data/legal";
import type { SeoEntry } from "@/data/seo";

export function LegalPage({
  content,
  seo,
}: {
  content: LegalDocument;
  seo: SeoEntry;
}) {
  return (
    <div className="page page-legal">
      <Seo {...seo} />
      <ErrorBoundary name={`${content.title}: hero`}>
        <section className="hero legal-hero">
          <div className="container">
            <h1>{content.title}</h1>
            <p className="legal-meta">
              Última actualización: {content.updatedAt}
            </p>
          </div>
        </section>
      </ErrorBoundary>

      <ErrorBoundary name={`${content.title}: contenido`}>
        <section className="section legal-content">
          <div className="container">
            <article className="legal-body">
              <p className="legal-note" role="note">
                {legalReviewNote}
              </p>
              <p>{content.intro}</p>
              {content.sections.map((section, index) => (
                <section key={section.title}>
                  <h2>
                    {index + 1}. {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </article>
          </div>
        </section>
      </ErrorBoundary>
    </div>
  );
}
