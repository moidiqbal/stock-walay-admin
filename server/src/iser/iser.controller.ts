import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IserService } from "./iser.service";
import { IserControllerBase } from "./base/iser.controller.base";

@swagger.ApiTags("isers")
@common.Controller("isers")
export class IserController extends IserControllerBase {
  constructor(
    protected readonly service: IserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
