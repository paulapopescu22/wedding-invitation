import { useState, type FormEvent } from 'react';
import { submitRsvp } from '../api';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState(true);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await submitRsvp({ name, email, attending });
      setStatus('success');
      setName('');
      setEmail('');
      setAttending(true);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'A apărut o eroare.');
    }
  };

  if (status === 'success') {
    return (
      <section className="rsvp">
        <div className="rsvp__success">
          <span className="rsvp__success-icon" aria-hidden="true">
            ✓
          </span>
          <h2>Mulțumim!</h2>
          <p>Confirmarea ta a fost înregistrată cu succes.</p>
          <button className="rsvp__again" onClick={() => setStatus('idle')}>
            Trimite o altă confirmare
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="rsvp">
      <h2 className="rsvp__title">Confirmați Prezența</h2>
      <form className="rsvp__form" onSubmit={handleSubmit}>
        <label className="rsvp__field">
          <span>Nume complet</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Numele dvs."
            required
          />
        </label>

        <label className="rsvp__field">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@exemplu.com"
            required
          />
        </label>

        <div className="rsvp__attending">
          <span>Voi participa?</span>
          <div className="rsvp__toggle">
            <button
              type="button"
              className={attending ? 'rsvp__toggle-btn rsvp__toggle-btn--active' : 'rsvp__toggle-btn'}
              onClick={() => setAttending(true)}
            >
              Da, cu drag
            </button>
            <button
              type="button"
              className={!attending ? 'rsvp__toggle-btn rsvp__toggle-btn--active' : 'rsvp__toggle-btn'}
              onClick={() => setAttending(false)}
            >
              Din păcate nu
            </button>
          </div>
        </div>

        {status === 'error' && <p className="rsvp__error">{errorMessage}</p>}

        <button type="submit" className="rsvp__submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Se trimite...' : 'Trimite Confirmarea'}
        </button>
      </form>
    </section>
  );
}
