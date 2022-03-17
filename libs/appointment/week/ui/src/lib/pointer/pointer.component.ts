import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-pointer',
  styleUrls: ['./pointer.component.scss'],
  templateUrl: './pointer.component.html',
})
export class PointerComponent {
  readonly pointer$ = timer(0, 1000).pipe(tap(() => this.#updatePointer()));

  constructor(private readonly el: ElementRef) {}

  #updatePointer(): void {
    const d = new Date();

    this.el.nativeElement.style.setProperty('--pointerLeft', d.getDay());
    this.el.nativeElement.style.setProperty(
      '--pointerTop',
      d.getHours() * 60 + d.getMinutes(),
    );
  }
}
