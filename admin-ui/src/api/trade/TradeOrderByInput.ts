import { SortOrder } from "../../util/SortOrder";

export type TradeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  scrip?: SortOrder;
  shares?: SortOrder;
  types?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
