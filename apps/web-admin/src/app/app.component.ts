import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
