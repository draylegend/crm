import { Client, ClientType } from '@crm/client/api';
import { Field, ObjectType } from '@nestjs/graphql';

export interface AppointmentType {
  id: string;
  start: number;
  duration: number;
  client: Client;
}

@ObjectType()
export class AppointmentType {
  @Field()
  id!: string;

  @Field()
  start!: number;

  @Field()
  duration!: number;

  @Field(() => ClientType)
  client!: Client;
}
