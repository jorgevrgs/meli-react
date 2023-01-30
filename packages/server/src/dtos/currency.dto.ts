import { Expose } from 'class-transformer';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CurrencyDto {
  @IsString()
  @Expose({ name: 'id' })
  'currency': string;

  @IsString()
  'symbol': string;

  @IsString()
  'description': string;

  @IsNumber()
  @IsPositive()
  @Expose({ name: 'decimal_places' })
  'decimal': number;
}
