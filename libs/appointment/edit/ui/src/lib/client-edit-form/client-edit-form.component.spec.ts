import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ClientEditFormComponent } from './client-edit-form.component';

describe('ClientEditFormComponent', () => {
  let spectator: Spectator<ClientEditFormComponent>;
  const createComponent = createComponentFactory(ClientEditFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
