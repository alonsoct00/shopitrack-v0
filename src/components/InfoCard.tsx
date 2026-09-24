import type { ReactNode } from "react";

export function InfoCard({
  icon,
  title,
  label,
  items,
  children,
}: {
  icon: ReactNode;
  title: string;
  label?: string;
  items?: string[];
  children?: ReactNode;
}) {
  return (
    <article className="info-card">
      <div className="round-icon">{icon}</div>
      <div>
        <h2>{title}</h2>
        {label && <h3>{label}</h3>}
        {children && <p>{children}</p>}
        {items && (
          <ul className="industry-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
