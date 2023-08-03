import { Module } from "@nestjs/common";
import { WatchModuleBase } from "./base/watch.module.base";
import { WatchService } from "./watch.service";
import { WatchController } from "./watch.controller";
import { WatchResolver } from "./watch.resolver";

@Module({
  imports: [WatchModuleBase],
  controllers: [WatchController],
  providers: [WatchService, WatchResolver],
  exports: [WatchService],
})
export class WatchModule {}
