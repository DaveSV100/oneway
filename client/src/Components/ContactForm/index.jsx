/* eslint-disable react/prop-types */
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { CONTACT_EMAIL } from '../../data/contact';

const sizeOptions = ['1 a 10 personas', '11 a 50 personas', '51 a 250 personas', 'Más de 250 personas'];
const interestOptions = ['Inteligencia artificial', 'App móvil', 'CRM', 'Nube y conexión', 'Aún no lo sé'];
const emptyValues = { name: '', email: '', company: '', size: '', interest: '', message: '' };

// `source` tells the team which page the request came from (e.g. an industry name).
const ContactForm = ({ source = 'Página principal', placeholder }) => {
  const [values, setValues] = useState(emptyValues);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.message) {
      setStatus('invalid');
      return;
    }
    setStatus('sending');

    const message = [
      `[Solicitud desde infinistart.com · ${source}]`,
      `Empresa: ${values.company || 'No indicada'}`,
      `Tamaño: ${values.size || 'No indicado'}`,
      `Interés: ${values.interest || 'No indicado'}`,
      '',
      values.message,
    ].join('\n');

    emailjs
      .send('service_hsvkjua', 'template_dng1yma', { user_name: values.name, user_email: values.email, message }, 'ZUpCSmwiCyTvl-B8J')
      .then(
        () => {
          setStatus('sent');
          setValues(emptyValues);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
        }
      );
  };

  return (
    <form className="ai-form" onSubmit={handleSubmit} noValidate>
      <div className="ai-form_row">
        <label>
          Nombre
          <input name="name" type="text" autoComplete="name" value={values.name} onChange={handleChange} required />
        </label>
        <label>
          Correo
          <input name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange} required />
        </label>
      </div>
      <div className="ai-form_row">
        <label>
          Empresa o negocio
          <input name="company" type="text" autoComplete="organization" value={values.company} onChange={handleChange} />
        </label>
        <label>
          Tamaño del equipo
          <select name="size" value={values.size} onChange={handleChange}>
            <option value="">Selecciona</option>
            {sizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        ¿Qué te interesa?
        <select name="interest" value={values.interest} onChange={handleChange}>
          <option value="">Selecciona</option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        ¿Qué te gustaría resolver?
        <textarea
          name="message"
          rows="4"
          placeholder={placeholder || 'Ej. Recibimos 200 mensajes diarios por WhatsApp y queremos responder más rápido.'}
          value={values.message}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className="ai-btn ai-btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Solicitar diagnóstico gratuito'}
        <ArrowRightIcon />
      </button>
      {status === 'sent' && <p className="ai-form_msg ai-form_msg--ok">¡Gracias! Te contactaremos en menos de 24 horas hábiles.</p>}
      {status === 'invalid' && <p className="ai-form_msg ai-form_msg--error">Por favor llena nombre, correo y mensaje.</p>}
      {status === 'error' && (
        <p className="ai-form_msg ai-form_msg--error">
          No pudimos enviar tu mensaje. Escríbenos a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
