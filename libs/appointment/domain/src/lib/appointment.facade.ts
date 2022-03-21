import { Injectable } from '@angular/core';
import { AppointmentInput, type AppointmentType } from '@crm/appointment/api';
import { Apollo } from 'apollo-angular';
import { exhaustMap, filter, map, Observable, Subject } from 'rxjs';
import { ENTITIES_GQL, SAVE_GQL, SELECTED_GQL } from './graphql';

@Injectable()
export class AppointmentFacade {
  readonly save = new Subject<AppointmentInput>();
  readonly save$ = this.save.pipe(
    exhaustMap(entity =>
      this.apollo.mutate<unknown, { entity: AppointmentInput }>({
        mutation: SAVE_GQL,
        variables: {
          entity: removeTypename(entity),
        },
      }),
    ),
  );

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

export const removeTypename = <T, K extends keyof T>(
  entity: T & { __typename?: string },
): T => {
  if ('__typename' in entity) {
    delete entity.__typename;
  }

  for (const key in entity) {
    typeof entity[key as K] === 'object' && removeTypename(entity[key as K]);
  }

  return entity;
};
