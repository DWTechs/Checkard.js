import type { Comparator } from './types';
import { comparisons as comps } from './utils';
import { isValidInteger } from './validnumber';

function isArray<T = unknown>(a: unknown, comp?: Comparator|null, len?: number|null): a is Array<T> {
  return a?.constructor === Array 
    ? (comp && isValidInteger(len, 0, 999999999)) 
      ? Object.prototype.hasOwnProperty.call(comps, comp) 
        ? comps[comp]((a as Array<T>).length, len) 
        : false 
      : true 
    : false;
}

function isArrayOfLength<T = unknown>(a: unknown, 
                               min = -999999999, 
                               max = 999999999): a is Array<T> {
  if (isArray(a, null, null)) {
    const n = a.length;
    return n >= min && n <= max;
  }
  return false;
}

function isIn(val: unknown, arr: unknown[]): boolean {
  return isArray(arr, '>', 0) ? arr.includes(val) : false;
}

export {
  isArray,
  isArrayOfLength,
  isIn,
};
