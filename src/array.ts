

function isArrayOfLength<T = unknown>(
  a: Array<T>, 
  min = 0, 
  max = 999999999): boolean 
{
  // if (isArray(a, null, null)) {
    const n = a.length;
    return n >= min && n <= max;
  // }
  // return false;
}

function isIn(arr: unknown[], v: unknown, fromIndex = 0): boolean {
  return /*isArray(arr, '>', 0) ? */arr.includes(v, fromIndex)/* : false*/;
}

export {
  isArrayOfLength,
  isIn,
};
