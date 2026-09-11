export function SectionHeading({ eyebrow, title, centered = false }: { eyebrow?: string; title: string; centered?: boolean }) {
  return <div className={`section-heading ${centered ? 'section-heading--centered' : ''}`}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>;
}
