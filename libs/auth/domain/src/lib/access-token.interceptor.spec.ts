import { TestBed } from '@angular/core/testing';
import { AccessTokenInterceptor } from './access-token.interceptor';

describe('AccessTokenInterceptor', () => {
  let interceptor: AccessTokenInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessTokenInterceptor],
    });

    interceptor = TestBed.inject(AccessTokenInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
