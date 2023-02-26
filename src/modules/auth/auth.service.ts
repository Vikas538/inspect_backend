import {
  BadRequestException,
  Inject,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { TokenService } from 'src/common/services/token.service';
import { UserDao } from 'src/dao/user.dao';

export class AuthService {
  @Inject()
  private userDao: UserDao;
  @Inject()
  private tokenService: TokenService;

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

  async validateUser(phoneNumber: number, password: string) {
    try {
      const result = await this.userDao.findUserByPhoneNumberAndPassword(
        phoneNumber,
        password,
      );
      if (result.length > 0) {
        let tokens = await this.tokenService.getTokens({
          phoneNumber,
          userId: result[0]._id,
          role: result[0].role,
        });
        return {
          userId: result[0]._id,
          role:result[0].role,
          ...tokens,
        };
      }
      throw new NotFoundException('User Not Found');
    } catch (err) {
      if (err.message == "User Not Found") {
        throw new NotFoundException('User Not Found');
        
      }
    }
  }

  async getAccessToken(accessToken: string) {
    try {
      // const newToken= await this.tokenService.generateNewAccessToken()
    } catch (err) {
      
    }
  }

  async getuserByPhoneNumber(phoneNumber: string) {
    const user = await this.userDao.findUserByPhoneNumber(phoneNumber)
    if (!user) throw new NotFoundException('USER Not Found')
    return user
  }

  async getAllUsers() {
    const users = await this.userDao.getAllUsers()
    return users
  }

}
