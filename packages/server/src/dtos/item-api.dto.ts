import { Expose, Type } from 'class-transformer';
import { AuthorDto } from './author.dto';
import { ItemDto } from './item.dto';

export class ItemApiDto {
  @Expose()
  @Type(() => AuthorDto)
  'author': AuthorDto;

  @Expose()
  @Type(() => ItemDto)
  'item': ItemDto;
}
