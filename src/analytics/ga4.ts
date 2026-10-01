import { loadScript } from "@/analytics/loadScript";
import type { AnalyticsProvider } from "@/analytics/types";

// Google Analytics 4 vía gtag.js. Preparado: se activa al definir
// VITE_GA4_MEASUREMENT_ID. El page view automático se apaga porque la SPA
// envía uno por cada cambio de ruta.
export function createGa4(measurementId: string): AnalyticsProvider {
  return {
    name: "ga4",
    init() {
      window.dataLayer = window.dataLayer ?? [];
      if (!window.gtag) {
        window.gtag = function gtag() {
          // gtag.js exige el objeto `arguments`, no un array.
          // eslint-disable-next-line prefer-rest-params
          window.dataLayer?.push(arguments);
        };
      }
      window.gtag("js", new Date());
      window.gtag("config", measurementId, { send_page_view: false });
      loadScript("ga4", `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`);
    },
    pageView(path) {
      window.gtag?.("event", "page_view", {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
      });
    },
    track(event, props) {
      window.gtag?.("event", event, props);
    },
  };
}
