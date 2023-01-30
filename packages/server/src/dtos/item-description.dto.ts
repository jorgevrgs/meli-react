import { Expose } from 'class-transformer';

export class ItemDescriptionDto {
  'text': string;

  @Expose()
  'plain_text': string;

  'last_updated': string;
  'date_created': string;
  'snapshot': {
    url: string;
    width: number;
    height: number;
    status: string;
  };
}
