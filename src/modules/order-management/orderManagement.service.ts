import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { OrderDao } from 'src/dao/order.dao';

@Injectable()
export class OrderManagementService {
  @Inject()
  orderDao: OrderDao;

  getHello(): string {
    return 'Hello World!';
  }

  async create(orderDetails: any) {
    try {
      const result = await this.orderDao.create(orderDetails);
      return result;
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException(err.message);
    }
  }
  async getOrders(status) {
    try {
      const isOrderClosed = status === 'OPEN' ? false : true;
      const result = await this.orderDao.getOrders(isOrderClosed);
      return result;
    } catch (err) {}
  }

  async updateOrder(orderId: string) {
    try {
      const result = await this.orderDao.updateOrder(orderId);
      return result;
    } catch (err) {}
  }
}
