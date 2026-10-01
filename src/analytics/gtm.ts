import { loadScript } from "@/analytics/loadScript";
import type { AnalyticsProvider } from "@/analytics/types";

// Google Tag Manager. Preparado: se activa al definir VITE_GTM_ID.
// Las rutas se envían como evento "page_view" al dataLayer; en GTM se configura
// un trigger "Custom Event" con ese nombre.
export function createGtm(containerId: string): AnalyticsProvider {
  const push = (data: Record<string, unknown>) => {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(data);
  };

  return {
    name: "gtm",
    init() {
      push({ "gtm.start": Date.now(), event: "gtm.js" });
      loadScript("gtm", `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(containerId)}`);
    },
    pageView(path) {
      push({ event: "page_view", page_path: path, page_location: window.location.href });
    },
    track(event, props) {
      push({ event, ...props });
    },
  };
}
