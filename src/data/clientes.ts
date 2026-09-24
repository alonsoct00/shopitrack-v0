export const clientesImages = {
  hero: "/images/cliente-preocupado.webp",
  heroSrcSet: "/images/cliente-preocupado-800.webp 800w, /images/cliente-preocupado.webp 1050w",
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

export const clientSteps = [
  ["Paso 1", "La tienda propone una fecha."],
  ["Paso 2", "Tú la aceptas o pides otra."],
  ["Paso 3", "El día acordado, recibes un recordatorio de “Hoy es el día”."],
  [
    "Paso 4",
    "Te avisan 2 horas antes la hora aproximada de llegada para asegurarte de estar en el domicilio de entrega.",
  ],
  ["Paso 5", "Recibes tu compra."],
  ["Paso 6", "Calificas la experiencia. Ganas y acumulas puntos canjeables."],
] as const;

export const stepsFootnote =
  "*3, 4, 5, Nadie puede asegurar que no habrá imprevistos, pero avisarte si sucede es respetar tu tiempo.";

export const beforeAfterItems = [
  { before: "Esperabas.", after: "Te organizas." },
  { before: "No sabías cuándo llegaría.", after: "Conoces una hora aproximada." },
  { before: "Cancelabas actividades.", after: "Decides cómo aprovechar tu tiempo." },
  { before: "Todo dependía de la suerte.", after: "La entrega ocurre con mayor coordinación." },
  { before: "Terminabas frustrado.", after: "La compra termina con tranquilidad." },
];

export const appFeatureItems = [
  "La app te notifica.",
  "La app te acompaña.",
  "Te informa.",
  "Te recuerda.",
  "Te informa y actualiza de algún imprevisto o cambio.",
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
    answer: "Sí. Siempre podrás aceptar la fecha propuesta o podrás solicitar una fecha alternativa.",
  },
  {
    question: "¿Cómo se utiliza mi información?",
    answer: "Consulta el Aviso de Privacidad para conocer cómo tratamos tus datos durante la coordinación de una entrega.",
  },
  {
    question: "¿Qué ocurre si no puedo recibir mi pedido el día que previamente acepté?",
    answer: "Podrás conocer las opciones disponibles que la empresa haya definido para reprogramar la entrega.",
  },
];
