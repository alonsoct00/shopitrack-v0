# Registro de cambios

Ajustes de diseño, responsive y assets hechos con asistencia de IA. Cada entrada indica qué cambió, dónde y por qué, para que cualquier persona o agente pueda retomar el trabajo sin reconstruir el contexto.

Validación en todas las entradas: `npm run typecheck`, `npm run lint` y `npm run build` sin errores, más revisión visual en mobile (360–430px), tablet (768–1024px) y desktop (1280–1440px).

---

## 2026-09-27

### Global

- **Header glass en desktop** (`src/styles/layout.scss`): el efecto glass del estado con scroll se muestra desde el estado inicial a partir de 801px, mediante `@mixin header-glass` compartido por `.site-header--scrolled` y `@media (min-width: $bp-tablet-min) .site-header`. Mobile no cambia. Se quitó el fondo sólido que Clientes tenía en el header.
- **Área táctil** de elementos pequeños, con un `::before` invisible y sin cambio visual:
  - Puntos de carruseles `.industries-showcase-dots` y `.image-slider-dots` (`src/styles/sections.scss`).
  - Iconos sociales del footer `.socials a` (`src/styles/layout.scss`).
- **Tarjetas de pasos compartidas**: `.experience-steps-grid` se movió del bloque de Clientes al nivel `.page` en `custom.scss`. La usan Clientes y Contacto: imagen 16:9 arriba sin recorte (`aspect-ratio: 1672 / 941`), eyebrow "PASO N" y texto. Son 3 columnas en desktop, 2 en tablet y 1 en 800px o menos.
- **Iconos propios** (`src/components/SectorIcons.tsx`): `LipstickIcon` y `TeddyBearIcon`, con el mismo estilo de trazo que lucide, que no incluye estos motivos. El oso es una silueta solo de contorno, recortada con una máscara SVG (`maskUnits="userSpaceOnUse"`, id con `useId`).

### Imágenes (optimización WebP)

- Todas las imágenes raster en uso se convirtieron a WebP con `cwebp -q 80 -m 6`, conservando dimensiones y proporción. La reducción típica fue del 90 al 96%: por ejemplo, `hero-sectores` bajó de 2341 KB a 155 KB y `costo-invisible` de 2010 KB a 160 KB.
- Referencias actualizadas en `src/data/*.ts`, fondos CSS de `custom.scss` y `docs/IMAGES.md`. Ya no queda ninguna referencia a `.png` o `.jpg` en `src/`, salvo las fotos externas de Pexels.
- Variantes `-800.webp` para los `srcSet` de los heroes de Clientes, Sectores y Contacto. El `srcSet` de Contacto repetía el mismo PNG y declaraba `1024w` para una imagen de 1672px; se corrigió a `800w` + `1672w`.
- Se eliminaron 33 originales PNG/JPG que ya tenían WebP y no tenían referencias. Todos estaban en git y se pueden recuperar con `git checkout <commit> -- public/images/<archivo>`.
- Se conservan:
  - Los favicons PNG, que `index.html` y `site.webmanifest` requieren.
  - Sin uso y sin convertir: `empresa-logistica.png`, `hero-empresa.png`, `shopitrack-no-erp.png`, `system-shopi.png`, `entrega-fallida-a.jpg`, `entrega-fallida-b.jpg`, `favicon.png` y `logo/shopitrack-color.png`.
- A partir de ahora no se borran archivos sin autorización explícita.

### Home

- `data/home.ts`: solo se cambiaron rutas de imágenes de PNG a WebP. Los copys no se tocaron.
- **Tablet 801–960px**:
  - "Dos historias" pasa a una historia por fila; antes el texto quedaba en una columna de unos 120px.
  - "Confianza" muestra el texto arriba y las dos fotos lado a lado debajo; antes las fotos quedaban como franjas.
  - Todo está dentro de `@include mobile-only` + `@media (min-width: $bp-tablet-min)`.

### Empresa

