import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const componentFactory = createComponentFactory({
    component: AppComponent,
  });
  let spec: Spectator<AppComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create the app', () => {
    expect(spec.component).toBeTruthy();
  });
});
