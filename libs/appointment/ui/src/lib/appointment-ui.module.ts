import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import {
  AppointmentCalendarComponent,
  AppointmentDaysComponent,
  AppointmentEditComponent,
  AppointmentPreviewComponent,
  AppointmentTimeComponent,
} from './appointment';
import { PointerComponent } from './pointer/pointer.component';

const COMPONENTS: Type<unknown>[] = [
  AppointmentCalendarComponent,
  AppointmentDaysComponent,
  AppointmentEditComponent,
  AppointmentPreviewComponent,
  AppointmentTimeComponent,
  PointerComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS],
})
export class AppointmentUiModule {}
