import {
  BadRequestException,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserDao } from 'src/dao/user.dao';

export class AuthService {
  @Inject()
  private userDao: UserDao;

  async createUser(user: any) {
    try {
      const result = await this.userDao.createUser(user);
      return result;
    } catch (err) {
      if (err.code === 11000)
        throw new BadRequestException('User already exist');
      throw new InternalServerErrorException(err.message);
    }
  }

  async saveCoustmerDetails(customerDetails: any) {
    try {
      const result = await this.userDao.saveCustomerDetails(customerDetails);
      return result;
    } catch (err) {
      if (err.code === 11000)
        throw new BadRequestException('User already exist');
      throw new InternalServerErrorException(err.message);
    }
  }
}
