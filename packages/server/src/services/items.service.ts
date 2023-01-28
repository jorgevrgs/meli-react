import createHttpError from 'http-errors';
import { request } from 'undici';
import { MELI_SEARCH_URL } from '../constants/urls.constant';

export class ItemsService {
  private 'endpoint' = MELI_SEARCH_URL;

  async findAll(query?: string) {
    const url = new URL(this.endpoint);

    if (query) {
      url.searchParams.append('q', query);
    }

    const { statusCode, body } = await request(url);

    if (statusCode !== 200) {
      createHttpError(statusCode, 'Error fetching items');
    }

    return body.json();
  }

  async findOne(id: string) {
    const url = new URL(`${this.endpoint}/${id}`);

    const response = await request(url);

    const { statusCode, body } = response;

    if (statusCode !== 200) {
      createHttpError(statusCode, 'Error fetching item');
    }

    return body.json();
  }
}
