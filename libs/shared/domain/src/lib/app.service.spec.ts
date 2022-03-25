import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { AppFacade } from './app.facade';

describe('AppFacade', () => {
  const serviceFactory = createServiceFactory(AppFacade);
  let spec: SpectatorService<AppFacade>;

  beforeEach(() => (spec = serviceFactory()));

  it('should create', () => {
    expect(spec.service).toBeTruthy();
  });
});
