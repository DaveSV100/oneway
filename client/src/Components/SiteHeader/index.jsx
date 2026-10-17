import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import { scrollToId } from '../../hooks';

const navLinks = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'industrias', label: 'Industrias' },
  { id: 'ahorro', label: 'Calcula tu ahorro' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'preguntas', label: 'Preguntas' },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Same-page anchors scroll in place; anchors on another page navigate and let App scroll on arrival.
  const handleAnchor = (e, path, id) => {
    setMenuOpen(false);
    if (pathname === path) {
      e.preventDefault();
      scrollToId(id);
    }
  };

  return (
    <header className="ai-nav">
      <div className="ai-container ai-nav_inner">
        <Link to="/" className="ai-brand" aria-label="InfiniStart, inicio" onClick={() => setMenuOpen(false)}>
          <Logo size={30} />
          InfiniStart
        </Link>
        <button
          type="button"
          className={`ai-nav_toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </button>
        <ul className={`ai-nav_links ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={`/#${link.id}`} onClick={(e) => handleAnchor(e, '/', link.id)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to={`${pathname}#contacto`}
              className="ai-btn ai-btn--primary ai-btn--sm"
              onClick={(e) => handleAnchor(e, pathname, 'contacto')}
            >
              Diagnóstico gratis
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default SiteHeader;
