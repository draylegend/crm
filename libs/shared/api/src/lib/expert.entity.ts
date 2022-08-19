import { Expert } from '@prisma/client';

export type ExpertEntity = Omit<Expert, 'password'>;
