import { createElement, type ReactNode } from "react";

// Solo estas etiquetas se convierten; cualquier otro HTML se muestra como texto.
const TAG_PATTERN = /<(q|em|i|strong|b)>(.*?)<\/\1>/g;

export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(TAG_PATTERN)) {
    const [fullMatch, tag, content] = match;
    const start = match.index ?? 0;
    if (start > lastIndex) parts.push(text.slice(lastIndex, start));
    parts.push(createElement(tag, { key: start }, content));
    lastIndex = start + fullMatch.length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  // Un solo nodo: en listas flex (.industry-list li) evita que se pierdan los espacios.
  return <span>{parts}</span>;
}
