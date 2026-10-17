import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  CloudIcon,
  CubeIcon,
  DevicePhoneMobileIcon,
  DocumentMagnifyingGlassIcon,
  EyeIcon,
  LockClosedIcon,
  PhoneArrowDownLeftIcon,
  PlusIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import SiteHeader from '../../Components/SiteHeader';
import SiteFooter from '../../Components/SiteFooter';
import DemoCarousel from '../../Components/LiveDemo/Carousel';
import ContactForm from '../../Components/ContactForm';
import industries, { getDemos, getIndustry } from '../../data/industries';
import { demoKinds } from '../../data/demos';
import { CONTACT_EMAIL } from '../../data/contact';
import { scrollToId, usePageMeta, useReveal } from '../../hooks';

// One demo per kind of solution, each taken from a different industry.
const heroDemos = [
  { slug: 'tienda-de-ropa', kind: 'chat' },
  { slug: 'mayorista', kind: 'quote' },
  { slug: 'hotel', kind: 'app' },
  { slug: 'inmobiliaria', kind: 'crm' },
  { slug: 'restaurante', kind: 'cloud' },
].map(({ slug, kind }) => {
  const industry = getIndustry(slug);
  return {
    key: kind,
    label: demoKinds[kind].label,
    icon: demoKinds[kind].icon,
    demo: getDemos(industry).find((demo) => demo.kind === kind),
    industry,
  };
});

const services = [
  {
    icon: SparklesIcon,
    title: 'Inteligencia artificial',
    text: 'Asistentes que atienden y venden, procesos que se hacen solos y datos que te dicen qué decidir.',
    points: ['Asistentes en WhatsApp, Instagram y web', 'Automatización de tareas repetitivas', 'Agentes que operan tus sistemas'],
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Apps móviles',
    text: 'Apps para iOS y Android, para tus clientes o para tu equipo, con tu marca.',
    points: ['Pedidos, citas, pagos y lealtad', 'Ventas en ruta, inspecciones y entregas', 'Publicación en App Store y Google Play'],
  },
  {
    icon: UserGroupIcon,
    title: 'CRM a la medida',
    text: 'Toda la relación con tus clientes en un solo lugar, adaptado a cómo vendes tú.',
    points: ['Prospectos, ventas y seguimiento', 'Cotizaciones, cobranza y estados de cuenta', 'Recordatorios y campañas automáticas'],
  },
  {
    icon: CloudIcon,
    title: 'Nube y conexión',
    text: 'Tus datos seguros, sincronizados y disponibles desde cualquier lugar y dispositivo.',
    points: ['Del Excel y el papel a la nube', 'Conexión entre ERP, tienda en línea y apps', 'Respaldos automáticos'],
  },
];

const painPoints = [
  'Respondes las mismas preguntas en WhatsApp todos los días.',
  'Pierdes clientes que escriben de noche o en fin de semana.',
  'Tu equipo pasa horas capturando datos, facturas y pedidos a mano.',
  'El inventario vive en un Excel y nunca cuadra.',
  'Tus clientes no tienen una app para comprarte o agendar contigo.',
  'Tienes datos de ventas, pero nadie tiene tiempo de analizarlos.',
];

