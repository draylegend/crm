import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon',
  standalone: true,
  styles: [':host{font:24px"Material Symbols Outlined"}'],
  template: `<ng-content></ng-content>`,
})
export class IconComponent {}
