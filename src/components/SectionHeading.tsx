export function SectionHeading({ eyebrow, title, lead, centered = false }: { eyebrow?: string; title: string; lead?: string; centered?: boolean }) {
  return <div className={`section-heading ${centered ? 'section-heading--centered' : ''}`}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{lead && <p className="lead section-heading-lead">{lead}</p>}</div>;
}
