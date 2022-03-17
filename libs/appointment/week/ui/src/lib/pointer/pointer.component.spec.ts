import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { PointerComponent } from './pointer.component';

describe('PointerComponent', () => {
  const componentFactory = createComponentFactory(PointerComponent);
  let spec: Spectator<PointerComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
