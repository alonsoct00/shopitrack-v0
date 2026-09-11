# Design System — Shopitrack

## Colores (variables CSS en `:root`)

| Token | Valor | Uso |
|-------|-------|-----|
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

Definido en `tailwind.config.js` con `primary: #1264e8`, `accent: #ff6848`, `base-100: #ffffff`, `base-200: #eef7ff`, etc.

## Patrones reutilizables

- `.section` — padding vertical de sección
- `.wave-section` — añade ondas lineales azules al pie
- `.split-grid` — grid de dos columnas (texto + imagen)
- `.info-card` — tarjeta con icono, título y descripción
- `.btn`, `.btn-primary`, `.btn-coral`, `.btn-outline` — variantes de botón
