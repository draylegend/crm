import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  const componentFactory = createComponentFactory(ToolbarComponent);
  let spec: Spectator<ToolbarComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
