import 'reflect-metadata';
import { MockAgent, setGlobalDispatcher } from 'undici';
import { MELI_BASE_URL } from '../src/constants/urls.constant';
import {
  category,
  currency,
  description,
  item,
  items,
} from './__fixtures__/response.fixture';

const agent = new MockAgent();
agent.disableNetConnect();

const client = agent.get(MELI_BASE_URL);

// Item

client
  .intercept({
    path: '/items/200',
    method: 'GET',
  })
  .reply(200, item);

client
  .intercept({
    path: '/items/200-bad-currency',
    method: 'GET',
  })
  .reply(200, {
    ...item,
    currency_id: 'BAD',
  });

client
  .intercept({
    path: '/items/400',
    method: 'GET',
  })
  .reply(400);

// Item description
client
  .intercept({
    path: '/items/200/description',
    method: 'GET',
  })
  .reply(200, description);

client
  .intercept({
    path: '/items/400/description',
    method: 'GET',
  })
  .reply(400);

// Currency
client
  .intercept({
    path: '/currencies/ARS',
    method: 'GET',
  })
  .reply(200, currency);

client
  .intercept({
    path: '/currencies/BAD',
    method: 'GET',
  })
  .reply(400);

// Items

client
  .intercept({
    path: '/sites/MLA/search?limit=4&q=iphone',
    method: 'GET',
  })
  .reply(200, items);

client
  .intercept({
    path: '/sites/MLA/search?limit=4&q=error',
    method: 'GET',
  })
  .reply(400, []);

// Categories

client
  .intercept({
    path: '/categories/MLA-CAT-200',
    method: 'GET',
  })
  .reply(200, category);

setGlobalDispatcher(agent);
