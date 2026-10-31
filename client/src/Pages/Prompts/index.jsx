import { Link } from 'react-router-dom';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import SiteHeader from '../../Components/SiteHeader';
import SiteFooter from '../../Components/SiteFooter';
import BackBar from '../../Components/BackBar';
import ContactForm from '../../Components/ContactForm';
import packs, { YOUTUBE_CHANNEL, hideMissingThumb } from '../../data/prompts';
import { usePageMeta, useReveal } from '../../hooks';
import './styles.css';

const Prompts = () => {
  useReveal();
  usePageMeta(
    'Prompts gratis de IA para tu negocio | InfiniStart',
    'Copia los prompts de nuestros videos de YouTube y úsalos hoy en ChatGPT, Claude o la IA que prefieras.'
  );

  return (
    <div className="ai-page">
      <SiteHeader />
      <BackBar to="/" label="Inicio" />

      <main>
        <section className="ai-hero ai-hero--industry ai-hero--prompts">
          <div className="ai-container">
            <div className="ai-prompts_hero">
              <p className="ai-eyebrow">Gratis</p>
              <h1 className="ai-h1--industry">
                Los prompts de nuestros <em>videos</em>, listos para copiar.
              </h1>
              <p className="ai-lead">
                Cada video del canal Infini Start AI tiene aquí sus prompts. Cópialos y pégalos en ChatGPT, Claude o la IA que
                uses.
              </p>
              <div className="ai-hero_actions">
                <a href={`${YOUTUBE_CHANNEL}?sub_confirmation=1`} className="ai-btn ai-btn--primary" target="_blank" rel="noreferrer">
                  Suscríbete al canal
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="ai-section ai-section--muted ai-prompts_list">
          <div className="ai-container">
            <div className="ai-cards ai-cards--two">
              {packs.map((pack) => (
                <Link key={pack.slug} to={`/prompts/${pack.slug}`} className="ai-card ai-pack-card ai-reveal">
                  {(pack.image || pack.youtubeId) && (
                    <span className="ai-pack-card_thumb">
                      {pack.image ? (
                        <img src={pack.image} alt="" loading="lazy" />
                      ) : (
                        <img
                          src={`https://i.ytimg.com/vi/${pack.youtubeId}/hqdefault.jpg`}
                          alt=""
                          loading="lazy"
                          onLoad={hideMissingThumb}
                          onError={hideMissingThumb}
                        />
                      )}
                      <PlayIcon />
                    </span>
                  )}
                  <span className="ai-tag ai-tag--accent">
                    {pack.prompts.length} {pack.prompts.length === 1 ? 'prompt' : 'prompts'}
                  </span>
                  <h3>{pack.title}</h3>
                  <p>{pack.summary}</p>
                  <span className="ai-link">
                    Ver los prompts
                    <ArrowRightIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="ai-section">
          <div className="ai-container ai-contact">
            <div className="ai-reveal">
              <p className="ai-kicker">Diagnóstico gratuito</p>
              <h2>¿Quieres que la IA haga esto sola en tu negocio?</h2>
              <p className="ai-lead">
                Conectamos la IA a tu WhatsApp, tu CRM o tu sistema para que responda, agende y registre sin que copies y
                pegues.
              </p>
            </div>
            <div className="ai-reveal">
              <ContactForm source="Prompts" placeholder="Ej. Quiero que la IA conteste mi WhatsApp" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Prompts;
