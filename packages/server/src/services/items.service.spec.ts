import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ItemsService } from './items.service';

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
    const actual = await service.findOne('200');
    expect(actual).toEqual({ id: '200', title: 'Item 200' });
  });

  it('should return a list of items', async () => {
    const actual = await service.findAll('iphone');
    expect(actual).toEqual([{ id: '200', title: 'Item 200' }]);
  });

  it('should throw an error for an item', async () => {
    await expect(service.findOne('400')).rejects.toThrow('Error fetching item');
  });

  it('should throw an error for a list of items', async () => {
    await expect(service.findAll('error')).rejects.toThrow(
      'Error fetching items'
    );
  });
});
