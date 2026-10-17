import { Link } from 'react-router-dom';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Logo from '../Logo';
import industries from '../../data/industries';
import { CONTACT_EMAIL } from '../../data/contact';

const services = ['Inteligencia artificial', 'Apps móviles', 'CRM a la medida', 'Nube y conexión'];

const SiteFooter = () => (
  <footer className="ai-footer">
    <div className="ai-container ai-footer_grid">
      <div className="ai-footer_brand">
        <Link to="/" className="ai-brand">
          <Logo size={30} />
          InfiniStart
        </Link>
        <p>Inteligencia artificial, apps móviles, CRM y nube para negocios de todos los tamaños.</p>
        <a className="ai-mail" href={`mailto:${CONTACT_EMAIL}`}>
          <EnvelopeIcon />
          {CONTACT_EMAIL}
        </a>
      </div>
      <div>
        <p className="ai-footer_title">Servicios</p>
        <ul>
          {services.map((service) => (
            <li key={service}>
              <Link to="/#servicios">{service}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="ai-footer_industries">
        <p className="ai-footer_title">Industrias</p>
        <ul>
          {industries.map((industry) => (
            <li key={industry.slug}>
              <Link to={`/industrias/${industry.slug}`}>{industry.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="ai-container ai-footer_bottom">
      <p>© {new Date().getFullYear()} InfiniStart. Infinitas ideas.</p>
      <p>Facturamos todos nuestros productos y servicios.</p>
    </div>
  </footer>
);

export default SiteFooter;
