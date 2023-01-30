import { describe, expect, it } from 'vitest';
import { leftJoin } from './helpers.util';

describe('leftJoin', () => {
  it('should return an array of selected values', () => {
    const left = [{ id: 1 }, { id: 2 }];
    const right = [
      { id: 2, name: 'foo' },
      { id: 3, name: 'bar' },
    ];
    const leftKey = 'id';
    const rightKey = 'id';

    const result = leftJoin(left, right, leftKey, rightKey, (l, r) => ({
      id: l.id,
      name: r?.name,
    }));

    expect(result).toEqual([{ id: 1 }, { id: 2, name: 'foo' }]);
  });
});
