/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TradeWhereInput } from "./TradeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TradeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TradeWhereInput,
  })
  @ValidateNested()
  @Type(() => TradeWhereInput)
  @IsOptional()
  @Field(() => TradeWhereInput, {
    nullable: true,
  })
  every?: TradeWhereInput;

  @ApiProperty({
    required: false,
    type: () => TradeWhereInput,
  })
  @ValidateNested()
  @Type(() => TradeWhereInput)
  @IsOptional()
  @Field(() => TradeWhereInput, {
    nullable: true,
  })
  some?: TradeWhereInput;

  @ApiProperty({
    required: false,
    type: () => TradeWhereInput,
  })
  @ValidateNested()
  @Type(() => TradeWhereInput)
  @IsOptional()
  @Field(() => TradeWhereInput, {
    nullable: true,
  })
  none?: TradeWhereInput;
}
export { TradeListRelationFilter as TradeListRelationFilter };
