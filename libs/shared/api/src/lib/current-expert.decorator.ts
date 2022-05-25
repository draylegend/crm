import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentExpert = createParamDecorator(
  (_, context: ExecutionContext) =>
    GqlExecutionContext.create(context).getContext().req.user,
);
