# AI Context — Shopitrack

## 1. Qué es el proyecto

Shopitrack es una plataforma que coordina empresas de entrega y clientes para reducir entregas fallidas en la última milla. El sitio tiene 5 páginas: Home (completa), Empresas, Clientes, Industrias y Contacto (estas cuatro son placeholders pendientes de mockup en Figma).

## 2. Objetivo

Recrear la Home con fidelidad visual a la imagen de referencia, conservando el contenido original, con arquitectura preparada para futuras páginas.

Prioridades, en este orden: fidelidad al diseño de referencia, conservación del contenido, responsive, reutilización de componentes, design system, mantenibilidad, accesibilidad, performance, SEO.

## 3. Fuente de verdad visual

La imagen JPG de referencia proporcionada. La imagen tiene prioridad sobre cualquier preferencia estética genérica.

## 4. Design system

Vive en `src/styles/*.scss` (partials: `tokens`, `base`, `layout`, `typography`, `buttons`, `hero`, `cards`, `sections`, `responsive`, `animations`), agregados por `src/styles/design-system.scss`. Variables CSS (`:root`) en `src/styles/tokens.scss`: colores, tipografía, spacing, radius, shadows y containers. Tailwind CSS v4 + daisyUI v5 con tema `shopitrack` definido en `src/index.css` (`@plugin "daisyui/theme"`) — `index.css` solo contiene esa config, no el resto del design system; ya no existe `tailwind.config.js`.

Orden de carga en `src/main.tsx`: `index.css` (Tailwind + DaisyUI) → `design-system.scss` → `custom.scss` (overrides por página). No reordenar sin verificar la cascada (ver `docs/ARCHITECTURE.md`).

## 5. Componentes existentes

- `Brand` — logo + nombre
- `SectionHeading` — encabezado de sección
- `InfoCard` — tarjeta con icono o imagen (`image`), título, descripción y lista (`items`)
- `StepsList` — pasos numerados con ícono o imagen
- `RichText` — etiquetas permitidas (`<q>`, `<em>`, `<i>`, `<strong>`, `<b>`) en strings del data
- `ErrorBoundary` / `PageError` — aislamiento de errores de render
- `BellIcon` — ícono de campana para usar en el data
- `ComingSoonSection` — placeholder para páginas pendientes de mockup
- `Header` / `Footer` / `MainLayout` (`src/components/layout/`) — compartidos por todas las páginas, no se repiten

## 6. Cómo crear nuevas páginas

El proyecto usa `react-router-dom`. Crear `src/pages/<Page>.tsx`, reutilizar componentes existentes, importar contenido desde `src/data/`, usar clases del design system (`.container`, `.section`, `.btn`, etc.), registrar la ruta en `src/App.tsx` y en `siteNav` (`src/data/navigation.ts`) si va en el menú. Si no existe el mockup de Figma, usar `ComingSoonSection`.

Cada página debe tener wrapper propio (`id` + clase `page page-<ruta>`) para permitir estilos aislados. Ejemplos activos: `page-home`, `page-empresas`, `page-clientes`, `page-industrias`, `page-contacto`, `page-not-found`.

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
11. Cada `<section>` de una página va dentro de `<ErrorBoundary name="<Página>: <sección>">`.
12. Los íconos (o imágenes) de una lista van en cada elemento del data, tipados con `src/data/types.ts`; no usar arreglos paralelos por índice.
13. Para itálica/negrita/citas dentro de textos del data, usar las etiquetas que soporta `RichText`; no usar `dangerouslySetInnerHTML`.

## 8. Qué no modificar sin justificación

- Variables CSS en `:root` (colores, spacing, tipografía).
- Tema DaisyUI (`@plugin "daisyui/theme"`) en `src/index.css`.
- Contenido de `src/data/home.ts`.
- Estructura de componentes existentes.

## 9. Cómo mantener consistencia visual

Usar las clases reutilizables (`.section`, `.wave-section`, `.split-grid`, `.info-card`, `.btn`) antes de crear estilos nuevos.

Cuando necesites estilos específicos por ruta, aplicar scope en `src/styles/custom.scss` con `.page-<ruta> .hero` (u otro selector) para evitar impactos cruzados.

## 10. Cómo agregar nuevas imágenes

Usar `mcp__pexels__pexels_search` con una query descriptiva. Referenciar la URL directamente en `<img>`. Documentar en `docs/IMAGES.md`.

## 11. DaisyUI

Tailwind CSS v4 + daisyUI v5 (`@plugin "daisyui"` en `src/index.css`, plugin `@tailwindcss/vite` en `vite.config.ts`). Tema `shopitrack` configurado. Usar componentes DaisyUI cuando sea apropiado, pero no forzarlos si pierden fidelidad visual.

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
