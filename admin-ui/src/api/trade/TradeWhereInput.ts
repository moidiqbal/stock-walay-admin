import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TradeWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  scrip?: StringNullableFilter;
  shares?: FloatNullableFilter;
  types?: StringNullableFilter;
  userId?: StringNullableFilter;
};
