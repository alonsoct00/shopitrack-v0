import { Cpu, HeartPulse, Sofa, Store, WashingMachine, Wrench } from "lucide-react";
import type { Icon } from "@/data/types";

export const sectoresImages = {
  hero: "/images/hero-img.webp",
  heroSrcSet: "/images/hero-img-800.webp 800w, /images/hero-img.webp 1400w",
  commonProblem: "/images/logistics-issues.webp",
  cta: "/images/entrega-feliz.webp",
};

export interface SectorEntry {
  number: string;
  name: string;
  icon: Icon;
  challenge: string[];
  today: string[];
  change: string[];
}

export const sectors: SectorEntry[] = [
  {
    number: "03",
    name: "Departamentales y Autoservicio",
    icon: Store,
    challenge: [
      "Miles de entregas diarias.",
      "Clientes con horarios distintos.",
      "Altos volúmenes.",
      "Expectativas cada vez mayores.",
    ],
    today: [
      "El cliente recibe poca información.",
      "El operador realiza intentos innecesarios.",
      "La empresa absorbe costos adicionales.",
    ],
    change: [
      "Las entregas dejan de depender de suposiciones.",
      "Los clientes conocen el proceso.",
      "La empresa fortalece la experiencia de compra.",
    ],
  },
  {
    number: "04",
    name: "Muebles y decoración",
    icon: Sofa,
    challenge: [
      "Los productos ocupan espacio y requieren tiempo para descargarse.",
      "Muchas veces necesitan acceso al domicilio.",
      "Mover un sofá o un comedor no es comparable con entregar una caja pequeña.",
    ],
    today: [
      "El cliente no siempre está preparado.",
      "El vehículo regresa.",
      "La instalación se pospone y toda la agenda cambia.",
    ],
    change: [
      "La fecha se confirma y el cliente se organiza.",
      "La entrega ocurre con mucha mayor probabilidad de éxito.",
      "La instalación comienza cuando estaba prevista.",
    ],
  },
  {
    number: "05",
    name: "Electrodomésticos y línea blanca",
    icon: WashingMachine,
    challenge: [
      "Una lavadora, un refrigerador, una secadora, un centro de lavado.",
      "No pueden dejarse en la recepción de un edificio.",
      "Necesitan coordinación.",
    ],
    today: [
      "El operador llega y no hay quien reciba.",
      "Se pierde una ventana completa de entrega.",
      "La empresa programa una segunda visita.",
    ],
    change: [
      "El cliente sabe cuándo prepararse.",
      "La empresa evita reprogramaciones innecesarias.",
      "El operador aprovecha mejor cada recorrido.",
    ],
  },
  {
    number: "06",
    name: "Hogar (reparaciones, construcción, mudanzas)",
    icon: Wrench,
    challenge: [
      "Materiales y equipos pesados, voluminosos y costosos de transportar.",
      "Vivienda con horario restringido.",
      "Con frecuencia destinados a obras donde el tiempo es crítico.",
    ],
    today: [
      "El material llega cuando la cuadrilla no está lista.",
      "O la cuadrilla espera un material que aún no llega.",
      "Cada retraso afecta toda la obra.",
    ],
    change: [
      "La coordinación mejora y la obra mantiene su ritmo.",
      "Los recursos permanecen sincronizados.",
      "El tiempo deja de desperdiciarse.",
    ],
  },
  {
    number: "07",
    name: "Servicios de tecnología (Internet, telefonía)",
    icon: Cpu,
    challenge: [
      "Productos de alto valor.",
      "Clientes con expectativas elevadas.",
      "Necesidad de seguridad.",
    ],
    today: [
      "Cada intento fallido incrementa el riesgo.",
      "La ansiedad del cliente aumenta.",
      "Las consultas al centro de atención se multiplican.",
    ],
    change: [
      "El cliente conoce el proceso.",
      "La empresa transmite mayor seguridad.",
      "La entrega ocurre con mayor previsibilidad.",
    ],
  },
  {
    number: "08",
    name: "Salud y bienestar",
    icon: HeartPulse,
    challenge: [
      "Medicamentos, equipos médicos, suplementos especializados y artículos para recuperación.",
      "Su valor no depende únicamente del precio, depende del momento en que llegan.",
      "La comunicación adquiere todavía mayor importancia.",
    ],
    today: [],
    change: [
      "La persona permanece informada y reduce su incertidumbre.",
      "La empresa demuestra cercanía.",
      "Fortalece la confianza en uno de los momentos más sensibles de la experiencia.",
    ],
  },
];

export const otherSectors = [
  "Equipos de electrónica de alto valor",
  "Artículos deportivos",
  "Mascotas",
  "Juguetes",
  "Moda",
  "Papelería",
  "Cosméticos",
  "Muebles y artículos para oficina",
];
