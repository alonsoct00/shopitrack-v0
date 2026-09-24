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

Reutiliza imágenes ya existentes en `public/images` (sin descargar nuevas):

| Ubicación | Archivo | Finalidad |
| ----------- | ------- | ----------- |
| Hero | `/images/shopi-atencion-cliente.webp` | Repartidor entregando a clienta (reutilizada de Home) |
| La última impresión | `/images/entrega-feliz.webp` | Cliente recibiendo su pedido (reutilizada de Home) |
| CTA final | `/images/shopi-atencion-cliente.webp` | Misma foto del hero, reutilizada para cerrar el ciclo |

### Beneficios (`orgBenefits`)

Imágenes demo reutilizadas de `public/images` (se repiten en otras secciones; reemplazar por definitivas en `src/data/empresas.ts`):

| Card | Archivo | Alt |
| ---- | ------- | --- |
| Dirección | `/images/pc-shopi.webp` | Panel de Shopitrack en laptop y celular |
| Logística | `/images/logistics-issues.webp` | Paquetes en un centro de distribución |
| Transporte | `/images/carretera-lastmile.webp` | Camiones de reparto circulando por una autopista |
| eCommerce | `/images/entrega-feliz.webp` | Repartidor entregando un paquete a una clienta sonriente |
| Servicio al Cliente | `/images/shopi-atencion-cliente-800.webp` | Agente de Shopitrack atendiendo clientes con diadema |
| Marketing | `/images/atencion-confianza.webp` | Agente sonriendo durante una llamada con un cliente |

Se recomiendan imágenes horizontales: la card las recorta al 40% del ancho con `object-fit: cover`.

### Placeholders de assets faltantes

| Ubicación | Placeholder | Reemplazar en |
| --------- | ----------- | ------------- |
| "El verdadero costo de una entrega fallida" (derecha) | `div.usecase-card-media.cost-media` | `src/pages/Empresas.tsx` |
| Pasos "Una nueva manera de coordinar" (6) | `/images/placeholder-asset.svg` | `coordinationSteps` en `src/data/empresas.ts` (`image.src` / `image.alt`); idealmente imágenes cuadradas, se recortan en círculo |

`public/images/placeholder-asset.svg` es un SVG propio (fondo `--surface`, borde punteado `--line`, texto "ASSET FALTANTE" en `--text-muted`) para usar en cualquier `<img>` pendiente.

**ASSET FALTANTE — sección "Casos de uso":** las 4 tarjetas (`Entregas que requieren presencia`, `Productos difíciles de reprogramar`, `Entregas de alto valor`, `Operaciones con alto volumen`) no tienen foto asignada; se dejó un placeholder visible ("ASSET FALTANTE") en `.usecase-card-media`. No hay ninguna imagen existente en `public/images` que represente estos 4 conceptos con fidelidad y no hay herramienta de búsqueda de imágenes disponible en esta sesión. Se requieren 4 fotos específicas (persona recibiendo en puerta, mueble/electrodoméstico grande, producto premium en caja, almacén con alto volumen de paquetes) — reemplazar `useCases` en `src/data/empresas.ts` con las URLs una vez elegidas.

## Página Sectores

Reutiliza imágenes ya existentes en `public/images`:

| Ubicación | Archivo | Finalidad |
| ----------- | ------- | ----------- |
| Hero | `/images/hero-img.webp` | Repartidor entregando (genérico, reutilizada de Home) |
| El problema común | `/images/logistics-issues.webp` | Empresa gestionando una entrega (reutilizada de Home) |
| CTA final | `/images/entrega-feliz.webp` | Cliente recibiendo su pedido (reutilizada de Home) |

**ASSET FALTANTE — 6 secciones de sector:** Retail, Muebles y decoración, Electrodomésticos y línea blanca, Hogar (construcción/mudanzas), Tecnología, Salud y bienestar no tienen foto específica; el proyecto no cuenta con fotos de mueble/electrodoméstico/obra/salud, y no hay herramienta de búsqueda de imágenes disponible en esta sesión. Se dejó un placeholder visible ("ASSET FALTANTE") en cada `.photo-frame` de sector, consistente con la decisión ya tomada para la página Empresa. Reemplazar en `src/data/sectores.ts` no aplica (las imágenes son placeholders fijos en `Sectores.tsx`, no datos) — sustituir directamente el `<div className="usecase-card-media">` por un `<img>` una vez elegidas las 7 fotos (una por sector, en el orden: Retail, Muebles, Electrodomésticos, Hogar, Tecnología, Salud).

## Página Cliente

Reutiliza imagen ya existente en `public/images`:

| Ubicación | Archivo | Finalidad |
| ----------- | ------- | ----------- |
| Hero | `/images/cliente-preocupado.webp` | Persona esperando una entrega en casa (reutilizada de Home) |

**ASSET FALTANTE — 3 secciones:** "Lo que implica esperar" (persona utilizando su tiempo mientras espera), "La aplicación" (pantallas reales de la app) y el CTA final "Descarga la aplicación" (mockup real de la app) no tienen foto/mockup específico; el proyecto no cuenta con capturas de la app (aún no existe) ni con una foto de "persona productiva esperando en casa" distinta a la ya usada en el hero. Se dejaron placeholders visibles ("ASSET FALTANTE") en cada `.photo-frame`, mismo patrón usado en Empresa y Sectores.

**RUTA FALTANTE:** el PDF define un CTA "Consultar Aviso de Privacidad" (sección 09) y una mención en el FAQ de "Aviso de Privacidad" — no existe ruta `/aviso-de-privacidad` en el proyecto. La sección 09 completa se omitió por decisión explícita (el PDF la marca con una X roja, indicando descarte del revisor); la mención en el FAQ se dejó como texto plano sin enlace, sin inventar la ruta.

## Cómo agregar nuevas imágenes

Usar la herramienta `pexels_search` (MCP) con una query descriptiva del subject. Referenciar la URL directamente en `<img>`, sin descargarla. No adivinar URLs. Documentar cada imagen nueva en esta tabla.
