import { plainToClass } from 'class-transformer';
import createHttpError from 'http-errors';
import { request } from 'undici';
import {
  MELI_CATEGORY_URL,
  MELI_CURRENCY_URL,
  MELI_ITEM_DESCRIPTION_URL,
  MELI_ITEM_URL,
  MELI_SEARCH_URL,
} from '../constants/urls.constant';
import { ItemApiDto } from '../dtos/item-api.dto';
import { ItemsApiDto } from '../dtos/items-api.dto';
import type {
  CategoryResponse,
  CurrencyResponse,
  ItemDescriptionResponse,
  ItemResponse,
  SearchItemsResponse,
} from '../types';

export class ItemsService {
  private readonly 'categoryUrl' = MELI_CATEGORY_URL;
  private readonly 'currencyUrl' = MELI_CURRENCY_URL;
  private readonly 'itemDescriptionUrl' = MELI_ITEM_DESCRIPTION_URL;
  private readonly 'itemUrl' = MELI_ITEM_URL;
  private readonly 'searchUrl' = MELI_SEARCH_URL;

  private PAGINATION_LIMIT = process.env.DEFAULT_PAGINATION_LIMIT ?? '4';

  async findAll(query?: string) {
    const url = new URL(this.searchUrl);
    url.searchParams.append('limit', this.PAGINATION_LIMIT);

    if (query) {
      url.searchParams.append('q', query);
    }

    const { statusCode, body } = await request(url);

    if (statusCode !== 200) {
      throw createHttpError(statusCode, 'Error fetching items');
    }

    const itemsBody: SearchItemsResponse = await body.json();

    const currencies: string[] = Array.from(
      new Set(itemsBody.results.map((item) => item.currency_id))
    );

    const currenciesPromises = currencies.map((currencyId) =>
      request(this.currencyUrl.replace(':id', currencyId))
    );

    const currenciesResponses = await Promise.all(currenciesPromises);

    const currenciesBodies: CurrencyResponse[] = await Promise.all(
      currenciesResponses.map((response) => response.body.json())
    );

    // Find the most relevant category id
    const mostRelevantCategoryId = itemsBody.available_filters.find(
      (filter) => filter.id === 'category'
    )?.values[0].id;

    let categoryBody: CategoryResponse | null = null;

    if (mostRelevantCategoryId) {
      const category = await request(
        this.categoryUrl.replace(':id', mostRelevantCategoryId)
      );

      if (category.statusCode !== 200) {
        throw createHttpError(category.statusCode, 'Error fetching category');
      }

      categoryBody = await category.body.json();
    }

    return plainToClass(
      ItemsApiDto,
      {
        items: itemsBody.results.map((i) => ({
          ...i,
          currency: currenciesBodies.find((c) => c.id === i.currency_id),
        })),
        categories: categoryBody,
      },
      {
        excludeExtraneousValues: true,
      }
    );
  }

  async findOne(id: string) {
    const urlItem = new URL(this.itemUrl.replace(':id', id));
    const urlDescription = new URL(this.itemDescriptionUrl.replace(':id', id));

    const [item, description] = await Promise.all([
      request(urlItem),
      request(urlDescription),
    ]);

    if (item.statusCode !== 200 || description.statusCode !== 200) {
      throw createHttpError(item.statusCode, 'Error fetching item');
    }

    const [itemBody, descriptionBody] = await Promise.all<
      [Promise<ItemResponse>, Promise<ItemDescriptionResponse>]
    >([item.body.json(), description.body.json()]);

    const currency = await request(
      this.currencyUrl.replace(':id', itemBody.currency_id)
    );

    if (currency.statusCode !== 200) {
      throw createHttpError(currency.statusCode, 'Error fetching currency');
    }

    const currencyBody: CurrencyResponse = await currency.body.json();

    return plainToClass(
      ItemApiDto,
      {
        item: {
          ...itemBody,
          currency: currencyBody,
          description: descriptionBody,
        },
      },
      {
        excludeExtraneousValues: true,
      }
    );
  }
}
