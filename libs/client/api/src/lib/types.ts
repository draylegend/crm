import { Field, ObjectType } from '@nestjs/graphql';

export interface Client {
  id: string;
  firstName: string;
}

@ObjectType()
export class ClientType implements Client {
  @Field()
  id!: string;

  @Field()
  firstName!: string;
}
