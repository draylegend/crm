import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppointmentComponent } from './appointment/appointment.component';
import { PointerComponent } from './pointer/pointer.component';

@NgModule({
  declarations: [AppointmentComponent, PointerComponent],
  imports: [CommonModule],
  exports: [AppointmentComponent, PointerComponent],
})
export class AppointmentUiModule {}
