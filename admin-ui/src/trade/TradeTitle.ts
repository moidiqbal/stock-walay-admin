import { Trade as TTrade } from "../api/trade/Trade";

export const TRADE_TITLE_FIELD = "scrip";

export const TradeTitle = (record: TTrade): string => {
  return record.scrip || String(record.id);
};
