import { AppleStoreIcon, GooglePlayIcon } from "@/components/StoreIcons";
import type { IconItem, ImageSource } from "@/data/types";

export const clientesImages = {
  hero: "/images/cliente-preocupado.webp",
  heroSrcSet:
    "/images/cliente-preocupado-800.webp 800w, /images/cliente-preocupado.webp 1050w",
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

const stepPlaceholder = "/images/placeholder-asset.svg";

// Imágenes pendientes: reemplazar cada src por el asset final del paso.
export const clientSteps: {
  label: string;
  text: string;
  image: ImageSource;
}[] = [
  {
    label: "Paso 1",
    text: "La tienda propone una fecha.",
    image: {
      src: stepPlaceholder,
      alt: "Imagen pendiente: la tienda propone una fecha",
    },
  },
  {
    label: "Paso 2",
    text: "Tú la aceptas o pides otra.",
    image: {
      src: stepPlaceholder,
      alt: "Imagen pendiente: aceptas la fecha o pides otra",
    },
  },
  {
    label: "Paso 3",
    text: "El día acordado, recibes un recordatorio de “Hoy es el día”.",
    image: {
      src: stepPlaceholder,
      alt: "Imagen pendiente: recordatorio del día de entrega",
    },
  },
  {
    label: "Paso 4",
    text: "Te avisan 2 horas antes la hora aproximada de llegada para asegurarte de estar en el domicilio de entrega.",
    image: {
      src: stepPlaceholder,
      alt: "Imagen pendiente: aviso de la hora aproximada de llegada",
    },
  },
  {
    label: "Paso 5",
    text: "Recibes tu compra.",
    image: { src: stepPlaceholder, alt: "Imagen pendiente: recibes tu compra" },
  },
  {
    label: "Paso 6",
    text: "Calificas la experiencia. Ganas y acumulas puntos canjeables.",
    image: {
      src: stepPlaceholder,
      alt: "Imagen pendiente: calificas la experiencia",
    },
  },
];

export const stepsFootnote =
  "*3, 4, 5, Nadie puede asegurar que no habrá imprevistos, pero avisarte si sucede es respetar tu tiempo.";

export const beforeAfterItems = [
  { before: "Esperabas.", after: "Te organizas." },
  {
    before: "No sabías cuándo llegaría.",
    after: "Conoces una hora aproximada.",
  },
  {
    before: "Cancelabas actividades.",
    after: "Decides cómo aprovechar tu tiempo.",
  },
  {
    before: "Todo dependía de la suerte.",
    after: "La entrega ocurre con mayor coordinación.",
  },
  {
    before: "Terminabas frustrado.",
    after: "La compra termina con tranquilidad.",
  },
];

export const appFeatureItems = [
  "La app te notifica.",
  "La app te acompaña.",
  "Te informa.",
  "Te recuerda.",
  "Te informa y actualiza de algún imprevisto o cambio.",
];

// Pantallas de la app pendientes: reemplazar cada src por la captura real.
const appScreenPlaceholder = "/images/placeholder-asset.svg";

export const appScreens: ImageSource[] = appFeatureItems.map((feature) => ({
  src: appScreenPlaceholder,
  alt: `Imagen pendiente: pantalla de la app — ${feature}`,
}));

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
