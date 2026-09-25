# Arquitectura

## Estructura

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx        Header + navegación (react-router-dom)
│   │   ├── Footer.tsx        Footer del sitio
│   │   └── MainLayout.tsx    Layout compartido (Header + Outlet + Footer)
│   ├── Brand.tsx              Logo + nombre
│   ├── ComingSoonSection.tsx  Placeholder para páginas sin mockup
│   ├── ErrorBoundary.tsx      Aísla errores de render (raíz, página, sección)
│   ├── IndustriesShowcase.tsx Carrusel de sectores (Home)
│   ├── InfoCard.tsx           Tarjeta con icono o imagen (variante .info-card--media)
│   ├── LottiePlayer.tsx       Animaciones Lottie con carga diferida
│   ├── PageError.tsx          Fallback de página cuando falla el render
│   ├── RichText.tsx           Etiquetas permitidas (<q>, <em>, <b>...) en strings del data
│   ├── Seo.tsx                Meta tags SEO por ruta (SPA)
│   ├── SectionHeading.tsx     Encabezado de sección
│   └── StepsList.tsx          Pasos numerados con ícono o imagen
├── pages/
│   ├── Home.tsx               Página de inicio
│   ├── Empresas.tsx           Página para empresas (incluye StatCard local)
│   ├── Clientes.tsx           Página para clientes
│   ├── Sectores.tsx           Página de sectores
│   ├── Contacto.tsx           Contacto con formulario
│   ├── LegalPage.tsx          Plantilla para Aviso de privacidad y Términos y condiciones
│   └── NotFound.tsx           Página 404
├── data/
│   ├── home.ts                Contenido de la Home
│   ├── empresas.ts            Contenido de Empresas
│   ├── clientes.ts            Contenido de Clientes
│   ├── sectores.ts            Contenido de Sectores
│   ├── contacto.ts            Contenido de Contacto
│   ├── legal.ts               Aviso de privacidad y Términos (texto preliminar, datos [POR DEFINIR])
│   ├── navigation.ts          Rutas del menú (siteNav)
│   ├── seo.ts                 Titles/descriptions por ruta
│   └── types.ts               Tipos compartidos del data (Icon, IconItem, StepItem, ImageSource)
├── styles/
│   ├── breakpoints.scss         Variables y mixins de breakpoints (no genera CSS; se consume con @use)
│   ├── tokens.scss              Variables CSS (:root): colores, spacing, radius, shadows
│   ├── base.scss                Reset, box-sizing, html/body, focus-visible, .hidden, .sr-only
│   ├── layout.scss              .container, .section, .wave-section, header/footer/nav
│   ├── typography.scss          h1-h3, p, .eyebrow, .section-heading
│   ├── buttons.scss             .btn y variantes
│   ├── hero.scss                .hero, .hero-copy, .hero-art, .tracking-*
│   ├── cards.scss                .info-card, .story-card, .round-icon, .story-divider
│   ├── sections.scss            Estilos por sección (cost, steps, trust, industries, contact, etc.)
│   ├── responsive.scss          Todos los @media (mobile/tablet/desktop)
│   ├── animations.scss          Reveal-on-scroll y prefers-reduced-motion
│   ├── design-system.scss      Agrega los partials de arriba con @use, en orden de cascada
│   └── custom.scss             Overrides personalizados por página (scope .page-<ruta>)
├── App.tsx                    Rutas (BrowserRouter + Routes)
├── index.css                  Entry point de Tailwind CSS v4 + tema DaisyUI (@plugin) — nada más
└── main.tsx                   Entry point de la app (importa index.css, design-system.scss y custom.scss, en ese orden)
```

## Responsabilidades

- **components/**: Componentes presentacionales reutilizables. Sin lógica de negocio.
- **components/layout/**: Header, Footer y MainLayout compartidos entre todas las páginas.
- **pages/**: Una página por ruta. Componen secciones a partir de componentes y datos.
- **data/**: Contenido separado de la UI. Permite conectar CMS/API sin tocar componentes.
- **styles/**: Design system y estilos globales, divididos en partials SCSS por dominio (ver arriba), agregados por `design-system.scss` e importados desde `main.tsx`. `custom.scss` es la capa final de overrides por página, cargada después.
- **App.tsx**: Define las rutas con `react-router-dom` y las envuelve en `MainLayout`.
- **index.css**: Punto de entrada de Tailwind CSS v4 + tema DaisyUI (`@plugin`) únicamente. No contiene design system propio.

### Por qué está dividido así

Antes, `index.css` concentraba ~1600 líneas de design system y estilos de sección en un solo archivo CSS. Se dividió en partials SCSS por dominio (tokens, base, layout, tipografía, botones, hero, cards, secciones, responsive, animaciones) para que cada archivo tenga una responsabilidad clara, sea más fácil de ubicar/mantener, y para poder usar funciones de Sass (nesting, futuras variables/mixins) donde convenga.

`index.css` usa `@import "tailwindcss"` y se procesa con el bundler propio de Tailwind v4 (Lightning CSS), que **no** ejecuta Sass — por eso los partials no se importan desde ahí con `@import` de CSS. En cambio, `design-system.scss` los agrega con `@use` de Sass y se importa como módulo JS en `main.tsx` (igual que ya se hacía con `custom.scss`), para que Vite lo compile con el compilador de Sass real.

Orden de carga en `main.tsx`: `index.css` (Tailwind + DaisyUI) → `design-system.scss` (design system propio) → `custom.scss` (overrides por página). Este orden importa para la cascada: nuestras clases (`.container`, `.btn`, etc.) deben cargar después de las utilidades/componentes de Tailwind y DaisyUI para ganarles por orden en selectores de igual especificidad. No reordenar sin verificar (se comparó el CSS compilado antes/después del split y es equivalente — mismas reglas, mismo comportamiento de cascada).

## Manejo de errores de render

`ErrorBoundary` (`src/components/ErrorBoundary.tsx`) se aplica en tres niveles para que un error no deje la pantalla en blanco:

| Nivel | Dónde | Fallback |
| ----- | ----- | -------- |
| App | `main.tsx` | `PageError` |
| Página | `MainLayout`, alrededor de `<Outlet />` con `key={pathname}` | `PageError` (se reinicia al cambiar de ruta) |
| Header / Footer | `MainLayout` | Nada: solo esa parte no se muestra |
| Sección | Cada `<section>` de Home, Empresas, Clientes, Sectores y Contacto | Nada: solo esa sección no se muestra |

Cada error se registra en consola con el nombre de su zona (`[ErrorBoundary: Empresas: benefits-section]`).

No cubre: errores en event handlers, código asíncrono (promesas, timers; `LottiePlayer` tiene su `.catch`), ni errores al evaluar módulos (por ejemplo un archivo de `data/` que truene al importarse). El código que corre directo en el cuerpo de la página falla a nivel página, no sección.

## Datos tipados con íconos

Cada elemento de una lista lleva su ícono (o imagen) en el propio data, tipado con `src/data/types.ts`. No se usan arreglos de íconos paralelos por índice: si se agrega un elemento sin `icon`, falla `npm run typecheck` en lugar del render. La numeración de pasos se calcula por índice.

## Convenciones

- Importar con `@/` (alias a `src/`).
- Iconos de lucide-react, importados explícitamente.
- Clases CSS reutilizables en `src/styles/*.scss` (no Tailwind utilities inline repetidas).
- Estilos personalizados en `src/styles/custom.scss` con scoping por página (`.page-home`, `.page-empresas`, etc.).
- Contenido en `data/`, no hardcodeado en componentes.
- Navegación con `Link`/`NavLink` de `react-router-dom`, no `<a href="#...">` para ir entre páginas.
- TypeScript estricto: tipos explícitos en todos los parámetros.
- Sin comentarios innecesarios: solo cuando el "por qué" no es obvio.
- Sin emojis en código ni commits.
- Sin estados globales: pasar dependencias como argumentos, no usar singletons o globals.

### Convenciones de nombres

| Elemento | Convención | Ejemplo |
| ---------- | ----------- | --------- |
| Componentes | PascalCase | `InfoCard.tsx` |
| Archivos de datos | kebabCase | `home.ts` |
| Clases CSS | kebabCase | `.info-card` |
| Variables CSS | kebabCase con prefijo | `--color-blue` |
| Funciones | camelCase | `handleSubmit` |

## Estrategia de páginas

Para agregar una nueva página:

1. Crear `src/pages/NombrePagina.tsx`.
2. Reutilizar `Brand`, `SectionHeading`, `InfoCard`, `.container`, `.section`, `.btn`. No repetir Header/Footer: ya están en `MainLayout`.
3. Importar contenido desde `src/data/`.
4. Envolver la página con un identificador único (`id` + clase `.page-<ruta>`) para permitir estilos aislados.
5. Si necesitas estilos específicos de la página, agregarlos en `src/styles/custom.scss` usando ese scope.
6. No duplicar estilos: usar variables existentes.
7. Registrar la ruta en `src/App.tsx` y, si aplica, en `siteNav` (`src/data/navigation.ts`).
8. Si el mockup de Figma aún no existe, usar `ComingSoonSection` como contenido temporal.
9. Envolver cada `<section>` en `<ErrorBoundary name="<Página>: <sección>">`.
10. Si una lista del data lleva íconos, ponerlos en cada elemento (`IconItem`, `StepItem`) con su tipo explícito, no en un arreglo aparte.
