import { TestBed } from '@angular/core/testing';
import { provideEnv } from '@crm/shared/domain';
import { ApiInterceptor } from './api.interceptor';

describe('ApiInterceptor', () => {
  let interceptor: ApiInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiInterceptor, provideEnv({ api: '', production: false })],
    });

    interceptor = TestBed.inject(ApiInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
