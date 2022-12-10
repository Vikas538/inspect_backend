import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CtxId } from 'src/common/decorators/ctxId.decorator';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  @Inject()
  private authService: AuthService;

  @Post('/login')
  async login(
    @CtxId() ctxId: string,
    @Body() phoneNumber,
    @Body() password: string,
  ) {
    console.log(password, phoneNumber);
  }

  @Post('/internal/signUp')
  async createUser(@Body() user: any) {
    return await this.authService.createUser(user);
  }

  @Post('/signUp')
  async createCustomer(@Body() customerDetails: any) {
    return await this.authService.saveCoustmerDetails(customerDetails);
  }
}
