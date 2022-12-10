import { Inject, Injectable } from '@nestjs/common';
import { User, userDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  CustomerCredentials,
  CustomerCredentialsDocument,
} from 'src/schemas/customerCreds.schema';

@Injectable()
export class UserDao {
  constructor(
    @InjectModel(User.name) private userModel: Model<userDocument>,
    @InjectModel(CustomerCredentials.name)
    private customerModel: Model<CustomerCredentialsDocument>,
  ) {}

  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async saveCustomerDetails(
    data: CustomerCredentials,
  ): Promise<CustomerCredentials> {
    const result = new this.customerModel(data);
    return result.save();
  }
}
