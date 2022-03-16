import { Field, ObjectType } from '@nestjs/graphql';

export interface AppointmentType {
  id: string;
  start: number;
  duration: number;
}

@ObjectType()
export class AppointmentType {
  @Field()
  id!: string;

  @Field()
  start!: number;

  @Field()
  duration!: number;
}
