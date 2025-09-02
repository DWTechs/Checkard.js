import { isString } from './primitive';
import { compare, getTag } from './utils';
import { throwError } from './error';
import { isArr } from './internal';
import type { Comparator } from './types';

/**
 * Checks if the given value is an object and optionally if it is non-empty.
 *
 * @template T - The expected type of the object.
 * @param {unknown} v - The value to check.
 * @param {boolean} [empty=false] - If true, the function will also check if the object is non-empty.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an object. If false, returns false.
 * @returns {v is object & T} - Returns true if the value is an object (and non-empty if specified), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an object and throwErr is true.
 */
function isObject<T = unknown>(
  v: unknown, 
  empty = false, 
  throwErr: boolean = false
): v is object & T {

  if (v !== null && typeof v === "object" && !isArray(v) && (empty ? !!Object.keys(v).length : true))
    return true;
  
  if (throwErr)
    throwError('object', v);
  
  return false;

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
      throwError('array', v);
    return false;
  }
  
  return compare(v.length, comparator, limit, throwErr);
}

/**
 * Checks if the given input is a valid JSON string.
 *
 * @param {unknown} v - The input to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not valid JSON. If false, returns false.
 * @returns {boolean} `true` if the input is a valid JSON string, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not valid JSON and throwErr is true.
 */
function isJson(
  v: unknown, 
  throwErr: boolean = false
): v is JSON {
  
  if (isString(v, ">", 0)) {
    try {
      JSON.parse(v);
    } catch (e) {
      if (throwErr)
        throwError('valid JSON string', v);
      return false;
    }
    return true;
  }

  if (throwErr)
    throwError('valid JSON string', v);
  return false;

}

/**
 * Checks if the given value is a regular expression.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - If true, uses `instanceof` to check if `v` is a RegExp. If false, attempts to create a new RegExp from `v`.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a RegExp. If false, returns false.
 * @returns {boolean} `true` if `v` is a RegExp or can be converted to a RegExp, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a RegExp and throwErr is true.
 */
function isRegex(
  v: unknown, 
  type = true, 
  throwErr: boolean = false
): v is RegExp {
  if (type) {
    if (v instanceof RegExp)
      return true;
    if (throwErr)
      throwError('valid RegExp pattern', v);
    return false;
  }
  
  try {
    new RegExp(v as RegExp | string);
    return true;
  } catch (e) {
    if (throwErr)
      throwError('valid RegExp pattern', v);
    return false;
  }
}

/**
 * Checks if the given value is a valid Date object.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid Date. If false, returns false.
 * @returns {boolean} True if the value is a Date object and not NaN, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid Date and throwErr is true.
 */
function isDate(
  v: unknown, 
  throwErr: boolean = false
): v is Date {
 
  if (v instanceof Date && !Number.isNaN(v.getTime()))
    return true;
  
  if (throwErr)
    throwError('Date', v);
  
  return false;
}

/**
 * Checks if the provided value is a function.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a function. If false, returns false.
 * @returns {boolean} A boolean indicating whether the value is a function, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a function and throwErr is true.
 */
function isFunction(
  v: unknown, 
  throwErr: boolean = false
): v is (...args: unknown[]) => unknown {
  
  if (Boolean(v && getTag(v) === "[object Function]"))
    return true;
  
  if (throwErr)
    throwError('function', v);
  
  return false;
  
}

export {
  isObject,
  isArray,
  isJson,
  isRegex,
  isDate,
  isFunction,
};
