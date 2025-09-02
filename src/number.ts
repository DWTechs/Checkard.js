import { isNumber } from './primitive';
import { throwError } from './error';

/**
 * Checks if a given number is an integer.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an integer. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is an integer (or number|string if type=false), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an integer and throwErr is true.
 */
function isInteger<T extends boolean = true>(
  v: unknown, 
  type: T = true as T, 
  throwErr: boolean = false
): v is T extends true ? number : number | string {

  if (isNumber(v, type)) {
    const int = Number.parseInt(String(v), 10);
    if (type ? v === int : v == int)
      return true;
  }

  if (throwErr)
    throwError('integer', v);
  
  return false;

}

/**
 * Checks if a given number is a floating-point number.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a float. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is a floating-point number (or number|string if type=false), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a floating-point number and throwErr is true.
 */
function isFloat<T extends boolean = true>(
  v: unknown, 
  type: T = true as T, 
  throwErr: boolean = false
): v is T extends true ? number : number | string {
  
  if (isNumber(v, type)) {
    if (v as number % 1 !== 0)
      return true;
  }
  
  if (throwErr)
    throwError('floating-point number', v);
  
  return false;
}

/**
 * Checks if a given number is even.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an even number. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is even (or number|string if type=false), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an even number and throwErr is true.
 */
function isEven<T extends boolean = true>(
  v: unknown, 
  type: T = true as T, 
  throwErr: boolean = false
): v is T extends true ? number : number | string {

  if (isInteger(v, type) && !((v as number) & 1))
    return true;

  if (throwErr)
    throwError('even integer', v);

  return false;

}

/**
 * Determines if a given number is odd.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an odd number. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is odd (or number|string if type=false), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an odd number and throwErr is true.
 */
function isOdd<T extends boolean = true>(
  v: unknown, 
  type: T = true as T, 
  throwErr: boolean = false
): v is T extends true ? number : number | string {

  if (isInteger(v, type) && Boolean((v as number) & 1))
    return true;
  
  if (throwErr)
    throwError('odd integer', v);

  return false;
}

/**
 * Checks if a given number is zero.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not zero. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is zero (or number|string if type=false), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not zero and throwErr is true.
 */
function isOrigin<T extends boolean = true>(
  v: unknown, 
  type: T = true as T, 
  throwErr: boolean = false
): v is T extends true ? number : number | string {

  if (type ? v === 0 : v == 0)
    return true;
  
  if (throwErr)
    throwError('zero', v);

  return false;

}

/**
 * Checks if a given number is positive.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not positive. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is positive (or number|string if type=false), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not positive and throwErr is true.
 */
function isPositive<T extends boolean = true>(
  v: unknown, 
  type: T = true as T, 
  throwErr: boolean = false
): v is T extends true ? number : number | string {

  if (isNumber(v, type) && Number(v) > 0)
    return true;
  
  if (throwErr)
    throwError('positive number', v);

  return false;

}

/**
 * Checks if a given number is negative.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not negative. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is negative (or number|string if type=false), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not negative and throwErr is true.
 */
function isNegative<T extends boolean = true>(
  v: unknown, 
  type: T = true as T, 
  throwErr: boolean = false
): v is T extends true ? number : number | string {

  if (isNumber(v, type) && Number(v) < 0)
    return true;
  
  if (throwErr)
    throwError('negative number', v);

  return false;
}

/**
 * Checks if a given number is a power of two.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a power of two. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is a power of two (or number|string if type=false), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a power of two and throwErr is true.
 */
function isPowerOfTwo<T extends boolean = true>(
  v: unknown, 
  type: T = true as T, 
  throwErr: boolean = false
): v is T extends true ? number : number | string {

  if (isInteger(v, type) && !isOrigin(v, type) && ((v as number) & (v as number - 1)) === 0)
    return true;
    
  if (throwErr)
    throwError('power of two integer', v);

  return false;

}

/**
 * Checks if a given number is an ASCII code.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [ext=true] - Optional boolean to include extended ASCII range (0-255) or not. Defaults to true.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid ASCII code. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is a valid ASCII code (number|string), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid ASCII code and throwErr is true.
 */
function isAscii(
  v: unknown, 
  ext = true, 
  throwErr: boolean = false
): v is number | string {

  if (isNumber(v, false) && isInteger(v, false) && ((ext && Number(v) >= 0 && Number(v) <= 255) || (Number(v) >= 0 && Number(v) <= 127)))
    return true;
  
  if (throwErr) {
    const range = ext ? '0-255' : '0-127';
    throwError(`ASCII code in range [${range}]`, v);
  }
  
  return false;

}

export {
  isAscii,
  isInteger,
  isFloat,
  isEven,
  isOdd,
  isOrigin,
  isPositive,
  isNegative,
  isPowerOfTwo
};
