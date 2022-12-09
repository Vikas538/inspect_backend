import { Module } from '@nestjs/common';
import { CryptService } from './common.crypt';
import { CommonService } from './common.service';

@Module({
    providers: [
        CryptService,
        CommonService
    ],
    exports: [  
        CryptService,
        CommonService
        
    ],
  })
export class CommonModule {


}
