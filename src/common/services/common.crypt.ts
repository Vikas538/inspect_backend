import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';

@Injectable()
export class CryptService {
  hash(plainText: string) {
    const hash = createHash('sha256').update(plainText).digest('hex');

    return hash;
  }
}
