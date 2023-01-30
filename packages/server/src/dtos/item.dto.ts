import {
  Exclude,
  Expose,
  plainToClass,
  Transform,
  Type,
} from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { CurrencyDto } from './currency.dto';
import { ItemDescriptionDto } from './item-description.dto';
import { PriceDto } from './price.dto';
import { ShippingDto } from './shipping.dto';

@Exclude()
export class ItemDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  'id': string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  'title': string;

  @Type(() => CurrencyDto)
  'currency': CurrencyDto;

  @Expose({ name: 'currency' })
  @Transform(({ value, obj }) =>
    plainToClass(PriceDto, { ...value, amount: obj.price })
  )
  @Type(() => CurrencyDto)
  'price': PriceDto;

  @IsString()
  @IsUrl()
  @Expose({ name: 'secure_thumbnail' })
  'picture': string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  'condition': string;

  @Expose({ name: 'shipping' })
  @Transform(({ value }) => value.free_shipping)
  @Type(() => ShippingDto)
  'free_shipping': boolean;

  @IsNumber()
  @Expose()
  'sold_quantity': number;

  @IsString()
  @Expose({ name: 'description' })
  @Transform(({ value }) => value.plain_text)
  @Type(() => ItemDescriptionDto)
  'description': string;
}
