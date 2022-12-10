import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CustomerCredentialsDocument = HydratedDocument<CustomerCredentials>;

@Schema()
export class CustomerCredentials {
  @Prop({ type: Types.ObjectId })
  _id: string;

  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  phoneNumber: string;
}

export const CustomerCredentialsSchema = SchemaFactory.createForClass(CustomerCredentials);
