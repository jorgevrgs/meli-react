import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class AuthorDto {
  @IsString()
  @Expose()
  readonly 'name': string = process.env.AUTHOR_FIRST_NAME ?? 'Jorge';

  @IsString()
  @Expose()
  readonly 'lastname': string = process.env.AUTHOR_LAST_NAME ?? 'Vargas';
}
