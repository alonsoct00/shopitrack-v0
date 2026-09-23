# Design System — Shopitrack

El design system vive en `src/styles/` como partials SCSS (`tokens`, `base`, `layout`, `typography`, `buttons`, `hero`, `cards`, `sections`, `responsive`, `animations`), agregados por `src/styles/design-system.scss` e importados en `src/main.tsx` después de `src/index.css` (Tailwind + tema DaisyUI) y antes de `src/styles/custom.scss` (overrides por página). Ver [docs/ARCHITECTURE.md](./ARCHITECTURE.md) para el detalle de cada archivo.

## Colores (variables CSS en `:root`, definidas en `src/styles/tokens.scss`)

| Token | Valor | Uso |
| ------- | ------- | ----- |
| `--color-blue` | `18 100 232` | Primario, CTAs, iconos, acentos |
| `--color-coral` | `255 104 72` | Acento de contraste, CTAs secundarios |
| `--color-ink` | `8 38 99` | Azul profundo para fondos oscuros |
| `--color-cloud` | `238 247 255` | Fondos pálidos |
| `--text-primary` | `#082663` | Texto principal |
| `--text-secondary` | `#2e4d79` | Texto secundario |
| `--text-muted` | `#6b82a6` | Texto terciario |
| `--line` | `#dce9f7` | Bordes y separadores |
| `--surface` | `#ffffff` | Fondos claros |
| `--surface-alt` | `#eef7ff` | Fondos alternativos |
| `--color-danger` | `#d92d20` | Texto/borde de error en formularios |
| `--color-danger-bg` | `#fef3f2` | Fondo de campo con error |

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

## Containers

`.container`: `width: min(100% - 48px, 1180px)`

## Breakpoints

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
