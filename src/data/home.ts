import { Bell, CalendarDays, Check, Clock3, PackageCheck } from "lucide-react";
import type { StepItem } from "@/data/types";

export const images = {
  courier: "/images/home-fallas.png",
  company: "/images/dos-historias-empresa.png",
  customer: "/images/entrega-feliz.webp",
  customerAngry: "/images/dos-historias-cliente.png",
  operator: "/images/costo-invisible.jpg",
  delivery: "/images/nueva-forma-ultima-milla.png",
  deviceMockup: "/images/pc-shopi.webp",
  calendarCard: "/images/calendario-shopi.webp",
  trust1: "/images/confianza1.png",
  trust2: "/images/confianza2.png",
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
