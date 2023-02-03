import { asClass, createContainer } from 'awilix';
import 'reflect-metadata';
import { CategoryService } from '../services/category.service';
import { CurrencyService } from '../services/currency.service';
import { DescriptionService } from '../services/description.service';
import { ItemsService } from '../services/items.service';

const container = createContainer();

container.register({
  categoryService: asClass(CategoryService).singleton(),
  currencyService: asClass(CurrencyService).singleton(),
  descriptionService: asClass(DescriptionService).singleton(),
  itemsService: asClass(ItemsService).singleton(),
});

export default container;
