import { PrismaService } from '@crm/shared/api';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Expert } from '@prisma/client';
import { hash } from 'argon2';
import { AuthResponse, LoginInput, RegisterInput } from './types';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private p: PrismaService) {}

  async register(input: RegisterInput): Promise<AuthResponse> {
    const found = await this.p.expert.create({
      data: {
        email: input.email,
        password: await hash(input.password),
        firstName: input.firstName,
        lastName: input.lastName,
      },
    });

    delete (found as Partial<Expert>).password;

    return this.#sign(found);
  }

  async login(input: LoginInput): Promise<AuthResponse> {
    const found = await this.p.expert.findUnique({
      where: { email: input.email },
    });

    if (!found) {
      throw new NotFoundException('expert.notFound');
    }

    delete (found as Partial<Expert>).password;

    return this.#sign(found);
  }

  #sign(found: Expert): { accessToken: string } {
    return {
      accessToken: this.jwtService.sign({
        id: found.id,
        email: found.email,
      }),
    };
  }
}
