import { Module } from '@nestjs/common';
import { UserDao } from './user.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import {
  CustomerCredentials,
  CustomerCredentialsSchema,
} from 'src/schemas/customerCreds.schema';
import { OrderDao } from './order.dao';
import { Order, OrderSchema } from 'src/schemas/order.schema';

@Module({
  providers: [UserDao, OrderDao],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: CustomerCredentials.name, schema: CustomerCredentialsSchema },
    ]),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  exports: [UserDao, OrderDao],
})
export class DaoModule {}