- **Cost-section**: cada `StatCard` tiene su propia imagen a la derecha (`.cost-row`, grid 1.15fr/0.85fr). `.cost-row-media` usa `contain: size` para que la imagen no dicte la altura de la fila. En mobile la imagen se muestra en 16:9 debajo.
- **Pasos**: `StepsList` se reutiliza con los 5 pasos de Home más un sexto, "Evaluación del servicio", con icono `Star` (`coordinationSteps` en `data/empresas.ts`). Las reglas de flechas para mobile se limitaron a 800px o menos, porque desalineaban los iconos entre 801 y 960px.
- **Hero en mobile**: sin foto de fondo y con la imagen visible debajo del texto. El `md:invisible` dejaba un hueco en blanco entre 769 y 960px.
- **Beneficios**:
  - La imagen de cada card usa proporción 16:9 en lugar de la altura fija de 180px, que recortaba el contenido; por ejemplo, "Tu marca cumple" no se veía.
  - Entre 801 y 960px la sección va a 2 columnas.
- **Imagen "gestionando el contexto de una entrega"**: se le aplicó una máscara de desvanecido ligera.
- **CTA final** (contact-section): el `photo-frame` es ahora un crossfade automático, sin JS, entre `evaluacion-100.webp`, `demo-shopitrack.webp` y `shopitrack-demo-solutions.webp`, que cambia cada 4s.
  - Los datos están en `ctaSlides` y el estilo en `.cta-fade` con los keyframes `cta-fade` de `custom.scss`.
  - La imagen que entra aparece encima (`z-index`) y la anterior desaparece solo cuando la nueva ya la cubre, así que el fondo azul nunca se transparenta.
  - Se pausa al pasar el cursor y queda fija la primera imagen con `prefers-reduced-motion`.
- **SCSS**: se unificaron los dos bloques `.hero` y se quitaron un `!important` de beneficios y un `.benefits-grid` duplicado.

### Clientes

- **Hero**: más contraste en desktop sin deslavar la foto, con un degradado mist y un `backdrop-filter: blur(6px)` enmascarado detrás del texto.
  - Contraste de la lista de dolores: de 3.4:1 a 7.9:1.
  - Contraste de los énfasis: de 3.2:1 a 8.5:1.
  - Se quitaron los `!important`. Mobile conserva su propia composición.
- **Así funciona** (`client-steps`): tarjetas verticales con la imagen completa, sin recorte (ver "Tarjetas de pasos compartidas").
- **Lo que cambia para ti** (`before-after`): cada situación tiene un icono propio con layout Antes → Ahora. "Antes" usa cards punteadas y "Ahora" cards elevadas; se apilan en 800px o menos. Los iconos (`beforeIcon`/`afterIcon` en `data/clientes.ts`) son Hourglass→CalendarCheck, CircleHelp→Clock3, CalendarX→Coffee, Dices→Handshake y Frown→Smile.
- **Slider de la aplicación**: usa las 4 imágenes `app-clientes-*.webp`. El viewport tiene proporción 16:9 con `height: auto`; con `height: 100%` heredado se generaba overflow en mobile.
- **CTA final**: `footer-clientes-shopitrack.webp`.

### Sectores

- **Cards de sectores**: cada sector tiene su imagen `sector-*.webp`, con el campo `image` en `SectorEntry` (`data/sectores.ts`), y una máscara de desvanecido lateral.
- **"El problema común" y CTA final**: máscara de desvanecido ligera. La imagen del CTA es `footer-sectores-img.webp`.
- **Otros sectores**:
  - Cada elemento lleva un icono en lugar de viñeta (`otherSectors: IconItem[]`).
  - Desktop: iconos de 68px y texto de 18px en 4 columnas.
  - Tablet: iconos de 56px y texto de 17px en 3 columnas.
  - Mobile: 2 columnas con el icono sobre el texto (44px y 15px).
  - Cosméticos usa `LipstickIcon` y Juguetes usa `TeddyBearIcon`.
- **Hero en mobile**: el título y el texto quedaban sobre la foto de fondo y se leían mal. Ahora usa el mismo patrón de mobile que Empresa (ver "Patrones reutilizables").

### Contacto

- **"¿Qué ocurrirá cuando nos contactes?"**: `contactSteps` pasó de tuplas a objetos `{ label, text, image }` con `contacto-paso-1..6.webp` y reutiliza las tarjetas de pasos de Clientes. Se eliminaron las reglas `.step-number` y `.contact-steps-grid`, que quedaron sin uso.
- **Hero en mobile**: mismo problema de legibilidad y misma corrección que Sectores.
- **"Queremos conocer tu operación"**: en 800px o menos, las 6 cards van en 2 columnas; en una sola columna ocupaban casi dos pantallas.
- **Formulario**: sin cambios. Se verificó que ningún campo desborda, que los inputs usan 16px (sin zoom en iOS) y que el checkbox tiene su `label` asociado.

