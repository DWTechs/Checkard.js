import { isString } from './primitive';
import { compare, getTag, createErrorMsg } from './utils';
import { isArr } from './internal';
import type { Comparator } from './types';

/**
 * Checks if the given value is an object and optionally if it is non-empty.
 *
 * @template T - The expected type of the object.
 * @param {unknown} v - The value to check.
 * @param {boolean} [empty=false] - If true, the function will also check if the object is non-empty.
 * @returns {o is object & T} - Returns true if the value is an object (and non-empty if specified), otherwise false.
 */
function isObject<T = unknown>(v: unknown, empty = false): v is object & T {
  return v !== null && typeof v === "object" && !isArray(v) && (empty ? !!Object.keys(v).length : true);
}

/**
 * Checks if the given value is an array and optionally compares its length.
 *
 * @template T - The type of elements in the array.
 * @param {unknown} v - The value to check.
 * @param {Comparator | null} [comparator=null] - An optional comparator function to compare the array length.
 * @param {number | null} [limit=null] - An optional limit to compare the array length against.
 * @param {boolean} [throwErr=false] - If true, throws an error when comparison fails. If false, returns false.
 * @returns {boolean} `true` if the value is an array and meets the comparator and limit conditions, otherwise `false`.
 * @throws {Error} Throws an error if the comparison fails and throwError is true.
 */
function isArray<T = unknown>(
  v: unknown, 
  comparator: Comparator | null = null, 
  limit: number | null = null,
  throwErr: boolean = false
): v is T[] {
  
  if (!isArr(v)) {
    if (throwErr)
      throw new Error(createErrorMsg('array', v));
    return false;
  }
  
  return compare(v.length, comparator, limit, throwErr);
}

/**
 * Checks if the given input is a valid JSON string.
 *
 * @param {unknown} v - The input to check.
 * @returns {boolean} `true` if the input is a valid JSON string, otherwise `false`.
 */
function isJson(v: unknown): v is JSON {
  if (!isString(v, ">", 0))
    return false;

  try {
    JSON.parse(v);
  } catch (e) {
    return false;
  }
  return true;
}

/**
 * Checks if the given value is a regular expression.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - If true, uses `instanceof` to check if `r` is a RegExp. If false, attempts to create a new RegExp from `r`.
 * @returns {boolean} `true` if `r` is a RegExp or can be converted to a RegExp, otherwise `false`.
 */
function isRegex(v: unknown, type = true): v is RegExp {
  if (type)
    return v instanceof RegExp;
  
  try {
    new RegExp(v as RegExp | string);
  } catch (e) {
    return false;
  }
  return true;
}

/**
 * Checks if the given value is a valid Date object.
 *
 * @param {unknown} v - The value to check.
 * @returns {boolean} True if the value is a Date object and not NaN, otherwise false.
 */
function isDate(v: unknown): v is Date {
  return !Number.isNaN(v) && v instanceof Date;
}

/**
 * Checks if the provided value is a function.
 *
 * @param {unknown} v - The value to check.
 * @returns {boolean} A boolean indicating whether the value is a function.
 */
function isFunction(v: unknown): v is (...args: unknown[]) => unknown {
  return Boolean(v && getTag(v) === "[object Function]");
}

export {
  isObject,
  isArray,
  isJson,
  isRegex,
  isDate,
  isFunction,
};
