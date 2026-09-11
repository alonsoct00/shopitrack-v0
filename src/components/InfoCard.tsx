import type { ReactNode } from 'react';

export function InfoCard({ icon, title, label, children }: { icon: ReactNode; title: string; label: string; children: ReactNode }) {
  return <article className="info-card"><div className="round-icon">{icon}</div><div><strong>{title}</strong><h3>{label}</h3><p>{children}</p></div></article>;
}
