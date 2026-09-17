# Shopitrack

Shopitrack es una plataforma que coordina a empresas de entrega y a sus clientes para que cada entrega a domicilio se realice en el momento acordado, reduciendo entregas fallidas y fortaleciendo la confianza en la última milla.

## Stack

- React + TypeScript
- React Router (`react-router-dom`)
- Tailwind CSS v4 + DaisyUI v5 (tema `shopitrack`)
- SCSS para overrides personalizados (`src/styles/custom.scss`)
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

## Deploy en Vercel

El proyecto ya está preparado para Vercel (SPA con React Router + fallback a `index.html`).

Archivos clave:

- `vercel.json` con:
  - `framework: vite`
  - `buildCommand: npm run build`
  - `outputDirectory: dist`
  - `rewrites` para rutas sin extensión (soporte `/empresas`, `/clientes`, etc.)

### Opción 1: Conectar repositorio (recomendada)

1. Entra a Vercel y selecciona **Add New Project**.
2. Importa este repositorio.
3. Verifica configuración:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Haz clic en **Deploy**.

Con esto, cada `git push` genera un **Preview Deployment** con URL única para compartir avances con el cliente.

### Opción 2: Deploy por CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

Para revisión continua con cliente, conviene usar preview URLs por rama y dejar `--prod` solo para hitos aprobados.

## Páginas

| Ruta | Estado |
| ------ | -------- |
| `/` (Home) | Completa |
| `/empresas` | Placeholder — pendiente de mockup Figma |
| `/clientes` | Placeholder — pendiente de mockup Figma |
| `/industrias` | Placeholder — pendiente de mockup Figma |
| `/contacto` | Placeholder — pendiente de mockup Figma |

## Estructura

```text
src/
├── components/    Componentes reutilizables (incluye components/layout/ con Header, Footer, MainLayout)
├── pages/         Una página por ruta
├── data/          Contenido separado de la UI
├── styles/        Design system en partials CSS (tokens, base, layout, hero, cards, sections, responsive...) + custom.scss (overrides por página)
├── App.tsx        Rutas (react-router-dom)
├── index.css      Entry point: Tailwind CSS v4 + tema DaisyUI + @import de styles/*.css
└── main.tsx       Entry point
docs/              Documentación técnica detallada
```

## Estilos personalizados por página

Cada página renderiza un wrapper propio para evitar colisiones de estilos:

- Home: `#page-home.page.page-home`
- Empresas: `#page-empresas.page.page-empresas`
- Clientes: `#page-clientes.page.page-clientes`
- Industrias: `#page-industrias.page.page-industrias`
- Contacto: `#page-contacto.page.page-contacto`
- NotFound: `#page-not-found.page.page-not-found`

Usa `src/styles/custom.scss` para personalizaciones y scopea reglas así:

```scss
.page-home .hero {
  /* solo afecta al hero del Home */
}
```

## Documentación

Este README cubre lo básico. La documentación técnica detallada (design system, componentes, responsive, imágenes, SEO, arquitectura) está en [docs/](./docs/README.md).

Antes de modificar el proyecto, cualquier agente de IA debe leer [AGENTS.md](./AGENTS.md).
