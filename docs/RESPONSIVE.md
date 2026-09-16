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
