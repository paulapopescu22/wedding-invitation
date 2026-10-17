export interface RsvpPayload {
  name: string;
  email: string;
  attending: boolean;
}

export interface RsvpResponse extends RsvpPayload {
  id: number;
  created_at: string;
}
