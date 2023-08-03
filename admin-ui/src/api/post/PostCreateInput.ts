import { InputJsonValue } from "../../types";

export type PostCreateInput = {
  attachments?: InputJsonValue;
  description?: string | null;
  title?: string | null;
  userId?: string | null;
};
