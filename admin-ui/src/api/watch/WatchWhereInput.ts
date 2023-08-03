import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WatchWhereInput = {
  change?: FloatNullableFilter;
  contentType?: StringNullableFilter;
  cPrice?: FloatNullableFilter;
  id?: StringFilter;
  scrip?: StringNullableFilter;
  soldAt?: StringNullableFilter;
  sPrice?: FloatNullableFilter;
  userId?: StringNullableFilter;
};
