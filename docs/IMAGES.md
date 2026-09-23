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
| Hero | `/images/shopi-atencion-cliente.jpeg` | Repartidor entregando a clienta (reutilizada de Home) |
| La última impresión | `/images/entrega-feliz.webp` | Cliente recibiendo su pedido (reutilizada de Home) |
| CTA final | `/images/shopi-atencion-cliente.jpeg` | Misma foto del hero, reutilizada para cerrar el ciclo |

**ASSET FALTANTE — sección "Casos de uso":** las 4 tarjetas (`Entregas que requieren presencia`, `Productos difíciles de reprogramar`, `Entregas de alto valor`, `Operaciones con alto volumen`) no tienen foto asignada; se dejó un placeholder visible ("ASSET FALTANTE") en `.usecase-card-media`. No hay ninguna imagen existente en `public/images` que represente estos 4 conceptos con fidelidad y no hay herramienta de búsqueda de imágenes disponible en esta sesión. Se requieren 4 fotos específicas (persona recibiendo en puerta, mueble/electrodoméstico grande, producto premium en caja, almacén con alto volumen de paquetes) — reemplazar `useCases` en `src/data/empresas.ts` con las URLs una vez elegidas.

## Cómo agregar nuevas imágenes

Usar la herramienta `pexels_search` (MCP) con una query descriptiva del subject. Referenciar la URL directamente en `<img>`, sin descargarla. No adivinar URLs. Documentar cada imagen nueva en esta tabla.
