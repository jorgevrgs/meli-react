import { asClass, createContainer } from 'awilix';
import 'reflect-metadata';
import { ItemsService } from '../services/items.service';

const container = createContainer();

container.register({
  itemsService: asClass(ItemsService).singleton(),
});

export default container;
