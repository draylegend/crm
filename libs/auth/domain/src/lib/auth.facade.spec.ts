import { TestBed } from '@angular/core/testing';
import { AuthFacade } from './auth.facade';

describe('AuthFacade', () => {
  let service: AuthFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthFacade] });
    service = TestBed.inject(AuthFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
