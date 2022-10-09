import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService, RegisterFacade } from '@crm/auth/domain';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  imports: [AsyncPipe, NgIf, ReactiveFormsModule, RouterModule],
  providers: [AuthService, RegisterFacade],
})
export class RegisterComponent {
  constructor(public facade: RegisterFacade) {}
}
