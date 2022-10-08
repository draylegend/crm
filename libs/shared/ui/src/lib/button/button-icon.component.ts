import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[app-button-icon]',
  standalone: true,
  styleUrls: ['./button-icon.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class ButtonIconComponent {}
