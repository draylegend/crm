import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  catchError,
  from,
  map,
  Observable,
  ReplaySubject,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';
import { AuthService } from './auth.service';
import { State } from './auth.types';

const EMAIL_PATTERN = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

@Injectable()
export class RegisterFacade {
  form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required]],
  });
  #submit = new ReplaySubject<void>();
  state$: Observable<State> = this.#submit.pipe(
    switchMap(() =>
      this.service.register$(this.form.value).pipe(
        map(() => ({ submitDisabled: true })),
        catchError(({ error: { message } }: HttpErrorResponse) => [
          { error: message },
        ]),
      ),
    ),
    shareReplay(),
    tap(() => from(this.router.navigate([], { replaceUrl: true }))),
  );
  submitting$ = this.state$.pipe(map(s => s.submitDisabled));
  error$ = this.state$.pipe(map(s => s.error));

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private service: AuthService,
  ) {}

  submit(): void {
    this.#submit.next();
  }
}
