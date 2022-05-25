import { TokensObject } from '@crm/shared/api';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private service: AuthService) {}

  @Query(() => TokensObject)
  login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<TokensObject> {
    return this.service.login(email, password);
  }
}
