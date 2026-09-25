# Design System — Shopitrack

El design system vive en `src/styles/` como partials SCSS (`tokens`, `base`, `layout`, `typography`, `buttons`, `hero`, `cards`, `sections`, `responsive`, `animations`), agregados por `src/styles/design-system.scss` e importados en `src/main.tsx` después de `src/index.css` (Tailwind + tema DaisyUI) y antes de `src/styles/custom.scss` (overrides por página). Ver [docs/ARCHITECTURE.md](./ARCHITECTURE.md) para el detalle de cada archivo.

## Colores (variables CSS en `:root`, definidas en `src/styles/tokens.scss`)

| Token | Valor | Uso |
| ------- | ------- | ----- |
| `--color-blue` | `#1264e8` | Primario, CTAs, iconos, acentos |
| `--color-coral` | `#ff6848` | Acento de contraste, CTAs secundarios |
| `--color-ink` | `#082663` | Azul profundo para fondos oscuros |
| `--color-cloud` | `#eef7ff` | Fondos pálidos |
| `--color-panel` | `#f2f8ff` | Fondo de paneles y cards |
| `--text-primary` | `#082663` | Texto principal |
| `--text-secondary` | `#2e4d79` | Texto secundario |
| `--text-muted` | `#6b82a6` | Texto terciario |
| `--line` | `#dce9f7` | Bordes y separadores |
| `--surface` | `#ffffff` | Fondos claros |
| `--surface-alt` | `#eef7ff` | Fondos alternativos |
| `--surface-panel` | `color-mix(in srgb, var(--color-panel) 60%, transparent)` | Paneles suaves (FAQ, filas antes/después) |
| `--card-border` | `#deebf8` | Borde de `.info-card` y `.story-card` |
| `--divider-accent` | `#f8c9be` | Línea coral clara de `.story-divider` |
| `--color-white` / `--color-navy` / `--color-mist` / `--color-sky` | canales RGB | Usar con alfa: `rgb(var(--color-navy) / 95%)` (overlays y degradados) |
| `--hero-gradient` | `linear-gradient(112deg, ...)` | Fondo base de `.hero` |
| `--section-cost-bg` / `--section-trust-bg` / `--section-promise-bg` / `--section-contact-bg` | hex | Fondos base de esas secciones |
| `--story-card-bg` | `#f4f8fc` | Fondo de `.story-card` y sus desvanecidos |
| `--nav-link` | `#45618a` | Color base de `.site-nav` |
| `--deco-*` | hex | Colores de ilustraciones/mockups (tracking, dashboard, calendario, laptop, teléfono, barras) |

Regla: fuera de `tokens.scss` no se escriben colores literales (hex, `rgb()` o `rgba()` con números). Excepciones: `#000` en `mask-image` (define opacidad, no color) y el fallback de `.industries-showcase-dots button` (ver "Pendientes").
| `--surface-fade` | `rgb(237 245 252)` | Color de desvanecido en fondos con imagen (Home) |
| `--color-danger` | `#d92d20` | Texto/borde de error en formularios |
| `--color-danger-bg` | `#fef3f2` | Fondo de campo con error |

### Colores con transparencia

`--color-ink`, `--color-blue`, `--color-coral`, `--color-cloud` y `--color-panel` son HEX: se usan directo (`color: var(--color-blue)`) y, con alfa, con `color-mix`:

```scss
background: color-mix(in srgb, var(--color-blue) 19%, transparent);
```

`--color-white`, `--color-navy`, `--color-mist` y `--color-sky` siguen en canales RGB (`rgb(var(--color-navy) / 95%)`); no usarlos con `var()` directo.

## Typography

- Familia: Inter, ui-sans-serif, system-ui
- H1: `clamp(2.35rem, 4vw, 4.05rem)` — peso 850, letter-spacing -0.045em
- H2: `clamp(2rem, 3.4vw, 3.2rem)`
- H3: `1.1rem`
- Body: `14px` / line-height 1.55
- Small: `11px–12px`

## Spacing

`xs` 8px · `sm` 16px · `md` 24px · `lg` 40px · `xl` 72px · `2xl` 112px

## Radius

`sm` 8px · `md` 14px · `lg` 24px · pill (50%)

## Shadows

`--shadow-soft`: `0 16px 48px rgb(31 85 148 / 12%)`

`--shadow-float`: `0 16px 38px rgb(var(--color-ink) / 25%)` (tarjetas flotantes sobre imágenes)

`--shadow-device`: `0 17px 40px rgb(0 26 92 / 30%)` (mockups de laptop y teléfono)

## Containers

`.container`: `width: min(100% - 48px, 1180px)`

## Breakpoints

Centralizados en `src/styles/breakpoints.scss` (solo variables y mixins; `@use "breakpoints" as *;`):

| Variable / mixin | Valor | Uso |
| ---------------- | ----- | --- |
| `$bp-xs-max` | 390px | Teléfonos pequeños |
| `$bp-mobile-max` | 800px | Mobile del design system (`responsive.scss`, `animations.scss`) |
| `$bp-tablet-min` / `$bp-tablet-max` | 801px / 1024px | Tablet; mixin `@include tablet` |
| `$page-break-mobile` | 960px | Mobile de las capas por página (`custom.scss`); mixin `@include mobile-only` |
| `$bp-wide-min` | 1500px | Ajustes de fondos en Home |
| `$bp-xl-min` | 1600px | Pantallas grandes |

