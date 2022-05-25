import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
} from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { LetModule, PushModule } from '@rx-angular/template';
import { ClientEditFormComponent } from './client-edit-form.component';

describe('ClientEditFormComponent', () => {
  let spec: Spectator<ClientEditFormComponent>;
  const groupDirective = new FormGroupDirective([], []);
  const createComponent = createComponentFactory({
    component: ClientEditFormComponent,
    imports: [LetModule, PushModule],
    providers: [{ provide: FormGroupName, useValue: groupDirective }],
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createComponent();
    groupDirective.form = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl(''),
    });
  });

  it('should create', () => {
    spec.detectChanges();
    expect(spec.component).toBeTruthy();
  });
});
