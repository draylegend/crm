import { ClientInput, ClientType } from '@crm/client/api';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

export interface AppointmentType {
  id: string;
  start: number;
  duration: number;
  client: ClientType;
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
  client!: ClientType;
}

@InputType()
export class AppointmentInput {
  @Field({ nullable: true })
  id?: string;

  @Field()
  start!: number;

  @Field()
  duration!: number;

  @Field(() => ClientInput)
  client!: ClientInput;
}
