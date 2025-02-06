import { getTag, compare } from './utils';
import { isNum, isStr } from './internal';
import type { Comparator } from './types';

function isBoolean(v: unknown): v is boolean {
  return typeof v === "boolean";
}

function isNumber(n: unknown, type = true): n is number {
  return !isSymbol(n) 
         && !(n?.constructor === Array) 
         && (type ? Number(n) === n : isNum(n));
}

function isString(
  v: unknown, 
  comparator: Comparator | null = null, 
  limit: number | null = null): v is string {
  return isStr(v) 
         ? compare(v.length, comparator, limit) 
         : false;
}

function isSymbol(s: unknown): s is symbol {
  const type = typeof s;
  return type === 'symbol' || (type === 'object' && s != null && getTag(s) === '[object Symbol]');
}

function isNil(n: unknown): n is null | undefined {
  return n == null;
}

function isNull(n: unknown): n is null {
  return n === null;
}

function isUndefined(u: unknown): u is undefined {
  return u === undefined;
}

export {
  isString,
  isBoolean,
  isNumber,
  isSymbol,
  isNil,
  isNull,
  isUndefined,
};
