import { PrismaService } from '@crm/shared/api';
import { Module } from '@nestjs/common';
import { AppointmentResolver } from './appointment.resolver';

@Module({
  providers: [AppointmentResolver, PrismaService],
})
export class AppointmentApiModule {}
