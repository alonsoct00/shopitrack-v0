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

- Familia: Inter, "Inter Fallback", ui-sans-serif, system-ui
- `Inter Fallback` (`base.scss`) es Arial / Arial Bold local ajustada a las métricas de Inter (`size-adjust`, `ascent/descent-override`), calibrada por peso midiendo el ancho de texto en español: 106% para 100–500 y 101% para 600–900. Solo se ve mientras carga Inter y evita el salto de layout (CLS) al cambiar de fuente; no altera el render final.
- H1: `clamp(2.35rem, 4vw, 4.05rem)` — peso 850, letter-spacing -0.045em
- H2: `clamp(2rem, 3.4vw, 3.2rem)`
- H3: `1.1rem`
- Body: `0.875rem` (14px) / line-height 1.55
- Small: `0.6875rem–0.75rem` (11–12px)
- Tracking: `-0.045em` es solo para tamaños de display (H1/H2). `h3` y los títulos de card (`.info-card h2`) usan `-0.01em`: con el tracking de display las letras se juntan en tamaños de subtítulo.
- Unidades: todos los `font-size` se escriben en `rem` (1rem = 16px; el proyecto no redefine el tamaño raíz), así el texto escala si la persona cambia el tamaño de fuente del navegador. Spacing, bordes, anchos y breakpoints siguen en `px`. El `line-height` se escribe sin unidades.
- Roles de párrafo `p.lead` (`1.125rem`, 18px) y `p.statement` (`1.5rem`, 24px): se definen al inicio de `custom.scss`, no en `typography.scss`, porque deben ganarle a `.hero-copy p` (misma especificidad) por orden de carga.

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

Orden dentro del design system: `design-system.scss` agrega los partials con `@use` en el orden de cascada original (tokens → base → layout → typography → buttons → hero → cards → sections → responsive → animations). No reordenar sin comparar el CSS compilado. `breakpoints.scss` y `mixins.scss` solo contienen variables y mixins: no generan CSS y se consumen con `@use "breakpoints" as *;` / `@use "mixins" as *;`.

Clientes (desktop): el header vive fuera de `.page`, así que su fondo blanco antes de hacer scroll se acota con `.site-shell:has(.page-clientes)`; al hacer scroll aplica el estilo global de `.site-header--scrolled`.

## Patrones reutilizables

- `.section` — padding vertical de sección
- `.wave-section` — añade ondas lineales azules al pie. Hoy están desactivadas a propósito: `.wave-section-bottom::after` tiene `display: none`
- `.split-grid` — grid de dos columnas (texto + imagen)
- `.info-card` — tarjeta con icono, título y descripción
- `.btn`, `.btn-primary`, `.btn-coral`, `.btn-outline` — variantes de botón. Texto de `1rem` (16px) en mobile y tablet y de `1.125rem` (18px) en desktop (más de `$page-break-mobile`, 961px en adelante).
- `.info-card--media` + `.info-card-media` (`cards.scss`) — card con `<img>` al 40% del ancho y todo el alto, `object-fit: cover`, desvanecido con `mask-image` y franja de blur (`::before`, `backdrop-filter: blur(6px)`, 64px) hacia el texto. El contenido va en `.info-card-body`
- `.step-media` (`sections.scss`) — variante de `.step-line > span` con `<img>` circular en lugar de ícono
- `.industry-list` — lista con palomita azul; `.industry-list q` se muestra en itálica
- `.usecase-card-media` (`custom.scss`) — placeholder "ASSET FALTANTE" en `div`. Para `<img>` usar `/images/placeholder-asset.svg` (mismos colores: `--surface`, `--line`, `--text-muted`)

## Mixins

- `sr-only` (`mixins.scss`): oculta visualmente y mantiene el contenido para lectores de pantalla. La clase `.sr-only` de `base.scss` lo usa; en otros archivos: `@use "mixins" as *;` + `@include sr-only;`.
- `mobile-only`, `tablet` (`breakpoints.scss`): envuelven el contenido en el media query correspondiente.
- `text-content-copy` (`custom.scss`): h3/h4 destacados + párrafos del bloque `.text-content` en Empresas.
- `hero-decor-layers` (`mixins.scss`): capas del hero compartidas por Home, Empresas y Clientes — velo (`::before`), listón inferior hoy oculto (`::after`) y contenido por encima de ambas. Se incluye dentro de `.hero` (`.hero { @include hero-decor-layers; }`), porque usa `&::before`.
- `contact-actions-row($justify)` (`mixins.scss`): botones del CTA final (`.contact-actions`) en fila en desktop y apilados a todo el ancho en mobile (`mobile-only`). Sin argumento conserva el centrado de `.contact-actions` (Home, Contacto); `flex-start` alinea la fila con el texto en CTAs de dos columnas (Empresas, Sectores). En mobile incluye `align-self: stretch` para ocupar el ancho aunque el padre sea flex y centre a sus hijos (Home).

