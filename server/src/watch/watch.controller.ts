import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WatchService } from "./watch.service";
import { WatchControllerBase } from "./base/watch.controller.base";

@swagger.ApiTags("watches")
@common.Controller("watches")
export class WatchController extends WatchControllerBase {
  constructor(
    protected readonly service: WatchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
