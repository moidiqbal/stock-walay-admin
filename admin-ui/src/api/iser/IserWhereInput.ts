import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type IserWhereInput = {
  balance?: FloatNullableFilter;
  bank?: StringNullableFilter;
  bio?: StringNullableFilter;
  charges?: FloatNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  email?: StringNullableFilter;
  iBan?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  phone?: StringNullableFilter;
  status?: BooleanNullableFilter;
};
