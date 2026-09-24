# Responsive

## Breakpoints

| Nombre | Rango | Comportamiento |
| -------- | ------- | --------------- |
| Mobile | ≤ 800px | Una columna, menú hamburguesa, steps verticales |
| Tablet | 801–1024px | Dos columnas, espaciado reducido |
| Desktop | 1025–1280px | Layout completo de la referencia |
| Large | > 1280px | Container centrado a 1180px |

## Reglas

- En Mobile, todos los grids (`hero-grid`, `split-grid`, `cost-grid`, etc.) colapsan a una columna.
- La navegación se convierte en menú desplegable (hamburguesa).
- Los pasos (`.steps-list`) pasan de 5 columnas a lista vertical con icono a la izquierda.
- Las tarjetas comparativas (`.story-grid`, `.change-grid`) se apilan.
- El collage de industrias mantiene 3 columnas pero reduce alturas.
- Las tarjetas flotantes (tracking, dashboard, calendar) se repositionan para no salir del viewport.
- No hay overflow horizontal: `.site-shell` tiene `overflow: hidden`.

## Empresas

- `.benefits-grid`: 3 columnas en desktop, 2 entre 801 y 1024px, 1 en mobile (`$page-break-mobile`, 960px; entre 801 y 960px gana la regla de tablet).
- `.steps-list`: a partir de 801px crea una columna por paso (`grid-auto-flow: column`), así soporta más o menos de 5 pasos. En mobile sigue la regla global (lista vertical).
- Sección de costos: en mobile `.split-grid` pasa a una columna y el placeholder de imagen queda debajo de las cards.
- `.info-card--media` mantiene la imagen al lado del texto también en mobile.
