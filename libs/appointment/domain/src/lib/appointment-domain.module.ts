import { NgModule } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { AppointmentFacade } from './appointment.facade';

@NgModule({
  providers: [Apollo, AppointmentFacade],
})
export class AppointmentDomainModule {}
