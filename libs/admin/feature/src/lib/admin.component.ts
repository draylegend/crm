import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  ButtonIconComponent,
  IconComponent,
  ListComponent,
  ListIconDirective,
  ListItemComponent,
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
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
})
export class AdminComponent {}
