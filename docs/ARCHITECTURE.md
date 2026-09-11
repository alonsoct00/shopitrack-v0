# Arquitectura

## Estructura

```
src/
├── components/     Componentes reutilizables
│   ├── Brand.tsx        Logo + nombre
│   ├── InfoCard.tsx     Tarjeta con icono
│   └── SectionHeading.tsx  Encabezado de sección
├── data/
│   └── home.ts          Contenido de la Home (textos, imágenes, listas)
├── App.tsx              Composición de la Home
├── index.css            Design system + estilos globales
└── main.tsx             Entry point
```

## Responsabilidades

- **components/**: Componentes presentacionales reutilizables. Sin lógica de negocio.
- **data/**: Contenido separado de la UI. Permite conectar CMS/API sin tocar componentes.
- **App.tsx**: Composición de secciones. Importa componentes y datos.
- **index.css**: Design system centralizado con variables CSS. Clases reutilizables.

## Convenciones

- Importar con `@/` (alias a `src/`).
- Iconos de lucide-react.
- Clases CSS reutilizables en `index.css` (no Tailwind utilities inline repetidas).
- Contenido en `data/`, no hardcodeado en componentes.

## Estrategia de páginas

Para agregar una nueva página:

1. Crear `src/pages/About.tsx` (o la que corresponda).
2. Reutilizar `Brand`, `SectionHeading`, `InfoCard`, `.container`, `.section`, `.btn`.
3. Importar contenido desde `src/data/`.
4. No duplicar estilos: usar variables existentes.
