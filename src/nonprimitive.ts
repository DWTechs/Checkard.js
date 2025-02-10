import { isString } from './primitive';
import { compare, getTag } from './utils';
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
 * @param v - The value to check.
 * @param comparator - An optional comparator function to compare the array length.
 * @param limit - An optional limit to compare the array length against.
 * @returns `true` if the value is an array and meets the comparator and limit conditions, otherwise `false`.
 */
function isArray<T = unknown>(
  v: unknown, 
  comparator: Comparator | null = null, 
  limit: number | null = null
): v is T[] {
  return isArr(v) ? compare(v.length, comparator, limit) : false;
}

/**
 * Checks if the given input is a valid JSON string.
 *
 * @param v - The input to check.
 * @returns `true` if the input is a valid JSON string, otherwise `false`.
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
 * @param v - The value to check.
 * @param type - If true, uses `instanceof` to check if `r` is a RegExp. If false, attempts to create a new RegExp from `r`.
 * @returns `true` if `r` is a RegExp or can be converted to a RegExp, otherwise `false`.
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
 * @param v - The value to check.
 * @returns True if the value is a Date object and not NaN, otherwise false.
 */
function isDate(v: unknown): v is Date {
  return !Number.isNaN(v) && v instanceof Date;
}

/**
 * Checks if the provided value is a function.
 *
 * @param v - The value to check.
 * @returns A boolean indicating whether the value is a function.
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
