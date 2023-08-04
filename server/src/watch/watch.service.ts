import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WatchServiceBase } from "./base/watch.service.base";

@Injectable()
export class WatchService extends WatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
