import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [AppointmentComponent],
  imports: [CommonModule],
  exports: [AppointmentComponent],
})
export class AppointmentUiModule {}
