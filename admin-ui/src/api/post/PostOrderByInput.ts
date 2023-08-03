import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  attachments?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
