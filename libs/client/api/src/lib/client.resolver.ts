import { PrismaService } from '@crm/shared/api';
import { Query, Resolver } from '@nestjs/graphql';
import { Client, ClientType } from './types';

@Resolver()
export class ClientResolver {
  constructor(private readonly p: PrismaService) {}

  @Query(() => [ClientType])
  clients(): Promise<Client[]> {
    return this.p.client.findMany();
  }
}
