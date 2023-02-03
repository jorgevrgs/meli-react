import createHttpError from 'http-errors';
import { request } from 'undici';
import { MELI_CATEGORY_URL } from '../constants/urls.constant';
import { CategoryResponse } from '../types';

export class CategoryService {
  private readonly 'categoryUrl' = MELI_CATEGORY_URL;

  async findOne(id: string) {
    const url = new URL(this.categoryUrl.replace(':id', id));

    const { statusCode, body } = await request(url);

    if (statusCode !== 200) {
      throw createHttpError(statusCode, 'Error fetching category');
    }

    const categoryBody: CategoryResponse = await body.json();

    return categoryBody;
  }
}
