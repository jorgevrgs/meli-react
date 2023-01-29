import { loadControllers, scopePerRequest } from 'awilix-express';
import type { ErrorRequestHandler, RequestHandler } from 'express';
import createHttpError from 'http-errors';
import app from '../apps/express.app';
import container from './container.adapter';

app.use(scopePerRequest(container));
app.use(loadControllers('../routes/*.route.ts', { cwd: __dirname }));

const notFoundErrorHandler: RequestHandler = (req, res, next) => {
  next(createHttpError(404));
};

const defaultErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status ?? 500).json({
    code: err.status ?? 500,
    success: false,
    message: err.message,
  });
};

app.use(notFoundErrorHandler);

app.use(defaultErrorHandler);

export default app;
