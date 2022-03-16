import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AppointmentEditComponent,
  AppointmentPreviewComponent,
} from './appointment';
import { AppointmentCalendarComponent } from './calendar/appointment-calendar.component';
import { AppointmentCalendarDaysComponent } from './days/appointment-calendar-days.component';
import { PointerComponent } from './pointer/pointer.component';
import { AppointmentTimeComponent } from './time/appointment-time.component';

@NgModule({
  declarations: [
    AppointmentCalendarComponent,
    AppointmentCalendarDaysComponent,
    AppointmentEditComponent,
    AppointmentPreviewComponent,
    AppointmentTimeComponent,
    PointerComponent,
  ],
  imports: [CommonModule],
  exports: [
    AppointmentCalendarComponent,
    AppointmentCalendarDaysComponent,
    AppointmentEditComponent,
    AppointmentPreviewComponent,
    AppointmentTimeComponent,
    PointerComponent,
  ],
})
export class AppointmentUiModule {}
