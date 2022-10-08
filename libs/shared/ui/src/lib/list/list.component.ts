import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-list',
  standalone: true,
  styleUrls: ['./list.component.scss'],
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ListComponent {}
