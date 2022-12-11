import { IsString } from 'class-validator';
export class UserLogin {
  @IsString({ message: 'invalid Type' })
  email: string;
  @IsString({ message: 'invalid Type' })
  password: string;
}
export class LocalLogin {
  @IsString({ message: 'invalid Type' })
  email: string;
}
export class RequestRefreshTokens {
  @IsString({ message: 'invalid Type' })
  email: string;

  @IsString({ message: 'invalid Type' })
  refreshToken: string;
}
export class UpdateRefreshToken {
  @IsString({ message: 'invalid Type' })
  refreshToken: string;
}
export class GetTokens {
  @IsString({ message: 'invalid Type' })
  phoneNumber: number;

  @IsString({ message: 'invalid Type' })
  userId: string;

  @IsString({ message: 'invalid Type' })
  role: string;
}
export class Tokens {
  @IsString({ message: 'invalid Type' })
  accessToken: string;
  @IsString({ message: 'invalid Type' })
  refreshToken: string;
}
