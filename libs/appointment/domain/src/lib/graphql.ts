import { gql } from 'apollo-angular';

export const ENTITIES_GQL = gql`
  query Appointments {
    appointments {
      id
      start
      duration
      client {
        id
        firstName
      }
    }
  }
`;
