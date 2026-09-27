import {
  Building2,
  CircleUserRound,
  Clock3,
  Frown,
  Fuel,
  Headphones,
  Layers,
  Megaphone,
  MessageSquareWarning,
  Package,
  PackageX,
  PhoneCall,
  Puzzle,
  Route,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Smile,
  ThumbsDown,
  TrendingUp,
  Truck,
  UsersRound,
  UserX,
  Warehouse,
} from "lucide-react";
import type { Icon, IconItem, StepItem } from "@/data/types";

export const empresasImages = {
  hero: "/images/shopi-atencion-cliente.webp",
  heroSrcSet:
    "/images/shopi-atencion-cliente-800.webp 800w, /images/shopi-atencion-cliente.webp 1024w",
  lastImpression: "/images/entrega-feliz.webp",
  cta: "/images/shopi-atencion-cliente.webp",
};

export const costCards: { title: string; items: IconItem[] }[] = [
  {
    title: "Una entrega fallida tiene costos monetarios.",
    items: [
      { text: "Combustible.", icon: Fuel },
      { text: "Kilómetros estériles.", icon: Route },
      { text: "Tiempo del operador.", icon: Clock3 },
      { text: "Reingreso a almacén.", icon: Warehouse },
      { text: "Maltrato.", icon: PackageX },
      { text: "Llamadas (Call Center).", icon: PhoneCall },
    ],
  },
  {
    title: "Pero también tiene costos invisibles.",
    items: [
      { text: "Frustración.", icon: Frown },
      { text: "Desconfianza.", icon: ShieldAlert },
      { text: "Reseñas negativas.", icon: ThumbsDown },
      { text: "Clientes que no recompran.", icon: UserX },
      {
        text: "Clientes con comentarios negativos.",
        icon: MessageSquareWarning,
      },
    ],
  },
];

export const logisticItems: IconItem[] = [
  { text: "Más vehículos.", icon: Truck },
  { text: "Más operadores.", icon: UsersRound },
  { text: "Mejores software de ruteo y volumetría.", icon: Route },
  { text: "Más centros de distribución.", icon: Warehouse },
];

const stepPlaceholder = "/images/placeholder-asset.svg";

export const coordinationSteps: StepItem[] = [
  {
    text: "Propuesta inicial de la fecha de entrega",
    image: {
      src: stepPlaceholder,
      alt: "Imagen pendiente: Propuesta inicial de la fecha de entrega",
    },
  },
  {
    text: "Se logra un acuerdo",
    image: {
      src: stepPlaceholder,
      alt: "Imagen pendiente: Se logra un acuerdo",
    },
  },
  {
    text: "Confirmación del día 0",
    image: {
      src: stepPlaceholder,
      alt: "Imagen pendiente: Confirmación del día 0",
    },
  },
  {
    text: "Avisa proximidad y ETA",
    image: {
      src: stepPlaceholder,
      alt: "Imagen pendiente: Avisa proximidad y ETA",
    },
  },
  {
    text: "Entrega exitosa",
    image: { src: stepPlaceholder, alt: "Imagen pendiente: Entrega exitosa" },
  },
  {
    text: "Evaluación del servicio",
    image: {
      src: stepPlaceholder,
      alt: "Imagen pendiente: Evaluación del servicio",
    },
  },
];

export const communicationActors: IconItem[] = [
  { text: "Empresa", icon: Building2 },
  { text: "Operador", icon: CircleUserRound },
  { text: "Cliente", icon: UsersRound },
];

