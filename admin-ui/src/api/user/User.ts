import { JsonValue } from "type-fest";

export type User = {
  balance: number | null;
  bank: string | null;
  bio: string | null;
  charges: boolean | null;
  city: string | null;
  country: string | null;
  created_at: Date;
  email: string;
  iban: string | null;
  id: string;
  image: string | null;
  name: string | null;
  phone: string | null;
  roles: JsonValue;
  updated_at: Date;
  username: string;
};
