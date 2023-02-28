import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from 'src/schemas/order.schema';
var ObjectId = require('mongoose').Types.ObjectId;
@Injectable()
export class OrderDao {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async create(order: Order): Promise<Order> {
    const newOrder = new this.orderModel(order);
    return newOrder.save();
  }

  async updateOrder(orderId: string) {
    const result = await this.orderModel.findByIdAndUpdate(
      { _id: new ObjectId(orderId) },
      { orderClosed: true },
    );
    return result;
  }

  async getOrders(isOrderClosed): Promise<Order[]> {
    const orders = await this.orderModel.find({
      orderClosed: isOrderClosed,
      isValidOrder: true,
    });
    return orders;
  }

  async deleteOrder(orderId: string) {
    const order = await this.orderModel.updateOne(
      { _id: new ObjectId(orderId) },
      { $set: { isValidOrder: false } },
      { new: false },
    );
    return order;
  }
}
