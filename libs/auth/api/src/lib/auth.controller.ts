import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput, LoginResponse } from './types';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  login(@Body() input: LoginInput): Promise<LoginResponse> {
    return this.service.login(input);
  }
}
