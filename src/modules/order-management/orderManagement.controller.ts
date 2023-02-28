import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Query,
} from '@nestjs/common';
import { CtxId } from 'src/common/decorators/ctxId.decorator';
import { orderStatus } from 'src/constants/appConstants';
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

  @Get('/')
  async getOpenOrders(
    @CtxId() ctxid: string,
    @Query('status') status: orderStatus,
  ) {
    if (status != 'OPEN' && status != 'CLOSED') {
      throw new BadRequestException('Invalid OrderStatus');
    }
    const orders = await this.orderManagementService.getOrders(status);
    return orders;
  }

  @Post('/update')
  async updateOrder(@CtxId() ctxId: string, @Body() data: any) {
    const { orderId } = data;
    const result = await this.orderManagementService.updateOrder(orderId);
    return result;
  }

  @Post('/delete')
  async deleteOrder(@CtxId() ctxId: string, @Body('orderId') orderId: string) {
    if (!orderId) throw new BadRequestException('Invalid OrderId');
    const result = await this.orderManagementService.deleteOrder(orderId);
    return result;
  }
}
