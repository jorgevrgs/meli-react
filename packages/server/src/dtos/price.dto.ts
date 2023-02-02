import { Expose } from 'class-transformer';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class PriceDto {
  @IsString()
  @Expose()
  'currency': string;

  @IsNumber()
  @IsPositive()
  @Expose()
  'amount': number;

  @IsNumber()
  @IsPositive()
  @Expose()
  'decimal': number;
}
