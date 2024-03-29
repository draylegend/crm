import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hours[hours]',
  standalone: true,
  styleUrls: ['./hours.component.scss'],
  templateUrl: './hours.component.html',
  imports: [NgForOf],
})
export class HoursComponent {
  @Input() hours: string[] = [];
}
