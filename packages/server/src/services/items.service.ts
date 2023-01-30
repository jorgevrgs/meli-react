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

export class ItemsService {
  private readonly 'searchUrl' = MELI_SEARCH_URL;
  private readonly 'itemUrl' = MELI_ITEM_URL;
  private readonly 'itemDescriptionUrl' = MELI_ITEM_DESCRIPTION_URL;
  private readonly 'currencyUrl' = MELI_CURRENCY_URL;

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
        author: {
          name: 'John',
          lastname: 'Doe',
        },
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
