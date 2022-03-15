import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppointmentUiModule } from '@crm/appointment/ui';
import { AppointmentListComponent } from './appointment-list.component';

@NgModule({
  declarations: [AppointmentListComponent],
  imports: [
    AppointmentUiModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: AppointmentListComponent }]),
  ],
})
export class AppointmentFeatureModule {}
