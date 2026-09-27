export interface SeoEntry {
  path: string;
  title: string;
  description: string;
}

//Ajustes de titulos en pestañas

export const seoConfig: Record<
  | "home"
  | "empresas"
  | "clientes"
  | "sectores"
  | "contacto"
  | "privacidad"
  | "terminos"
  | "notFound",
  SeoEntry
> = {
  home: {
    path: "/",
    title: "Shopitrack",
    description:
      "Shopitrack coordina empresas y clientes con ventanas de entrega, ETA y seguimiento en tiempo real para evitar al cliente ausente y reducir las entregas fallidas.",
  },
  empresas: {
    path: "/empresas",
    title: "Shopitrack para empresas | Software de seguimiento de entregas",
    description:
      "El software de Shopitrack ayuda a las empresas a reducir entregas fallidas, mejorar la comunicación durante la entrega y dar seguimiento en tiempo real.",
  },
  clientes: {
    path: "/clientes",
    title:
      "Shopitrack para clientes | Ventanas de entrega y ETA en tiempo real",
    description:
      "Confirma tu ventana de entrega, conoce tu ETA y mantente en contacto durante la entrega con Shopitrack para dejar de ser el cliente ausente en tus pedidos de última milla.",
  },
  sectores: {
    path: "/sectores",
    title: "Sectores que confían en Shopitrack | Entregas de última milla",
    description:
      "Retail, electrodomésticos, muebles, farmacias, tecnología y más: descubre cómo Shopitrack mejora la experiencia de entrega en la última milla para cada sector de e-commerce.",
  },
  contacto: {
    path: "/contacto",
    title: "Contacto | Shopitrack",
    description:
      "Habla con el equipo de Shopitrack y descubre cómo nuestro software para entregas reduce las entregas fallidas y mejora el seguimiento de entregas de tu empresa.",
  },
  privacidad: {
    path: "/aviso-de-privacidad",
    title: "Aviso de privacidad | Shopitrack",
    description:
      "Conoce cómo Shopitrack trata y protege la información personal que recibe a través de su sitio y sus servicios de coordinación de entregas.",
  },
  terminos: {
    path: "/terminos-y-condiciones",
    title: "Términos y condiciones | Shopitrack",
    description:
      "Consulta los términos y condiciones de uso del sitio web de Shopitrack, la plataforma que coordina empresas y clientes para reducir entregas fallidas.",
  },
  notFound: {
    path: "",
    title: "Página no encontrada | Shopitrack",
    description:
      "La página que buscas no existe o fue movida. Vuelve al inicio de Shopitrack para conocer nuestra plataforma de seguimiento de entregas.",
  },
};
