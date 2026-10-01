export type LegalSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
  outro?: string[];
  link?: { to: string; label: string };
};

export type LegalDocument = {
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
};

export const COMPANY_NAME = "Shopitrack S.A.P.I., de C.V.";

// Texto base para maquetación. Requiere revisión legal antes de publicarse;
// los datos entre corchetes ([POR DEFINIR], [CORREO DE PRIVACIDAD]…) los debe proporcionar la empresa.
export const legalReviewNote =
  "Este documento es una versión preliminar y está sujeto a revisión legal antes de su publicación oficial.";

const PRIVACY_EMAIL = "[CORREO DE PRIVACIDAD]";

export const privacyNotice: LegalDocument = {
  title: "Aviso de privacidad",
  updatedAt: "[FECHA DE ACTUALIZACIÓN]",
  intro: `En ${COMPANY_NAME} nos importa la privacidad de las personas que utilizan nuestro sitio y nuestros servicios. Este aviso describe cómo tratamos los datos personales que recibimos a través de este sitio, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás normativa aplicable en México.`,
  sections: [
    {
      title: "Responsable del tratamiento",
      paragraphs: [
        `${COMPANY_NAME} (“Shopitrack”), con domicilio en [DOMICILIO DEL RESPONSABLE], es responsable del tratamiento de los datos personales que se recaban a través de este sitio.`,
      ],
    },
    {
      title: "Información que recopilamos",
      paragraphs: [
        "Recabamos los datos que nos proporcionas voluntariamente al llenar el formulario de contacto:",
      ],
      items: [
        "Nombre y apellidos.",
        "Empresa y puesto.",
        "Correo electrónico corporativo.",
        "Teléfono, si decides proporcionarlo.",
        "Industria y volumen mensual aproximado de entregas, si decides proporcionarlos.",
        "El mensaje que nos escribas.",
        "Tu aceptación de este aviso de privacidad.",
      ],
      outro: [
        "Al navegar en el sitio también se pueden recabar datos técnicos de forma automática mediante cookies y tecnologías similares, como se explica en la sección “Cookies y tecnologías de rastreo”.",
      ],
    },
    {
      title: "Datos personales sensibles",
      paragraphs: [
        "No solicitamos datos personales sensibles, como información sobre salud, origen étnico, creencias religiosas, opiniones políticas o preferencias sexuales. Te pedimos no incluirlos en el mensaje del formulario ni en tus comunicaciones con nosotros, ya que no son necesarios para atender tu solicitud.",
      ],
    },
    {
      title: "Uso de la información",
      paragraphs: [
        "Utilizamos tus datos personales para las siguientes finalidades, necesarias para atender la solicitud que nos haces:",
      ],
      items: [
        "Atender tus solicitudes de información.",
        "Responder a tus solicitudes de demostración.",
        "Contactarte por correo electrónico o teléfono en relación con tu solicitud.",
        "Conocer las necesidades generales de operación de tu empresa para proponerte una solución adecuada.",
        "Dar seguimiento comercial a tu solicitud y gestionar tu registro como prospecto.",
        "Mantener un registro de las solicitudes recibidas.",
        "Atender tus solicitudes relacionadas con privacidad y protección de datos personales.",
      ],
      outro: [
        "No utilizamos los datos del formulario para finalidades distintas, como el envío de boletines o publicidad. Si en el futuro quisiéramos hacerlo, actualizaremos este aviso y, cuando la ley lo requiera, te pediremos tu consentimiento.",
        "Al marcar la casilla de aceptación y enviar el formulario de contacto, nos otorgas tu consentimiento para tratar tus datos personales conforme a este aviso.",
      ],
    },
    {
      title: "Protección y conservación de la información",
      paragraphs: [
        "Aplicamos medidas administrativas, técnicas y físicas para proteger los datos personales contra daño, pérdida, alteración o acceso no autorizado.",
        "Conservamos tus datos solo durante el tiempo necesario para cumplir las finalidades de este aviso y las obligaciones legales que correspondan. Después, se bloquean y se eliminan conforme a la normativa aplicable.",
      ],
    },
    {
      title: "Compartir información",
      paragraphs: [
        "No vendemos ni rentamos datos personales.",
        "Para operar el sitio y atender tu solicitud nos apoyamos en proveedores de servicios tecnológicos que tratan los datos por cuenta nuestra y conforme a nuestras instrucciones:",
      ],
      items: [
        "Vercel: alojamiento del sitio.",
        "Airtable: registro de las solicitudes recibidas.",
        "Resend: envío de correos electrónicos relacionados con tu solicitud.",
        "Cloudflare Turnstile: protección del formulario contra envíos automatizados.",
      ],
      outro: [
        "Algunos de estos proveedores pueden tratar la información en servidores ubicados fuera de México.",
        "No realizamos transferencias de datos personales que requieran tu consentimiento. Solo compartiremos tus datos sin él en los casos que permite la ley, por ejemplo, cuando lo requiera una autoridad competente.",
      ],
    },
    {
      title: "Cookies y tecnologías de rastreo",
      paragraphs: [
        "Este sitio utiliza cookies y tecnologías similares. Algunas son necesarias para su funcionamiento y seguridad; otras, como LinkedIn Insight Tag, nos ayudan a medir las visitas al sitio y el resultado de nuestras campañas en LinkedIn.",
        "Mediante estas tecnologías se pueden recabar datos como la dirección IP, el tipo de navegador y dispositivo, las páginas visitadas y la fecha y hora de la visita.",
      ],
      link: {
        to: "/cookies",
        label: "Consulta la Política de Cookies y Tecnologías de Rastreo",
      },
    },
    {
      title: "Derechos del titular (ARCO)",
      paragraphs: ["Tienes derecho a:"],
      items: [
        "Acceso: conocer qué datos personales tenemos sobre ti y cómo los tratamos.",
        "Rectificación: solicitar que corrijamos tus datos si son inexactos o están incompletos.",
        "Cancelación: solicitar que eliminemos tus datos de nuestros registros cuando consideres que no se requieren para las finalidades de este aviso.",
        "Oposición: oponerte al tratamiento de tus datos para fines específicos.",
      ],
    },
    {
      title: "Cómo ejercer tus derechos ARCO",
      paragraphs: [
        `Envía tu solicitud a ${PRIVACY_EMAIL} con la siguiente información:`,
      ],
      items: [
        "Tu nombre y un correo electrónico u otro medio para comunicarte la respuesta.",
        "Un documento que acredite tu identidad o, en su caso, la representación de quien actúe en tu nombre.",
        "La descripción clara del derecho que deseas ejercer y de los datos personales a los que se refiere.",
        "En caso de rectificación, las correcciones que solicitas y, si es posible, documentos que las respalden.",
        "Cualquier otro elemento que nos ayude a localizar tus datos.",
      ],
      outro: [
        "Te responderemos en los plazos que establece la ley, por el medio que nos indiques. Si no estás de acuerdo con la respuesta, puedes acudir ante la autoridad competente en materia de protección de datos personales.",
      ],
    },
    {
      title: "Revocación del consentimiento",
      paragraphs: [
        `Puedes revocar el consentimiento que nos otorgaste para el tratamiento de tus datos personales enviando tu solicitud a ${PRIVACY_EMAIL}, con la misma información indicada para las solicitudes ARCO.`,
        "No en todos los casos podremos concluir el tratamiento de forma inmediata, ya que es posible que alguna obligación legal nos requiera conservar ciertos datos. Además, la revocación puede impedir que sigamos atendiendo tu solicitud.",
      ],
    },
    {
      title: "Limitación del uso o divulgación",
      paragraphs: [
        `Si deseas limitar el uso o la divulgación de tus datos personales, por ejemplo, para dejar de recibir comunicaciones de seguimiento comercial, escríbenos a ${PRIVACY_EMAIL}.`,
        "Para limitar las cookies y tecnologías de rastreo, consulta la Política de Cookies y Tecnologías de Rastreo.",
      ],
    },
    {
      title: "Contacto",
      paragraphs: [
        `Para cualquier duda relacionada con este aviso, escríbenos a ${PRIVACY_EMAIL} o llámanos al [TELÉFONO].`,
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

export const cookiePolicy: LegalDocument = {
  title: "Política de Cookies y Tecnologías de Rastreo",
  updatedAt: "[FECHA DE ACTUALIZACIÓN]",
  intro: `Esta política explica qué cookies y tecnologías similares utiliza el sitio de ${COMPANY_NAME}, para qué las usamos y cómo puedes gestionarlas. Complementa nuestro Aviso de privacidad.`,
  sections: [
    {
      title: "¿Qué son las cookies?",
      paragraphs: [
        "Las cookies son pequeños archivos que un sitio web guarda en tu navegador cuando lo visitas. Permiten, por ejemplo, recordar información entre páginas o saber cuántas personas visitan el sitio.",
        "Además de las cookies existen tecnologías similares, como píxeles, etiquetas (tags) y scripts, que recaban información sobre la navegación. En esta política nos referimos a todas ellas como “tecnologías de rastreo”.",
      ],
    },
    {
      title: "¿Qué tecnologías utilizamos?",
      paragraphs: ["Las agrupamos en dos categorías según su finalidad:"],
      items: [
        "Necesarias: permiten que el sitio funcione y se mantenga seguro.",
        "Analítica y marketing: nos ayudan a entender cómo se usa el sitio y a medir nuestras campañas. No son indispensables para navegar.",
      ],
    },
    {
      title: "Tecnologías necesarias",
      paragraphs: [
        "Son las que se requieren para mostrar el sitio, mantenerlo seguro y proteger el formulario de contacto contra abusos:",
      ],
      items: [
        "Alojamiento del sitio (Vercel): para entregar el sitio, el proveedor procesa datos técnicos de la conexión, como la dirección IP, con fines de operación y seguridad.",
        "Protección del formulario (Cloudflare Turnstile): verifica que los envíos del formulario de contacto los haga una persona y no un programa automatizado.",
      ],
      outro: [
        "Sin estas tecnologías, el sitio o el formulario de contacto podrían no funcionar correctamente.",
      ],
    },
    {
      title: "Tecnologías de analítica y marketing",
      paragraphs: [
        "Actualmente utilizamos LinkedIn Insight Tag, una etiqueta de LinkedIn que nos permite:",
      ],
      items: [
        "Medir las visitas a las páginas del sitio.",
        "Analizar de forma agregada el perfil profesional de quienes nos visitan.",
        "Medir conversiones, por ejemplo, cuántas visitas llegan desde nuestros anuncios en LinkedIn.",
        "Apoyar nuestras campañas en LinkedIn, cuando las realicemos.",
      ],
      outro: [
        "Para ello, LinkedIn puede recabar datos como la página visitada, la página de procedencia, la dirección IP, características del navegador y del dispositivo, y la fecha y hora de la visita, y relacionarlos con tu cuenta de LinkedIn si la tienes. LinkedIn trata esta información conforme a su propia política de privacidad.",
        "Esta tecnología no es necesaria para el funcionamiento del sitio: si la bloqueas, puedes seguir navegando con normalidad.",
      ],
    },
    {
      title: "Herramientas que podrían incorporarse posteriormente",
      paragraphs: [
        "Más adelante podríamos incorporar otras herramientas de medición, como Google Tag Manager, Google Analytics 4 o Meta Pixel. Hoy no están activas en el sitio. Si las incorporamos, actualizaremos esta política para describirlas.",
      ],
    },
    {
      title: "Cómo gestionar las cookies",
      paragraphs: [
        "Por ahora el sitio no cuenta con un panel para elegir qué tecnologías aceptar. Desde la configuración de tu navegador puedes:",
      ],
      items: [
        "Consultar y eliminar las cookies que ya están guardadas.",
        "Bloquear todas las cookies o solo las de terceros.",
        "Usar el modo de navegación privada, que borra las cookies al cerrar la ventana.",
      ],
      outro: [
        "Las opciones cambian según el navegador; consulta su sección de ayuda o de privacidad. Si bloqueas las tecnologías necesarias, algunas funciones del sitio, como el formulario de contacto, podrían no funcionar correctamente.",
        "Si más adelante incorporamos un mecanismo para elegir qué tecnologías aceptar, lo describiremos en esta política.",
      ],
    },
    {
      title: "Tus datos personales",
      paragraphs: [
        "Si mediante estas tecnologías se recaban datos personales, los tratamos conforme a nuestro Aviso de privacidad, donde también encontrarás cómo ejercer tus derechos de acceso, rectificación, cancelación y oposición (ARCO).",
      ],
      link: { to: "/aviso-de-privacidad", label: "Consulta el Aviso de privacidad" },
    },
    {
      title: "Cambios a esta política",
      paragraphs: [
        "Podemos actualizar esta política cuando cambien las tecnologías que utilizamos. Publicaremos cualquier cambio en esta misma página indicando la fecha de la última actualización.",
      ],
    },
    {
      title: "Contacto",
      paragraphs: [`Si tienes dudas sobre esta política, escríbenos a ${PRIVACY_EMAIL}.`],
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
