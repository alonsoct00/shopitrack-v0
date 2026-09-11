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
