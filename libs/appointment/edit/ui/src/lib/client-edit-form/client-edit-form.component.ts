import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormGroupName } from '@angular/forms';
import { type ClientType } from '@crm/client/api';
import {
  BehaviorSubject,
  map,
  Observable,
  pipe,
  startWith,
  UnaryFunction,
} from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-client-edit-form',
  styleUrls: ['./client-edit-form.component.scss'],
  templateUrl: './client-edit-form.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupName }],
})
export class ClientEditFormComponent {
  filteredClients$!: Observable<ClientType[]>;
  focus$ = new BehaviorSubject(false);

  constructor(private readonly group: FormGroupName) {}

  @Input() set clients(value: ClientType[]) {
    this.filteredClients$ = this.group.control.valueChanges.pipe(
      startWith(this.group.value.firstName),
      this.#filter$(value),
    );
  }

  #filter$(
    clients: ClientType[],
  ): UnaryFunction<Observable<unknown>, Observable<ClientType[]>> {
    return pipe(
      map(() =>
        clients.filter(c =>
          c.firstName
            .toLowerCase()
            .includes(this.group.value.firstName.toLowerCase()),
        ),
      ),
    );
  }
}
