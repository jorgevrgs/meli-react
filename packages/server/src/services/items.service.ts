import { plainToClass } from 'class-transformer';
import createHttpError from 'http-errors';
import { request } from 'undici';
import {
  MELI_CURRENCY_URL,
  MELI_ITEM_DESCRIPTION_URL,
  MELI_ITEM_URL,
  MELI_SEARCH_URL,
} from '../constants/urls.constant';
import { ItemApiDto } from '../dtos/item-api.dto';
import { ItemsApiDto } from '../dtos/items-api.dto';

export class ItemsService {
  private readonly 'searchUrl' = MELI_SEARCH_URL;
  private readonly 'itemUrl' = MELI_ITEM_URL;
  private readonly 'itemDescriptionUrl' = MELI_ITEM_DESCRIPTION_URL;
  private readonly 'currencyUrl' = MELI_CURRENCY_URL;

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

    const itemsBody = await body.json();

    const currencies: string[] = Array.from(
      new Set(itemsBody.results.map((item: any) => item.currency_id))
    );

    const currenciesPromises = currencies.map((currencyId) =>
      request(this.currencyUrl.replace(':id', currencyId))
    );

    const currenciesResponses = await Promise.all(currenciesPromises);

    const currenciesBodies = await Promise.all(
      currenciesResponses.map((response) => response.body.json())
    );

    return plainToClass(
      ItemsApiDto,
      {
        items: itemsBody.results.map((i: any) => ({
          ...i,
          currency: currenciesBodies.find((c) => c.id === i.currency_id),
        })),
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

    const [itemBody, descriptionBody] = await Promise.all([
      item.body.json(),
      description.body.json(),
    ]);

    const currency = await request(
      this.currencyUrl.replace(':id', itemBody.currency_id)
    );

    if (currency.statusCode !== 200) {
      throw createHttpError(currency.statusCode, 'Error fetching currency');
    }

    const currencyBody = await currency.body.json();

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
