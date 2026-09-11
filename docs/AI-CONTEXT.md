# AI Context — Shopitrack

## 1. Qué es el proyecto

Shopitrack es la Home de una plataforma que coordina empresas de entrega y clientes para reducir entregas fallidas en la última milla.

## 2. Objetivo

Recrear la Home con fidelidad visual a la imagen de referencia, conservando el contenido original, con arquitectura preparada para futuras páginas.

## 3. Fuente de verdad visual

La imagen JPG de referencia proporcionada. La imagen tiene prioridad sobre cualquier preferencia estética genérica.

## 4. Design system

Centralizado en `src/index.css` con variables CSS (`:root`). Colores, tipografía, spacing, radius, shadows y containers definidos como tokens. DaisyUI configurado con tema `shopitrack` en `tailwind.config.js`.

## 5. Componentes existentes

- `Brand` — logo + nombre
- `SectionHeading` — encabezado de sección
- `InfoCard` — tarjeta con icono, título y descripción

## 6. Cómo crear nuevas páginas

Crear `src/pages/<Page>.tsx`, reutilizar componentes existentes, importar contenido desde `src/data/`, usar clases del design system (`.container`, `.section`, `.btn`, etc.).

## 7. Reglas a respetar

1. No modificar el design system para resolver un problema de una página si puede resolverse con un componente o variante.
2. No duplicar componentes existentes.
3. Antes de crear un componente nuevo, revisar los existentes.
4. Antes de agregar un color nuevo, revisar las variables existentes.
5. No hardcodear colores repetidos.
6. No utilizar Lorem Ipsum.
7. No modificar copys existentes sin autorización.
8. Mantener Desktop y Mobile como parte del mismo sistema visual.
9. Las nuevas páginas deben reutilizar Header, Footer, Container, Buttons, Cards y demás componentes.
10. La referencia visual original tiene prioridad sobre preferencias estéticas del agente.

## 8. Qué no modificar sin justificación

- Variables CSS en `:root` (colores, spacing, tipografía).
- Tema DaisyUI en `tailwind.config.js`.
- Contenido de `src/data/home.ts`.
- Estructura de componentes existentes.

## 9. Cómo mantener consistencia visual

Usar las clases reutilizables (`.section`, `.wave-section`, `.split-grid`, `.info-card`, `.btn`) antes de crear estilos nuevos.

## 10. Cómo agregar nuevas imágenes

Usar `mcp__pexels__pexels_search` con una query descriptiva. Referenciar la URL directamente en `<img>`. Documentar en `docs/IMAGES.md`.

## 11. DaisyUI

Tema `shopitrack` configurado. Usar componentes DaisyUI cuando sea apropiado, pero no forzarlos si pierden fidelidad visual.

## 12. Responsive

Breakpoints en `docs/RESPONSIVE.md`. Mobile ≤ 800px colapsa grids a una columna. Todos los estilos responsive están en `index.css` con `@media`.

## 13. Convenciones de código

- Import con `@/`.
- TypeScript estricto.
- Iconos de lucide-react.
- Sin comentarios innecesarios.
- Sin emojis.

## 14. Convenciones de nombres

- Componentes: PascalCase (`InfoCard.tsx`).
- Archivos de datos: kebabCase (`home.ts`).
- Clases CSS: kebabCase (`.info-card`).
- Variables CSS: kebabCase con prefijo `--color-` o nombre descriptivo.
