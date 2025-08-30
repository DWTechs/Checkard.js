import { getTag, compare } from './utils';
import { isNum, isStr } from './internal';
import { throwError } from './error';
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
    throwError('boolean', v);
  
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
 * @returns {boolean} `true` if the value is a number (or number|string if type=false) and passes all checks, otherwise `false`.
 * @throws {Error} Throws an error if the comparison fails and throwError is true.
 */
function isNumber<T extends boolean = true>(v: unknown, 
                  type: T = true as T,
                  comparator: Comparator | null = null, 
                  limit: number | null = null,
                  throwErr: boolean = false
                 ): v is T extends true ? number : number | string {

  if (isSymbol(v) || v?.constructor === Array || !isNum(v, type)) {
    if (throwErr) 
      throwError('number', v);
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
      throwError('string', v);
    return false;
  }
  
  return compare(v.length, comparator, limit, throwErr);
}

/**
 * Checks if the provided value is a symbol.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not symbol. If false, returns false.
 * @returns {boolean} True if the value is a symbol, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a symbol and throwErr is true.
 */
function isSymbol(v: unknown, throwErr: boolean = false): v is symbol {
  const type = typeof v;
  if (type === 'symbol' || (type === 'object' && v != null && getTag(v) === '[object Symbol]'))
    return true;
  
  if (throwErr)
    throwError('symbol', v);
  
  return false;
}

/**
 * Checks if the given value is `null` or `undefined`.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not null or undefined. If false, returns false.
 * @returns `true` if the value is `null` or `undefined`, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not null or undefined and throwErr is true.
 */
function isNil(v: unknown, throwErr: boolean = false): v is null | undefined {
  if (v == null)
    return true;
  
  if (throwErr)
    throwError('null or undefined', v);
  
  return false;
}

/**
 * Checks if the given value is `null`.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not null. If false, returns false.
 * @returns `true` if the value is `null`, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not null and throwErr is true.
 */
function isNull(v: unknown, throwErr: boolean = false): v is null {
  if (v === null)
    return true;
  
  if (throwErr)
    throwError('null', v);
  
  return false;
}

/**
 * Checks if the given value is `undefined`.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not undefined. If false, returns false.
 * @returns `true` if the value is `undefined`, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not undefined and throwErr is true.
 */
function isUndefined(v: unknown, throwErr: boolean = false): v is undefined {
  if (v === undefined)
    return true;
  
  if (throwErr)
    throwError('undefined', v);
  
  return false;
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
