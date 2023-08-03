import { InputJsonValue } from "../../types";

export type PostUpdateInput = {
  attachments?: InputJsonValue;
  description?: string | null;
  title?: string | null;
  userId?: string | null;
};
