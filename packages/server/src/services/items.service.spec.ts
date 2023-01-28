import { beforeEach, describe, expect, it } from 'vitest';
import { ItemsService } from './items.service';

describe('ItemService', () => {
  let service: ItemsService;

  beforeEach(() => {
    service = new ItemsService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
