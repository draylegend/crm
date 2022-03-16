import { Injectable } from '@angular/core';
import { type AppointmentType } from '@crm/appointment/api';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { ENTITIES_GQL } from './graphql';

@Injectable()
export class AppointmentFacade {
  constructor(private readonly apollo: Apollo) {}

  entities(): Observable<AppointmentType[]> {
    return this.apollo
      .watchQuery<{ appointments: AppointmentType[] }>({
        query: ENTITIES_GQL,
      })
      .valueChanges.pipe(map(r => r.data.appointments));
  }
}
