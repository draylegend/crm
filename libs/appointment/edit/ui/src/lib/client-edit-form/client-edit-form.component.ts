import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ControlContainer, FormGroupName } from '@angular/forms';
import { type ClientType } from '@crm/client/api';
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
    this.group.control.get('firstName')?.setValue(this.clients[i].firstName);
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
    console.log(this.selectedIndex);
  }
}
