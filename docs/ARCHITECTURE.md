# Arquitectura

## Estructura

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx        Header + navegación (react-router-dom)
│   │   ├── Footer.tsx        Footer del sitio
│   │   └── MainLayout.tsx    Layout compartido (Header + Outlet + Footer)
│   ├── Brand.tsx              Logo + nombre
│   ├── ComingSoonSection.tsx  Placeholder para páginas sin mockup
│   ├── InfoCard.tsx           Tarjeta con icono
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
│   └── navigation.ts          Rutas del menú (siteNav)
├── App.tsx                    Rutas (BrowserRouter + Routes)
├── index.css                  Design system + estilos globales
└── main.tsx                   Entry point
```

## Responsabilidades

- **components/**: Componentes presentacionales reutilizables. Sin lógica de negocio.
- **components/layout/**: Header, Footer y MainLayout compartidos entre todas las páginas.
- **pages/**: Una página por ruta. Componen secciones a partir de componentes y datos.
- **data/**: Contenido separado de la UI. Permite conectar CMS/API sin tocar componentes.
- **App.tsx**: Define las rutas con `react-router-dom` y las envuelve en `MainLayout`.
- **index.css**: Design system centralizado con variables CSS. Clases reutilizables.

## Convenciones

- Importar con `@/` (alias a `src/`).
- Iconos de lucide-react, importados explícitamente.
- Clases CSS reutilizables en `index.css` (no Tailwind utilities inline repetidas).
- Contenido en `data/`, no hardcodeado en componentes.
- Navegación con `Link`/`NavLink` de `react-router-dom`, no `<a href="#...">` para ir entre páginas.
- TypeScript estricto: tipos explícitos en todos los parámetros.
- Sin comentarios innecesarios: solo cuando el "por qué" no es obvio.
- Sin emojis en código ni commits.
- Sin estados globales: pasar dependencias como argumentos, no usar singletons o globals.

### Convenciones de nombres

| Elemento | Convención | Ejemplo |
|----------|-----------|---------|
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
4. No duplicar estilos: usar variables existentes.
5. Registrar la ruta en `src/App.tsx` y, si aplica, en `siteNav` (`src/data/navigation.ts`).
6. Si el mockup de Figma aún no existe, usar `ComingSoonSection` como contenido temporal.
