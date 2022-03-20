import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentEditFormComponent } from './appointment-edit-form/appointment-edit-form.component';

const COMPONENTS: Type<unknown>[] = [AppointmentEditFormComponent];

const MODULES: Type<unknown>[] = [CommonModule, ReactiveFormsModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [COMPONENTS, MODULES],
})
export class AppointmentEditUiModule {}
