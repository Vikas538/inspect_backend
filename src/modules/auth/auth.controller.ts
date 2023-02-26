import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { CtxId } from 'src/common/decorators/ctxId.decorator';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  @Inject()
  private authService: AuthService;

  @Post('/internal/login')
  async login(
    @CtxId() ctxId: string,
    @Body() data:any
    
  ) {
    const result = await this.authService.validateUser(data.phoneNumber, data.password);
    return result;
  }

  @Post('/internal/signUp')
  async createUser(@Body() user: any) {
    return await this.authService.createUser(user);
  }

  @Post('/signUp')
  async createCustomer(@Body() customerDetails: any) {
    return await this.authService.saveCoustmerDetails(customerDetails);
  }

  @Get('/getCustomerDetailsByPhoneNumber')
  async getUserByphoneNumber(@Query() phoneNumber:string) {

  return await this.authService.getuserByPhoneNumber(phoneNumber)      
    
  }

  @Get('/getAllUsers')
  async getAllUsers() {
    
  }
}
