import { WatchWhereInput } from "./WatchWhereInput";
import { WatchOrderByInput } from "./WatchOrderByInput";

export type WatchFindManyArgs = {
  where?: WatchWhereInput;
  orderBy?: Array<WatchOrderByInput>;
  skip?: number;
  take?: number;
};
