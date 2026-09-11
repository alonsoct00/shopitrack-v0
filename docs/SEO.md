# SEO

El proyecto está preparado para SEO con:

- **Title** y **meta description** en español
- **Canonical URL** (`https://shopitrack.com/`)
- **Meta robots** (`index, follow`)
- **Open Graph** completo: `og:type`, `og:locale`, `og:site_name`, `og:url`, `og:title`, `og:description`, `og:image`, `og:image:alt`
- **Twitter Cards** completo: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- **Datos estructurados JSON-LD** (Schema.org `Organization`)
- **Favicon SVG** personalizado
- **`robots.txt`** y **`sitemap.xml`** en `public/`
- **`<noscript>`** con contenido alternativo para buscadores sin JavaScript
- **`preconnect`** a `images.pexels.com` para cargar imágenes más rápido
- **HTML semántico**: `<header>`, `<main>`, `<section>`, `<footer>`, jerarquía H1-H3
- **Alt text** en todas las imágenes
- **`loading="lazy"`** en imágenes secundarias para mejorar LCP

## Rutas indexadas

Todas las rutas de `src/App.tsx` deben reflejarse en `public/sitemap.xml`: `/`, `/empresas`, `/clientes`, `/industrias`, `/contacto`.

## Qué no modificar sin justificación

Los meta tags SEO en `index.html` (title, description, canonical, Open Graph, Twitter Cards, JSON-LD) no deben modificarse sin autorización.
