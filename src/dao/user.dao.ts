import { Inject, Injectable } from '@nestjs/common';
import { User, userDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserDao {
  constructor(@InjectModel(User.name) private userModel: Model<userDocument>) {}

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
