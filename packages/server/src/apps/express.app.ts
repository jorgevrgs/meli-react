import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import logger from 'pino-http';

const app = express();

app.use(helmet());
app.use(cors());
app.use(logger());
app.use(express.json());

export default app;
