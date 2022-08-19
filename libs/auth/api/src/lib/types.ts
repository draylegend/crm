import { ExpertEntity } from '@crm/shared/api';

export interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export type LoginResponse = ExpertEntity | null;
