# AGENTS.md — Guía para agentes de IA

> Este archivo es el punto de entrada para cualquier agente de IA (Claude, Claude Code, Codex, Gemini, Cursor, GitHub Copilot, etc.) que trabaje en este proyecto. Léelo completo antes de hacer cambios.

---

## 1. Qué es este proyecto

Shopitrack es una plataforma que coordina empresas de entrega y clientes para reducir entregas fallidas en la última milla. El sitio está construido con React + TypeScript + Tailwind CSS + DaisyUI + React Router, y tiene 5 páginas: Home (completa), Empresas, Clientes, Industrias y Contacto (estas cuatro son placeholders pendientes de mockup en Figma).

## 2. Objetivo

Recrear la Home con fidelidad visual a la imagen de referencia proporcionada, conservando el contenido original, con arquitectura preparada para futuras páginas.

## 3. Fuente de verdad visual

La imagen JPG de referencia proporcionada. **La imagen tiene prioridad sobre cualquier preferencia estética genérica.** Cuando exista una diferencia entre una recomendación estándar de diseño y la imagen, seguir la imagen.

## 4. Cómo funciona el design system

El design system está centralizado en `src/index.css` con variables CSS en `:root`:

- **Colores**: `--color-blue`, `--color-coral`, `--color-ink`, `--color-cloud`, `--text-primary`, `--text-secondary`, `--text-muted`, `--line`, `--surface`, `--surface-alt`
- **Spacing**: `--space-xs` (8px) a `--space-2xl` (112px)
- **Radius**: `--radius-sm` (8px), `--radius-md` (14px), `--radius-lg` (24px)
- **Sombras**: `--shadow-soft`
- **Tipografía**: Inter, escala fluida con `clamp()` para H1 y H2

DaisyUI está configurado con el tema `shopitrack` en `tailwind.config.js` (usar `data-theme="shopitrack"`).

Clases reutilizables: `.section`, `.wave-section`, `.split-grid`, `.info-card`, `.btn`, `.btn-primary`, `.btn-coral`, `.btn-outline`, `.container`.

## 5. Componentes existentes

| Componente | Archivo | Props |
| ----------- | --------- | ------- |
| `Brand` | `src/components/Brand.tsx` | `light?: boolean` |
| `SectionHeading` | `src/components/SectionHeading.tsx` | `eyebrow?: string`, `title: string`, `centered?: boolean` |
| `InfoCard` | `src/components/InfoCard.tsx` | `icon: ReactNode`, `title: string`, `label: string`, `children: ReactNode` |

**Antes de crear un componente nuevo, revisar estos.**

## 6. Cómo crear nuevas páginas

El proyecto usa `react-router-dom`. Las rutas viven en `src/App.tsx` dentro de `<Route element={<MainLayout />}>`, y `MainLayout` (`src/components/layout/MainLayout.tsx`) ya provee `Header` y `Footer` compartidos.

1. Crear `src/pages/<Page>.tsx`.
2. Reutilizar `Brand`, `SectionHeading`, `InfoCard`, `.container`, `.section`, `.btn`. No dupliques Header/Footer.
3. Importar contenido desde `src/data/` (crear nuevo archivo si es necesario).
4. No duplicar estilos: usar variables y clases existentes.
5. Registrar la ruta en `src/App.tsx` y, si va en el menú principal, en `siteNav` (`src/data/navigation.ts`).
6. Mientras no exista el mockup de Figma de la página, usar `ComingSoonSection` (`src/components/ComingSoonSection.tsx`) como contenido temporal — no inventar diseño definitivo.
7. Si la página necesita imágenes, usar `pexels_search` y documentar en `docs/IMAGES.md`.
8. Agregar la URL a `public/sitemap.xml`.

Páginas actuales: Home (`/`, completa), Empresas (`/empresas`), Clientes (`/clientes`), Industrias (`/industrias`) y Contacto (`/contacto`) — estas últimas cuatro son placeholders pendientes de mockup en Figma.

## 7. Reglas que deben respetarse

