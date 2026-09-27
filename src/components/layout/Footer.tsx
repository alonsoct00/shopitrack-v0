import { Link } from 'react-router-dom';
import { Headphones, Linkedin, Send } from 'lucide-react';
import { Brand } from '@/components/Brand';
import { COMPANY_NAME } from '@/data/legal';

export function Footer() {
  return (
    <footer>
      <div className="site-footer">
        <Brand />
        <div className="socials">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
          <Link to="/contacto" aria-label="Soporte"><Headphones size={14} /></Link>
          <Link to="/contacto" aria-label="Contacto"><Send size={14} /></Link>
        </div>
      </div>
      <div className="footer-legal">
        <nav className="footer-legal-links" aria-label="Legal">
          <Link to="/aviso-de-privacidad">Aviso de privacidad</Link>
          <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
        </nav>
        <p className="footer-copyright">
          Copyright © {new Date().getFullYear()} {COMPANY_NAME}
        </p>
      </div>
    </footer>
  );
}
