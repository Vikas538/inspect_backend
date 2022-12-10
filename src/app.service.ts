import { Inject, Injectable } from '@nestjs/common';
import { UserDao } from './dao/user.dao';

@Injectable()
export class AppService {
  @Inject()
  userDao: UserDao;

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(user: any) {
    return this.userDao.create(user);
  }
}
