import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppointmentCalendarComponent } from './calendar/appointment-calendar.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PointerComponent } from './pointer/pointer.component';
import { AppointmentCalendarDaysComponent } from './days/appointment-calendar-days.component';
import { AppointmentTimeComponent } from './time/appointment-time.component';

@NgModule({
  declarations: [
    AppointmentCalendarComponent,
    AppointmentComponent,
    PointerComponent,
    AppointmentCalendarDaysComponent,
    AppointmentTimeComponent,
  ],
  imports: [CommonModule],
  exports: [
    AppointmentCalendarComponent,
    AppointmentComponent,
    PointerComponent,
    AppointmentCalendarDaysComponent,
    AppointmentTimeComponent,
  ],
})
export class AppointmentUiModule {}
