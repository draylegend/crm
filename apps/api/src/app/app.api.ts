import { AppointmentApiModule } from '@crm/appointment/api';
import { ClientApiModule } from '@crm/client/api';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    AppointmentApiModule,
    ClientApiModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), '/schema.gql'),
      driver: ApolloDriver,
    }),
  ],
})
export class AppApi {}
