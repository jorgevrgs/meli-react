import { request } from 'undici';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MELI_SEARCH_URL } from '../constants/urls.constant';
import { ItemsService } from './items.service';

vi.mock('undici', () => ({
  request: vi.fn(() => ({
    statusCode: 200,
    body: {
      json: vi.fn(() => ({ id: '123', title: 'Item 123' })),
    },
  })),
}));

describe('ItemService', () => {
  let service: ItemsService;

  beforeEach(() => {
    service = new ItemsService();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an item', async () => {
    const actual = await service.findOne('123');

    expect(request).toBeCalledWith(new URL(`${MELI_SEARCH_URL}/123`));
    expect(actual).toEqual({ id: '123', title: 'Item 123' });
  });

  it('should return a list of items', async () => {
    const actual = await service.findAll('123');

    expect(request).toBeCalledWith(new URL(`${MELI_SEARCH_URL}?q=123`));
    expect(actual).toEqual({ id: '123', title: 'Item 123' });
  });
});
