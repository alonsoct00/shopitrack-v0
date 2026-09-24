import type { ReactNode } from "react";
import { RichText } from "@/components/RichText";

export function InfoCard({
  icon,
  title,
  label,
  image,
  items,
  children,
}: {
  icon?: ReactNode;
  title: string;
  label?: string;
  image?: { src: string; alt: string };
  items?: string[];
  children?: ReactNode;
}) {
  return (
    <article className={`info-card${image ? " info-card--media" : ""}`}>
      {image ? (
        <img
          className="info-card-media"
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="round-icon">{icon}</div>
      )}
      <div className="info-card-body">
        <h2><RichText text={title} /></h2>
        {label && <h3><RichText text={label} /></h3>}
        {children && <p>{children}</p>}
        {items && (
          <ul className="industry-list">
            {items.map((item) => (
              <li key={item}><RichText text={item} /></li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
