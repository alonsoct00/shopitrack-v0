import { Bell, CalendarDays, Check, Clock3, PackageCheck } from "lucide-react";
import type { StepItem } from "@/data/types";

export const images = {
  courier: "/images/repartidor.webp",
  company: "/images/logistics-issues.webp",
  customer: "/images/entrega-feliz.webp",
  customerAngry: "/images/cliente-preocupado.webp",
  operator: "/images/atencion-confianza.webp",
  delivery: "/images/shopi-atencion-cliente.webp",
  deviceMockup: "/images/pc-shopi.webp",
  calendarCard: "/images/calendario-shopi.webp",
};

export const steps: StepItem[] = [
  { text: "La empresa propone una fecha.", icon: CalendarDays },
  { text: "El cliente confirma o solicita otra.", icon: Check },
  {
    text: "Shopitrack recuerda y confirma la entrega el día acordado.",
    icon: Bell,
  },
  {
    text: "El cliente recibe una notificación dos horas antes con la llegada estimada.",
    icon: Clock3,
  },
  {
    text: "La entrega se realiza, el cliente confirma la recepción y evalúa su experiencia.",
    icon: PackageCheck,
  },
];

export const industries = [
  "Retail",
  "Electrodomésticos",
  "Muebles",
  "Mejoramiento del hogar",
  "Farmacias",
  "Tecnología",
  "Departamentales",
  "Marketplace",
  "Materiales para construcción",
  "Artículos deportivos",
];
