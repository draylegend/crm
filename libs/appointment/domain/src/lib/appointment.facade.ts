import { Injectable } from '@angular/core';
import { Appointment } from '@prisma/client';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { ENTITIES_GQL } from './graphql';

@Injectable()
export class AppointmentFacade {
  constructor(private readonly apollo: Apollo) {}

  entities(): Observable<Appointment[]> {
    return this.apollo
      .watchQuery<{ appointments: Appointment[] }>({
        query: ENTITIES_GQL,
      })
      .valueChanges.pipe(map(r => r.data.appointments));
  }
}
