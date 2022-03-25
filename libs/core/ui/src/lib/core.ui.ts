import { NgModule, Type } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';

const COMPONENTS: Type<unknown>[] = [ToolbarComponent];

@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class CoreUi {}
