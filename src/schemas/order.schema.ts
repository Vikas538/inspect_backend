import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  dateOfRequest: string;
  @Prop()
  dateOfDelivery: string;
  @Prop()
  orderClosed: boolean;
  @Prop({ default: true })
  isValidOrder: boolean;
  @Prop()
  price: number;
  @Prop({ type: Types.ObjectId, ref: 'CustomerCredentials' })
  customerId: Types.ObjectId;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
