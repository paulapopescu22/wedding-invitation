import type { RsvpPayload, RsvpResponse } from './types';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8000/api';

export async function submitRsvp(payload: RsvpPayload): Promise<RsvpResponse> {
  const res = await fetch(`${API_URL}/rsvp/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(body || `Request failed with status ${res.status}`);
  }

  return res.json();
}
