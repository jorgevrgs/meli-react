import { loadControllers, scopePerRequest } from 'awilix-express';
import type { ErrorRequestHandler, RequestHandler } from 'express';
import app from '../apps/express.app';
import container from './container.adapter';

app.use(scopePerRequest(container));
app.use('/api', loadControllers('../routes/*.route.ts', { cwd: __dirname }));

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
