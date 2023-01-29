import createHttpError from 'http-errors';
import { request } from 'undici';
import { MELI_ITEM_URL, MELI_SEARCH_URL } from '../constants/urls.constant';

export class ItemsService {
  private 'searchUrl' = MELI_SEARCH_URL;
  private 'itemUrl' = MELI_ITEM_URL;
  // private 'itemDescriptionUrl' = MELI_ITEM_DESCRIPTION_URL

  async findAll(query?: string) {
    const url = new URL(this.searchUrl);

    if (query) {
      url.searchParams.append('q', query);
    }

    const { statusCode, body } = await request(url);

    if (statusCode !== 200) {
      throw createHttpError(statusCode, 'Error fetching items');
    }

    return body.json();
  }

  async findOne(id: string) {
    const urlItem = new URL(this.itemUrl.replace(':id', id));
    // const urlDescription = new URL(this.itemDescriptionUrl.replace(':id', id));

    const response = await request(urlItem);

    const { statusCode, body } = response;

    if (statusCode !== 200) {
      throw createHttpError(statusCode, 'Error fetching item');
    }

    return body.json();
  }
}
