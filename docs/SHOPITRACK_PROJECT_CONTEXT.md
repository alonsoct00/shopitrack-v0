# Shopitrack — Contexto general del proyecto

> Estado al 2026-09-26: rama `stg`, commit `aeef3eb`, primera versión del sitio terminada.
> Claude (Claude Code) es el agente principal que implementa los cambios. Las propuestas de otros agentes no cuentan como hechas hasta que estén en el código.

## Contexto rápido

| Campo | Valor |
| --- | --- |
| Proyecto | Sitio web de marketing de Shopitrack |
| Qué es Shopitrack | Plataforma que coordina empresas y clientes para confirmar la fecha de entrega a domicilio antes de salir a ruta, y reprogramarla si el cliente no puede recibir. Busca reducir entregas fallidas, recorridos innecesarios y costos logísticos |
| Stack | React 18 + TypeScript + Vite 5 + Tailwind CSS v4 + daisyUI v5 + SCSS + React Router 7 + lucide-react |
| Framework | SPA de Vite con render solo en el cliente. **No usa Next.js** |
| Hosting | Configurado para Vercel (`vercel.json`). Dominio `shopitrack.com`. Hosting real del dominio: PENDIENTE DE CONFIRMAR (se reportó que apuntaba a Hostinger) |
| Backend | No hay. `@supabase/supabase-js` está instalado pero no se usa |
| Tests | No hay |

## Páginas

| Ruta | Página | Estado |
| --- | --- | --- |
| `/` | Home | Completa |
| `/empresas` | Empresas | Completa; faltan imágenes (placeholders "ASSET FALTANTE") |
| `/clientes` | Clientes | Completa; faltan imágenes y URLs de App Store y Google Play |
| `/sectores` | Sectores | Completa; faltan imágenes de los 6 sectores |
| `/contacto` | Contacto | UI completa. Endpoint del formulario: **PENDIENTE / NO DEFINIDO** (el envío es simulado) |
| `/aviso-de-privacidad`, `/terminos-y-condiciones` | Legales | Texto preliminar con datos `[POR DEFINIR]` |
| `*` | 404 | Completa; ícono de caja rota como SVG propio |

Todas las rutas viven en `src/App.tsx` dentro de `MainLayout`, que aporta Header, Footer, el scroll al inicio y las animaciones `data-reveal`.

## Estructura

```text
src/
├── App.tsx, main.tsx, index.css       rutas, entry, Tailwind + daisyUI + tema "shopitrack"
├── components/                         componentes compartidos (+ layout/)
├── data/                               copys y datos por página, SEO, navegación, tipos
├── pages/                              una página por archivo
└── styles/                             design system SCSS + custom.scss
docs/                                   documentación técnica
public/                                 imágenes WebP, favicons, sitemap, robots, Lottie
```

## Componentes principales

`MainLayout`, `Header`, `Footer`, `Brand`, `SectionHeading` (con `lead` opcional), `InfoCard` (ícono o imagen), `StepsList` (variantes `steps` y `flow`), `ImageWithFallback` (usar siempre en lugar de `<img>`), `ImageSlider`, `IndustriesShowcase`, `LottiePlayer`, `RichText`, `ErrorBoundary`, `PageError` y `Seo`. Detalle en `docs/COMPONENTS.md`.

## Estilos

Orden de carga en `src/main.tsx`: `index.css` → `styles/design-system.scss` → `styles/custom.scss`.

- `design-system.scss` agrega con `@use`, en este orden: tokens, base, layout, typography, buttons, hero, cards, sections, responsive, animations. No reordenar.
- `tokens.scss`: todas las variables de color, spacing, radius y sombras. Fuera de este archivo no se escriben colores literales.
- `breakpoints.scss` y `mixins.scss`: solo variables y mixins, no generan CSS.
- `custom.scss`: estilos por página dentro de `.page { &.page-home … &.page-not-found }`.

## Breakpoints

```scss
$bp-xs-max: 390px;
$bp-mobile-max: 800px;      // mobile del design system (responsive.scss)
$bp-tablet-min: 801px;
$bp-tablet-max: 1024px;
$bp-wide-min: 1500px;
$bp-xl-min: 1600px;
$page-break-mobile: 960px;  // mobile de las capas por página

@mixin mobile-only  // ≤ 960px (usa $page-break-mobile, no 800)
@mixin tablet       // 801–1024px
```

Entre 801 y 960px conviven la regla global de tablet y el mobile de cada página. Está documentado en `docs/RESPONSIVE.md`.

## Tipografía

- Solo Inter (Google Fonts, variable 100–900), más "Inter Fallback" local para evitar saltos de layout mientras carga. **Segunda fuente: NO IMPLEMENTADA** (se evaluó Montserrat y se descartó).
- H1 `clamp(2.35rem, 4vw, 4.05rem)` con peso 600. H2 de sección 2.4rem con peso 500. Body 16px. `p.lead` 18px y `p.statement` 24px.

## Trabajo hecho en la v1

- Construcción de las 5 páginas y de las legales.
- Pulido mobile de Home, Empresas y Clientes.
- Pulido desktop de Empresas y Contacto.
- Rediseño de Sectores.
- Sección Antes/Ahora de Clientes.
- Homologación tipográfica.
- Refactor SCSS sin cambios visuales: breakpoints centralizados, tokens, mixins y unas 400 líneas de código muerto eliminadas.
- Limpieza de todos los comentarios SCSS.
- Rediseño de la 404.
- Dos auditorías Lighthouse. En mobile y local, Performance quedó en 93–99 y Accessibility, Best Practices y SEO en 100.

## Pendientes principales

- **Críticos:**
  - Endpoint del formulario de Contacto.
  - Confirmar el hosting y hacer el deploy.
  - Completar los textos legales.
- **Importantes:**
  - Reemplazar los placeholders de imágenes.
  - Agregar las URLs de las tiendas de apps.
  - Medir Lighthouse en producción.
  - Actualizar la documentación desactualizada: `AGENTS.md` y `docs/AI-CONTEXT.md` todavía hablan de placeholders, de "Industrias" y de `tailwind.config.js`, que ya no existen.
- **Conocidos sin corregir:**
  - `transform` persistente en los pasos (`animations.scss`), parcheado en Home y Empresas.
  - Dots inactivos de los carruseles con un fondo inválido.

## Reglas clave

- No cambiar breakpoints ni crear otro sistema responsive.
- No modificar copys sin autorización.
- Los refactors no deben cambiar el diseño visual. Validar comparando el CSS compilado.
- No tocar tokens, el tema daisyUI ni las metas SEO de `index.html` sin justificación.
- No duplicar componentes ni estilos: extender los bloques existentes de cada página.
- Cada `<section>` va dentro de un `ErrorBoundary`.
- No hacer commits, push ni merge sin que se pida.
- Tailwind v4 escanea también los `.md`: escribir documentación puede agregar clases al CSS compilado.

## Comandos

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm run preview
```

Después de cada cambio: `npm run typecheck && npm run lint && npm run build`.

## Más detalle

`AGENTS.md` (reglas), `docs/ARCHITECTURE.md`, `docs/DESIGN-SYSTEM.md`, `docs/RESPONSIVE.md`, `docs/COMPONENTS.md`, `docs/IMAGES.md` y `docs/SEO.md`.
