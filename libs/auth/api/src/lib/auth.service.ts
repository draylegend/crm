import { PrismaService, type TokensObject } from '@crm/shared/api';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { type Expert } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService, private p: PrismaService) {}

  async login(email: string, password: string): Promise<TokensObject> {
    const expert = await this.validateUser(email, password);

    return {
      accessToken: this.jwt.sign({ id: expert.id, email: expert.email }),
    };
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<Expert, 'password'>> {
    const expert = await this.p.expert.findUnique({ where: { email } });

    if (!expert) {
      throw new NotFoundException('expert.notFound');
    }

    if (expert.password !== password) {
      throw new BadRequestException();
    }

    delete (expert as Partial<Expert>).password;

    return expert;
  }
}
