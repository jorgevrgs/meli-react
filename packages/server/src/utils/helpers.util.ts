export function leftJoin<T, U, V>(
  leftArray: T[],
  rightArray: U[],
  leftKey: keyof T | ((obj: T) => string | number),
  rightKey: keyof U | ((obj: U) => string | number),
  callback?: (leftObj: T, rightObj: U | undefined) => any
): V[] {
  return leftArray.map((leftObj) => {
    const leftKeyValue =
      typeof leftKey === 'function' ? leftKey(leftObj) : leftObj[leftKey];
    const rightObj = rightArray.find((obj) => {
      const rightKeyValue =
        typeof rightKey === 'function' ? rightKey(obj) : obj[rightKey];
      return rightKeyValue === leftKeyValue;
    });
    return callback
      ? callback(leftObj, rightObj)
      : Object.assign({}, leftObj, rightObj);
  });
}
