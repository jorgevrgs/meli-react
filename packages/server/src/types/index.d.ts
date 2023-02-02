import type { RequestHandler } from 'express';
import type { ItemsService } from '../services/items.service';

export interface BaseController {
  findAll: RequestHandler;
  findOne: RequestHandler;
}

export interface AppContext {
  itemsService: ItemsService;
}

export * from './meli';
