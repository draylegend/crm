import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarComponent } from '@crm/core/ui';
import { AppFacade } from '@crm/shared/domain';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { PushModule } from '@rx-angular/template';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const componentFactory = createComponentFactory({
    component: AppComponent,
    declarations: [ToolbarComponent],
    imports: [PushModule, RouterTestingModule],
    providers: [AppFacade],
  });
  let spec: Spectator<AppComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create the app', () => {
    expect(spec.component).toBeTruthy();
  });
});
