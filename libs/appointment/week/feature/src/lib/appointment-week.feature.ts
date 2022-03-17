import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppointmentDomainModule } from '@crm/appointment/domain';
import { AppointmentEditFeature } from '@crm/appointment/edit/feature';
import { AppointmentUiModule } from '@crm/appointment/ui';
import { AppointmentWeekComponent } from './appointment-week.component';

@NgModule({
  declarations: [AppointmentWeekComponent],
  imports: [
    AppointmentDomainModule,
    AppointmentUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppointmentWeekComponent,
        children: [{ path: ':id', loadChildren: () => AppointmentEditFeature }],
      },
    ]),
  ],
})
export class AppointmentWeekFeature {}
