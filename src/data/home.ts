import { Bell, CalendarDays, Check, Clock3, PackageCheck } from "lucide-react";
import type { StepItem } from "@/data/types";

export const images = {
  courier: "/images/home-fallas.webp",
  company: "/images/dos-historias-empresa.webp",
  customer: "/images/entrega-feliz.webp",
  customerAngry: "/images/dos-historias-cliente.webp",
  operator: "/images/costo-invisible.webp",
  delivery: "/images/nueva-forma-ultima-milla.webp",
  deviceMockup: "/images/pc-shopi.webp",
  calendarCard: "/images/calendario-shopi.webp",
  trust1: "/images/confianza1.webp",
  trust2: "/images/confianza2.webp",
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

export const industryGroups: {
  title: string;
  items: string[];
  className: string;
}[] = [
  {
    title: "Productos tangibles",
    items: [
      "Departamentales y Autoservicio",
      "Muebles y decoración",
      "Electrodomésticos y Línea Blanca",
      "Salud y cuidado personal",
      "Mayoreo",
    ],
    className: "tangible-products",
  },
  {
    title: "Servicios",
    items: [
      "Instalación y reparación de tecnología (Internet, telefonía)",
      "Reparación de equipos",
      "Seguro de autos (Atención en el lugar del siniestro)",
      "Transporte escolar y ejecutivo",
      "Mudanzas",
    ],
    className: "services",
  },
];
