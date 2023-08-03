import { IserWhereInput } from "./IserWhereInput";
import { IserOrderByInput } from "./IserOrderByInput";

export type IserFindManyArgs = {
  where?: IserWhereInput;
  orderBy?: Array<IserOrderByInput>;
  skip?: number;
  take?: number;
};
