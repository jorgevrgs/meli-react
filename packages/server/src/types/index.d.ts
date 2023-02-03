import type { RequestHandler } from 'express';
import type { CategoryService } from '../services/category.service';
import type { CurrencyService } from '../services/currency.service';
import type { DescriptionService } from '../services/description.service';
import type { ItemsService } from '../services/items.service';

export interface BaseController {
  findAll: RequestHandler;
  findOne: RequestHandler;
}

export interface AppContext {
  categoryService: CategoryService;
  currencyService: CurrencyService;
  descriptionService: DescriptionService;
  itemsService?: ItemsService;
}

export * from './meli';
