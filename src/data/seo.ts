export interface SeoEntry {
  path: string;
  title: string;
  description: string;
}

export const seoConfig: Record<'home' | 'empresas' | 'clientes' | 'industrias' | 'contacto' | 'notFound', SeoEntry> = {
  home: {
    path: '/',
    title: 'Shopitrack | Reduce las entregas fallidas en la última milla',
    description: 'Shopitrack transforma la experiencia de entrega coordinando empresas y clientes con ventanas de entrega, ETA y seguimiento de entregas en tiempo real. Evita al cliente ausente y las entregas fallidas.',
  },
  empresas: {
    path: '/empresas',
    title: 'Shopitrack para empresas | Software de seguimiento de entregas',
    description: 'El software para entregas de Shopitrack ayuda a las empresas a reducir entregas fallidas, mejorar la comunicación durante la entrega y dar seguimiento de entregas de e-commerce en tiempo real.',
  },
  clientes: {
    path: '/clientes',
    title: 'Shopitrack para clientes | Ventanas de entrega y ETA en tiempo real',
    description: 'Confirma tu ventana de entrega, conoce tu ETA y mantente en contacto durante la entrega con Shopitrack para dejar de ser el cliente ausente en tus pedidos de última milla.',
  },
  industrias: {
    path: '/industrias',
    title: 'Industrias que confían en Shopitrack | Entregas de última milla',
    description: 'Retail, electrodomésticos, muebles, farmacias, tecnología y más: descubre cómo Shopitrack mejora la experiencia de entrega en la última milla para cada industria de e-commerce.',
  },
  contacto: {
    path: '/contacto',
    title: 'Contacto | Shopitrack',
    description: 'Habla con el equipo de Shopitrack y descubre cómo nuestro software para entregas reduce las entregas fallidas y mejora el seguimiento de entregas de tu empresa.',
  },
  notFound: {
    path: '',
    title: 'Página no encontrada | Shopitrack',
    description: 'La página que buscas no existe o fue movida. Vuelve al inicio de Shopitrack para conocer nuestra plataforma de seguimiento de entregas.',
  },
};
