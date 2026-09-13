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
│   ├── InfoCard.tsx           Tarjeta con icono
│   ├── Seo.tsx                Meta tags SEO por ruta (SPA)
│   └── SectionHeading.tsx     Encabezado de sección
├── pages/
│   ├── Home.tsx               Página de inicio
│   ├── Empresas.tsx           Placeholder — pendiente de mockup
│   ├── Clientes.tsx           Placeholder — pendiente de mockup
│   ├── Industrias.tsx         Placeholder — pendiente de mockup
│   ├── Contacto.tsx           Placeholder — pendiente de mockup
│   └── NotFound.tsx           Página 404
├── data/
│   ├── home.ts                Contenido de la Home
│   ├── navigation.ts          Rutas del menú (siteNav)
│   └── seo.ts                 Titles/descriptions por ruta
├── styles/
│   └── custom.scss            Overrides personalizados por página
├── App.tsx                    Rutas (BrowserRouter + Routes)
├── index.css                  Design system + estilos globales
└── main.tsx                   Entry point
```

## Responsabilidades

- **components/**: Componentes presentacionales reutilizables. Sin lógica de negocio.
- **components/layout/**: Header, Footer y MainLayout compartidos entre todas las páginas.
- **pages/**: Una página por ruta. Componen secciones a partir de componentes y datos.
- **data/**: Contenido separado de la UI. Permite conectar CMS/API sin tocar componentes.
- **styles/**: Capa final de overrides custom (SCSS), cargada después de `index.css`.
- **App.tsx**: Define las rutas con `react-router-dom` y las envuelve en `MainLayout`.
- **index.css**: Design system centralizado con variables CSS. Clases reutilizables.

## Convenciones

- Importar con `@/` (alias a `src/`).
- Iconos de lucide-react, importados explícitamente.
- Clases CSS reutilizables en `index.css` (no Tailwind utilities inline repetidas).
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
