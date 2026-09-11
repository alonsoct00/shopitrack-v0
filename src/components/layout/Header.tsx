import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Brand } from '@/components/Brand';
import { siteNav } from '@/data/navigation';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Brand />
      <nav className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'}>
        {siteNav.map((item) => (
          <NavLink to={item.path} key={item.path} end={item.path === '/'} onClick={() => setMenuOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        <Link className="btn btn-primary btn-small" to="/contacto" onClick={() => setMenuOpen(false)}>
          Conoce más <ArrowRight size={15} />
        </Link>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
