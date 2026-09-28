# Imágenes

Todas las imágenes son fotografías de Pexels (licencia libre) seleccionadas para reproducir el concepto visual de la referencia.

| Ubicación | URL | Alt | Finalidad |
| ----------- | ----- | ----- | ----------- |
| Hero | `pexels-photo-7363128` | Repartidora revisando su teléfono | Hero principal |
| Split 1 | `pexels-photo-6699423` | Repartidor con caja | Sección "Cómo funciona" |
| Story card | `pexels-photo-6869055` | Cliente esperando entrega | Tarjeta "Cliente" |
| Cost section | `pexels-photo-7706523` | Operadora revisando entregas | Sección "Costo invisible" |
| New way | `pexels-photo-8989470` | Cliente y repartidor coordinando | Sección "Nueva forma" |
| Trust | `pexels-photo-6869055` | Cliente recibiendo paquete | Sección "Confianza" |
| Industries collage | `8989470`, `6699423`, `6869055` | Entregas | Collage de industrias |
| Promise bg | `pexels-photo-417074` | Fondo de ciudad | Fondo de sección "Promesa" |

## Prompts para regenerar con IA

- Hero: "Mujer repartidora con camisa azul revisando su smartphone mientras espera una entrega, interior de vehículo, luz natural, composición horizontal"
- Courier: "Repartidor caminando con caja de cartón junto a un vehículo en calle urbana, uniforme azul, composición horizontal"
- Customer: "Cliente esperando una entrega en casa, mirando su teléfono, composición horizontal"
- Operator: "Operadora revisando información de entregas en pantalla, ambiente de oficina, composición horizontal"
- Delivery: "Cliente y repartidor coordinando la entrega de un paquete en la puerta, composición horizontal"

## Página Empresa

Imágenes propias en `public/images`, convertidas de PNG/JPG a WebP (`cwebp -q 80 -m 6`, dimensiones originales). Rutas en `src/data/empresas.ts` y `src/styles/custom.scss`.

| Ubicación | Archivo | Alt / uso |
| ----------- | ------- | ----------- |
| Hero | `/images/hero-empresa-reverse.webp` (+ `-800.webp` para `srcSet`) | Cliente sonriendo mientras abre un paquete en casa. Fondo CSS en desktop, `<img>` en mobile |
| Costo monetario | `/images/entrega-fallida-operadores.webp` | Dos operadores de reparto esperando dentro de su unidad |
| Costo invisible | `/images/entrega-fallida-cliente.webp` | Clienta preocupada revisando su celular mientras espera su pedido |
| La última impresión | `/images/ultima-impresion.webp` | Fondo CSS decorativo |
| Integración natural | `/images/shopitrack-demo-false.webp` | Persona usando Shopitrack en su laptop junto a sus sistemas ERP, WMS y TMS |
| Integración natural | `/images/comunicacion-shopi-pasos.webp` | Empresa, operador y cliente conectados durante la coordinación de una entrega |
| CTA final (crossfade automático cada 4s, `ctaSlides`) | `/images/evaluacion-100.webp`, `demo-shopitrack.webp`, `shopitrack-demo-solutions.webp` | CSS puro; con `prefers-reduced-motion` queda fija la primera |

### Beneficios (`orgBenefits`)

| Card | Archivo |
| ---- | ------- |
| Dirección | `/images/empresa-direccion.webp` |
| Logística | `/images/empresa-logistics.webp` |
| Transporte | `/images/empresa-transporte.webp` |
| eCommerce | `/images/empresa-ecommerce.webp` |
| Servicio al Cliente | `/images/empresa-atencion-cliente.webp` |
| Marketing | `/images/empresa-marketing.webp` |

Los `alt` viven junto a cada imagen en `src/data/empresas.ts`. En desktop la card las recorta al 40% del ancho con `object-fit: cover`; en mobile ocupan el ancho completo con 180px de alto.

### Placeholders de assets faltantes

`public/images/placeholder-asset.svg` es un SVG propio (fondo `--surface`, borde punteado `--line`, texto "ASSET FALTANTE" en `--text-muted`) para usar en cualquier `<img>` pendiente.

