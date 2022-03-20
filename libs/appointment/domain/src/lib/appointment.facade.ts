import { Injectable } from '@angular/core';
import { type AppointmentType } from '@crm/appointment/api';
import { Apollo } from 'apollo-angular';
import { filter, map, Observable } from 'rxjs';
import { ENTITIES_GQL, SELECTED_GQL } from './graphql';

@Injectable()
export class AppointmentFacade {
  constructor(private readonly apollo: Apollo) {}

  entities$(): Observable<AppointmentType[]> {
    return this.apollo
      .watchQuery<{ appointments: AppointmentType[] }>({
        query: ENTITIES_GQL,
      })
      .valueChanges.pipe(map(r => r.data.appointments));
  }

  selected$(id: string): Observable<AppointmentType | undefined> {
    return this.apollo
      .watchQuery<{
        appointmentSelected?: AppointmentType;
      }>({
        query: SELECTED_GQL,
        variables: { id },
      })
      .valueChanges.pipe(
        filter(r => !!r.data?.appointmentSelected),
        map(r => r.data?.appointmentSelected),
      );
  }
}
