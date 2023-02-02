import { Expose, Transform, Type } from 'class-transformer';
import { AuthorDto } from './author.dto';
import { ItemDto } from './item.dto';

export class ItemApiDto {
  @Expose({ toClassOnly: true })
  @Type(() => AuthorDto)
  @Transform(() => new AuthorDto())
  readonly 'author': AuthorDto;

  @Expose()
  @Type(() => ItemDto)
  'item': ItemDto;
}
