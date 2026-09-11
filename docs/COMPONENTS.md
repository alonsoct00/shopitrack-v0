# Componentes

## Brand

Logo de Shopitrack con icono de lucide-react.

```tsx
<Brand light={false} />
```

| Prop | Tipo | Descripción |
|------|------|-------------|
| `light` | `boolean` | Versión para fondos oscuros |

## SectionHeading

Encabezado de sección con eyebrow opcional.

```tsx
<SectionHeading eyebrow="El costo invisible" title="..." centered />
```

| Prop | Tipo | Descripción |
|------|------|-------------|
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
|------|------|-------------|
| `icon` | `ReactNode` | Icono lucide-react |
| `title` | `string` | Texto destacado en azul |
| `label` | `string` | Subtítulo/h3 |
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
|------|------|-------------|
| `eyebrow` | `string` | Etiqueta pequeña arriba del título |
| `title` | `string` | Título centrado (h2) |
| `description` | `string` | Texto explicativo, con CTA a `/contacto` |
