import { AppFacade } from '@crm/shared/domain';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { PushModule } from '@rx-angular/template';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  const componentFactory = createComponentFactory({
    component: ToolbarComponent,
    imports: [PushModule],
    providers: [AppFacade],
  });
  let spec: Spectator<ToolbarComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
