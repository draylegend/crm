import { PrismaService } from '@crm/shared/api';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Expert } from '@prisma/client';
import { LoginInput, LoginResponse } from './types';

@Injectable()
export class AuthService {
  constructor(private p: PrismaService) {}

  async login(input: LoginInput): Promise<LoginResponse> {
    const found = await this.p.expert.findUnique({
      where: { email: input.email },
    });

    if (!found) {
      throw new NotFoundException('expert.notFound');
    }

    delete (found as Partial<Expert>).password;

    return found;
  }
}
