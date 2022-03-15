import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PointerComponent } from './pointer/pointer.component';

@NgModule({
  declarations: [
    AppointmentCalendarComponent,
    AppointmentComponent,
    PointerComponent,
  ],
  imports: [CommonModule],
  exports: [
    AppointmentCalendarComponent,
    AppointmentComponent,
    PointerComponent,
  ],
})
export class AppointmentUiModule {}
