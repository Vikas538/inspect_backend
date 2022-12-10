import { Module } from '@nestjs/common';
import { CryptService } from './common.crypt';
import { CommonService } from './common.service';
import { CtxId } from './decorators/ctxId.decorator';
import { CtxIdMiddleware } from './middlewares/ctxId.middleware';

@Module({
    providers: [
        CryptService,
        CommonService,
    ],
    exports: [  
        CryptService,
        CommonService,
    ],
  })
export class CommonModule {


}
