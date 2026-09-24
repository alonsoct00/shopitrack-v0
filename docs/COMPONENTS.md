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

Tarjeta con icono circular (o imagen), título, label, descripción y lista opcional. `title`, `label` e `items` pasan por `RichText`.

```tsx
<InfoCard icon={<Building2 />} title="Empresa" label="Programó. Preparó. Asignó.">
  Pero encontró una puerta cerrada.
</InfoCard>

<InfoCard
  title="Logística"
  label="Reduce fricciones operativas."
  image={{ src: "/images/logistics-issues.webp", alt: "Paquetes en un centro de distribución" }}
  items={["Reduce costo logístico.", "Menos devoluciones."]}
/>
```

Variante con imagen (`.info-card--media`): la imagen ocupa el 40% del ancho y todo el alto de la card, con desvanecido (`mask-image`) y blur (`::before` con `backdrop-filter`) hacia el texto. El contenido va en `.info-card-body`.

| Prop | Tipo | Descripción |
| ---- | ---- | ----------- |
| `icon` | `ReactNode?` | Icono lucide-react (se ignora si hay `image`) |
| `image` | `{ src: string; alt: string }` | Variante `.info-card--media`: `<img>` con `object-fit: cover` en lugar del icono, ocupa todo el alto de la card |
| `title` | `string` | Texto destacado en azul |
| `label` | `string` | Subtítulo/h3 |
| `items` | `string[]` | Lista opcional con checks azules (`.industry-list`) |
| `children` | `ReactNode` | Descripción |

## StatCard (local de Empresas)

Definido en `src/pages/Empresas.tsx`. Card con lista, usada en costos, "El problema nunca fue la logística" y ROI.

```tsx
<StatCard title="Costo operativo" items={costCards[0].items} bullet="cross" />
<StatCard icon={<Clock3 />} title="Menos fallas" items={["Menos reintentos."]} />
```

| Prop | Tipo | Descripción |
| ---- | ---- | ----------- |
| `icon` | `ReactNode?` | Icono único a la izquierda (cuando los items no traen ícono) |
| `title` | `string?` | h2; se omite si no se pasa |
| `items` | `(string \| IconItem)[]` | Si algún item trae `icon`, se activa `.stat-card--icons`: columna vertical de íconos a la izquierda y lista a la derecha, repartidos en todo el alto |
| `bullet` | `"check" \| "cross"` | `check` (default): palomita azul. `cross`: tache blanco sobre `--color-coral` (`.industry-list--cross`) |

## StepsList

Lista de pasos numerados con flechas (`.steps-list`), usada en Home y Empresas (`src/components/StepsList.tsx`). El número se calcula por índice.

Cada paso (`StepItem` en `src/data/types.ts`) lleva `icon` **o** `image`, nunca ambos:

```ts
{ text: "Entrega exitosa", icon: PackageCheck }
{ text: "Entrega exitosa", image: { src: "/images/entrega.webp", alt: "Repartidor entregando" } }
```

Con `image` se renderiza un `<img>` circular (`.step-media`, `object-fit: cover`) en lugar del ícono. Mientras no exista la imagen final, usar `/images/placeholder-asset.svg` (ver `coordinationSteps` en `src/data/empresas.ts`).

Variante `variant="flow"` (`.steps-list--flow`): sin numeración y con el texto en `<h4>`. Se usa en Empresas para "Constante comunicación" (`communicationActors`: Empresa → Operador → Cliente), limitada a 720px de ancho.

```tsx
<StepsList steps={communicationActors} variant="flow" />
```

El texto de cada paso pasa por `RichText`. `data-reveal-delay` se limita a `4`, el máximo definido en `animations.scss`.

## RichText

Convierte un grupo cerrado de etiquetas dentro de strings del data en elementos React (`src/components/RichText.tsx`). Cualquier otro HTML se muestra como texto; no usa `dangerouslySetInnerHTML`.

```ts
items: ["Menos llamadas a call center; <q>¿Dónde está mi pedido?</q>"]
```

| Etiqueta | Resultado |
| -------- | --------- |
| `<q>` | Cita (en `.industry-list` se muestra en itálica) |
| `<em>`, `<i>` | Itálica |
| `<strong>`, `<b>` | Negrita |

Se aplica en: listas de `InfoCard`, `StatCard`, Sectores y Clientes; texto de `StepsList`; `title`/`label` de `InfoCard` y título de `StatCard`. No soporta etiquetas anidadas ni atributos.

## BellIcon

Ícono de campana con estilo `.bell-icon` (`src/components/BellIcon.tsx`). Se usa como `icon` en el data (por ejemplo `steps` de Home).

## PageError

Fallback de página del `ErrorBoundary` raíz y de página (`src/components/PageError.tsx`). Muestra mensaje y botón "Volver al inicio" (recarga completa con `<a href="/">` para limpiar el estado).

## ErrorBoundary

Aísla errores de render para que un fallo no tumbe el sitio completo (`src/components/ErrorBoundary.tsx`).

- Raíz (`main.tsx`) y página (`MainLayout`, con `key={pathname}`) muestran `PageError` como fallback.
- Header, Footer y cada `<section>` de las páginas van envueltos; si fallan, solo esa parte no se muestra (`fallback` por defecto: nada) y el error se registra en consola.

```tsx
<ErrorBoundary name="Empresas: benefits-section">
  <section className="benefits-section section">...</section>
</ErrorBoundary>
```

Limitación: solo atrapa errores de componentes hijos. El código que corre directamente en el cuerpo de la página (por ejemplo `data[index].map(...)`) falla a nivel página; evita accesos por índice a otros arreglos.

## Íconos en el data

Cada elemento de una lista lleva su propio ícono en `src/data/*.ts` (tipos `Icon` e `IconItem` en `src/data/types.ts`). No usar arreglos de íconos paralelos por índice: al agregar un elemento sin `icon`, `npm run typecheck` falla en lugar de romper el render.

```ts
export const logisticItems: IconItem[] = [
  { text: "Más vehículos.", icon: Truck },
];

export const orgBenefits: { title: string; icon: Icon; ... }[] = [
  { title: "Dirección", icon: Building2, ... },
];
```

Listas con ícono en el data: `steps` (home), `costCards`, `logisticItems`, `coordinationSteps`, `orgBenefits`, `integrationItems`, `roiCards` (empresas), `sectors` (sectores), `operationContextItems` (contacto).

La numeración de pasos ("01", "02"...) se calcula a partir del índice, no se escribe en el data.

## Header / Footer / MainLayout

Componentes de layout compartidos por todas las páginas (`src/components/layout/`). `MainLayout` envuelve las rutas en `App.tsx` con `Header`, `<Outlet />` y `Footer`. No se repiten en cada página.

```tsx
<Route element={<MainLayout />}>
  <Route index element={<Home />} />
</Route>
```

`Header` usa `siteNav` (`src/data/navigation.ts`) para generar el menú con `NavLink`.

`MainLayout` además:

- Envuelve `Header`, `Footer` y el `Outlet` en `ErrorBoundary` (el de página con `key={pathname}` y fallback `PageError`).
- Hace scroll al inicio en cada cambio de ruta (`useLayoutEffect` + `window.scrollTo({ behavior: 'instant' })`, para saltarse el `scroll-behavior: smooth` del `html`). Si la URL trae `#hash`, no fuerza el top.

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
