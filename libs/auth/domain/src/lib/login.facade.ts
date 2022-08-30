import { Injectable } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

const EMAIL_PATTERN = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

@Injectable()
export class LoginFacade {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: NonNullableFormBuilder) {}

  login(): void {
    console.log(this.form.value);
  }
}
