import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: './register.component.html',
  imports: [CommonModule],
})
export class RegisterComponent {}
