import { TemplateRef } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BehaviorSubject } from 'rxjs';
import { AppointmentDaysComponent } from './appointment-days.component';

describe('AppointmentDaysComponent', () => {
  const componentFactory = createComponentFactory({
    component: AppointmentDaysComponent,
    detectChanges: false,
  });
  let spec: Spectator<AppointmentDaysComponent>;

  beforeEach(() => (spec = componentFactory()));

  it('should create', () => {
    spec.setInput(
      'toolbar$',
      new BehaviorSubject<TemplateRef<unknown> | null>(null),
    );
    spec.setInput('days', []);
    spec.detectChanges();
    expect(spec.component).toBeTruthy();
  });
});
