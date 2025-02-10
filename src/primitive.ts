import { getTag, compare } from './utils';
import { isNum, isStr } from './internal';
import type { Comparator } from './types';

/**
 * Checks if the given value is of type boolean.
 *
 * @param v - The value to check.
 * @returns True if the value is a boolean, otherwise false.
 */
function isBoolean(v: unknown): v is boolean {
  return typeof v === "boolean";
}

/**
 * Checks if the given value is a number.
 * If typeCheck = false values like '4', '0', '8e4', '+true', '0x44' return true
 * @param v - The value to check.
 * @param type - A boolean indicating whether to use strict type checking. 
 *               If true, the function checks if the value is strictly equal to its number representation.
 *               If false, the function uses a custom `isNum` function for checking.
 * @returns A boolean indicating whether the value is a number.
 */
function isNumber(v: unknown, 
                  type = true,
                  comparator: Comparator | null = null, 
                  limit: number | null = null): v is number {
  return !isSymbol(v) 
         && !(v?.constructor === Array)
         && isNum(v, type) ? 
          compare(v, comparator, limit) 
          : false;
          

}

/**
 * Checks if the given value is a string and optionally compares its length.
 *
 * @param v - The value to check.
 * @param comparator - An optional comparator function to compare the string length.
 * @param limit - An optional limit to compare the string length against.
 * @returns `true` if the value is a string and meets the comparator and limit conditions, otherwise `false`.
 */
function isString(
  v: unknown, 
  comparator: Comparator | null = null, 
  limit: number | null = null): v is string {
  return isStr(v) 
         ? compare(v.length, comparator, limit) 
         : false;
}

/**
 * Checks if the provided value is a symbol.
 *
 * @param v - The value to check.
 * @returns True if the value is a symbol, otherwise false.
 */
function isSymbol(v: unknown): v is symbol {
  const type = typeof v;
  return type === 'symbol' || (type === 'object' && v != null && getTag(v) === '[object Symbol]');
}

/**
 * Checks if the given value is `null` or `undefined`.
 *
 * @param v - The value to check.
 * @returns `true` if the value is `null` or `undefined`, otherwise `false`.
 */
function isNil(v: unknown): v is null | undefined {
  return v == null;
}

/**
 * Checks if the given value is `null`.
 *
 * @param v - The value to check.
 * @returns `true` if the value is `null`, otherwise `false`.
 */
function isNull(v: unknown): v is null {
  return v === null;
}

/**
 * Checks if the given value is `undefined`.
 *
 * @param v - The value to check.
 * @returns `true` if the value is `undefined`, otherwise `false`.
 */
function isUndefined(v: unknown): v is undefined {
  return v === undefined;
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
