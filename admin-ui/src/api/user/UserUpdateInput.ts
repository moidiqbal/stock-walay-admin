import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  balance?: number | null;
  bank?: string | null;
  bio?: string | null;
  charges?: boolean | null;
  city?: string | null;
  country?: string | null;
  email?: string;
  iban?: string | null;
  image?: string | null;
  name?: string | null;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
