import { JsonValue } from "type-fest";

export type Post = {
  attachments: JsonValue;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
