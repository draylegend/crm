import { AppFacade } from '@crm/shared/domain';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { PushModule } from '@rx-angular/template';
import { PointerComponent } from './pointer.component';

describe('PointerComponent', () => {
  const componentFactory = createComponentFactory({
    component: PointerComponent,
    imports: [PushModule],
    providers: [AppFacade],
  });
  let spec: Spectator<PointerComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
