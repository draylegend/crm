import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-days',
  standalone: true,
  styleUrls: ['./days.component.scss'],
  templateUrl: './days.component.html',
  imports: [NgForOf],
})
export class DaysComponent {
  @Input() days: readonly string[] = [];
}
