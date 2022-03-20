import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

const MODULES: Type<unknown>[] = [CommonModule];

@NgModule({
  exports: [MODULES],
})
export class AppointmentEditUiModule {}
