import { Module } from '@nestjs/common';
import { AppointmentResolver } from './appointment.resolver';

@Module({
  providers: [AppointmentResolver],
})
export class AppointmentApiModule {}
