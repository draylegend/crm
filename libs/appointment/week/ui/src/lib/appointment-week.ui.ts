import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { PushModule } from '@rx-angular/template';
import {
  AppointmentCalendarComponent,
  AppointmentDaysComponent,
  AppointmentPreviewComponent,
  AppointmentTimeComponent,
} from './appointment';
import { PointerComponent } from './pointer/pointer.component';

const COMPONENTS: Type<unknown>[] = [
  AppointmentCalendarComponent,
  AppointmentDaysComponent,
  AppointmentPreviewComponent,
  AppointmentTimeComponent,
  PointerComponent,
];

const MODULES: Type<unknown>[] = [CommonModule, PushModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [COMPONENTS, MODULES],
})
export class AppointmentWeekUi {}