1. **No modificar el design system** para resolver un problema de una página si puede resolverse con un componente o variante.
2. **No duplicar componentes existentes.**
3. **Antes de crear un componente nuevo, revisar los existentes.**
4. **Antes de agregar un color nuevo, revisar las variables existentes.**
5. **No hardcodear colores repetidos.**
6. **No utilizar Lorem Ipsum.**
7. **No modificar copys existentes sin autorización.**
8. **Mantener Desktop y Mobile como parte del mismo sistema visual.**
9. **Las nuevas páginas deben reutilizar** Header, Footer, Container, Buttons, Cards y demás componentes existentes.
10. **La referencia visual original tiene prioridad** sobre preferencias estéticas del agente.

## 8. Qué no debe modificarse sin justificación

- Variables CSS en `:root` (colores, spacing, tipografía) en `src/index.css`.
- Tema DaisyUI en `tailwind.config.js`.
- Contenido de `src/data/home.ts` (copys originales).
- Estructura de componentes existentes.
- Meta tags SEO en `index.html`.

## 9. Cómo mantener consistencia visual

Usar las clases reutilizables (`.section`, `.wave-section`, `.split-grid`, `.info-card`, `.btn`) antes de crear estilos nuevos. Si necesitas un estilo nuevo, considerarlo parte del design system y documentarlo en `docs/DESIGN-SYSTEM.md`.

## 10. Cómo agregar nuevas imágenes

Usar la herramienta `pexels_search` (MCP) con una query descriptiva del subject. Referenciar la URL directamente en `<img>`. No descargar imágenes. No adivinar URLs. Documentar cada imagen nueva en `docs/IMAGES.md`.

## 11. DaisyUI

Tema `shopitrack` configurado en `tailwind.config.js`. Usar componentes DaisyUI cuando sea apropiado (buttons, cards, navbar, dropdowns, inputs, badges, alerts, menus, modals), pero **no forzarlos si provocan pérdida de fidelidad visual**. Si un componente DaisyUI necesita customización, sobrescribirlo mediante el design system.

## 12. Cómo manejar responsive

Breakpoints definidos en `src/index.css` con `@media`:

- **Mobile**: ≤ 800px — grids colapsan a una columna, menú hamburguesa
- **Tablet**: 801–1024px — dos columnas, espaciado reducido
- **Desktop**: 1025px–1280px — layout completo
- **Large**: > 1280px — container centrado a 1180px

Todos los estilos responsive están en `index.css`. No usar utilities inline de Tailwind para responsive; usar las clases del design system.

## 13. Convenciones de código

- **Imports**: usar `@/` (alias a `src/`). Ej: `import { Brand } from '@/components/Brand'`.
- **TypeScript**: estricto. Tipos explícitos en todos los parámetros.
- **Iconos**: `lucide-react`. Importar cada icono explícitamente.
- **Comentarios**: no añadir comentarios innecesarios. Solo cuando el "por qué" no es obvio.
- **Emojis**: no usar emojis en el código ni en respuestas.
- **Sin estados globales**: pasar dependencias como argumentos, no usar singletons o globals.

## 14. Convenciones de nombres

| Elemento | Convención | Ejemplo |
| ---------- | ----------- | --------- |
| Componentes | PascalCase | `InfoCard.tsx` |
| Archivos de datos | kebabCase | `home.ts` |
| Clases CSS | kebabCase | `.info-card` |
| Variables CSS | kebabCase con prefijo | `--color-blue` |
| Funciones | camelCase | `handleSubmit` |

## 15. Verificación

Después de hacer cambios:

```bash
npm run typecheck   # debe pasar sin errores
npm run lint        # debe pasar sin errores
npm run build       # debe compilar sin errores
```

Si algún check falla, corregir los errores antes de considerar el trabajo terminado.

## 16. Documentación

- **README.md** (raíz): lo básico — stack, instalación, comandos, estructura mínima.
- **docs/README.md**: índice de la documentación técnica detallada.
- **docs/ARCHITECTURE.md**, **docs/DESIGN-SYSTEM.md**, **docs/COMPONENTS.md**, **docs/RESPONSIVE.md**, **docs/IMAGES.md**, **docs/SEO.md**: documentación técnica por área.
- **docs/AI-CONTEXT.md**: contexto adicional para agentes de IA.

Antes de empezar a trabajar, leer el README.md y este archivo.
