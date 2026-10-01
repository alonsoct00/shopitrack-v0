import { loadScript } from "@/analytics/loadScript";
import type { AnalyticsProvider } from "@/analytics/types";

// LinkedIn Insight Tag. El script solo registra la primera carga; en una SPA
// `_wait_for_lintrk` desactiva ese page view automático y cada ruta (incluida
// la inicial) se registra con lintrk("track").
export function createLinkedIn(partnerId: string): AnalyticsProvider {
  return {
    name: "linkedin",
    init() {
      window._linkedin_partner_id = partnerId;
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids ?? [];
      if (!window._linkedin_data_partner_ids.includes(partnerId)) {
        window._linkedin_data_partner_ids.push(partnerId);
      }
      window._wait_for_lintrk = true;

      // Cola: las llamadas previas a la carga del script se procesan al llegar.
      if (!window.lintrk) {
        const queue: unknown[] = [];
        const lintrk = (action: string, data?: Record<string, unknown>) => {
          queue.push([action, data]);
        };
        window.lintrk = Object.assign(lintrk, { q: queue });
      }

      loadScript("linkedin-insight", "https://snap.licdn.com/li.lms-analytics/insight.min.js");
    },
    pageView() {
      window.lintrk?.("track");
    },
  };
}
