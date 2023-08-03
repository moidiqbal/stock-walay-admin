/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Watch } from "@prisma/client";

export class WatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WatchCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.WatchCountArgs>
  ): Promise<number> {
    return this.prisma.watch.count(args);
  }

  async findMany<T extends Prisma.WatchFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WatchFindManyArgs>
  ): Promise<Watch[]> {
    return this.prisma.watch.findMany(args);
  }
  async findOne<T extends Prisma.WatchFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WatchFindUniqueArgs>
  ): Promise<Watch | null> {
    return this.prisma.watch.findUnique(args);
  }
  async create<T extends Prisma.WatchCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WatchCreateArgs>
  ): Promise<Watch> {
    return this.prisma.watch.create<T>(args);
  }
  async update<T extends Prisma.WatchUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WatchUpdateArgs>
  ): Promise<Watch> {
    return this.prisma.watch.update<T>(args);
  }
  async delete<T extends Prisma.WatchDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WatchDeleteArgs>
  ): Promise<Watch> {
    return this.prisma.watch.delete(args);
  }
}
