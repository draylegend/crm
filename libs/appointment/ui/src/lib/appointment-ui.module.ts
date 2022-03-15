import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PointerComponent } from './pointer/pointer.component';
import { AppointmentCalendarDaysComponent } from './days/appointment-calendar-days.component';

@NgModule({
  declarations: [
    AppointmentCalendarComponent,
    AppointmentComponent,
    PointerComponent,
    AppointmentCalendarDaysComponent,
  ],
  imports: [CommonModule],
  exports: [
    AppointmentCalendarComponent,
    AppointmentComponent,
    PointerComponent,
    AppointmentCalendarDaysComponent,
  ],
})
export class AppointmentUiModule {}
