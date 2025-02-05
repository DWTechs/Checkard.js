import { isString } from './primitive';
import type { Comparator } from './types';
import { comparisons as comps } from './utils';
import { isValidInteger } from './validnumber';

function isObject<T = unknown>(o: unknown, empty = false): o is object & T {
  return o !== null && typeof o === "object" && !isArray(o) && (empty ? !!Object.keys(o).length : true);
}

function isArray<T = unknown>(
  a: unknown, 
  comp?: Comparator|null, 
  len?: number|null
): a is ReadonlyArray<T> {
  
  return isArr(a) 
    ? (comp && isValidInteger(len, 0, 999999999)) 
      ? Object.prototype.hasOwnProperty.call(comps, comp) 
        ? comps[comp](a.length, len) 
        : false 
      : true 
    : false;
}

function isArr<T = unknown>(a: unknown): a is Array<T> {
  return a?.constructor === Array;
}

// function compare(comp: Comparator | null, len: number |null): len is number {

// }


function isJson(j: unknown): j is JSON {
  if (!isString(j, true))
    return false;

  try {
    JSON.parse(j);
  } catch (e) {
    return false;
  }
  return true;
}

function isRegex(r: unknown, type = true): r is RegExp {
  if (type)
    return r instanceof RegExp;
  
  try {
    new RegExp(r as RegExp | string);
  } catch (e) {
    return false;
  }
  return true;
}

export {
  isObject,
  isArray,
  isJson,
  isRegex,
};
