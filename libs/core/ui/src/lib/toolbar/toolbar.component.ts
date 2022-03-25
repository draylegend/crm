import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppFacade } from '@crm/shared/domain';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(public readonly appFacade: AppFacade) {}
}
