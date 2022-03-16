import { AppointmentApiModule } from '@crm/appointment/api';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    AppointmentApiModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), '/schema.gql'),
      driver: ApolloDriver,
    }),
  ],
})
export class AppModule {}
