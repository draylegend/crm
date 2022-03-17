import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppointmentDomainModule } from '@crm/appointment/domain';
import { AppointmentUiModule } from '@crm/appointment/ui';
import { AppointmentWeekComponent } from './appointment-week.component';
import { AppointmentEditComponent } from './edit/appointment-edit.component';

@NgModule({
  declarations: [AppointmentEditComponent, AppointmentWeekComponent],
  imports: [
    AppointmentDomainModule,
    AppointmentUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppointmentWeekComponent,
        children: [{ path: ':id', component: AppointmentEditComponent }],
      },
    ]),
  ],
})
export class AppointmentWeekFeature {}
