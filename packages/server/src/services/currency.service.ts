import createHttpError from 'http-errors';
import { request } from 'undici';
import { MELI_CURRENCY_URL } from '../constants/urls.constant';
import { CurrencyResponse } from '../types';

export class CurrencyService {
  private readonly 'currencyUrl' = MELI_CURRENCY_URL;

  async findOne(id: string) {
    const url = new URL(this.currencyUrl.replace(':id', id));

    const { statusCode, body } = await request(url);

    if (statusCode !== 200) {
      throw createHttpError(statusCode, 'Error fetching currency');
    }

    const currencyBody: CurrencyResponse = await body.json();

    return currencyBody;
  }
}
