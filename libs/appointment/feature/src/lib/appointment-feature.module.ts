import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppointmentListComponent } from './appointment-list.component';

@NgModule({
  declarations: [AppointmentListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AppointmentListComponent }]),
  ],
})
export class AppointmentFeatureModule {}
