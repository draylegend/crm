import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  ButtonIconComponent,
  IconComponent,
  ListComponent,
  ListIconDirective,
  ListItemComponent,
  ToolbarComponent,
} from '@crm/shared/ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./admin.component.scss'],
  templateUrl: './admin.component.html',
  imports: [
    AsyncPipe,
    ButtonIconComponent,
    IconComponent,
    ListComponent,
    ListItemComponent,
    ListIconDirective,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ToolbarComponent,
  ],
})
export class AdminComponent {
  toggle(): void {
    //
  }
}
