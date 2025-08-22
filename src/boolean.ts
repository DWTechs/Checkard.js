
import { throwError } from './error';

/**
 * Checks if a value is falsy.
 *
 * A value is considered falsy if it is : 
 * false,
 * 0, 
 * -0,
 * "",
 * null,
 * undefined,
 * NaN.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not falsy. If false, returns false.
 * @returns {boolean} `true` if the value is falsy, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not falsy and throwErr is true.
 */
function isFalsy(v: unknown, throwErr: boolean = false): boolean {
  if (!v)
    return true;
  
  if (throwErr)
    throwError('falsy value', v);
  
  return false;
}


/**
 * Checks if a value is truthy.
 *
 * true: The boolean value true.
 * Non-zero numbers: Any number other than 0 or -0.
 * Non-empty strings: Any string with at least one character.
 * Objects: Any object, including empty objects and arrays.
 * Symbols: Any symbol.
 * BigInt values: Any BigInt value other than 0n.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not truthy. If false, returns false.
 * @returns {boolean} `true` if the value is truthy, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not truthy and throwErr is true.
 */
function isTruthy(v: unknown, throwErr: boolean = false): boolean {
  if (!!v)
    return true;
  
  if (throwErr)
    throwError('truthy value', v);
  
  return false;
}

export {
  isFalsy,
  isTruthy,
};
