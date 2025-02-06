import { isString } from './primitive';
import { compare, getTag } from './utils';
import { isArr } from './internal';
import type { Comparator } from './types';

function isObject<T = unknown>(o: unknown, empty = false): o is object & T {
  return o !== null && typeof o === "object" && !isArray(o) && (empty ? !!Object.keys(o).length : true);
}

function isArray<T = unknown>(
  value: unknown, 
  comparator: Comparator | null = null, 
  limit: number | null = null
): value is T[] {
  return isArr(value) 
         ? compare(value.length, comparator, limit) 
         : false;
}

function isJson(j: unknown): j is JSON {
  if (!isString(j, ">", 0))
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

function isDate(v: unknown): v is Date {
  return !Number.isNaN(v) && v instanceof Date;
}

function isFunction(f: unknown): f is (...args: unknown[]) => unknown {
  return Boolean(f && getTag(f) === "[object Function]");
}

export {
  isObject,
  isArray,
  isJson,
  isRegex,
  isDate,
  isFunction,
};
