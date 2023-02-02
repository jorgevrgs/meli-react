import { Expose } from 'class-transformer';
import { Snapshot } from './snapshot.dto';

export class ItemDescriptionDto {
  'text': string;

  @Expose()
  'plain_text': string;

  'last_updated': string;
  'date_created': string;
  'snapshot': Snapshot;
}
