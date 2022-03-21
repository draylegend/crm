import { Field, InputType, ObjectType } from '@nestjs/graphql';

export interface ClientType {
  id: string;
  firstName: string;
}

@ObjectType()
export class ClientType {
  @Field()
  id!: string;

  @Field()
  firstName!: string;
}

export interface ClientInput {
  id?: string;
  firstName: string;
}

@InputType()
export class ClientInput {
  @Field({ nullable: true })
  id?: string;

  @Field()
  firstName!: string;
}
