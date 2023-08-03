import { Module } from "@nestjs/common";
import { IserModuleBase } from "./base/iser.module.base";
import { IserService } from "./iser.service";
import { IserController } from "./iser.controller";
import { IserResolver } from "./iser.resolver";

@Module({
  imports: [IserModuleBase],
  controllers: [IserController],
  providers: [IserService, IserResolver],
  exports: [IserService],
})
export class IserModule {}
