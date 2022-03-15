import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppointmentUiModule } from '@crm/appointment/ui';
import { AppointmentFeatureComponent } from './appointment-feature.component';

@NgModule({
  declarations: [AppointmentFeatureComponent],
  imports: [
    AppointmentUiModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AppointmentFeatureComponent },
    ]),
  ],
})
export class AppointmentFeatureModule {}
