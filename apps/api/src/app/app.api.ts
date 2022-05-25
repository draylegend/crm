import { AppointmentApiModule } from '@crm/appointment/api';
import { AuthApi } from '@crm/auth/api';
import { ClientApiModule } from '@crm/client/api';
import { SharedApi } from '@crm/shared/api';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    AppointmentApiModule,
    AuthApi,
    ClientApiModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), '/schema.gql'),
      driver: ApolloDriver,
    }),
    SharedApi,
  ],
})
export class AppApi {}
