import { gql } from 'apollo-angular';

export const CLIENTS_GQL = gql`
  query Clients {
    clients {
      id
      firstName
    }
  }
`;
