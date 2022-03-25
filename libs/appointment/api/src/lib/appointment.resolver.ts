import { PrismaService } from '@crm/shared/api';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Appointment } from '@prisma/client';
import { AppointmentInput, AppointmentType } from './types';

@Resolver()
export class AppointmentResolver {
  constructor(private readonly p: PrismaService) {}

  @Query(() => [AppointmentType])
  appointments(): Promise<Appointment[]> {
    return this.p.appointment.findMany({ include: { client: true } });
  }

  @Mutation(() => AppointmentType)
  async appointmentSave(@Args('entity') entity: AppointmentInput) {
    const client = await this.p.client.upsert({
      where: { id: entity.client.id || '' },
      create: { firstName: entity.client.firstName },
      update: { id: entity.client.id, firstName: entity.client.firstName },
    });

    return this.p.appointment.upsert({
      where: { id: entity.id },
      create: {
        start: entity.start,
        duration: entity.duration,
        client: {
          connect: { id: client.id },
        },
      },
      update: {
        id: entity.id,
        start: entity.start,
        duration: entity.duration,
        client: {
          connect: { id: client.id },
        },
      },
      select: { id: true, start: true, client: true, duration: true },
    });
  }
}
