import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ControlContainer, FormGroupName } from '@angular/forms';
import { ClientInput, type ClientType } from '@crm/client/api';
import { map, Observable, startWith } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-client-edit-form',
  styleUrls: ['./client-edit-form.component.scss'],
  templateUrl: './client-edit-form.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupName }],
})
export class ClientEditFormComponent implements AfterViewInit {
  @Input() clients: ClientType[] = [];
  filteredClients$!: Observable<ClientType[]>;
  selectedIndex = -1;

  constructor(private readonly group: FormGroupName) {}

  ngAfterViewInit(): void {
    this.filteredClients$ = this.group.control.valueChanges.pipe(
      startWith(this.group.value),
      map(search =>
        this.clients.filter(c =>
          c.firstName.toLowerCase().includes(search.firstName.toLowerCase()),
        ),
      ),
    );
  }

  select(i: number): void {
    this.group.control.setValue(this.clients[i]);
  }

  keydown(filtered: ClientType[]): void {
    !filtered.length && this.group.control.get('id')?.setValue(undefined);
  }

  arrowUp(): void {
    this.selectedIndex <= 0
      ? (this.selectedIndex = this.clients.length - 1)
      : this.selectedIndex--;
  }

  arrowDown(): void {
    this.selectedIndex >= this.clients.length - 1
      ? (this.selectedIndex = 0)
      : this.selectedIndex++;
  }

  enter(e: Event, filtered: ClientType[]): void {
    e.preventDefault();

    const client: ClientType | ClientInput =
      filtered.length > 0
        ? filtered[this.selectedIndex]
        : { firstName: this.group.value.firstName };

    this.group.control?.setValue(client);
  }
}
