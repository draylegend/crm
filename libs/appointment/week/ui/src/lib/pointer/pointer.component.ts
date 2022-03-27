import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppFacade } from '@crm/shared/domain';
import { tap, timer } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-pointer',
  styleUrls: ['./pointer.component.scss'],
  templateUrl: './pointer.component.html',
})
export class PointerComponent {
  readonly pointer$ = timer(0, 1000).pipe(tap(() => this.#updatePointer()));
  readonly #today = new Date();

  constructor(private readonly appFacade: AppFacade) {}

  #updatePointer(): void {
    const minutes = this.#today.getHours() * 60 + this.#today.getMinutes();

    this.appFacade.setProp('pointerLeft', this.#today.getDay());
    this.appFacade.setProp('pointerTop', minutes);
  }
}
