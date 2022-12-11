import { Module } from '@nestjs/common';
import { DaoModule } from 'src/dao/dao.module';
import { OrderManagement } from './orderManagement.controller';
import { OrderManagementService } from './orderManagement.service';

@Module({
  providers: [OrderManagementService],
  controllers: [OrderManagement],
  imports: [DaoModule],
})
export class OrderManagementModule {}
