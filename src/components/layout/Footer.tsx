import { Link } from 'react-router-dom';
import { Headphones, Linkedin, Send } from 'lucide-react';
import { Brand } from '@/components/Brand';

export function Footer() {
  return (
    <footer className="site-footer">
      <Brand />
      <div className="socials">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
        <Link to="/contacto" aria-label="Soporte"><Headphones size={14} /></Link>
        <Link to="/contacto" aria-label="Contacto"><Send size={14} /></Link>
      </div>
    </footer>
  );
}
