// Único lugar donde se decide qué analytics están activos.
// Un servicio se activa solo si su ID está definido en las variables de entorno
// (Vercel → Settings → Environment Variables). Sin ID, el servicio no carga nada.
// Son IDs públicos: nunca pongas secretos en variables VITE_*, terminan en el bundle.
const env = import.meta.env;

export const analyticsConfig = {
  linkedin: { partnerId: env.VITE_LINKEDIN_PARTNER_ID?.trim() || "" },
  gtm: { containerId: env.VITE_GTM_ID?.trim() || "" },
  ga4: { measurementId: env.VITE_GA4_MEASUREMENT_ID?.trim() || "" },
};
