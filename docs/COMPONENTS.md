# Componentes

## Brand

Logo de Shopitrack con icono de lucide-react.

```tsx
<Brand light={false} />
```

| Prop | Tipo | Descripción |
| ---- | ---- | ----------- |
| `light` | `boolean` | Versión para fondos oscuros |

## SectionHeading

Encabezado de sección con eyebrow opcional.

```tsx
<SectionHeading eyebrow="El costo invisible" title="..." centered />
```

| Prop | Tipo | Descripción |
| ---- | ---- | ----------- |
| `eyebrow` | `string?` | Etiqueta pequeña arriba del título |
| `title` | `string` | Título de la sección |
| `centered` | `boolean` | Centra el contenido |

## InfoCard

Tarjeta con icono circular, título, label y descripción.

```tsx
<InfoCard icon={<Building2 />} title="Empresa" label="Programó. Preparó. Asignó.">
  Pero encontró una puerta cerrada.
</InfoCard>
```

| Prop | Tipo | Descripción |
| ---- | ---- | ----------- |
| `icon` | `ReactNode` | Icono lucide-react |
| `title` | `string` | Texto destacado en azul |
| `label` | `string` | Subtítulo/h3 |
| `items` | `string[]` | Lista opcional con checks azules (`.industry-list`) |
| `children` | `ReactNode` | Descripción |

## Header / Footer / MainLayout

Componentes de layout compartidos por todas las páginas (`src/components/layout/`). `MainLayout` envuelve las rutas en `App.tsx` con `Header`, `<Outlet />` y `Footer`. No se repiten en cada página.

```tsx
<Route element={<MainLayout />}>
  <Route index element={<Home />} />
</Route>
```

`Header` usa `siteNav` (`src/data/navigation.ts`) para generar el menú con `NavLink`.

## ComingSoonSection

Placeholder reutilizable para páginas pendientes de mockup en Figma (Empresas, Clientes, Industrias).

```tsx
import { ComingSoonSection } from '@/components/ComingSoonSection';

<ComingSoonSection
  eyebrow="Para empresas"
  title="La página para empresas está en construcción."
  description="..."
/>
```

| Prop | Tipo | Descripción |
| ---- | ---- | ----------- |
| `eyebrow` | `string` | Etiqueta pequeña arriba del título |
| `title` | `string` | Título centrado (h2) |
| `description` | `string` | Texto explicativo, con CTA a `/contacto` |

## Seo

Actualiza `title`, `meta description`, `canonical`, `robots`, `og:*` y `twitter:*` en `index.html` al montar la página (la app es una SPA sin SSR, así que estos tags viven en el DOM y deben reescribirse por ruta). Debe ser el primer elemento renderizado en cada página. El contenido (`title`/`description`/`path`) se centraliza en `src/data/seo.ts` (`seoConfig`).

```tsx
import { Seo } from '@/components/Seo';
import { seoConfig } from '@/data/seo';

<Seo {...seoConfig.home} />
```

| Prop | Tipo | Descripción |
| ---- | ---- | ----------- |
| `title` | `string` | `document.title` y `og:title`/`twitter:title` |
| `description` | `string` | `meta[description]` y `og:description`/`twitter:description` |
| `path` | `string` | Ruta usada para construir el `canonical` y `og:url` |
| `noIndex` | `boolean?` | Si es `true`, setea `meta[robots]` a `noindex, follow` (usado en `NotFound`) |

## Wrappers de página (convención)

No es un componente reutilizable, pero sí una convención activa del proyecto para aislar estilos:

- Home: `#page-home.page.page-home`
- Empresas: `#page-empresas.page.page-empresas`
- Clientes: `#page-clientes.page.page-clientes`
- Industrias: `#page-industrias.page.page-industrias`
- Contacto: `#page-contacto.page.page-contacto`
- NotFound: `#page-not-found.page.page-not-found`

Estos wrappers permiten personalizar `hero` o secciones por ruta sin afectar otras páginas. Ejemplo: `.page-clientes .hero { ... }`.
