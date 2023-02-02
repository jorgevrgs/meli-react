import { Expose, Transform, Type } from 'class-transformer';
import { AuthorDto } from './author.dto';
import { CategoryDto, CategoryPathFromRoot } from './category.dto';
import { ItemDto } from './item.dto';

export class ItemsApiDto {
  @Expose({ toClassOnly: true })
  @Type(() => AuthorDto)
  @Transform(() => new AuthorDto())
  readonly 'author': AuthorDto;

  @Expose()
  @Type(() => CategoryDto)
  @Transform(
    ({ value }) =>
      value && value.path_from_root.map((v: CategoryPathFromRoot) => v.name)
  )
  'categories': string[];

  @Expose()
  @Type(() => ItemDto)
  'items': Omit<ItemDto, 'sold_quantity' | 'description'>[];
}
