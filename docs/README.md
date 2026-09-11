# Shopitrack

Shopitrack es una plataforma que coordina a empresas de entrega y a sus clientes para que cada entrega a domicilio se realice en el momento acordado, reduciendo entregas fallidas y fortalezca la confianza en la última milla.

## Objetivo del proyecto

Recrear la Home de Shopitrack con fidelidad visual respecto a la imagen de referencia, conservando el contenido original, con una arquitectura preparada para crecer con futuras páginas.

## Stack

- React + TypeScript
- Tailwind CSS + DaisyUI (tema `shopitrack`)
- Vite
- lucide-react para iconografía

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

## Estructura principal

```
src/
├── components/    Componentes reutilizables (Brand, InfoCard, SectionHeading)
├── data/          Contenido separado de la UI (home.ts)
├── App.tsx        Composición de la Home
├── index.css       Design system + estilos globales
└── main.tsx       Entry point
docs/              Documentación del proyecto
```

## Cómo agregar una nueva página

1. Crea un componente en `src/pages/` que reutilice `Brand`, `SectionHeading`, `InfoCard` y el sistema de variables.
2. Añade la ruta en tu router (cuando se integre).
3. Reutiliza el `Container` (`.container`), los botones (`.btn`) y las secciones (`.section`, `.wave-section`).
4. No dupliques estilos: usa las variables CSS y las clases del design system.
