import { Watch as TWatch } from "../api/watch/Watch";

export const WATCH_TITLE_FIELD = "contentType";

export const WatchTitle = (record: TWatch): string => {
  return record.contentType || String(record.id);
};
