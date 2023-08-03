import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  balance?: SortOrder;
  bank?: SortOrder;
  bio?: SortOrder;
  charges?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  created_at?: SortOrder;
  email?: SortOrder;
  iban?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  roles?: SortOrder;
  updated_at?: SortOrder;
  username?: SortOrder;
};
