import { SectionHeading } from "@/components/SectionHeading";
import type { FaqItem } from "@/data/types";

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="section faq-section" data-reveal>
      <div className="container">
        <SectionHeading centered title="Preguntas frecuentes" />
        <div className="faq-list">
          {items.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
