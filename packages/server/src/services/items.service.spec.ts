import mockedEnv from 'mocked-env';
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import { ItemsService } from './items.service';
import { author, item } from './__fixtures__/items.fixture';

describe('ItemService', () => {
  let service: ItemsService;
  let restoreEnv: () => void;

  beforeAll(() => {
    restoreEnv = mockedEnv({
      SITE_ID: 'MLA',
      DEFAULT_PAGINATION_LIMIT: '4',
      AUTHOR_FIRST_NAME: 'John',
      AUTHOR_LAST_NAME: 'Doe',
    });
  });

  afterAll(() => {
    restoreEnv();
  });

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
    expect(JSON.parse(JSON.stringify(actual))).toEqual({ author, item });
  });

  // FIXME: unrecognized path
  // it('should return a list of items', async () => {
  //   const actual = await service.findAll('iphone');
  //   expect(actual).toEqual(items);
  // });

  it('should throw an error for an item', async () => {
    await expect(service.findOne('400')).rejects.toThrow('Error fetching item');
  });

  it('should throw an error for a list of items', async () => {
    await expect(service.findAll('error')).rejects.toThrow(
      'Error fetching items'
    );
  });
});
