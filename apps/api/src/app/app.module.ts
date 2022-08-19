import { SharedApiModule } from '@crm/shared/api';
import { Module } from '@nestjs/common';

@Module({
  imports: [SharedApiModule],
})
export class AppModule {}
