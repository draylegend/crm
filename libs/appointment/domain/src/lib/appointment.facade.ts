import { Injectable } from '@angular/core';
import { AppointmentInput, type AppointmentType } from '@crm/appointment/api';
import { type ClientType } from '@crm/client/api';
import { CLIENTS_GQL } from '@crm/client/domain';
import { Apollo } from 'apollo-angular';
import { exhaustMap, filter, map, Observable, Subject } from 'rxjs';
import { ENTITIES_GQL, SAVE_GQL, SELECTED_GQL } from './gql';

@Injectable()
export class AppointmentFacade {
  readonly save = new Subject<AppointmentInput>();
  readonly save$ = this.save.pipe(
    exhaustMap(entity =>
      this.apollo.mutate<
        { appointmentSave: AppointmentType },
        { entity: AppointmentInput }
      >({
        mutation: SAVE_GQL,
        variables: {
          entity: removeTypename(entity),
        },
        update: (cache, result) => {
          const client = result.data?.appointmentSave.client;
          let clients =
            cache.readQuery<{ clients: ClientType[] }>({
              query: CLIENTS_GQL,
            })?.clients || [];

          if (client) {
            if (!entity.client.id) {
              clients = [...clients, client];
              clients.sort((a, b) => a.firstName.localeCompare(b.firstName));
            }

            cache.writeQuery<{ clients: ClientType[] }>({
              query: CLIENTS_GQL,
              data: { clients: clients },
            });
          }
        },
      }),
    ),
  );
  readonly clients$ = this.apollo
    .watchQuery<{ clients: ClientType[] }>({
      query: CLIENTS_GQL,
    })
    .valueChanges.pipe(map(r => r.data?.clients));
  readonly appointments$ = this.apollo
    .watchQuery<{ appointments: AppointmentType[] }>({
      query: ENTITIES_GQL,
    })
    .valueChanges.pipe(map(r => r.data.appointments));

  constructor(private readonly apollo: Apollo) {}

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
