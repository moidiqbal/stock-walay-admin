/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WatchWhereUniqueInput } from "./WatchWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WatchUpdateInput } from "./WatchUpdateInput";

@ArgsType()
class UpdateWatchArgs {
  @ApiProperty({
    required: true,
    type: () => WatchWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WatchWhereUniqueInput)
  @Field(() => WatchWhereUniqueInput, { nullable: false })
  where!: WatchWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WatchUpdateInput,
  })
  @ValidateNested()
  @Type(() => WatchUpdateInput)
  @Field(() => WatchUpdateInput, { nullable: false })
  data!: WatchUpdateInput;
}

export { UpdateWatchArgs as UpdateWatchArgs };
