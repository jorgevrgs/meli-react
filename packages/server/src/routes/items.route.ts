import { GET, route } from 'awilix-express';
import { Request, Response } from 'express';
import type { AppContext, BaseController } from '../types';

@route('/items')
export class ItemsRoute implements BaseController {
  private itemsService: AppContext['itemsService'];

  constructor({ itemsService }: AppContext) {
    this.itemsService = itemsService;
  }

  @route('/')
  @GET()
  async findAll(req: Request, res: Response) {
    const items = await this.itemsService.findAll();
    res.json(items);
  }

  @route('/:id')
  @GET()
  async findOne(req: Request, res: Response) {
    const item = await this.itemsService.findOne(req.params.id);
    res.json(item);
  }
}
