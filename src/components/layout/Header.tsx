import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { Brand } from "@/components/Brand";
import { siteNav } from "@/data/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={scrolled ? "site-header site-header--scrolled" : "site-header"}
    >
      <Brand />
      <nav className={menuOpen ? "site-nav site-nav--open" : "site-nav"}>
        {siteNav.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            end={item.path === "/"}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
        <Link
          className="hidden btn btn-primary btn-small"
          to="/contacto"
          onClick={() => setMenuOpen(false)}
        >
          Conoce más <ArrowRight size={15} />
        </Link>
      </nav>
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
