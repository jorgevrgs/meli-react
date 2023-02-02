import { Expose } from 'class-transformer';

export class ShippingDto {
  'mode': string;
  'methods': string[];
  'tags': string[];
  'dimensions': string | null;
  'local_pick_up': boolean;

  @Expose()
  'free_shipping': boolean;

  'logistic_type': string;
  'store_pick_up': boolean;
}