`.story-card` define `--story-card-bg`, que comparten su fondo y los desvanecidos `.blur-right` / `.blur-left`.

## Variantes en Empresas (`custom.scss`, scope `.page-empresas`)

- `.stat-card--icons` — cada ícono (40px) vive dentro de su `<li>` (orden `-1`, antes de la palomita/tache), así queda alineado con su texto; el título se indenta 64px para alinearse con la columna de texto
- `.industry-list--cross` — tache blanco sobre `--color-coral` en lugar de palomita
- `.cost-section` — degradado de todo el alto: `linear-gradient(180deg, var(--surface-alt), var(--surface))`
- `.cost-section .cost-grid` — cards con su alto natural (`align-content: space-between`); a la derecha `.cost-media` (placeholder que se estira al alto de la columna)
- `.benefits-section` / `.benefits-grid` — sección de beneficios (antes `.changes` / `.change-grid` en esta página): fondo `--surface-alt`, grid de 3 columnas; con `.info-card--media` la card pierde el padding y lo pasa a `.info-card-body`
- `.steps-list` — una columna por paso (`grid-auto-flow: column`), para soportar cualquier número de pasos
- `.confidence-section` — texto tipo manifiesto sin imagen: una sola columna centrada (720px)
- `.benefits-section .benefits-grid` (mobile): el selector repite la especificidad de la regla de 3 columnas; con un selector más corto la regla de mobile nunca aplicaba

## Pendientes

- `animations.scss` declara `html.reveal-ready .steps-list .step { transform: translateX(-40px) }` (`translateY` en mobile) después de la regla `.is-visible`, con la misma especificidad, así que el desplazamiento persiste tras la animación. Home y Empresas lo anulan en su bloque de `custom.scss` (`.steps-list .step.is-visible { transform: none }`); cualquier página nueva con `StepsList` necesita lo mismo hasta corregir la regla global.

- `.industries-showcase-dots button` usa `background: var(--border, #d7e2f2)`, pero DaisyUI define `--border: 1px`, así que el fallback nunca aplica y el fondo resuelve a un valor inválido. Se dejó intacto para no alterar el diseño actual; corregirlo (p. ej. un token propio) hará visibles los puntos inactivos.

## Accesibilidad (decisiones que no deben revertirse)

- Flechas de los pasos en secciones navy (Empresas): blancas como el texto; el azul sobre el fondo navy no alcanzaba contraste 3:1.
- Áreas táctiles: los links legales del pie de página (mobile) tienen `padding-block: 12px` para llegar a 44px; las flechas del slider amplían su área táctil sin cambiar el tamaño visible.
- Formulario de Contacto (`.contact-form`, `FormField` local de `Contacto.tsx`):
  - **Floating labels**: el control se renderiza antes de su `<label>` (asociado con `for`/`id`) dentro de `.form-control`, y lleva `placeholder=" "`. El label sube cuando el campo tiene foco, tiene valor (`:not(:placeholder-shown)`) o está autocompletado (`:autofill`). En los `<select>` el label siempre está arriba, porque siempre muestran un valor.
  - Los campos usan `font-size: 1rem` (16px) en todos los anchos; con menos, iOS hace zoom automático al enfocar. Miden 58px de alto.
  - El borde de los campos es `--text-secondary` al 65% (3.5:1), porque `--line` no llega al 3:1 que exige WCAG para contornos de controles. Hints y labels usan `--text-secondary`: `--text-muted` (3.9:1) no alcanza AA en texto pequeño.
  - Error: borde rojo con anillo interior (sin layout shift), label rojo e icono en el mensaje, para no depender solo del color. Los errores de campo no llevan `role="alert"`: al enviar, el foco va al primer campo inválido y el lector anuncia su mensaje vía `aria-describedby`. Solo el error de sistema usa `role="alert"`.
- Antes → Ahora (Clientes): la etiqueta "Antes:/Ahora:" es visible en mobile (una columna, sin encabezados); en desktop la leyenda superior ya lo indica y la etiqueta queda solo para lectores de pantalla.
- Página legal: el texto largo se limita a ~70 caracteres por línea.
