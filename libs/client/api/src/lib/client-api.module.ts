import { PrismaService } from '@crm/shared/api';
import { Module } from '@nestjs/common';
import { ClientResolver } from './client.resolver';

@Module({
  providers: [ClientResolver, PrismaService],
})
export class ClientApiModule {}
