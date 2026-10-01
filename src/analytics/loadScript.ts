// Inserta un script externo asíncrono una sola vez: el `id` evita duplicados
// aunque init() se llame de nuevo (HMR, StrictMode, navegación).
export function loadScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}
