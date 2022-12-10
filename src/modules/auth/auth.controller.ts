import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CtxId } from 'src/common/decorators/ctxId.decorator';

@Controller('/auth')
export class AuthController {
  @Post('/login')
  async login(
    @CtxId() ctxId: string,
    @Body() phoneNumber,
    @Body() password: string,
  ) {

    console.log(password,phoneNumber)

  }
}
