import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppointmentDomainModule } from '@crm/appointment/domain';
import {
  AppointmentEditComponent,
  AppointmentUiModule,
} from '@crm/appointment/ui';
import { AppointmentFeatureComponent } from './appointment-feature.component';

@NgModule({
  declarations: [AppointmentFeatureComponent],
  imports: [
    AppointmentDomainModule,
    AppointmentUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppointmentFeatureComponent,
        children: [{ path: ':id', component: AppointmentEditComponent }],
      },
    ]),
  ],
})
export class AppointmentFeatureModule {}
