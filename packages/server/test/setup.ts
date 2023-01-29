import { MockAgent, setGlobalDispatcher } from 'undici';
import { MELI_BASE_URL } from '../src/constants/urls.constant';

const agent = new MockAgent();
agent.disableNetConnect();

const client = agent.get(MELI_BASE_URL);

client
  .intercept({
    path: '/items/200',
    method: 'GET',
  })
  .reply(200, {
    id: '200',
    title: 'Item 200',
  });

client
  .intercept({
    path: '/items/400',
    method: 'GET',
  })
  .reply(400);

client
  .intercept({
    path: '/sites/MLA/search?q=iphone',
    method: 'GET',
  })
  .reply(200, [
    {
      id: '200',
      title: 'Item 200',
    },
  ]);

client
  .intercept({
    path: '/sites/MLA/search?q=error',
    method: 'GET',
  })
  .reply(400, []);

setGlobalDispatcher(agent);
