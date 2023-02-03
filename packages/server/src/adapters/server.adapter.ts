import { scopePerRequest } from 'awilix-express';
import { ErrorRequestHandler, RequestHandler, Router } from 'express';
import app from '../apps/express.app';
import itemsRoute from '../routes/items.route';
import container from './container.adapter';

const router = Router();

app.use(scopePerRequest(container));
app.use('/api', itemsRoute(router));

const notFoundErrorHandler: RequestHandler = (_req, res, next) => {
  res.status(404).json({
    code: 404,
    success: false,
    message: 'Not Found',
  });
};

const defaultErrorHandler: ErrorRequestHandler = (err, _req, res) => {
  res.status(err.status ?? 500).json({
    code: err.status ?? 500,
    success: false,
    message: err.message,
  });
};

app.use(notFoundErrorHandler);

app.use(defaultErrorHandler);

export default app;
