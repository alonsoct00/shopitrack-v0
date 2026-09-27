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

## Rango 801–960px

Entre 801 y 960px coinciden la regla global de tablet (`responsive.scss`, 801–1024px) y el mobile de las capas por página (`mobile-only`, ≤960px). Casos a vigilar:

- La regla global de tablet deja las etiquetas de los pasos en 10px; Home y Empresas las suben en su bloque para que sigan legibles en la fila de pasos.
- Las columnas vacías de `.split-grid` (reservadas en desktop) se ocultan con `:empty` en Empresas, porque al apilarse solo sumaban gap.

## Home

- Pasos en mobile: la flecha va después de la etiqueta, apuntando al siguiente paso. La regla global `.steps-list .step` termina en `align-items: stretch` y pegaba las etiquetas (max-width 260px) al borde izquierdo, por eso Home las recentra.

## Empresas

- `.benefits-grid`: 3 columnas en desktop, 2 entre 801 y 1024px, 1 en mobile (`$page-break-mobile`, 960px; entre 801 y 960px gana la regla de tablet).
- `.steps-list`: a partir de 801px crea una columna por paso (`grid-auto-flow: column`), así soporta más o menos de 5 pasos. En mobile sigue la regla global (lista vertical).
- Sección de costos: en mobile `.split-grid` pasa a una columna y el placeholder de imagen queda debajo de las cards.
- `.info-card--media`: en mobile (≤960px) la imagen pasa arriba del texto, con el desvanecido hacia abajo (lado a lado dejaba ~18 caracteres por línea en 320–430px). El cuerpo lleva `min-width: 0` y `overflow-wrap: anywhere`; sin eso palabras largas como "proveedor/almacenaje/merma" desbordan la card.
- Hero: sin el listón decorativo, el padding inferior global queda vacío; en mobile-only baja a `--space-lg`.
- Pasos en mobile: la flecha vuelve al flujo y va después de la etiqueta. El flujo Empresa → Operador → Cliente se mantiene en fila (3 etiquetas cortas) y deja margen inferior: el fondo de la sección se desvanece a blanco en el último ~5% y sin ese margen las etiquetas blancas pierden contraste.

## Clientes

- `.experience-steps-grid` (`InfoCard` con imagen): imagen a la izquierda en desktop; en mobile (≤960px) la imagen pasa arriba con el desvanecido hacia el texto.
- `.before-after-list` (Antes → Ahora): en desktop cada fila es chip "Antes" · flecha · card "Ahora" en una grilla `1fr 44px 1fr`, con la leyenda de columnas una sola vez arriba. En mobile cada par se apila (Antes, flecha rotada hacia abajo, Ahora) y los pares se separan con más aire que sus elementos internos.
- `.store-buttons` (App Store / Google Play): solo visibles en mobile (≤960px); en desktop `display: none` porque no hay app de escritorio. Aplica a "La aplicación" (`appStoreLinks`) y al CTA final (`ctaStoreLinks`); ambas listas comparten `appStoreUrl` y `googlePlayUrl` en `src/data/clientes.ts`. Con la URL vacía el botón se muestra deshabilitado.
- Hero: en mobile-only el padding inferior baja a `--space-lg` (como Empresas). El degradado azul se ensancha a 45–55% entre 801 y 960px (dos columnas) y pasa a vertical en ≤800px (una columna), para que la franja no parta el texto.
- FAQ (`.faq-item`): en mobile-only el padding pasa del `<details>` al `<summary>` para que toda la fila sea táctil, el "+" no baja de línea y la respuesta sube a 15px.
- El `<br>` del CTA final se oculta en mobile: en columnas angostas dejaba una palabra huérfana.

## Sectores

- "Otros sectores": `columns: 2 260px` — hasta 2 columnas balanceadas; pasa sola a 1 cuando no caben 260px por columna, sin breakpoint propio.

## CTA final (Home, Empresas, Sectores, Contacto)

- Botones con el mixin `contact-actions-row`: en fila en desktop, apilados a todo el ancho en mobile (≤960px).
