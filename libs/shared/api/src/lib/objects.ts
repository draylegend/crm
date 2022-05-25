import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class TokensObject {
  @Field()
  abstract accessToken: string;
}
