import emailjs from '@emailjs/browser';
import type { RsvpPayload } from './types';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_GUEST_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_GUEST_ID;
const TEMPLATE_COUPLE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_COUPLE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const COUPLE_EMAIL = import.meta.env.VITE_COUPLE_EMAIL;

const isConfigured = Boolean(SERVICE_ID && TEMPLATE_GUEST_ID && TEMPLATE_COUPLE_ID && PUBLIC_KEY);

export async function sendRsvpEmails(payload: RsvpPayload): Promise<void> {
  if (!isConfigured) {
    console.warn('EmailJS nu este configurat — emailurile de RSVP nu au fost trimise.');
    return;
  }

  const attendingText = payload.attending ? 'Da, va participa' : 'Nu va putea participa';

  const guestSend = emailjs.send(
    SERVICE_ID,
    TEMPLATE_GUEST_ID,
    {
      to_name: payload.name,
      to_email: payload.email,
      attending_text: attendingText,
    },
    { publicKey: PUBLIC_KEY },
  );

  const coupleSend = emailjs.send(
    SERVICE_ID,
    TEMPLATE_COUPLE_ID,
    {
      to_email: COUPLE_EMAIL,
      guest_name: payload.name,
      guest_email: payload.email,
      attending_text: attendingText,
    },
    { publicKey: PUBLIC_KEY },
  );

  await Promise.all([guestSend, coupleSend]);
}
