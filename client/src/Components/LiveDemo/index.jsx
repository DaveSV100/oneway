/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { prefersReducedMotion } from '../../hooks';
import { HOLD_MS, STEP_MS, stepsFor } from './timing';
import { AppBody, ChatBody, CloudBody, CrmBody, QuoteBody } from './kinds';

const bodies = { chat: ChatBody, quote: QuoteBody, app: AppBody, crm: CrmBody, cloud: CloudBody };

// Plays a demo step by step: chat messages, a quote being built, an app being used, a CRM deal moving
// or a cloud dashboard syncing. Remount it with a `key` to restart it.
// With `onDone` it stops at the end; without it, it loops.
const LiveDemo = ({ demo, onDone, children }) => {
  const total = stepsFor(demo);
  const [reduced] = useState(prefersReducedMotion);
  const [step, setStep] = useState(reduced ? total : 1);
  const [paused, setPaused] = useState(false);

  // Hovering never stops the animation; it only holds the finished demo on screen while someone reads it.
  useEffect(() => {
    if (reduced || (paused && step >= total)) return undefined;
    const timer = setTimeout(
      () => {
        if (step < total) setStep(step + 1);
        else if (onDone) onDone();
        else setStep(1);
      },
      step < total ? STEP_MS : HOLD_MS
    );
    return () => clearTimeout(timer);
  }, [step, total, paused, reduced, onDone]);

  const Body = bodies[demo.kind] || ChatBody;
  const activeStep = demo.flow
    ? demo.messages.slice(0, step).reduce((max, message) => (message.step > max ? message.step : max), -1)
    : -1;

  // Only mice count: touch devices never fire a matching leave.
  const onPointerEnter = (e) => e.pointerType === 'mouse' && setPaused(true);
  const onPointerLeave = () => setPaused(false);

  return (
    <div
      className={`ai-demo ${paused ? 'is-paused' : ''}`}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {children}
      <div className={`ai-chat ai-chat--${demo.kind}`} role="group" aria-label={`Ejemplo en vivo: ${demo.app}`}>
        <div className="ai-chat_header">
          <span className="ai-chat_avatar">
            <SparklesIcon />
          </span>
          <div>
            <p className="ai-chat_name">{demo.app}</p>
            <p className="ai-chat_status">{demo.channel}</p>
          </div>
          <span className="ai-chat_live">En vivo</span>
        </div>
        <div className="ai-chat_body">
          <Body demo={demo} step={step} />
        </div>
        {demo.flow && (
          <div className="ai-flow">
            <p className="ai-flow_title">Detrás de escena</p>
            <ol>
              {demo.flow.map((node, index) => (
                <li key={index} className={index <= activeStep ? 'is-on' : ''}>
                  <span className={`ai-tag ${node.tag === 'IA' ? 'ai-tag--accent' : ''}`}>{node.tag}</span>
                  <span className="ai-flow_label">{node.label}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveDemo;
