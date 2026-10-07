import { Link } from "react-router-dom";
import { Linkedin, Mail, Instagram } from "lucide-react";
import { Brand } from "@/components/Brand";
import { COMPANY_NAME } from "@/data/legal";

export function Footer() {
  return (
    <footer>
      <div className="site-footer">
        <Brand />
        <div className="socials">
          <a
            href="https://www.linkedin.com/company/shopitrack-linkedin/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={14} />
          </a>
          <a
            href="https://www.instagram.com/shopitrack"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={14} />
          </a>
          <Link
            to="mailto:contacto@shopitrack.com"
            target="_blank"
            aria-label="Correo"
          >
            <Mail size={14} />
          </Link>
        </div>
      </div>
      <div className="footer-legal">
        <nav className="footer-legal-links" aria-label="Legal">
          <Link to="/aviso-de-privacidad">Aviso de privacidad</Link>
          <Link to="/cookies">Política de cookies</Link>
          {/*<Link to="/terminos-y-condiciones">Términos y condiciones</Link>*/}
        </nav>
        <p className="footer-copyright">
          {COMPANY_NAME}. Todos los derechos reservados. Shopitrack®️{" "}
          {new Date().getFullYear()}{" "}
        </p>
      </div>
    </footer>
  );
}
