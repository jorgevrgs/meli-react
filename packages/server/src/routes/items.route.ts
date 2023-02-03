import { makeInvoker } from 'awilix-express';
import { Request, Response, Router } from 'express';
import type { AppContext } from '../types';

function makeAPI({ itemsService }: AppContext) {
  return {
    findAll: async (req: Request, res: Response) => {
      const search = req.query.q as string | undefined;
      const items = await itemsService?.findAll(search);
      res.json(items);
    },
    findOne: async (req: Request, res: Response) => {
      const item = await itemsService?.findOne(req.params.id);
      res.json(item);
    },
  };
}

export default function (router: Router) {
  const api = makeInvoker(makeAPI);

  router.get('/items', api('findAll'));
  router.get('/items/:id', api('findOne'));

  return router;
}
