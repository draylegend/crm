import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppointmentType } from '@crm/appointment/api';
import { PointerComponent } from '../../pointer/pointer.component';
import { AppointmentPreviewComponent } from './appointment-preview.component';

describe('AppointmentComponent', () => {
  let component: AppointmentPreviewComponent;
  let fixture: ComponentFixture<AppointmentPreviewComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [AppointmentPreviewComponent, PointerComponent, DatePipe],
    }).createComponent(AppointmentPreviewComponent);
    component = fixture.componentInstance;
  }));

  // const componentFactory = createComponentFactory({
  //   component: AppointmentPreviewComponent,
  //   declarations: [DatePipe],
  // });
  // let spec: Spectator<AppointmentPreviewComponent>;
  //
  // beforeAll(() => (spec = componentFactory()));

  it('should create', () => {
    component.entity = new AppointmentType();

    expect(component).toBeTruthy();
  });
});
