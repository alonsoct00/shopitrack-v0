import { AppleStoreIcon, GooglePlayIcon } from "@/components/StoreIcons";
import {
  CalendarCheck,
  CalendarX,
  CircleHelp,
  Clock3,
  Coffee,
  Dices,
  Frown,
  Handshake,
  Hourglass,
  Smile,
} from "lucide-react";
import type { Icon, IconItem, ImageSource } from "@/data/types";

export const clientesImages = {
  hero: "/images/hero-clientes.jpg",
  heroSrcSet:
    "/images/hero-clientes-800.webp 800w, /images/hero-clientes.jpg 1672w",
  waiting: "/images/cliente-implica-esperar.png",
  cta: "/images/footer-clientes-shopitrack.webp",
};

export const heroQuotes = [
  "Hoy no puedo salir porque espero un paquete.",
  "Espero que no llegue mientras estoy en la oficina, el gym, el banco o recogiendo a los niños.",
  "¿Y si tocaron cuando salí sólo por 10 minutos?",
  "¿Si no encuentran a nadie, vendrán más tarde o mañana?",
  "¿Tengo que estar llamando a rastrear mi orden?",
  "¿Siempre tengo que esperar de 8:00am a 7:00 pm?",
];

export const waitingCostItems = [
  "Horas esperando.",
  "Cancelar reuniones, citas, compromisos.",
  "Salidas pospuestas.",
  "Salir corriendo del trabajo.",
  "Quitarle tiempo a la familia.",
];

//const stepPlaceholder = "/images/placeholder-asset.svg";

export const clientSteps: {
  label: string;
  text: string;
  image: ImageSource;
}[] = [
  {
    label: "Paso 1",
    text: "La tienda propone una fecha.",
    image: {
      src: "/images/clientes-paso-1.png",
      alt: "la tienda propone una fecha",
    },
  },
  {
    label: "Paso 2",
    text: "Tú la aceptas o pides otra.",
    image: {
      src: "/images/clientes-paso-2.png",
      alt: "aceptas la fecha o pides otra",
    },
  },
  {
    label: "Paso 3",
    text: "El día acordado, recibes un recordatorio de “Hoy es el día”.",
    image: {
      src: "/images/clientes-paso-3.png",
      alt: "recordatorio del día de entrega",
    },
  },
  {
    label: "Paso 4",
    text: "Te avisan 2 horas antes la hora aproximada de llegada para asegurarte de estar en el domicilio de entrega.",
    image: {
      src: "/images/clientes-paso-4.png",
      alt: "aviso de la hora aproximada de llegada",
    },
  },
  {
    label: "Paso 5",
    text: "Recibes tu compra.",
    image: {
      src: "/images/clientes-paso-5.png",
      alt: "recibes tu compra",
    },
  },
  {
    label: "Paso 6",
    text: "Calificas la experiencia. Ganas y acumulas puntos canjeables.",
    image: {
      src: "/images/clientes-paso-6.png",
      alt: "calificas la experiencia",
    },
  },
];

export const stepsFootnote =
  "*3, 4, 5, Nadie puede asegurar que no habrá imprevistos, pero avisarte si sucede es respetar tu tiempo.";

export const beforeAfterItems: {
  before: string;
  after: string;
  beforeIcon: Icon;
  afterIcon: Icon;
}[] = [
  {
    before: "Esperabas.",
    after: "Te organizas.",
    beforeIcon: Hourglass,
    afterIcon: CalendarCheck,
  },
  {
    before: "No sabías cuándo llegaría.",
    after: "Conoces una hora aproximada.",
    beforeIcon: CircleHelp,
    afterIcon: Clock3,
  },
  {
    before: "Cancelabas actividades.",
    after: "Decides cómo aprovechar tu tiempo.",
    beforeIcon: CalendarX,
    afterIcon: Coffee,
  },
  {
    before: "Todo dependía de la suerte.",
    after: "La entrega ocurre con mayor coordinación.",
    beforeIcon: Dices,
    afterIcon: Handshake,
  },
  {
    before: "Terminabas frustrado.",
    after: "La compra termina con tranquilidad.",
    beforeIcon: Frown,
    afterIcon: Smile,
  },
];

export const appFeatureItems = [
  "La app te notifica.",
  "La app te acompaña.",
  "Te informa.",
  "Te recuerda.",
  "Te informa y actualiza de algún imprevisto o cambio.",
];

export const appScreens: ImageSource[] = [
  {
    src: "/images/app-clientes-notificacion.webp",
    alt: "Clienta recibiendo en su celular una notificación de su pedido",
  },
  {
    src: "/images/app-clientes-status-pedido.webp",
    alt: "La app muestra el avance del pedido en camino hacia su domicilio",
  },
  {
    src: "/images/app-clientes-reminder-pedido.webp",
    alt: "Recordatorio de entrega con horario estimado de 14:00 a 16:00",
  },
  {
    src: "/images/app-clientes-status-cambio.webp",
    alt: "Aviso de retraso por congestión vial con la nueva hora estimada de entrega",
  },
];

// URLs de descarga pendientes: mientras estén vacías los botones se muestran deshabilitados.
const appStoreUrl = "";
const googlePlayUrl = "";

type StoreLink = IconItem & { href: string };

export const appStoreLinks: StoreLink[] = [
  { text: "Descargar en App Store.", icon: AppleStoreIcon, href: appStoreUrl },
  {
    text: "Disponible en Google Play.",
    icon: GooglePlayIcon,
    href: googlePlayUrl,
  },
];

export const ctaStoreLinks: StoreLink[] = [
  { text: "Descargar en App Store.", icon: AppleStoreIcon, href: appStoreUrl },
  {
    text: "Descargar en Google Play.",
    icon: GooglePlayIcon,
    href: googlePlayUrl,
  },
];

export const faqItems = [
  {
    question: "¿Tiene algún costo para mí?",
    answer: "No. La aplicación es gratuita para quienes reciben sus compras.",
  },
  {
    question: "¿Necesito utilizarla siempre?",
    answer:
      "Solo cuando una empresa utilice Shopitrack para coordinar tus entregas. Sin embargo puedes hacernos saber que tú quieres que tu tienda de preferencia use Shopitrack.",
  },
  {
    question: "¿Puedo cambiar la fecha propuesta?",
    answer:
      "Sí. Siempre podrás aceptar la fecha propuesta o podrás solicitar una fecha alternativa.",
  },
  {
    question: "¿Cómo se utiliza mi información?",
    answer:
      "Consulta el Aviso de Privacidad para conocer cómo tratamos tus datos durante la coordinación de una entrega.",
  },
  {
    question:
      "¿Qué ocurre si no puedo recibir mi pedido el día que previamente acepté?",
    answer:
      "Podrás conocer las opciones disponibles que la empresa haya definido para reprogramar la entrega.",
  },
];