const solutions = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Asistentes en WhatsApp, Instagram y web',
    text: 'Atienden, cotizan, agendan citas y venden 24/7 con el tono de tu marca. Cuando hace falta, pasan la conversación a una persona.',
  },
  {
    icon: BoltIcon,
    title: 'Automatización de procesos',
    text: 'Captura de pedidos, conciliación de facturas, envío de correos y seguimiento a clientes sin intervención manual.',
  },
  {
    icon: ChartBarIcon,
    title: 'Análisis y reportes inteligentes',
    text: 'Pregunta en español “¿qué sucursal vendió más este mes?” y obtén la respuesta con gráficas, al instante.',
  },
  {
    icon: CubeIcon,
    title: 'Inventario y pronóstico de demanda',
    text: 'Anticipa qué se va a vender, evita quedarte sin producto y deja de inmovilizar dinero en lo que no rota.',
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: 'IA sobre tus documentos',
    text: 'Un buscador que entiende manuales, contratos y políticas internas. Tu equipo encuentra respuestas en segundos.',
  },
  {
    icon: PhoneArrowDownLeftIcon,
    title: 'Recepcionista telefónica con IA',
    text: 'Contesta llamadas, resuelve dudas frecuentes, toma recados y agenda, con voz natural y sin tiempos de espera.',
  },
  {
    icon: EyeIcon,
    title: 'Visión por computadora',
    text: 'Conteo de personas y productos, control de calidad en línea de producción y lectura automática de documentos.',
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Agentes de IA a la medida',
    text: 'Agentes que operan tus sistemas: actualizan tu CRM, generan cotizaciones y coordinan tareas entre áreas.',
  },
];

const segments = [
  {
    icon: BuildingStorefrontIcon,
    tag: 'Pequeños negocios y tiendas',
    title: 'Vende más sin contratar más',
    points: [
      'Asistente de WhatsApp listo en días',
      'Catálogo, precios y apartados automáticos',
      'Recordatorios de citas y pagos',
      'Nosotros lo instalamos y lo mantenemos',
    ],
  },
  {
    icon: BuildingOfficeIcon,
    tag: 'Medianas empresas',
    title: 'Escala tu operación',
    points: [
      'Automatización de ventas, compras y cobranza',
      'CRM y app para tu equipo de ventas',
      'Integración con tu ERP o tienda en línea',
      'Tableros de indicadores en tiempo real',
    ],
    featured: true,
  },
  {
    icon: BuildingOffice2Icon,
    tag: 'Corporativos',
    title: 'IA con gobierno y control',
    points: [
      'Agentes de IA sobre datos internos',
      'Despliegue en tu nube o infraestructura',
      'Roles, permisos y bitácoras de auditoría',
      'Acompañamiento y mejora continua',
    ],
  },
];

const steps = [
  { title: 'Diagnóstico gratuito', text: 'En una llamada de 30 minutos identificamos dónde la tecnología te da el mayor retorno.' },
  { title: 'Prototipo', text: 'Construimos una primera versión con tus datos reales para que veas resultados antes de escalar.' },
  { title: 'Implementación', text: 'Integramos la solución con tus herramientas, publicamos tus apps y capacitamos a tu equipo.' },
  { title: 'Mejora continua', text: 'Medimos resultados, ajustamos y agregamos nuevas automatizaciones conforme creces.' },
];

const integrations = [
  'WhatsApp',
  'Instagram',
  'Shopify',
  'Mercado Libre',
  'Google Sheets',
  'Excel',
  'Gmail',
  'Outlook',
  'Odoo',
  'SAP',
  'HubSpot',
  'Tu sistema actual',
];

const faqs = [
  {
    q: '¿También desarrollan apps, CRM y sistemas en la nube?',
    a: 'Sí. Además de IA, desarrollamos apps para iOS y Android, CRMs a la medida y conectamos tus sistemas a la nube. Lo mejor es cuando trabajan juntos: la IA atiende, el CRM guarda y la app le da acceso a tus clientes y a tu equipo.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende del alcance. Una tienda puede empezar con un asistente sencillo y una empresa grande con varios sistemas integrados. En el diagnóstico gratuito te damos una cotización clara, sin compromiso.',
  },
  {
    q: '¿En cuánto tiempo veo resultados?',
    a: 'Las soluciones más comunes, como un asistente de WhatsApp o una automatización de correos, pueden estar funcionando en pocas semanas. Apps y CRMs completos se entregan por etapas para que empieces a usarlos pronto.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Tus datos son tuyos. Usamos conexiones cifradas, accesos por roles y, para corporativos, podemos desplegar todo en tu propia infraestructura.',
  },
  {
    q: '¿Funciona con los sistemas que ya uso?',
    a: 'Sí. Nos conectamos con WhatsApp, hojas de cálculo, tiendas en línea, ERPs y CRMs. Si tu sistema tiene API o base de datos, lo integramos.',
  },
  { q: '¿Facturan?', a: 'Sí, facturamos todos nuestros productos y servicios.' },
];