**ASSET FALTANTE — sección "Casos de uso":** las 4 tarjetas (`Entregas que requieren presencia`, `Productos difíciles de reprogramar`, `Entregas de alto valor`, `Operaciones con alto volumen`) no tienen foto asignada; se dejó un placeholder visible ("ASSET FALTANTE") en `.usecase-card-media`. No hay ninguna imagen existente en `public/images` que represente estos 4 conceptos con fidelidad y no hay herramienta de búsqueda de imágenes disponible en esta sesión. Se requieren 4 fotos específicas (persona recibiendo en puerta, mueble/electrodoméstico grande, producto premium en caja, almacén con alto volumen de paquetes) — reemplazar `useCases` en `src/data/empresas.ts` con las URLs una vez elegidas.

## Página Sectores

Rutas en `src/data/sectores.ts` (`sectoresImages` y `image` de cada sector). WebP generados con `cwebp -q 80 -m 6`.

| Ubicación | Archivo |
| ----------- | ------- |
| Hero | `/images/hero-sectores.webp` (+ `hero-sectores-800.webp` en `srcSet`) |
| El problema común | `/images/sectores-bottom-hero-img.webp` |
| CTA final | `/images/entrega-feliz.webp` |
| 03 Departamentales y Autoservicio | `/images/sector-departamentales-autoservicio.webp` |
| 04 Muebles y decoración | `/images/sector-muebles-y-decoracion.webp` |
| 05 Electrodomésticos y línea blanca | `/images/sector-electrodomesticos-linea-blanca.webp` |
| 06 Hogar | `/images/sector-de-servicios-hogar.webp` |
| 07 Servicios de tecnología | `/images/sector-de-atencion-telefonia-internet.webp` |
| 08 Salud y bienestar | `/images/sector-de-salud-bienestar.webp` |

Las imágenes de sector son 16:9 con el sujeto al centro: en desktop se recortan a la columna izquierda de la card, en tablet a 21:9 y en mobile se ven en 16:9.

## Página Cliente

Imágenes propias en `public/images`; rutas en `src/data/clientes.ts` (`clientesImages`, `clientSteps`, `appScreens`). Los WebP se generaron con `cwebp -q 80 -m 6`.

| Ubicación | Archivo | Notas |
| ----------- | ------- | ----------- |
| Hero | `/images/hero-clientes.webp` (+ `hero-clientes-800.webp` en `srcSet`) | Fondo CSS en desktop, `<img>` en mobile |
| Así funciona (6 pasos) | `/images/clientes-paso-1..6.webp` | 16:9; el marco de la card usa la misma proporción para no recortar |
| La aplicación (slider) | `/images/app-clientes-notificacion.webp`, `-status-pedido.webp`, `-reminder-pedido.webp`, `-status-cambio.webp` | 16:9; el viewport del slider usa la misma proporción |
| CTA final | `/images/footer-clientes-shopitrack.webp` | Antes/después de la misma clienta |

## Página Contacto

Rutas en `src/data/contacto.ts` (`contactoImages`, `contactSteps`). WebP con `cwebp -q 80 -m 6`.

| Ubicación | Archivo | Notas |
| ----------- | ------- | ----------- |
| Hero | `/images/hero-contacto.webp` (+ `hero-contacto-800.webp` en `srcSet`) | Fondo CSS en desktop, `<img>` en mobile |
| Qué ocurrirá (6 pasos) | `/images/contacto-paso-1..6.webp` | 16:9; comparte la card de pasos de Clientes |

**Aviso de Privacidad:** la ruta `/aviso-de-privacidad` ya existe (enlazada desde el Footer). El checkbox de Contacto enlaza a esa página en una pestaña nueva; la mención en el FAQ de Clientes sigue como texto sin enlace. La sección 09 completa se omitió por decisión explícita (el PDF la marca con una X roja, indicando descarte del revisor); la mención en el FAQ se dejó como texto plano sin enlace, sin inventar la ruta.

## Imagen genérica de respaldo

`public/images/image-fallback.svg`: fondo `--surface-alt` con un ícono de imagen en `--text-muted`, sin texto. La usa `ImageWithFallback` cuando una imagen no existe o falla. Es distinta de `placeholder-asset.svg` ("ASSET FALTANTE"), que marca a propósito assets pendientes de diseño.

## Cómo agregar nuevas imágenes

Usar la herramienta `pexels_search` (MCP) con una query descriptiva del subject. Referenciar la URL directamente en `<img>`, sin descargarla. No adivinar URLs. Documentar cada imagen nueva en esta tabla.
