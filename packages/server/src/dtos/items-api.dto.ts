import { Expose, Transform, Type } from 'class-transformer';
import { AuthorDto } from './author.dto';
import { ItemDto } from './item.dto';

export class ItemsApiDto {
  @Expose({ toClassOnly: true })
  @Type(() => AuthorDto)
  @Transform(() => new AuthorDto())
  readonly 'author': AuthorDto;

  @Expose()
  'categories': string[];

  @Expose()
  @Type(() => ItemDto)
  'items': Omit<ItemDto, 'sold_quantity' | 'description'>[];
}
