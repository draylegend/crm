import { NgModule, Type } from '@angular/core';
import { SharedDomain } from '@crm/shared/domain';
import { PushModule } from '@rx-angular/template';
import { ToolbarComponent } from './toolbar/toolbar.component';

const COMPONENTS: Type<unknown>[] = [ToolbarComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [PushModule, SharedDomain],
  exports: [COMPONENTS],
})
export class CoreUi {}
