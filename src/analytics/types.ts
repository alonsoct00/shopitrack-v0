export type EventProps = Record<string, string | number | boolean | undefined>;

// Contrato de cada servicio de analytics. Las páginas nunca importan un provider:
// usan las funciones de `@/analytics`, que reparten la llamada a los activos.
export interface AnalyticsProvider {
  name: string;
  init: () => void;
  pageView: (path: string) => void;
  track?: (event: string, props?: EventProps) => void;
}

type LinkedInTrack = ((action: string, data?: Record<string, unknown>) => void) & {
  q?: unknown[];
};

declare global {
  interface Window {
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    _wait_for_lintrk?: boolean;
    lintrk?: LinkedInTrack;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
