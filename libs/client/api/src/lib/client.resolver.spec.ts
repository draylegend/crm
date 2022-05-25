import { PrismaService } from '@crm/shared/api';
import { Test, TestingModule } from '@nestjs/testing';
import { ClientResolver } from './client.resolver';

describe('ClientResolver', () => {
  let resolver: ClientResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientResolver, PrismaService],
    }).compile();

    resolver = module.get<ClientResolver>(ClientResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
