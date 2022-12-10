import { Controller, Get, Inject } from '@nestjs/common';
import { CtxId } from 'src/common/decorators/ctxId.decorator';
import { OrderManagementService } from './orderManagement.service';

@Controller('/order')
export class OrderManagement {
  @Inject()
  orderManagementService: OrderManagementService;

  @Get('/hello')
  getHello(@CtxId() ctxId:string): string {
    return this.orderManagementService.getHello();
  }
}
