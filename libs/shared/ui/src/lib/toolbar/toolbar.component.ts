import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-toolbar',
  standalone: true,
  styles: [':host{padding:8px}'],
  template: `<ng-content></ng-content>`,
})
export class ToolbarComponent {}
