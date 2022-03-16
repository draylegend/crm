import { PrismaService } from '@crm/shared/api';
import { Query, Resolver } from '@nestjs/graphql';
import { Appointment } from '@prisma/client';
import { AppointmentType } from './types';

@Resolver()
export class AppointmentResolver {
  constructor(private readonly p: PrismaService) {}

  @Query(() => [AppointmentType])
  appointments(): Promise<Appointment[]> {
    return this.p.appointment.findMany({ include: { client: true } });
  }
}
