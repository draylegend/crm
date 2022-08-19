import { Injectable } from '@nestjs/common';
import { AuthGuard as _AuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthGuard extends _AuthGuard('jwt') {}