### Auditoría responsive: resultado

- No hay overflow horizontal en ninguna página entre 360 y 1440px.
- No hay imágenes deformadas ni rutas de assets rotas.
- En desktop (1024, 1280 y 1440px), Clientes, Sectores, Contacto y las páginas legales dan capturas idénticas píxel por píxel a las del commit anterior. En Home y en Empresa a 1024px solo hubo diferencias por imágenes lazy que no habían terminado de cargar y por el decodificado de fotos externas; se revisaron lado a lado y no son regresiones.
- Recortes que se dejaron como están porque no ocultan información clave:
  - Las imágenes de las cards de Sectores se ven panorámicas entre 820 y 1024px.
  - El slider de Clientes se ve vertical entre 820 y 960px.
  - Las cards de beneficios de Empresa muestran la imagen como una franja a 1024px.

### Patrones reutilizables

- **Hero en mobile** (Empresa, Clientes, Sectores y Contacto): dentro de `@include mobile-only`, poner `.hero { background-image: none; &::before { display: none; } .photo-frame-img { visibility: visible; } }`. Sin esto, el texto queda sobre la foto de fondo, y la clase `md:invisible` oculta la imagen entre 768 y 960px.
- **Imágenes 16:9 sin recorte**: dar al marco `aspect-ratio: 1672 / 941` con `height: auto`. Si el elemento hereda `height: 100%`, el `aspect-ratio` fuerza un ancho mínimo y provoca overflow.
- **Grids donde la imagen no debe dictar la altura de la fila**: `contain: size` en el contenedor de la imagen.
- **Zona crítica 801–960px**: para ajustes solo de ese rango, usar `@include mobile-only { @media (min-width: $bp-tablet-min) { … } }`.

### Botones

- Los `.btn` usan `font-size: 1.125rem` (18px) en desktop, a partir de 961px (`$page-break-mobile + 1`, en `buttons.scss`). Mobile y tablet siguen en 16px. Todos los CTAs caben en una línea desde 1024px; a 961px, "Agenda una conversación con nuestro equipo" pasa a 2 líneas dentro de su alto de 60px, igual que ya ocurría con 16px.

### Limpieza de estilos

- Se revisaron todos los comentarios de `src/styles/*.scss` e `index.css`. Los 11 existentes explican intención y seguían siendo correctos, así que se conservaron.
- Los patrones de hero repetidos se extrajeron a mixins documentados en `mixins.scss`:
  - `hero-photo-legibility($image)`: tratamiento de legibilidad en desktop, antes copiado en Clientes, Sectores y Contacto.
  - `hero-mobile-photo`: composición de mobile, antes copiada en Empresa, Clientes, Sectores y Contacto.
- Se documentaron las dos decisiones no evidentes que faltaban: `contain: size` en `.cost-row-media` y `height: auto` en el viewport del slider de Clientes.
- Verificación: el CSS compilado es idéntico al anterior, salvo el orden de dos propiedades independientes dentro del mismo bloque.

### Tipografía: `font-size` en rem

- Se convirtieron a `rem` los 91 `font-size` que estaban en `px`, en 8 archivos: `custom.scss` (63), `sections.scss` (11), `responsive.scss` (7), `layout.scss` (4), `cards.scss` (3), `buttons.scss`, `hero.scss` y `typography.scss` (1 cada uno). La base es 1rem = 16px, porque el proyecto no redefine el tamaño raíz. Por ejemplo: 12px → 0.75rem, 14px → 0.875rem, 16px → 1rem, 18px → 1.125rem, 20px → 1.25rem y 24px → 1.5rem.
- Con el tamaño de fuente por defecto del navegador el resultado visual es idéntico. La diferencia es que ahora el texto escala si la persona aumenta el tamaño de fuente del navegador.
- Se conservaron los tamaños responsive existentes dentro de `mobile-only`, `tablet` y las demás media queries, sin variables nuevas, `clamp()` nuevos ni estilos inline.
- `line-height`: no había ninguno con unidades, todos eran unitless o `normal`. Se revisaron las proporciones reales en el navegador y solo se ajustó uno: el `h3` de "Otros sectores" en Sectores (`.changes h3`, 20px), de 1.6 a 1.35, porque en mobile ocupa varias líneas y quedaba suelto para un subtítulo.
- Verificación:
  - El CSS compilado cambia solo en líneas de `font-size`, más el `line-height` mencionado.
  - Los H1 de los heroes mantienen tamaño, line-height de 1.05 y número de líneas en los 13 anchos, de 360 a 1440px.
  - No hay overflow horizontal.

