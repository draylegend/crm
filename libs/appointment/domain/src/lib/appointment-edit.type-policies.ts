import { TypePolicies } from '@apollo/client';

export const appointmentEditTypePolicies: TypePolicies = {
  Query: {
    fields: {
      appointmentSelected: {
        read: (existing, { toReference, args }) =>
          existing ?? toReference(`AppointmentType:${args?.['id']}`),
      },
    },
  },
};
