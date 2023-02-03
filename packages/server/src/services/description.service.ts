import createHttpError from 'http-errors';
import { request } from 'undici';
import { MELI_ITEM_DESCRIPTION_URL } from '../constants/urls.constant';
import { ItemDescriptionResponse } from '../types';

export class DescriptionService {
  private readonly 'itemDescriptionUrl' = MELI_ITEM_DESCRIPTION_URL;

  async findOne(id: string) {
    const url = new URL(this.itemDescriptionUrl.replace(':id', id));

    const { statusCode, body } = await request(url);

    if (statusCode !== 200) {
      throw createHttpError(statusCode, 'Error fetching item description');
    }

    const itemDescriptionBody: ItemDescriptionResponse = await body.json();

    return itemDescriptionBody;
  }
}
