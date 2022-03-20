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

export const SELECTED_GQL = gql`
  query AppointmentSelected($id: String!) {
    appointmentSelected(id: $id) @client {
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