### Formulario de Contacto: UX, accesibilidad y validación

Archivos: `src/pages/Contacto.tsx`, `src/data/contacto.ts` y `src/styles/custom.scss` (bloque `.page-contacto`). Sin librerías nuevas. No cambiaron los campos, cuáles son obligatorios ni el envío.

- **Floating labels**, con CSS puro y label semántico:
  - El label ocupa el lugar del placeholder y sube al enfocar, al escribir, cuando el campo ya tiene valor o con autofill. Se detecta con `:placeholder-shown`, `:autofill` y `:-webkit-autofill`, así que funciona aunque el navegador rellene sin disparar eventos.
  - Los `<select>` muestran siempre su label arriba, porque siempre tienen un valor visible; así se ven consistentes con los inputs sin forzar el patrón. Tienen chevron propio (`appearance: none`) porque Safari ignora alto y padding en el select nativo.
  - El textarea ahora usa `FormField`, igual que el resto, con 132px de alto mínimo y `resize: vertical`.
- **Obligatorios**: nota "Los campos marcados con * son obligatorios." al inicio del formulario, y asterisco también en la casilla de privacidad. Los campos siguen llevando `required`, que los lectores de pantalla anuncian.
- **Validación** (`validate`):
  - El correo se valida recortando espacios, que llegan al pegar o con el autofill y antes producían un error falso.
  - Los mensajes del correo se separaron en tres: vacío, formato inválido y correo personal (los dominios de `blockedEmailDomains`).
  - El teléfono, que es opcional, se valida solo si se escribe algo: acepta dígitos, espacios, `+`, `-`, `.` y paréntesis, con 7 a 15 dígitos.
  - Sector, volumen y mensaje siguen siendo opcionales, que es la regla actual.
- **Mensajes**: los errores genéricos ("Este campo es obligatorio.") se reemplazaron por mensajes específicos en `formCopy`: `errorFirstName`, `errorLastName`, `errorCompany`, `errorEmailRequired`, `errorEmailFormat`, `errorEmail` y `errorPhone`. Se eliminó `errorRequired`, que quedó sin uso.
- **Accesibilidad**:
  - Los errores de campo ya no usan `role="alert"`; antes se anunciaban todos a la vez al enviar. Ahora el foco va al primer campo inválido, después del render para que se lea con su mensaje.
  - `aria-describedby` combina el hint y el error; antes el hint desaparecía al haber error.
  - Foco visible con `outline` de 2px en todos los controles.
  - La casilla de privacidad tiene un área táctil de 44px en todo el label.
  - Contraste: bordes de 3.5:1 y hints y labels de 8.6:1.
- **Estados**:
  - Envío: el botón se deshabilita con indicador de carga (sin animación si hay `prefers-reduced-motion`), el formulario marca `aria-busy` y se ignora un segundo envío.
  - Error de sistema: recuadro con icono y `role="alert"`, separado de los errores de campo.
  - Éxito: la página sube al inicio y el foco va al título de confirmación.
- **Enlace al Aviso de Privacidad**: en la casilla de consentimiento, "Aviso de Privacidad" enlaza a `/aviso-de-privacidad` y se abre en una pestaña nueva (`target="_blank"`, `rel="noopener noreferrer"`), así la persona no pierde lo que ya escribió. Lleva un icono `ExternalLink` y el texto `sr-only` "(se abre en una pestaña nueva)". El copy se dividió en `privacyLabelBefore`, `privacyLinkLabel` y `privacyLabelAfter` sin cambiar el texto visible. Al hacer clic en el enlace no se marca la casilla; al hacer clic en el resto del texto, sí.
- **Responsive**: 2 columnas desde 961px y 1 columna en 960px o menos (incluye la zona 801–960px). No hay overflow entre 360 y 1440px. Desde 1280px el botón pasa de `display: block` a `flex` para que el indicador de carga quede junto al texto.
- **Verificado**:
  - Orden de Tab lógico: campos, casilla, botón.
  - La casilla se activa con la barra espaciadora y el envío con Enter.
  - Los labels suben cuando el valor se asigna sin eventos.
  - Los mensajes de error correctos aparecen en cada caso.

### Pendiente

- `AGENTS.md` sigue listando la ruta `/industrias`; la ruta real es `/sectores`.
