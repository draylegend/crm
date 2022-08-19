import { ExpertEntity } from '@crm/shared/api';

export interface LoginInput {
  email: string;
  password: string;
}

export type LoginResponse = ExpertEntity | null;