const currency = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 });
const number = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 0 });

// Share of repetitive work we assume can be automated; kept conservative on purpose.
const AUTOMATION_RATE = 0.5;
const WEEKS_PER_MONTH = 4.33;

const HeroDemo = () => (
  <DemoCarousel
    items={heroDemos}
    label="Ejemplos por tipo de solución"
    renderFooter={({ industry }) => (
      <Link to={`/industrias/${industry.slug}`} className="ai-link ai-hero_demo-link">
        Ver la solución completa para {industry.name.toLowerCase()} <ArrowRightIcon />
      </Link>
    )}
  />
);

const SavingsCalculator = () => {
  const [people, setPeople] = useState(5);
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(150);

  const hoursSaved = people * hours * WEEKS_PER_MONTH * AUTOMATION_RATE;
  const monthly = hoursSaved * rate;

  const fields = [
    { label: 'Personas haciendo tareas repetitivas', value: people, set: setPeople, min: 1, max: 200, step: 1, format: number.format },
    { label: 'Horas por semana, por persona', value: hours, set: setHours, min: 1, max: 40, step: 1, format: (v) => `${v} h` },
    { label: 'Costo por hora de tu equipo', value: rate, set: setRate, min: 50, max: 1000, step: 10, format: currency.format },
  ];

  return (
    <div className="ai-calc">
      <div className="ai-calc_inputs">
        {fields.map((field) => (
          <label key={field.label} className="ai-range">
            <span className="ai-range_top">
              <span>{field.label}</span>
              <strong>{field.format(field.value)}</strong>
            </span>
            <input
              type="range"
              min={field.min}
              max={field.max}
              step={field.step}
              value={field.value}
              onChange={(e) => field.set(Number(e.target.value))}
            />
          </label>
        ))}
      </div>
      <div className="ai-calc_result" aria-live="polite">
        <p className="ai-calc_label">Ahorro estimado al mes</p>
        <p className="ai-calc_value">{currency.format(monthly)}</p>
        <div className="ai-calc_split">
          <div>
            <p className="ai-calc_small">{number.format(hoursSaved)} h</p>
            <p className="ai-calc_caption">liberadas al mes</p>
          </div>
          <div>
            <p className="ai-calc_small">{currency.format(monthly * 12)}</p>
            <p className="ai-calc_caption">al año</p>
          </div>
        </div>
        <p className="ai-calc_note">
          Estimación suponiendo que automatizamos el 50% de esas tareas. En el diagnóstico calculamos tu caso real.
        </p>
      </div>
    </div>
  );
};

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useReveal();
  usePageMeta(
    'InfiniStart | Inteligencia artificial, apps móviles, CRM y nube para empresas',
    'Implementamos inteligencia artificial, apps móviles, CRM y sistemas en la nube para tiendas, pymes, corporativos y gobierno. Agenda tu diagnóstico gratuito.'
  );

  const goTo = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <div className="ai-page">
      <SiteHeader />

      <main>
        <section className="ai-hero">
          <div className="ai-container ai-hero_grid">
            <div className="ai-hero_copy">
              <p className="ai-eyebrow">
                <SparklesIcon /> IA · Apps móviles · CRM · Nube
              </p>
              <h1>
                Tu negocio, trabajando <em>24/7</em>.
              </h1>
              <p className="ai-lead">
                Creamos inteligencia artificial, apps móviles, CRMs y sistemas en la nube que atienden a tus clientes,
                automatizan tareas y conectan toda tu operación. Para la tienda de la esquina, la empresa que está creciendo
                y el corporativo que necesita escalar.
              </p>
              <div className="ai-hero_actions">
                <a href="#contacto" className="ai-btn ai-btn--primary" onClick={(e) => goTo(e, 'contacto')}>
                  Agenda tu diagnóstico gratis
                  <ArrowRightIcon />
                </a>
                <a href="#industrias" className="ai-btn ai-btn--ghost" onClick={(e) => goTo(e, 'industrias')}>
                  Soluciones para tu negocio
                </a>
              </div>
              <ul className="ai-hero_checks">
                <li>
                  <CheckIcon /> Integración con tus sistemas
                </li>
                <li>
                  <CheckIcon /> Diagnóstico sin costo
                </li>
                <li>
                  <CheckIcon /> Facturamos
                </li>
              </ul>
            </div>
            <HeroDemo />
          </div>
        </section>

        <section className="ai-stats">
          <div className="ai-container ai-stats_grid">
            <div className="ai-reveal">
              <p className="ai-stat">24/7</p>
              <p>Atención sin horarios ni días festivos</p>
            </div>
            <div className="ai-reveal">
              <p className="ai-stat">Segundos</p>
              <p>En lugar de horas para responder a un cliente</p>
            </div>
            <div className="ai-reveal">
              <p className="ai-stat">Semanas</p>
              <p>No meses, para tener tu primera solución funcionando</p>
            </div>
            <div className="ai-reveal">
              <p className="ai-stat">Cualquier tamaño</p>
              <p>Desde un local hasta cientos de sucursales</p>
            </div>
          </div>
        </section>

        <section id="servicios" className="ai-section">
          <div className="ai-container">
            <div className="ai-heading ai-reveal">
              <p className="ai-kicker">Servicios</p>
              <h2>Cuatro tecnologías, un solo equipo</h2>
              <p>
                Cada una resuelve un problema por sí sola. Juntas, la IA atiende, el CRM recuerda, la app conecta a tus
                clientes y la nube mantiene todo sincronizado.
              </p>
            </div>
            <div className="ai-services">
              {services.map(({ icon: Icon, title, text, points }) => (
                <article key={title} className="ai-service ai-reveal">
                  <span className="ai-icon">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>
                        <CheckIcon />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-section ai-section--muted">
          <div className="ai-container ai-pain">
            <div className="ai-reveal">
              <p className="ai-kicker">¿Te suena familiar?</p>
              <h2>Si tu equipo hace esto todos los días, la tecnología lo puede hacer por ti.</h2>
            </div>
            <ul className="ai-pain_list">
              {painPoints.map((point) => (
                <li key={point} className="ai-reveal">
                  <PlusIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="industrias" className="ai-section">
          <div className="ai-container">
            <div className="ai-heading ai-reveal">
              <p className="ai-kicker">Industrias</p>
              <h2>Elige tu tipo de negocio</h2>
              <p>Mira en vivo qué podemos hacer por un negocio como el tuyo.</p>
            </div>
            <div className="ai-industry-grid">
              {industries.map(({ slug, name, short, icon: Icon }) => (
                <Link key={slug} to={`/industrias/${slug}`} className="ai-industry-card ai-reveal">
                  <span className="ai-icon">
                    <Icon />
                  </span>
                  <span className="ai-industry-card_name">{name}</span>
                  <span className="ai-industry-card_text">{short}</span>
                  <span className="ai-industry-card_go">
                    Ver solución <ArrowRightIcon />
                  </span>
                </Link>
              ))}
            </div>
            <p className="ai-industry-more ai-reveal">
              ¿No ves tu giro?{' '}
              <a href="#contacto" onClick={(e) => goTo(e, 'contacto')}>
                Cuéntanos de tu negocio
              </a>{' '}
              y diseñamos la solución a tu medida.
            </p>
          </div>
        </section>

        <section id="soluciones" className="ai-section ai-section--muted">
          <div className="ai-container">
            <div className="ai-heading ai-reveal">
              <p className="ai-kicker">Inteligencia artificial</p>
              <h2>IA aplicada a lo que mueve tu negocio</h2>
              <p>Nada de experimentos: soluciones concretas que se traducen en ventas, tiempo y control.</p>
            </div>
            <div className="ai-cards">
              {solutions.map(({ icon: Icon, title, text }) => (
                <article key={title} className="ai-card ai-reveal">
                  <span className="ai-icon">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-section">
          <div className="ai-container">
            <div className="ai-heading ai-reveal">
              <p className="ai-kicker">Para quién</p>
              <h2>Una solución para cada etapa de tu empresa</h2>
              <p>Empiezas con lo que necesitas hoy y creces sin cambiar de proveedor.</p>
            </div>
            <div className="ai-segments">
              {segments.map(({ icon: Icon, tag, title, points, featured }) => (
                <article key={tag} className={`ai-segment ai-reveal ${featured ? 'ai-segment--featured' : ''}`}>
                  <span className="ai-icon">
                    <Icon />
                  </span>
                  <p className="ai-segment_tag">{tag}</p>
                  <h3>{title}</h3>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>
                        <CheckIcon />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a href="#contacto" className="ai-link" onClick={(e) => goTo(e, 'contacto')}>
                    Quiero esto <ArrowRightIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ahorro" className="ai-section ai-section--dark">
          <div className="ai-container">
            <div className="ai-heading ai-reveal">
              <p className="ai-kicker">Calcula tu ahorro</p>
              <h2>¿Cuánto te está costando hacerlo a mano?</h2>
              <p>Mueve los controles y descubre cuánto tiempo y dinero podrías recuperar cada mes.</p>
            </div>
            <div className="ai-reveal">
              <SavingsCalculator />
            </div>
          </div>
        </section>

        <section id="proceso" className="ai-section">
          <div className="ai-container">
            <div className="ai-heading ai-reveal">
              <p className="ai-kicker">Proceso</p>
              <h2>De la idea a resultados, sin complicaciones</h2>
            </div>
            <ol className="ai-steps">
              {steps.map((step, index) => (
                <li key={step.title} className="ai-reveal">
                  <span className="ai-steps_num">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ai-section ai-section--muted">
          <div className="ai-container ai-trust">
            <div className="ai-reveal">
              <p className="ai-kicker">Confianza</p>
              <h2>Se conecta con lo que ya usas. Tus datos, siempre tuyos.</h2>
              <ul className="ai-trust_points">
                <li>
                  <LockClosedIcon />
                  <span>
                    <strong>Privacidad primero.</strong> Conexiones cifradas y acceso por roles.
                  </span>
                </li>
                <li>
                  <ShieldCheckIcon />
                  <span>
                    <strong>Supervisión humana.</strong> Tú decides qué hace la IA sola y qué requiere aprobación.
                  </span>
                </li>
                <li>
                  <ArrowTrendingUpIcon />
                  <span>
                    <strong>Resultados medibles.</strong> Cada solución llega con indicadores claros de impacto.
                  </span>
                </li>
              </ul>
            </div>
            <ul className="ai-integrations ai-reveal">
              {integrations.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="preguntas" className="ai-section">
          <div className="ai-container ai-faq">
            <div className="ai-heading ai-reveal">
              <p className="ai-kicker">Preguntas frecuentes</p>
              <h2>Lo que nos preguntan antes de empezar</h2>
            </div>
            <div className="ai-faq_list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.q} className={`ai-faq_item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      {faq.q}
                      <PlusIcon />
                    </button>
                    <div id={`faq-${index}`} className="ai-faq_answer" hidden={!isOpen}>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contacto" className="ai-section ai-section--muted">
          <div className="ai-container ai-contact">
            <div className="ai-reveal">
              <p className="ai-kicker">Empieza hoy</p>
              <h2>Descubre en 30 minutos cómo hacer crecer tu negocio con tecnología.</h2>
              <p className="ai-lead">
                Agenda un diagnóstico gratuito y sin compromiso. Te decimos qué automatizar primero, cuánto cuesta y en
                cuánto tiempo lo verías funcionando.
              </p>
              <a className="ai-mail" href={`mailto:${CONTACT_EMAIL}?subject=Diagn%C3%B3stico%20gratuito`}>
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="ai-reveal">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Home;
