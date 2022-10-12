import { TestBed } from '@angular/core/testing';
import { AccessTokenInterceptor } from './access-token.interceptor';
import { AuthFacade } from './auth.facade';

describe('AccessTokenInterceptor', () => {
  let interceptor: AccessTokenInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessTokenInterceptor, AuthFacade],
    });

    interceptor = TestBed.inject(AccessTokenInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
