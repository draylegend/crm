import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFacade } from './login.facade';
import { AuthService } from './auth.service';

describe('LoginFacade', () => {
  let service: LoginFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [LoginFacade, AuthService],
    });
    service = TestBed.inject(LoginFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
