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
import { IserWhereUniqueInput } from "./IserWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IserUpdateInput } from "./IserUpdateInput";

@ArgsType()
class UpdateIserArgs {
  @ApiProperty({
    required: true,
    type: () => IserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IserWhereUniqueInput)
  @Field(() => IserWhereUniqueInput, { nullable: false })
  where!: IserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => IserUpdateInput,
  })
  @ValidateNested()
  @Type(() => IserUpdateInput)
  @Field(() => IserUpdateInput, { nullable: false })
  data!: IserUpdateInput;
}

export { UpdateIserArgs as UpdateIserArgs };
