import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment.component';

@NgModule({
  declarations: [AppointmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AppointmentComponent }]),
  ],
})
export class AppointmentModule {}
