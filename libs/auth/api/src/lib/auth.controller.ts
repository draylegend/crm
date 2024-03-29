import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponse, LoginInput, RegisterInput } from './types';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('register')
  register(@Body() input: RegisterInput): Promise<AuthResponse> {
    return this.service.register(input);
  }

  @Post('login')
  login(@Body() input: LoginInput): Promise<AuthResponse> {
    return this.service.login(input);
  }
}
