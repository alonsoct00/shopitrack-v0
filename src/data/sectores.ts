import {
  Armchair,
  Baby,
  BedDouble,
  BookOpen,
  CarFront,
  Cpu,
  Dumbbell,
  Flower2,
  Gem,
  HeartPulse,
  Laptop,
  NotebookPen,
  PawPrint,
  Shirt,
  Sofa,
  Sprout,
  Store,
  WashingMachine,
  Wine,
  Wrench,
} from "lucide-react";
import {
  LipstickIcon,
  TeddyBearIcon,
} from "@/components/SectorIcons";
import type { Icon, IconItem, ImageSource } from "@/data/types";

export const sectoresImages = {
  hero: "/images/hero-sectores.webp",
  heroSrcSet:
    "/images/hero-sectores-800.webp 800w, /images/hero-sectores.webp 1672w",
  commonProblem: "/images/sectores-bottom-hero-img.webp",
  cta: "/images/footer-sectores-img.webp",
};

export interface SectorEntry {
  number: string;
  name: string;
  icon: Icon;
  image: ImageSource;
  challenge: string[];
  today: string[];
  change: string[];
}

export const sectors: SectorEntry[] = [
  {
    number: "03",
    name: "Departamentales y Autoservicio",
    image: {
      src: "/images/sector-departamentales-autoservicio.webp",
      alt: "Carrito de supermercado lleno en una tienda departamental con ropa y electrónica",
    },
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
      "Cada entrega se convierte en una oportunidad de generar confianza.",
    ],
  },
  {
    number: "04",
    name: "Muebles y decoración",
    image: {
      src: "/images/sector-muebles-y-decoracion.webp",
      alt: "Sala recién amueblada con cajas de entrega junto al sofá",
    },
    icon: Sofa,
    challenge: [
      "Los productos ocupan espacio",
      "Requieren tiempo para descargarse.",
      "Muchas veces necesitan acceso al domicilio.",
      "Mover un sofá o un comedor no es comparable con entregar una caja pequeña.",
    ],
    today: [
      "El cliente no siempre está preparado.",
      "El vehículo regresa.",
      "La instalación se pospone",
      "Toda la agenda cambia.",
    ],
    change: [
      "La fecha se confirma.",
      "El cliente se organiza.",
      "La entrega ocurre con mucha mayor probabilidad de éxito.",
      "La instalación comienza cuando estaba prevista.",
    ],
  },
  {
    number: "05",
    name: "Electrodomésticos y línea blanca",
    image: {
      src: "/images/sector-electrodomesticos-linea-blanca.webp",
      alt: "Cocina y sala con refrigerador, estufa, lavadora y pantalla recién instalados",
    },
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
    image: {
      src: "/images/sector-de-servicios-hogar.webp",
      alt: "Herramientas, escalera y cajas de mudanza en una casa en reparación",
    },
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
    image: {
      src: "/images/sector-de-atencion-telefonia-internet.webp",
      alt: "Router, cableado y teléfono listos para una instalación de internet en casa",
    },
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
    image: {
      src: "/images/sector-de-salud-bienestar.webp",
      alt: "Botiquín, estetoscopio y medicamentos con una ambulancia al fondo",
    },
    icon: HeartPulse,
    challenge: [
      "Medicamentos, equipos médicos, suplementos especializados y artículos para recuperación.",
      "Su valor no depende únicamente del precio, depende del momento en que llegan.",
      "La comunicación adquiere todavía mayor importancia.",
    ],
    today: [
      "La persona no sabe cuándo llegará un medicamento que necesita.",
      "Un intento fallido retrasa un tratamiento o una recuperación.",
      "La incertidumbre se convierte en llamadas y preocupación.",
    ],
    change: [
      "La persona permanece informada y reduce su incertidumbre.",
      "La empresa demuestra cercanía y empatía.",
      "Fortalece la confianza en uno de los momentos más sensibles de la experiencia.",
    ],
  },
];

export const otherSectors: IconItem[] = [
  { text: "Artículos deportivos", icon: Dumbbell },
  { text: "Artículos para bebé", icon: Baby },
  { text: "Colchones y blancos", icon: BedDouble },
  { text: "Cosméticos", icon: LipstickIcon },
  { text: "Equipos de electrónica de alto valor", icon: Laptop },
  { text: "Flores y regalos", icon: Flower2 },
  { text: "Jardinería y exteriores", icon: Sprout },
  { text: "Joyería y relojería", icon: Gem },
  { text: "Juguetes", icon: TeddyBearIcon },
  { text: "Libros y entretenimiento", icon: BookOpen },
  { text: "Mascotas", icon: PawPrint },
  { text: "Moda", icon: Shirt },
  { text: "Muebles y artículos para oficina", icon: Armchair },
  { text: "Papelería", icon: NotebookPen },
  { text: "Refacciones automotrices", icon: CarFront },
  { text: "Vinos y licores", icon: Wine },
];
