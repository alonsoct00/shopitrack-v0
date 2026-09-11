# Shopitrack

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-uojjfatb)

Shopitrack es una plataforma que coordina a empresas de entrega y a sus clientes para que cada entrega a domicilio se realice en el momento acordado, reduciendo entregas fallidas y fortaleciendo la confianza en la última milla.

---

## Tabla de contenidos

- [Objetivo](#objetivo)
- [Stack](#stack)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Build](#build)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Design System](#design-system)
  - [Colores](#colores)
  - [Tipografía](#tipografía)
  - [Spacing](#spacing)
  - [Radius](#radius)
  - [Sombras](#sombras)
  - [Containers](#containers)
  - [Breakpoints](#breakpoints)
  - [Tema DaisyUI](#tema-daisyui)
  - [Patrones reutilizables](#patrones-reutilizables)
- [Componentes](#componentes)
  - [Brand](#brand)
  - [SectionHeading](#sectionheading)
  - [InfoCard](#infocard)
- [Responsive](#responsive)
- [Imágenes](#imágenes)
- [SEO](#seo)
- [Arquitectura](#arquitectura)
- [Convenciones de código](#convenciones-de-código)
- [Cómo agregar una nueva página](#cómo-agregar-una-nueva-página)
- [Reglas para futuros agentes de IA](#reglas-para-futuros-agentes-de-ia)

---

## Objetivo

Recrear la Home de Shopitrack con fidelidad visual respecto a la imagen de referencia, conservando el contenido original, con una arquitectura preparada para crecer con futuras páginas.

**Prioridades, en este orden:**

1. Fidelidad al diseño de referencia
2. Conservación del contenido
3. Responsive
4. Reutilización de componentes
5. Design system
6. Mantenibilidad
7. Accesibilidad
8. Performance
9. SEO

## Stack

- **React** + **TypeScript**
- **Tailwind CSS** 3.x + **DaisyUI** 4.x (tema `shopitrack`)
- **Vite** 5.x
- **lucide-react** para iconografía

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

## Build

```bash
npm run build
```

Otros comandos:

```bash
npm run typecheck   # verificación de tipos
npm run lint        # eslint
npm run preview     # preview del build de producción
```

---

## Estructura del proyecto

```
project/
├── public/
│   ├── favicon.svg          Favicon SVG con colores de marca
│   ├── robots.txt           Directrices para buscadores
│   └── sitemap.xml          Sitemap para SEO
├── src/
│   ├── components/          Componentes reutilizables
│   │   ├── Brand.tsx            Logo + nombre
│   │   ├── InfoCard.tsx         Tarjeta con icono, título y descripción
│   │   └── SectionHeading.tsx   Encabezado de sección
│   ├── data/
│   │   └── home.ts             Contenido de la Home (textos, imágenes, listas)
│   ├── App.tsx                 Composición de la Home
│   ├── index.css              Design system + estilos globales
│   ├── main.tsx               Entry point
│   └── vite-env.d.ts          Tipos de Vite
├── docs/                       Documentación detallada
│   ├── AI-CONTEXT.md
│   ├── ARCHITECTURE.md
│   ├── COMPONENTS.md
│   ├── DESIGN-SYSTEM.md
│   ├── IMAGES.md
│   ├── README.md
│   └── RESPONSIVE.md
├── index.html                  HTML con meta tags SEO, Open Graph, JSON-LD
├── tailwind.config.js          Config Tailwind + tema DaisyUI
├── postcss.config.js
├── vite.config.ts
└── package.json
```

### Responsabilidades de cada carpeta

| Carpeta | Responsabilidad |
|---------|----------------|
| `src/components/` | Componentes presentacionales reutilizables. Sin lógica de negocio. |
| `src/data/` | Contenido separado de la UI. Permite conectar CMS/API sin tocar componentes. |
| `public/` | Archivos estáticos servidos directamente (favicon, robots, sitemap). |
| `docs/` | Documentación del proyecto. |

---

## Design System

El design system está centralizado en `src/index.css` con variables CSS en `:root`. Esto permite crear futuras páginas sin duplicar estilos.

### Colores

Variables CSS definidas en `:root`:

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

Uso en Tailwind: `rgb(var(--color-blue) / <alpha-value>)` — permite opacidad con la sintaxis `bg-blue/50`.

### Tipografía

- **Familia**: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **H1**: `clamp(2.35rem, 4vw, 4.05rem)` — peso 850, letter-spacing -0.045em, max-width 585px
- **H2**: `clamp(2rem, 3.4vw, 3.2rem)`
- **H3**: `1.1rem`
- **Body**: `14px` / line-height 1.55
- **Small**: `11px–12px`
- Pesos máximos: 3 (regular, bold, extrabold)

### Spacing

Escala consistente basada en 8px:

| Token | Valor |
|-------|-------|
| `--space-xs` | 8px |
| `--space-sm` | 16px |
| `--space-md` | 24px |
| `--space-lg` | 40px |
| `--space-xl` | 72px |
| `--space-2xl` | 112px |

### Radius

| Token | Valor |
|-------|-------|
| `--radius-sm` | 8px |
| `--radius-md` | 14px |
| `--radius-lg` | 24px |
| pill | 50% |

### Sombras

| Token | Valor |
|-------|-------|
| `--shadow-soft` | `0 16px 48px rgb(31 85 148 / 12%)` |

### Containers

| Clase | Valor |
|-------|-------|
| `.container` | `width: min(100% - 48px, 1180px)` — centrado con padding horizontal |
| `.section` | `padding: 92px 0` — espaciado vertical de sección |

### Breakpoints

| Nombre | Rango | Comportamiento |
|--------|-------|---------------|
| Mobile | ≤ 800px | Una columna, menú hamburguesa, steps verticales |
| Tablet | 801–1024px | Dos columnas, espaciado reducido |
| Desktop | 1025px–1280px | Layout completo de la referencia |
| Large | > 1280px | Container centrado a 1180px |

### Tema DaisyUI

Definido en `tailwind.config.js`:

| Token DaisyUI | Valor |
|--------------|-------|
| `primary` | `#1264e8` |
| `secondary` | `#092c78` |
| `accent` | `#ff6848` |
| `neutral` | `#122958` |
| `base-100` | `#ffffff` |
| `base-200` | `#eef7ff` |
| `base-300` | `#d9e9fa` |
| `info` | `#1264e8` |
| `success` | `#12a879` |
| `warning` | `#f4b740` |
| `error` | `#de4b5f` |

### Patrones reutilizables

| Clase | Descripción |
|-------|-------------|
| `.section` | Padding vertical de sección (92px) |
| `.wave-section` | Añade ondas lineales azules al pie de la sección |
| `.split-grid` | Grid de dos columnas (texto + imagen) |
| `.info-card` | Tarjeta con icono, título y descripción |
| `.btn` | Botón base |
| `.btn-primary` | Botón azul |
| `.btn-coral` | Botón coral (acento) |
| `.btn-outline` | Botón con borde transparente |
| `.container` | Contenedor centrado con max-width |

---

## Componentes

### Brand

Logo de Shopitrack con icono de lucide-react (`CircleDot`).

```tsx
import { Brand } from '@/components/Brand';

<Brand light={false} />
```

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `light` | `boolean` | `false` | Versión para fondos oscuros |

### SectionHeading

Encabezado de sección con eyebrow opcional.

```tsx
import { SectionHeading } from '@/components/SectionHeading';

<SectionHeading eyebrow="El costo invisible" title="..." centered />
```

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `eyebrow` | `string?` | — | Etiqueta pequeña arriba del título |
| `title` | `string` | — | Título de la sección (h2) |
| `centered` | `boolean` | `false` | Centra el contenido |

### InfoCard

Tarjeta con icono circular, título, label y descripción.

```tsx
import { InfoCard } from '@/components/InfoCard';
import { Building2 } from 'lucide-react';

<InfoCard icon={<Building2 />} title="Empresa" label="Programó. Preparó. Asignó.">
  Pero encontró una puerta cerrada.
</InfoCard>
```

| Prop | Tipo | Descripción |
|------|------|-------------|
| `icon` | `ReactNode` | Icono lucide-react |
| `title` | `string` | Texto destacado en azul |
| `label` | `string` | Subtítulo (h3) |
| `children` | `ReactNode` | Descripción |

---

## Responsive

### Breakpoints

| Nombre | Rango | Comportamiento |
|--------|-------|---------------|
| Mobile | ≤ 800px | Una columna, menú hamburguesa, steps verticales |
| Tablet | 801–1024px | Dos columnas, espaciado reducido |
| Desktop | 1025px–1280px | Layout completo de la referencia |
| Large | > 1280px | Container centrado a 1180px |

### Reglas responsive

- En Mobile, todos los grids (`hero-grid`, `split-grid`, `cost-grid`, etc.) colapsan a una columna.
- La navegación se convierte en menú desplegable (hamburguesa).
- Los pasos (`.steps-list`) pasan de 5 columnas a lista vertical con icono a la izquierda.
- Las tarjetas comparativas (`.story-grid`, `.change-grid`) se apilan.
- El collage de industrias mantiene 3 columnas pero reduce alturas.
- Las tarjetas flotantes (tracking, dashboard, calendar) se repositionan para no salir del viewport.
- No hay overflow horizontal: `.site-shell` tiene `overflow: hidden`.
- Breakpoint adicional en 390px para pantallas muy pequeñas.

---

## Imágenes

Todas las imágenes son fotografías de Pexels (licencia libre) seleccionadas para reproducir el concepto visual de la referencia. Las URLs se referencian directamente en `<img>` sin descargarlas.

| Ubicación | Foto Pexels | Alt | Finalidad |
|-----------|-------------|-----|-----------|
| Hero | `pexels-photo-7363128` | Repartidora revisando su teléfono | Hero principal |
| Split 1 | `pexels-photo-6699423` | Repartidor con caja | Sección "Cómo funciona" |
| Story card | `pexels-photo-6869055` | Cliente esperando entrega | Tarjeta "Cliente" |
| Cost section | `pexels-photo-7706523` | Operadora revisando entregas | Sección "Costo invisible" |
| New way | `pexels-photo-8989470` | Cliente y repartidor coordinando | Sección "Nueva forma" |
| Trust | `pexels-photo-6869055` | Cliente recibiendo paquete | Sección "Confianza" |
| Industries collage | `8989470`, `6699423`, `6869055` | Entregas | Collage de industrias |
| Promise bg | `pexels-photo-417074` | Fondo de ciudad | Fondo de sección "Promesa" |

### Prompts para regenerar con IA

- **Hero**: "Mujer repartidora con camisa azul revisando su smartphone mientras espera una entrega, interior de vehículo, luz natural, composición horizontal"
- **Courier**: "Repartidor caminando con caja de cartón junto a un vehículo en calle urbana, uniforme azul, composición horizontal"
- **Customer**: "Cliente esperando una entrega en casa, mirando su teléfono, composición horizontal"
- **Operator**: "Operadora revisando información de entregas en pantalla, ambiente de oficina, composición horizontal"
- **Delivery**: "Cliente y repartidor coordinando la entrega de un paquete en la puerta, composición horizontal"

### Cómo agregar nuevas imágenes

Usar la herramienta `pexels_search` con una query descriptiva del subject. Referenciar la URL directamente en `<img>`. Documentar en `docs/IMAGES.md`.

---

## SEO

El proyecto está preparado para SEO con:

- **Title** y **meta description** en español
- **Canonical URL** (`https://shopitrack.com/`)
- **Meta robots** (`index, follow`)
- **Open Graph** completo: `og:type`, `og:locale`, `og:site_name`, `og:url`, `og:title`, `og:description`, `og:image`, `og:image:alt`
- **Twitter Cards** completo: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- **Datos estructurados JSON-LD** (Schema.org `Organization`)
- **Favicon SVG** personalizado
- **`robots.txt`** y **`sitemap.xml`** en `public/`
- **`<noscript>`** con contenido alternativo para buscadores sin JavaScript
- **`preconnect`** a `images.pexels.com` para cargar imágenes más rápido
- **HTML semántico**: `<header>`, `<main>`, `<section>`, `<footer>`, jerarquía H1-H3
- **Alt text** en todas las imágenes
- **`loading="lazy"`** en imágenes secundarias para mejorar LCP

---

## Arquitectura

### Principios

- **Separación de contenido y UI**: Los textos están en `src/data/home.ts`, no hardcodeados en componentes.
- **Design system centralizado**: Variables CSS en `:root` + clases reutilizables en `index.css`.
- **Componentes presentacionales**: Sin lógica de negocio, reutilizables entre páginas.
- **Preparado para crecer**: La arquitectura permite agregar futuras páginas (`/about`, `/pricing`, etc.) reutilizando Header, Footer, Container, Buttons y Cards.

### Convenciones

- Importar con `@/` (alias a `src/`).
- Iconos de `lucide-react`.
- Clases CSS reutilizables en `index.css` (no Tailwind utilities inline repetidas).
- Contenido en `data/`, no hardcodeado en componentes.
- TypeScript estricto.
- Sin comentarios innecesarios.
- Sin emojis.

### Convenciones de nombres

| Elemento | Convención | Ejemplo |
|----------|-----------|---------|
| Componentes | PascalCase | `InfoCard.tsx` |
| Archivos de datos | kebabCase | `home.ts` |
| Clases CSS | kebabCase | `.info-card` |
| Variables CSS | kebabCase con prefijo | `--color-blue` |

---

## Cómo agregar una nueva página

1. Crea un componente en `src/pages/` (ej: `src/pages/About.tsx`).
2. Reutiliza `Brand`, `SectionHeading`, `InfoCard` y las clases del design system (`.container`, `.section`, `.btn`).
3. Importa el contenido desde `src/data/` (crea un nuevo archivo si es necesario).
4. No dupliques estilos: usa las variables CSS y las clases existentes.
5. Añade la ruta en tu router cuando se integre.
6. Si la página necesita imágenes, usa `pexels_search` y documenta en `docs/IMAGES.md`.

---

## Reglas para futuros agentes de IA

1. No modificar el design system para resolver un problema de una página si puede resolverse con un componente o variante.
2. No duplicar componentes existentes.
3. Antes de crear un componente nuevo, revisar los existentes.
4. Antes de agregar un color nuevo, revisar las variables existentes.
5. No hardcodear colores repetidos.
6. No utilizar Lorem Ipsum.
7. No modificar copys existentes sin autorización.
8. Mantener Desktop y Mobile como parte del mismo sistema visual.
9. Las nuevas páginas deben reutilizar Header, Footer, Container, Buttons, Cards y demás componentes existentes.
10. La referencia visual original tiene prioridad sobre preferencias estéticas del agente.

### Qué no modificar sin justificación

- Variables CSS en `:root` (colores, spacing, tipografía).
- Tema DaisyUI en `tailwind.config.js`.
- Contenido de `src/data/home.ts`.
- Estructura de componentes existentes.

---

## Documentación adicional

Toda la documentación detallada está en `docs/`:

| Archivo | Contenido |
|--------|-----------|
| `docs/DESIGN-SYSTEM.md` | Colores, tipografía, spacing, radius, sombras, breakpoints, tema DaisyUI |
| `docs/COMPONENTS.md` | Componentes disponibles, props y ejemplos |
| `docs/RESPONSIVE.md` | Breakpoints y comportamiento responsive |
| `docs/IMAGES.md` | Imágenes utilizadas, prompts y finalidad |
| `docs/ARCHITECTURE.md` | Estructura, responsabilidades y convenciones |
| `docs/AI-CONTEXT.md` | Contexto para futuros agentes de IA |
