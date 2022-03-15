import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment.component';

@NgModule({
  declarations: [AppointmentComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AppointmentComponent }]),
  ],
})
export class AppointmentModule {}
