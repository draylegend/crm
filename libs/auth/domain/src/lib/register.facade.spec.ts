import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { RegisterFacade } from './register.facade';

describe('RegisterFacade', () => {
  let service: RegisterFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [AuthService, RegisterFacade],
    });
    service = TestBed.inject(RegisterFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