export const orgBenefits: {
  title: string;
  icon: Icon;
  label: string;
  description: string;
  image?: { src: string; alt: string };
  items?: string[];
}[] = [
  {
    title: "Dirección",
    icon: Building2,
    image: {
      src: "/images/pc-shopi.webp",
      alt: "Panel de Shopitrack en laptop y celular",
    },
    label: "Blinda la marca",
    description: "",
    items: [
      "Crea reputación de servicio y empatía.",
      "Incrementa la fidelización y la recompra.",
    ],
  },
  {
    title: "Logística",
    icon: Package,
    label: "Reduce fricciones operativas.",
    image: {
      src: "/images/logistics-issues.webp",
      alt: "Paquetes en un centro de distribución",
    },
    description: "",
    items: [
      "Reduce costo logístico.",
      "Anula operaciones de logística inversa.",
      "Menos devoluciones a proveedor/almacenaje/merma",
      "Incrementa la capacidad operativa de los recursos",
      "Menor área de 'Staging'.",
    ],
  },
  {
    title: "Transporte",
    icon: Truck,
    image: {
      src: "/images/carretera-lastmile.webp",
      alt: "Camiones de reparto circulando por una autopista",
    },
    label: "Rutas más eficientes.",
    description: "",
    items: [
      "Disminución de costo por entrega",
      "Menos km improductivos (2o y 3er intento).",
      "Hacer más con lo mismo",
      "Más entregas en mismo tiempo, con mismos recursos",
    ],
  },
  {
    title: "eCommerce",
    icon: ShoppingCart,
    image: {
      src: "/images/entrega-feliz.webp",
      alt: "Repartidor entregando un paquete a una clienta sonriente",
    },
    label: "Una mejor experiencia end-to-end.",
    description: "",
    items: [
      "Mayor satisfacción del cliente final.",
      "Mejor evaluación en plataformas.",
      "Más probabilidad de recompra.",
    ],
  },
  {
    title: "Servicio al Cliente",
    icon: Headphones,
    image: {
      src: "/images/shopi-atencion-cliente-800.webp",
      alt: "Agente de Shopitrack atendiendo clientes con diadema",
    },
    label: "Menos contacto reactivo.",
    description: "",
    items: [
      "Menos llamadas a call center; <q>¿Dónde está mi pedido?</q>",
      "Menos reclamaciones.",
      "Menos cancelaciones de compra.",
    ],
  },
  {
    title: "Marketing",
    icon: Megaphone,
    image: {
      src: "/images/atencion-confianza.webp",
      alt: "Agente sonriendo durante una llamada con un cliente",
    },
    label: "Una promesa de marca que se cumple.",
    description: "",
    items: [
      "Una experiencia que fortalece la promesa de marca.",
      "Más clientes dispuestos a recomendar.",
      "Mejor percepción en la experiencia de compra.",
    ],
  },
];

export const integrationItems: {
  title: string;
  icon: Icon;
  label: string;
  description: string;
}[] = [
  {
    title: "No sustituye ",
    icon: Layers,
    label:
      "el sistema del Operador logístico. Tus sistemas siguen siendo los mismos.",
    description: "",
  },
  {
    title: "Se integra",
    icon: Puzzle,
    label:
      "a la operación existente sin obligar a la empresa a cambiar lo que ya funciona eficientemente.",
    description: "",
  },
];

export const useCases = [
  {
    title: "Entregas que requieren presencia",
    description:
      "Cuando alguien debe estar en casa o en la oficina para recibir el pedido.",
  },
  {
    title: "Productos difíciles de reprogramar",
    description: "Mercancía perecedera, artículos especiales o de instalación.",
  },
  {
    title: "Entregas de alto valor",
    description: "Donde el cliente espera una experiencia premium.",
  },
  {
    title: "Operaciones con alto volumen",
    description: "Donde cada entrega fallida impacta más.",
  },
];

export const roiCards: { title: string; icon: Icon; items: string[] }[] = [
  {
    title: "Menos fallas",
    icon: Clock3,
    items: ["Menos reintentos.", "Menos costo."],
  },
  {
    title: "Clientes más satisfechos",
    icon: Smile,
    items: ["Más lealtad.", "Más recompra."],
  },
  {
    title: "Más eficiencia",
    icon: TrendingUp,
    items: ["Más visibilidad.", "Mejores decisiones."],
  },
  {
    title: "Una marca más confiable",
    icon: ShieldCheck,
    items: ["Operación más sólida.", "Más rentable."],
  },
];

export const trustItems = [
  "Protegemos tus datos y los de tus clientes con los más altos estándares de seguridad.",
  "Cumplimos con buenas prácticas de privacidad y normativas aplicables.",
  "Monitoreo y respaldo continuo.",
];
