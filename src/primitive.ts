import { getTag, compare, createErrorMsg } from './utils';
import { isNum, isStr } from './internal';
import type { Comparator } from './types';

/**
 * Checks if the given value is of type boolean.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not boolean. If false, returns false.
 * @returns {boolean} True if the value is a boolean, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a boolean and throwErr is true.
 */
function isBoolean( v: unknown, throwErr: boolean = false ): v is boolean {
  
  if (typeof v === "boolean")
    return true;

  if (throwErr) 
    throw new Error(createErrorMsg('boolean', v));
  
  return false;
}


/**
 * Checks if the given value is a number and optionally performs additional checks.
 * If typeCheck = false values like '4', '0', '8e4', '+true', '0x44' return true
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - A boolean indicating whether to perform type checking. Defaults to `true`.
 * @param {Comparator | null} [comparator=null] - An optional comparator function to compare the value. Defaults to `null`.
 * @param {number | null} [limit=null] - An optional limit to compare the value against. Defaults to `null`.
 * @param {boolean} [throwErr=false] - If true, throws an error when comparison fails. If false, returns false.
 * @returns {boolean} `true` if the value is a number and passes all checks, otherwise `false`.
 * @throws {Error} Throws an error if the comparison fails and throwError is true.
 */
function isNumber(v: unknown, 
                  type = true,
                  comparator: Comparator | null = null, 
                  limit: number | null = null,
                  throwErr: boolean = false
                 ): v is number {

  if (isSymbol(v) || v?.constructor === Array || !isNum(v, type)) {
    if (throwErr) 
      throw new Error(createErrorMsg('number', v));
    return false;
  }

  return compare(v, comparator, limit, throwErr);
}

/**
 * Checks if the given value is a string and optionally compares its length.
 *
 * @param {unknown} v - The value to check.
 * @param {Comparator | null} [comparator=null] - An optional comparator function to compare the string length.
 * @param {number | null} [limit=null] - An optional limit to compare the string length against.
 * @param {boolean} [throwErr=false] - If true, throws an error when comparison fails. If false, returns false.
 * @returns {boolean} `true` if the value is a string and meets the comparator and limit conditions, otherwise `false`.
 * @throws {Error} Throws an error if the comparison fails and throwError is true.
 */
function isString(v: unknown, 
                  comparator: Comparator | null = null, 
                  limit: number | null = null,
                  throwErr: boolean = false
                 ): v is string {
  
  if (!isStr(v)) {
    if (throwErr)
      throw new Error(createErrorMsg('string', v));
    return false;
  }
  
  return compare(v.length, comparator, limit, throwErr);
}

/**
 * Checks if the provided value is a symbol.
 *
 * @param {unknown} v - The value to check.
 * @returns True if the value is a symbol, otherwise false.
 */
function isSymbol(v: unknown): v is symbol {
  const type = typeof v;
  return type === 'symbol' || (type === 'object' && v != null && getTag(v) === '[object Symbol]');
}

/**
 * Checks if the given value is `null` or `undefined`.
 *
 * @param {unknown} v - The value to check.
 * @returns `true` if the value is `null` or `undefined`, otherwise `false`.
 */
function isNil(v: unknown): v is null | undefined {
  return v == null;
}

/**
 * Checks if the given value is `null`.
 *
 * @param {unknown} v - The value to check.
 * @returns `true` if the value is `null`, otherwise `false`.
 */
function isNull(v: unknown): v is null {
  return v === null;
}

/**
 * Checks if the given value is `undefined`.
 *
 * @param {unknown} v - The value to check.
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
