import { analyticsConfig } from "@/analytics/config";
import { createGa4 } from "@/analytics/ga4";
import { createGtm } from "@/analytics/gtm";
import { createLinkedIn } from "@/analytics/linkedin";
import type { AnalyticsProvider, EventProps } from "@/analytics/types";

export type { EventProps } from "@/analytics/types";

// Para agregar un servicio (Meta Pixel, TikTok…): crea su provider en esta
// carpeta, su ID en config.ts y añádelo aquí con la misma condición.
const providers: AnalyticsProvider[] = [
  analyticsConfig.linkedin.partnerId && createLinkedIn(analyticsConfig.linkedin.partnerId),
  analyticsConfig.gtm.containerId && createGtm(analyticsConfig.gtm.containerId),
  analyticsConfig.ga4.measurementId && createGa4(analyticsConfig.ga4.measurementId),
].filter((provider): provider is AnalyticsProvider => Boolean(provider));

let initialized = false;
let lastPath: string | undefined;

// Se llama una vez en main.tsx, fuera de React, así StrictMode no lo duplica.
// Si más adelante se agrega un aviso de consentimiento, se llama al aceptar.
export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  providers.forEach((provider) => provider.init());
}

// Una vez por navegación: ignora repeticiones de la misma ruta (StrictMode, re-renders).
export function trackPageView(path: string) {
  if (!initialized || path === lastPath) return;
  lastPath = path;
  providers.forEach((provider) => provider.pageView(path));
}

export function trackEvent(event: string, props?: EventProps) {
  if (!initialized) return;
  providers.forEach((provider) => provider.track?.(event, props));
}