- Mobile: ≤ 800px
- Tablet: 801px–1024px
- Desktop: 1025px–1280px
- Large desktop: > 1280px

## DaisyUI Theme (`shopitrack`)

El proyecto usa Tailwind CSS v4 + daisyUI v5. Ya no hay `tailwind.config.js` (deprecado en v4); el plugin `@tailwindcss/vite` se configura en `vite.config.ts`, y el tema `shopitrack` se define directamente en `src/index.css` con `@plugin "daisyui/theme" { name: "shopitrack"; ... }`: `primary: #1264e8`, `accent: #ff6848`, `base-100: #ffffff`, `base-200: #eef7ff`, etc. `src/index.css` solo contiene esta configuración de Tailwind/DaisyUI — el resto del design system vive en `src/styles/*.scss`.

## Animaciones on-scroll

Agregar el atributo `data-reveal` a un elemento (normalmente el `<section>` o su `.container`) para que aparezca con un fade + slide-up al entrar en el viewport. `MainLayout` observa estos elementos con `IntersectionObserver` y agrega la clase `is-visible` una sola vez (no se repite al salir de vista). Usar `data-reveal-delay="1"` a `"4"` en elementos hijos (p. ej. los pasos de `.steps-list`) para escalonar la animación. Respeta `prefers-reduced-motion` automáticamente (la media query global ya reduce todas las duraciones de transición).

## Capa de estilos custom (SCSS)

- Archivo: `src/styles/custom.scss`
- Carga: se importa en `src/main.tsx` después de `src/index.css` y `src/styles/design-system.scss`
- Objetivo: overrides y personalizaciones sin modificar el design system base (`src/styles/*.scss`)

Convención de alcance recomendada:

- `.page-home ...`
- `.page-empresas ...`
- `.page-clientes ...`
- `.page-industrias ...`
- `.page-contacto ...`
- `.page-not-found ...`

Ejemplo:

```scss
.page-home .hero {
  /* Solo Home */
}
```

## Patrones reutilizables

- `.section` — padding vertical de sección
- `.wave-section` — añade ondas lineales azules al pie
- `.split-grid` — grid de dos columnas (texto + imagen)
- `.info-card` — tarjeta con icono, título y descripción
- `.btn`, `.btn-primary`, `.btn-coral`, `.btn-outline` — variantes de botón
- `.info-card--media` + `.info-card-media` (`cards.scss`) — card con `<img>` al 40% del ancho y todo el alto, `object-fit: cover`, desvanecido con `mask-image` y franja de blur (`::before`, `backdrop-filter: blur(6px)`, 64px) hacia el texto. El contenido va en `.info-card-body`
- `.step-media` (`sections.scss`) — variante de `.step-line > span` con `<img>` circular en lugar de ícono
- `.industry-list` — lista con palomita azul; `.industry-list q` se muestra en itálica
- `.usecase-card-media` (`custom.scss`) — placeholder "ASSET FALTANTE" en `div`. Para `<img>` usar `/images/placeholder-asset.svg` (mismos colores: `--surface`, `--line`, `--text-muted`)

## Mixins

- `sr-only` (`mixins.scss`): oculta visualmente y mantiene el contenido para lectores de pantalla. La clase `.sr-only` de `base.scss` lo usa; en otros archivos: `@use "mixins" as *;` + `@include sr-only;`.
- `mobile-only`, `tablet` (`breakpoints.scss`): envuelven el contenido en el media query correspondiente.
- `text-content-copy` (`custom.scss`): h3/h4 destacados + párrafos del bloque `.text-content` en Empresas.

`.story-card` define `--story-card-bg`, que comparten su fondo y los desvanecidos `.blur-right` / `.blur-left`.

## Variantes en Empresas (`custom.scss`, scope `.page-empresas`)

- `.stat-card--icons` — columna de íconos (40px) a la izquierda y lista a la derecha; ambos se estiran al alto de la card y reparten su contenido (`justify-content` / `align-content: space-between`)
- `.industry-list--cross` — tache blanco sobre `--color-coral` en lugar de palomita
- `.cost-section` — degradado de todo el alto: `linear-gradient(180deg, var(--surface-alt), var(--surface))`
- `.cost-section .cost-grid` — `grid-auto-rows: 1fr` para que las cards midan lo mismo; a la derecha `.cost-media` (placeholder que se estira al alto de la columna)
- `.benefits-section` / `.benefits-grid` — sección de beneficios (antes `.changes` / `.change-grid` en esta página): fondo `--surface-alt`, grid de 3 columnas; con `.info-card--media` la card pierde el padding y lo pasa a `.info-card-body`
- `.steps-list` — una columna por paso (`grid-auto-flow: column`), para soportar cualquier número de pasos

## Pendientes

- `.industries-showcase-dots button` usa `background: var(--border, #d7e2f2)`, pero DaisyUI define `--border: 1px`, así que el fallback nunca aplica y el fondo resuelve a un valor inválido. Se dejó intacto para no alterar el diseño actual; corregirlo (p. ej. un token propio) hará visibles los puntos inactivos.
