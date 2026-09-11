# Shopitrack

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-uojjfatb)

Shopitrack es una plataforma que coordina a empresas de entrega y a sus clientes para que cada entrega a domicilio se realice en el momento acordado, reduciendo entregas fallidas y fortaleciendo la confianza en la última milla.

## Stack

- React + TypeScript
- React Router (`react-router-dom`)
- Tailwind CSS + DaisyUI (tema `shopitrack`)
- Vite
- lucide-react para iconografía

## Instalación y ejecución

```bash
npm install
npm run dev
```

Otros comandos:

```bash
npm run build       # build de producción
npm run typecheck   # verificación de tipos
npm run lint        # eslint
npm run preview     # preview del build
```

## Páginas

| Ruta | Estado |
|------|--------|
| `/` (Home) | Completa |
| `/empresas` | Placeholder — pendiente de mockup Figma |
| `/clientes` | Placeholder — pendiente de mockup Figma |
| `/industrias` | Placeholder — pendiente de mockup Figma |
| `/contacto` | Placeholder — pendiente de mockup Figma |

## Estructura

```
src/
├── components/    Componentes reutilizables (incluye components/layout/ con Header, Footer, MainLayout)
├── pages/         Una página por ruta
├── data/          Contenido separado de la UI
├── App.tsx        Rutas (react-router-dom)
├── index.css      Design system + estilos globales
└── main.tsx       Entry point
docs/              Documentación técnica detallada
```

## Documentación

Este README cubre lo básico. La documentación técnica detallada (design system, componentes, responsive, imágenes, SEO, arquitectura) está en [docs/](./docs/README.md).

Antes de modificar el proyecto, cualquier agente de IA debe leer [AGENTS.md](./AGENTS.md).

