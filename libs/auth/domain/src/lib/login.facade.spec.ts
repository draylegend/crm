import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFacade } from './login.facade';

describe('LoginFacade', () => {
  let service: LoginFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [LoginFacade],
    });
    service = TestBed.inject(LoginFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
