import { Query, Resolver } from '@nestjs/graphql';
import { Appointment } from '@prisma/client';
import { AppointmentType } from './types';

@Resolver()
export class AppointmentResolver {
  @Query(() => [AppointmentType])
  appointments(): Appointment[] {
    return [{ id: '1', start: 'start', duration: 30 }];
  }
}
