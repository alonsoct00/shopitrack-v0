/// <reference types="vite/client" />

// IDs públicos de analytics (ver docs/ANALYTICS.md). Vacíos = servicio inactivo.
interface ImportMetaEnv {
  readonly VITE_LINKEDIN_PARTNER_ID?: string;
  readonly VITE_GTM_ID?: string;
  readonly VITE_GA4_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
