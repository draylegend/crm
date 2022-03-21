import { PrismaService } from '@crm/shared/api';
import { Query, Resolver } from '@nestjs/graphql';
import { ClientType } from './types';

@Resolver()
export class ClientResolver {
  constructor(private readonly p: PrismaService) {}

  @Query(() => [ClientType])
  clients(): Promise<ClientType[]> {
    return this.p.client.findMany();
  }
}
