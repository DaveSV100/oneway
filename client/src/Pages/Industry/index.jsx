/* eslint-disable react/prop-types */
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import SiteHeader from '../../Components/SiteHeader';
import SiteFooter from '../../Components/SiteFooter';
import DemoCarousel from '../../Components/LiveDemo/Carousel';
import ContactForm from '../../Components/ContactForm';
import industries, { getDemos, getIndustry } from '../../data/industries';
import { demoKinds } from '../../data/demos';
import { scrollToId, usePageMeta, useReveal } from '../../hooks';

const tagNames = { IA: 'Inteligencia artificial', App: 'App móvil', CRM: 'CRM', Nube: 'Nube' };

const IndustryPage = ({ industry }) => {
  const { name, headline, lead, pains, solutions, benefits, icon: Icon } = industry;
  const demos = getDemos(industry).map((demo) => ({
    key: demo.kind,
    label: demoKinds[demo.kind].label,
    icon: demoKinds[demo.kind].icon,
    demo,
  }));

  useReveal();
  usePageMeta(`${name}: IA, apps, CRM y nube | InfiniStart`, `${headline} ${lead}`);

  const goTo = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <div className="ai-page">
      <SiteHeader />

      <main>
        <section className="ai-hero ai-hero--industry">
          <div className="ai-container">
            <nav className="ai-crumbs" aria-label="Ruta de navegación">
              <Link to="/">Inicio</Link>
              <ChevronRightIcon />
              <Link to="/#industrias">Industrias</Link>
              <ChevronRightIcon />
              <span aria-current="page">{name}</span>
            </nav>
          </div>
          <div className="ai-container ai-hero_grid">
            <div className="ai-hero_copy">
              <p className="ai-eyebrow">
                <Icon /> {name}
              </p>
              <h1 className="ai-h1--industry">{headline}</h1>
              <p className="ai-lead">{lead}</p>
              <div className="ai-hero_actions">
                <a href="#contacto" className="ai-btn ai-btn--primary" onClick={(e) => goTo(e, 'contacto')}>
                  Quiero esto para mi negocio
                  <ArrowRightIcon />
                </a>
                <a href="#soluciones" className="ai-btn ai-btn--ghost" onClick={(e) => goTo(e, 'soluciones')}>
                  Ver soluciones
                </a>
              </div>
            </div>
            <DemoCarousel
              items={demos}
              label={`Ejemplos en vivo para ${name.toLowerCase()}`}
              renderFooter={() => <p className="ai-demo_caption">Ejemplos en vivo con datos ficticios.</p>}
            />
          </div>
        </section>

        <section className="ai-section ai-section--muted">
          <div className="ai-container ai-pain">
            <div className="ai-reveal">
              <p className="ai-kicker">Lo que resolvemos</p>
              <h2>¿Te pasa esto en tu negocio?</h2>
            </div>
            <ul className="ai-pain_list">
              {pains.map((pain) => (
                <li key={pain} className="ai-reveal">
                  <PlusIcon />
                  {pain}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="soluciones" className="ai-section">
          <div className="ai-container">
            <div className="ai-heading ai-reveal">
              <p className="ai-kicker">Soluciones</p>
              <h2>Lo que podemos integrar en tu negocio</h2>
              <p>Empieza por una y suma las demás cuando las necesites; todas se conectan entre sí.</p>
            </div>
            <div className="ai-cards ai-cards--two">
              {solutions.map((solution) => (
                <article key={solution.title} className="ai-card ai-reveal">
                  <span className={`ai-tag ${solution.tag === 'IA' ? 'ai-tag--accent' : ''}`}>{tagNames[solution.tag]}</span>
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-stats">
          <div className="ai-container ai-benefits">
            <p className="ai-kicker ai-reveal">Lo que ganas</p>
            <ul>
              {benefits.map((benefit) => (
                <li key={benefit} className="ai-reveal">
                  <CheckIcon />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ai-section">
          <div className="ai-container">
            <div className="ai-heading ai-reveal">
              <p className="ai-kicker">Otras industrias</p>
              <h2>También trabajamos con</h2>
            </div>
            <ul className="ai-chips ai-reveal">
              {industries
                .filter((other) => other.slug !== industry.slug)
                .map((other) => (
                  <li key={other.slug}>
                    <Link to={`/industrias/${other.slug}`}>{other.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>

        <section id="contacto" className="ai-section ai-section--muted">
          <div className="ai-container ai-contact">
            <div className="ai-reveal">
              <p className="ai-kicker">Diagnóstico gratuito</p>
              <h2>Llevemos esto a tu negocio.</h2>
              <p className="ai-lead">
                En 30 minutos revisamos cómo trabajas hoy y te decimos qué conviene implementar primero, cuánto cuesta y en
                cuánto tiempo estaría funcionando.
              </p>
            </div>
            <div className="ai-reveal">
              <ContactForm source={name} placeholder={`Ej. ${pains[0]}`} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

// Keyed by slug so moving between industries remounts the page and restarts its demo and animations.
const Industry = () => {
  const { slug } = useParams();
  const industry = getIndustry(slug);
  if (!industry) return <Navigate to="/" replace />;
  return <IndustryPage key={slug} industry={industry} />;
};

export default Industry;
