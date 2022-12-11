import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CtxId } from 'src/common/decorators/ctxId.decorator';
import { OrderManagementService } from './orderManagement.service';

@Controller('/order')
export class OrderManagement {
  @Inject()
  orderManagementService: OrderManagementService;

  @Post('/create')
  async createOrder(@CtxId() ctxId: string, @Body() orderData: any) {
    const result = await this.orderManagementService.create(orderData);
    return result;
  }

  @Get('/open')
  async getOpenOrders() {
    const orders = await this.orderManagementService.getOrders();
    return orders;
  }

  @Post('/update')
  async updateOrder(@CtxId() ctxId: string, @Body() data: any) {
    const { orderId } = data;
    const result = await this.orderManagementService.updateOrder(orderId);
    return result;
  }
}
