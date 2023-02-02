import { Expose, Type } from 'class-transformer';

export class CategoryPathFromRoot {
  @Expose()
  'id': string;

  @Expose()
  'name': string;
}

export class CategoryDto {
  'id': string;
  'name': string;
  'picture': string;
  'permalink': string | null;
  'total_items_in_this_category': number;

  @Expose()
  @Type(() => CategoryPathFromRoot)
  'path_from_root': CategoryPathFromRoot[];

  'children_categories': CategoryDto[];
  'attribute_types': string;
  'settings': Record<string, unknown>;
  'channels_settings': Record<string, unknown>[];
  'meta_categ_id': string;
  'attributable': boolean;
  'date_created': string;
}
