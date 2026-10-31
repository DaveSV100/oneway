/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, ClipboardDocumentIcon, PlayIcon } from '@heroicons/react/24/outline';
import SiteHeader from '../../Components/SiteHeader';
import SiteFooter from '../../Components/SiteFooter';
import BackBar from '../../Components/BackBar';
import ContactForm from '../../Components/ContactForm';
import packs, { YOUTUBE_CHANNEL, getPack, hideMissingThumb } from '../../data/prompts';
import { usePageMeta, useReveal } from '../../hooks';
import '../Prompts/styles.css';

// Copies with the Clipboard API; on failure (old browsers, no permission) selects the text and tries the legacy
// copy command, leaving the text selected so the user can still copy it by hand.
const CopyButton = ({ text, target }) => {
  const [copied, setCopied] = useState(false);

  const done = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      done();
    } catch {
      const range = document.createRange();
      range.selectNodeContents(target.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      if (document.execCommand('copy')) done();
    }
  };

  return (
    <button type="button" className={`ai-btn ai-btn--sm ${copied ? 'ai-btn--ghost' : 'ai-btn--primary'}`} onClick={copy}>
      {copied ? <CheckIcon /> : <ClipboardDocumentIcon />}
      {copied ? 'Copiado' : 'Copiar'}
    </button>
  );
};

// Text in [brackets] is what the viewer replaces with their own data; it is highlighted but copied as is.
// All-caps brackets such as [COMPLETAR] are instructions for the AI, so they stay plain.
const PromptCard = ({ prompt, index }) => {
  const textRef = useRef(null);
  return (
    <article className="ai-prompt ai-reveal">
      <div className="ai-prompt_head">
        <span className="ai-prompt_title">
          <span className="ai-prompt_num">{index + 1}</span>
          <h3>{prompt.title}</h3>
        </span>
        <CopyButton text={prompt.text} target={textRef} />
      </div>
      <p className="ai-prompt_text" ref={textRef}>
        {prompt.text.split(/(\[[^\]]+\])/).map((part, i) =>
          i % 2 && part !== part.toUpperCase() ? (
            <mark key={i} className="ai-prompt_fill">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </p>
      {prompt.note && <p className="ai-prompt_note">{prompt.note}</p>}
    </article>
  );
};

const PackPage = ({ pack }) => {
  // A pack can exist before its video has a YouTube id; the page then shows no video links.
  const videoUrl = pack.youtubeId && `https://www.youtube.com/watch?v=${pack.youtubeId}`;
  const others = packs.filter((other) => other.slug !== pack.slug).slice(0, 4);

  useReveal();
  usePageMeta(`Prompts: ${pack.title} | InfiniStart`, pack.summary);

  return (
    <div className="ai-page">
      <SiteHeader />
      <BackBar to="/prompts" label="Todos los prompts" />

      <main>
        <section className="ai-hero ai-hero--industry ai-hero--prompts">
          <div className="ai-container ai-pack_grid">
            <div>
              <p className="ai-eyebrow">Prompts del video</p>
              <h1 className="ai-h1--industry">{pack.title}</h1>
              <p className="ai-lead">{pack.summary}</p>
              <div className="ai-hero_actions">
                {videoUrl && (
                  <a href={videoUrl} className="ai-btn ai-btn--ghost" target="_blank" rel="noreferrer">
                    <PlayIcon />
                    Ver el video
                  </a>
                )}
                <a href={`${YOUTUBE_CHANNEL}?sub_confirmation=1`} className="ai-btn ai-btn--primary" target="_blank" rel="noreferrer">
                  Suscríbete al canal
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
            {(pack.image || videoUrl) && (
              <a href={videoUrl || undefined} className="ai-pack_video" target="_blank" rel="noreferrer" aria-label="Ver el video en YouTube">
                {pack.image ? (
                  <img src={pack.image} alt={pack.title} />
                ) : (
                  <img
                    src={`https://i.ytimg.com/vi/${pack.youtubeId}/hqdefault.jpg`}
                    alt=""
                    onLoad={hideMissingThumb}
                    onError={hideMissingThumb}
                  />
                )}
                {videoUrl && <PlayIcon />}
              </a>
            )}
          </div>
        </section>

        <section className="ai-section ai-section--muted ai-prompts_list">
          <div className="ai-container ai-prompts_stack">
            <p className="ai-prompts_hint">
              Copia el prompt, cambia lo que está <mark className="ai-prompt_fill">[entre corchetes]</mark> por los datos de tu
              negocio y pégalo en ChatGPT, Claude o la IA que uses.
            </p>
            {pack.prompts.map((prompt, index) => (
              <PromptCard key={prompt.text} prompt={prompt} index={index} />
            ))}
          </div>
        </section>

        {others.length > 0 && (
          <section className="ai-section">
            <div className="ai-container">
              <div className="ai-heading ai-reveal">
                <p className="ai-kicker">Más prompts</p>
                <h2>De otros videos</h2>
              </div>
              <ul className="ai-chips ai-reveal">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link to={`/prompts/${other.slug}`}>{other.title}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/prompts">Ver todos</Link>
                </li>
              </ul>
            </div>
          </section>
        )}

        <section id="contacto" className="ai-section ai-section--muted">
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
              <ContactForm source={`Prompts: ${pack.title}`} placeholder="Ej. Quiero que la IA conteste mi WhatsApp" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

// Keyed by slug so moving between packs remounts the page and restarts its reveal animations.
const PromptPack = () => {
  const { slug } = useParams();
  const pack = getPack(slug);
  if (!pack) return <Navigate to="/prompts" replace />;
  return <PackPage key={slug} pack={pack} />;
};

export default PromptPack;
