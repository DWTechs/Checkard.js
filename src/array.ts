import type { Comparator } from './types';
import { comparisons } from './utils';
import { isValidInteger } from './validnumber';

function isArray<T = any>(a: any, comp?: Comparator|null, len?: number|null): a is Array<T> {
  return a?.constructor === Array ? (comp && isValidInteger(len, 0, 999999999)) ? comparisons.hasOwnProperty(comp) ? comparisons[comp](a.length, len) : false : true : false;
}

function isIn(val: any, arr: any[]): boolean {
  return isArray(arr, '>', 0) ? arr.includes(val) : false;
}

export {
  isArray,
  isIn,
};
