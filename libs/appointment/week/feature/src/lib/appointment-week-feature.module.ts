import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppointmentDomainModule } from '@crm/appointment/domain';
import { AppointmentUiModule } from '@crm/appointment/ui';
import { AppointmentWeekFeatureComponent } from './appointment-week-feature.component';
import { AppointmentEditComponent } from './edit/appointment-edit.component';

@NgModule({
  declarations: [AppointmentEditComponent, AppointmentWeekFeatureComponent],
  imports: [
    AppointmentDomainModule,
    AppointmentUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppointmentWeekFeatureComponent,
        children: [{ path: ':id', component: AppointmentEditComponent }],
      },
    ]),
  ],
})
export class AppointmentWeekFeatureModule {}
