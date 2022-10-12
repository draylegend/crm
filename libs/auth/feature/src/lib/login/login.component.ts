import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService, LoginFacade } from '@crm/auth/domain';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  imports: [AsyncPipe, ReactiveFormsModule, RouterModule, NgIf],
  providers: [AuthService, LoginFacade],
})
export class LoginComponent {
  constructor(public facade: LoginFacade) {}
}
