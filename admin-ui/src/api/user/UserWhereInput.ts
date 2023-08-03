import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  balance?: FloatNullableFilter;
  bank?: StringNullableFilter;
  bio?: StringNullableFilter;
  charges?: BooleanNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  email?: StringFilter;
  iban?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  username?: StringFilter;
};
