import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppointmentDomainModule } from '@crm/appointment/domain';
import { AppointmentUiModule } from '@crm/appointment/ui';
import { AppointmentFeatureComponent } from './appointment-feature.component';
import { AppointmentEditComponent } from './edit/appointment-edit.component';

@NgModule({
  declarations: [AppointmentEditComponent, AppointmentFeatureComponent],
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
