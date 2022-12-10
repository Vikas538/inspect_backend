import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CatDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ type: Types.ObjectId })
  _id: string;
  @Prop()
  dateOfRequest: string;
  @Prop()
  dateOfDelivery: string;
  @Prop()
  orderClosed: string;
  @Prop()
  price: string;
  @Prop({ type: Types.ObjectId, ref: 'CustomerCredentials' })
  customerId: Types.ObjectId;
}

export const CatSchema = SchemaFactory.createForClass(Order);
