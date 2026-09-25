export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalDocument = {
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
};

export const COMPANY_NAME = "Shopitrack SA de CV";

// Texto base para maquetación. Requiere revisión legal antes de publicarse;
// los datos marcados como [POR DEFINIR] los debe proporcionar la empresa.
export const legalReviewNote =
  "Este documento es una versión preliminar y está sujeto a revisión legal antes de su publicación oficial.";

export const privacyNotice: LegalDocument = {
  title: "Aviso de privacidad",
  updatedAt: "[POR DEFINIR]",
  intro: `En ${COMPANY_NAME} nos importa la privacidad de las personas que utilizan nuestro sitio y nuestros servicios. Este aviso describe de forma general cómo tratamos la información personal que recibimos.`,
  sections: [
    {
      title: "Responsable del tratamiento",
      paragraphs: [
        `${COMPANY_NAME}, con domicilio en [POR DEFINIR], es responsable del tratamiento de los datos personales que se recaban a través de este sitio.`,
      ],
    },
    {
      title: "Información que recopilamos",
      paragraphs: [
        "Podemos recopilar datos de identificación y contacto que nos compartes voluntariamente, por ejemplo al llenar el formulario de contacto: nombre, empresa, correo electrónico y teléfono.",
        "Detalle de categorías de datos personales tratados: [POR DEFINIR].",
      ],
    },
    {
      title: "Uso de la información",
      paragraphs: [
        "Utilizamos la información para responder a tus solicitudes, dar seguimiento a demostraciones y coordinar la comunicación relacionada con nuestros servicios.",
        "Finalidades primarias y secundarias: [POR DEFINIR].",
      ],
    },
    {
      title: "Protección de la información",
      paragraphs: [
        "Aplicamos medidas administrativas, técnicas y físicas para proteger los datos personales contra daño, pérdida, alteración o acceso no autorizado.",
      ],
    },
    {
      title: "Compartir información",
      paragraphs: [
        "No vendemos datos personales. La información solo podrá compartirse con terceros en los casos que se indiquen en este aviso o cuando la ley lo requiera.",
        "Terceros y encargados del tratamiento: [POR DEFINIR].",
      ],
    },
    {
      title: "Derechos del titular",
      paragraphs: [
        "Puedes solicitar el acceso, rectificación, cancelación u oposición al tratamiento de tus datos personales, así como revocar tu consentimiento.",
        "Procedimiento y medios para ejercer estos derechos: [POR DEFINIR].",
      ],
    },
    {
      title: "Contacto",
      paragraphs: [
        "Para cualquier duda relacionada con este aviso, escríbenos a [POR DEFINIR: correo de privacidad].",
      ],
    },
    {
      title: "Cambios al aviso de privacidad",
      paragraphs: [
        "Este aviso puede actualizarse. Publicaremos cualquier cambio en esta misma página indicando la fecha de la última actualización.",
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  title: "Términos y condiciones",
  updatedAt: "[POR DEFINIR]",
  intro: `Estos términos regulan el uso del sitio web de ${COMPANY_NAME}. Al navegar en el sitio aceptas las condiciones aquí descritas.`,
  sections: [
    {
      title: "Introducción",
      paragraphs: [
        `Este sitio es operado por ${COMPANY_NAME}. Su propósito es informar sobre Shopitrack, una plataforma que coordina a empresas y clientes para reducir las entregas fallidas.`,
      ],
    },
    {
      title: "Uso del sitio",
      paragraphs: [
        "Te comprometes a utilizar el sitio de forma lícita y a no realizar acciones que afecten su funcionamiento, seguridad o disponibilidad.",
      ],
    },
    {
      title: "Servicios",
      paragraphs: [
        "La información publicada describe de forma general los servicios de Shopitrack. Las condiciones comerciales de cada servicio se establecen en los acuerdos específicos con cada cliente.",
        "Alcance y condiciones de los servicios: [POR DEFINIR].",
      ],
    },
    {
      title: "Responsabilidades del usuario",
      paragraphs: [
        "Eres responsable de que la información que proporcionas a través del sitio, por ejemplo en el formulario de contacto, sea veraz y esté actualizada.",
      ],
    },
    {
      title: "Propiedad intelectual",
      paragraphs: [
        `Los textos, marcas, logotipos, imágenes y demás contenidos del sitio pertenecen a ${COMPANY_NAME} o a sus respectivos titulares y no pueden reproducirse sin autorización.`,
      ],
    },
    {
      title: "Limitación de responsabilidad",
      paragraphs: [
        "El sitio se ofrece con fines informativos. Procuramos que la información sea correcta y esté actualizada, pero no garantizamos que esté libre de errores o interrupciones.",
        "Alcance de la limitación de responsabilidad: [POR DEFINIR].",
      ],
    },
    {
      title: "Modificaciones",
      paragraphs: [
        "Podemos actualizar estos términos. Los cambios se publicarán en esta página indicando la fecha de la última actualización.",
      ],
    },
    {
      title: "Legislación aplicable",
      paragraphs: ["Legislación y jurisdicción aplicables: [POR DEFINIR]."],
    },
    {
      title: "Contacto",
      paragraphs: [
        "Si tienes dudas sobre estos términos, escríbenos a [POR DEFINIR: correo de contacto legal].",
      ],
    },
  ],
};
