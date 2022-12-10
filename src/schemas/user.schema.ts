import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type userDocument = HydratedDocument<User>;

export enum Roles {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@Schema()
export class User {
  // @Prop({ type: Types.ObjectId })
  // _id: string;
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop({ required: true, unique: true })
  phoneNumber: number;

  @Prop()
  role: Roles;
}

export const UserSchema = SchemaFactory.createForClass(User);
