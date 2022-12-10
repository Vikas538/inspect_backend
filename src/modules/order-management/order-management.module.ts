import { Module } from '@nestjs/common';
import { OrderManagement } from './orderManagement.controller';
import { OrderManagementService } from './orderManagement.service';

@Module({ providers: [OrderManagementService], controllers: [OrderManagement] })
export class OrderManagementModule {}
