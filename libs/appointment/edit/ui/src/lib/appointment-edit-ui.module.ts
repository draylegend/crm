import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientEditUiModule } from '@crm/client/edit/ui';
import { AppointmentEditFormComponent } from './appointment-edit-form/appointment-edit-form.component';
import { ClientEditFormComponent } from './client-edit-form/client-edit-form.component';

const COMPONENTS: Type<unknown>[] = [
  AppointmentEditFormComponent,
  ClientEditFormComponent,
];

const MODULES: Type<unknown>[] = [CommonModule, ReactiveFormsModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [ClientEditUiModule, MODULES],
  exports: [COMPONENTS, MODULES],
})
export class AppointmentEditUiModule {}
