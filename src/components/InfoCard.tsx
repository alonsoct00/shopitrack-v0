import type { ReactNode } from "react";

export function InfoCard({
  icon,
  title,
  label,
  children,
}: {
  icon: ReactNode;
  title: string;
  label?: string;
  children?: ReactNode;
}) {
  return (
    <article className="info-card">
      <div className="round-icon">{icon}</div>
      <div>
        <h2>{title}</h2>
        {label && <h3>{label}</h3>}
        {children && <p>{children}</p>}
      </div>
    </article>
  );
}
