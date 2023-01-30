import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class AuthorDto {
  @IsString()
  @Expose()
  'name': string;

  @IsString()
  @Expose()
  'lastname': string;
}
