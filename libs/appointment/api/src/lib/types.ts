import { Field, ObjectType } from '@nestjs/graphql';
import { Appointment } from '@prisma/client';

@ObjectType()
export abstract class AppointmentType implements Appointment {
  @Field()
  abstract id: string;

  @Field()
  abstract start: number;

  @Field()
  abstract duration: number;
}
