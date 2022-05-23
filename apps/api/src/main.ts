import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppApi } from './app/app.api';

(async () => {
  const app = await NestFactory.create(AppApi);
  const globalPrefix = 'api';
  const port = process.env.PORT || 3333;

  app.setGlobalPrefix(globalPrefix);
  app.enableCors();

  await app.listen(port);
  Logger.log(`🚀 http://localhost:${port}/graphql`);
})();
