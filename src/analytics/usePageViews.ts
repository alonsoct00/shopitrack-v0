import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/analytics";

// Registra un page view por cada cambio de ruta de React Router.
// Los cambios de hash (#seccion) no cuentan como página nueva.
export function usePageViews() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    trackPageView(pathname + search);
  }, [pathname, search]);
}
