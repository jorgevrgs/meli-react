import { plainToClass } from 'class-transformer';
import createHttpError from 'http-errors';
import { request } from 'undici';
import { MELI_ITEM_URL, MELI_SEARCH_URL } from '../constants/urls.constant';
import { ItemApiDto } from '../dtos/item-api.dto';
import { ItemsApiDto } from '../dtos/items-api.dto';
import type {
  AppContext,
  CategoryResponse,
  ItemResponse,
  SearchItemsResponse,
} from '../types';

export class ItemsService {
  private readonly 'categoryService': AppContext['categoryService'];
  private readonly 'currencyService': AppContext['currencyService'];
  private readonly 'descriptionService': AppContext['descriptionService'];

  private readonly 'itemUrl' = MELI_ITEM_URL;
  private readonly 'searchUrl' = MELI_SEARCH_URL;

  private PAGINATION_LIMIT = process.env.DEFAULT_PAGINATION_LIMIT ?? '4';

  constructor({
    categoryService,
    currencyService,
    descriptionService,
  }: AppContext) {
    this.categoryService = categoryService;
    this.currencyService = currencyService;
    this.descriptionService = descriptionService;
  }

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

    const items: SearchItemsResponse = await body.json();

    const currencyIds: string[] = Array.from(
      new Set(items.results.map((item) => item.currency_id))
    );

    const currencies = await Promise.all(
      currencyIds.map((currencyId) => this.currencyService.findOne(currencyId))
    );

    // Find the most relevant category id
    let categories: CategoryResponse | null = null;

    // First option: find the category in the filters
    const categoryFilter = items.filters.find(
      (filter) => filter.id === 'category'
    );

    if (categoryFilter) {
      categories = categoryFilter.values[0];
    } else {
      // Second option: find the category in the available filters

      const mostRelevantCategoryId = items.available_filters.find(
        (filter) => filter.id === 'category'
      )?.values[0].id;

      if (mostRelevantCategoryId) {
        categories = await this.categoryService.findOne(mostRelevantCategoryId);
      }
    }

    return plainToClass(
      ItemsApiDto,
      {
        items: items.results.map((item) => ({
          ...item,
          currency: currencies.find((c) => c.id === item.currency_id),
        })),
        categories,
      },
      {
        excludeExtraneousValues: true,
      }
    );
  }

  async findOne(id: string) {
    const url = new URL(this.itemUrl.replace(':id', id));

    const { statusCode, body } = await request(url);

    if (statusCode !== 200) {
      throw createHttpError(statusCode, 'Error fetching item');
    }

    const item: ItemResponse = await body.json();

    const [description, currency] = await Promise.all([
      this.descriptionService.findOne(id),
      this.currencyService.findOne(item.currency_id),
    ]);

    return plainToClass(
      ItemApiDto,
      {
        item: {
          ...item,
          currency,
          description,
        },
      },
      {
        excludeExtraneousValues: true,
      }
    );
  }
}
