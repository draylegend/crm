import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import {
  catchError,
  map,
  Observable,
  ReplaySubject,
  shareReplay,
  switchMap,
} from 'rxjs';
import { LoginService } from './login.service';

const EMAIL_PATTERN = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

interface State {
  submitDisabled?: boolean;
  error?: string;
}

@Injectable()
export class LoginFacade {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required]],
  });
  #submit = new ReplaySubject<void>();
  state$: Observable<State> = this.#submit.pipe(
    switchMap(() =>
      this.service.login$(this.form.value).pipe(
        map(() => ({ submitDisabled: true })),
        catchError(({ error: { message } }: HttpErrorResponse) => [
          { error: message },
        ]),
      ),
    ),
    shareReplay(),
  );
  submitting$ = this.state$.pipe(map(s => s.submitDisabled));
  error$ = this.state$.pipe(map(s => s.error));

  constructor(
    private fb: NonNullableFormBuilder,
    private service: LoginService,
  ) {}

  login(): void {
    this.#submit.next();
  }
}
