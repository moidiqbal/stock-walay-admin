import { Iser as TIser } from "../api/iser/Iser";

export const ISER_TITLE_FIELD = "name";

export const IserTitle = (record: TIser): string => {
  return record.name || String(record.id);
};
