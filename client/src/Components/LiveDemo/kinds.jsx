/* eslint-disable react/prop-types */
import {
  ArrowPathIcon,
  BellAlertIcon,
  CheckCircleIcon,
  CheckIcon,
  EnvelopeIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// Each body receives the demo and the current `step` (1 … stepsFor(demo)) and renders that moment.

const Receipt = ({ card }) => (
  <div className="ai-receipt">
    <p className="ai-receipt_title">{card.title}</p>
    <dl>
      {card.rows.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
    {card.total && (
      <p className="ai-receipt_total">
        <span>{card.total[0]}</span>
        <strong>{card.total[1]}</strong>
      </p>
    )}
    {card.cta && <span className="ai-receipt_cta">{card.cta}</span>}
  </div>
);

const Message = ({ message }) => {
  if (message.from === 'system') {
    return <p className="ai-sys">{message.text}</p>;
  }
  return (
    <div className={`ai-msg ai-msg--${message.from}`}>
      {message.text && <p className="ai-bubble">{message.text}</p>}
      {message.card && <Receipt card={message.card} />}
    </div>
  );
};

export const ChatBody = ({ demo, step }) => {
  const shown = demo.messages.slice(0, step);
  const typing = step < demo.messages.length && demo.messages[step].from === 'ai';
  return (
    <div className="ai-chat_stream">
      {shown.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      {typing && (
        <div className="ai-msg ai-msg--ai" aria-hidden="true">
          <p className="ai-bubble ai-bubble--typing">
            <span></span>
            <span></span>
            <span></span>
          </p>
        </div>
      )}
    </div>
  );
};

// Step 1: request arrives · 2…n+1: one line item each · n+2: total · n+3: sent.
export const QuoteBody = ({ demo, step }) => {
  const n = demo.items.length;
  const building = step >= 2 && step <= n + 1;
  return (
    <div className="ai-q">
      <div className="ai-q_mail">
        <span className="ai-q_mail-icon">
          <EnvelopeIcon />
        </span>
        <div>
          <p className="ai-q_from">{demo.from}</p>
          <p className="ai-q_request">{demo.request}</p>
        </div>
      </div>
      <p className={`ai-q_status ${building ? 'is-on' : ''}`}>
        <SparklesIcon /> La IA está armando la cotización con tus precios…
      </p>
      <div className="ai-q_doc">
        <div className="ai-q_head">
          <div>
            <p className="ai-q_title">{demo.doc}</p>
            <p className="ai-q_client">{demo.client}</p>
          </div>
          <span className="ai-q_badge">PDF</span>
        </div>
        <div className="ai-q_rows">
          {demo.items.map(([label, amount], index) =>
            step >= index + 2 ? (
              <div key={label} className="ai-q_row is-on">
                <span>{label}</span>
                <span>{amount}</span>
              </div>
            ) : (
              <div key={label} className="ai-q_row ai-q_row--skeleton">
                <span></span>
                <span></span>
              </div>
            )
          )}
        </div>
        <div className={`ai-q_total ${step >= n + 2 ? 'is-on' : ''}`}>
          <span>{demo.total[0]}</span>
          <strong>{step >= n + 2 ? demo.total[1] : '—'}</strong>
        </div>
      </div>
      {step >= n + 3 && (
        <p className="ai-q_sent">
          <CheckCircleIcon /> {demo.sent}
        </p>
      )}
    </div>
  );
};

// Step 1: empty form · 2…n+1: fill one field each · n+2: tap the button · n+3: confirmation.
export const AppBody = ({ demo, step }) => {
  const n = demo.fields.length;
  return (
    <div className="ai-app">
      <div className="ai-phone">
        <div className="ai-phone_notch"></div>
        <div className="ai-phone_screen">
          <p className="ai-phone_app">{demo.app}</p>
          <p className="ai-phone_title">{demo.screen}</p>
          <ul className="ai-phone_fields">
            {demo.fields.map(([label, value], index) => {
              const filled = step >= index + 2;
              return (
                <li key={label} className={`${filled ? 'is-on' : ''} ${step === index + 2 ? 'is-tap' : ''}`}>
                  <span>{label}</span>
                  <strong>{filled ? value : '—'}</strong>
                </li>
              );
            })}
          </ul>
          <span className={`ai-phone_btn ${step === n + 2 ? 'is-tap' : ''} ${step >= n + 2 ? 'is-ready' : ''}`}>{demo.button}</span>
          {step >= n + 3 && (
            <div className="ai-phone_done">
              <CheckCircleIcon />
              <p className="ai-phone_done-title">{demo.done[0]}</p>
              <p>{demo.done[1]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Step k: the card sits in moves[k-1].col and the first k activity entries are listed.
export const CrmBody = ({ demo, step }) => {
  const current = demo.moves[Math.min(step, demo.moves.length) - 1];
  const won = step >= demo.moves.length;
  return (
    <div className="ai-crm">
      <div className="ai-crm_board">
        {demo.columns.map((column, index) => (
          <div key={column} className={`ai-crm_col ${index === current.col ? 'is-active' : ''}`}>
            <p className="ai-crm_head">{column}</p>
            {index === current.col && (
              <div key={`card-${index}`} className={`ai-crm_card ${won ? 'is-won' : ''}`}>
                <p className="ai-crm_card-title">{demo.card.title}</p>
                <p className="ai-crm_card-value">{demo.card.value}</p>
              </div>
            )}
            <span className="ai-crm_skel"></span>
            {index % 2 === 0 && <span className="ai-crm_skel"></span>}
          </div>
        ))}
      </div>
      <div className="ai-crm_log">
        <p className="ai-crm_log-title">Actividad · {demo.card.title}</p>
        <ol>
          {demo.moves.slice(0, step).map((move, index) => (
            <li key={index} className={index === step - 1 ? 'is-new' : ''}>
              <CheckIcon />
              <span>{move.log}</span>
              <time>{index === step - 1 ? 'ahora' : `hace ${(step - 1 - index) * 2} min`}</time>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const defaultBars = [38, 52, 45, 66, 58, 80, 92];

// Step 1…s: one more source finishes syncing · s+1: metrics and chart · s+2: alert.
export const CloudBody = ({ demo, step }) => {
  const s = demo.sources.length;
  const loaded = step > s;
  return (
    <div className="ai-cloud">
      <div className="ai-cloud_sources">
        {demo.sources.map((source, index) => {
          const synced = step > index;
          return (
            <div key={source} className={`ai-cloud_src ${synced ? 'is-on' : ''}`}>
              {synced ? <CheckCircleIcon /> : <ArrowPathIcon className="ai-spin" />}
              <span>{source}</span>
            </div>
          );
        })}
      </div>
      <div className="ai-cloud_metrics">
        {demo.metrics.map(([label, value]) => (
          <div key={label} className={loaded ? 'is-on' : ''}>
            <p className="ai-cloud_label">{label}</p>
            <p className="ai-cloud_value">{loaded ? value : '—'}</p>
          </div>
        ))}
      </div>
      <div className="ai-cloud_chart">
        <p className="ai-cloud_label">Últimos 7 días</p>
        <div className="ai-cloud_bars">
          {(demo.bars || defaultBars).map((height, index) => (
            <span key={index} style={{ height: loaded ? `${height}%` : '6%' }}></span>
          ))}
        </div>
      </div>
      {step > s + 1 && (
        <p className="ai-cloud_alert">
          <BellAlertIcon /> {demo.alert}
        </p>
      )}
    </div>
  );
};
