import { Controller, Get, Inject } from '@nestjs/common';
import { OrderManagementService } from './orderManagement.service';

@Controller('/order')
export class OrderManagement {
  @Inject()
  orderManagementService: OrderManagementService;

  @Get('/hello')
  getHello(): string {
    return this.orderManagementService.getHello();
  }
}
