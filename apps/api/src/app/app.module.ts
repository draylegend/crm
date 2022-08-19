import { AuthApiModule } from '@crm/auth/api';
import { SharedApiModule } from '@crm/shared/api';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthApiModule, SharedApiModule],
})
export class AppModule {}
