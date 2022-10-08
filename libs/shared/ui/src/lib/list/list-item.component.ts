import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-list-item',
  standalone: true,
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {}
