import { isNumber } from './primitive';
import { throwError } from './error';

/**
 * Checks if a given number is an integer.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an integer. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is an integer, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an integer and throwErr is true.
 */
function isInteger(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {
  
  const int = Number.parseInt(String(n), 10);
  
  if (type ? n === int : n == int)
    return true;
  
  if (throwErr)
    throwError('integer', n);
  
  return false;

}

/**
 * Checks if a given number is a floating-point number.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a float. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is a floating-point number, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a floating-point number and throwErr is true.
 */
function isFloat(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {
  const num = Number(n);
  const modulo = num % 1 !== 0;
  
  if (type ? (num === n && modulo) : (num == n && modulo))
    return true;
  
  if (throwErr)
    throwError('floating-point number', n);
  
  return false;
}

/**
 * Checks if a given number is even.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an even number. If false, returns false.
 * @returns {boolean} `true` if the number is even and an integer, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an even number and throwErr is true.
 */
function isEven(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {
  
  if (isInteger(n, type) && !((n as number) & 1))
    return true
  
  if (throwErr)
    throwError('even integer', n);
  
  return false;

}

/**
 * Determines if a given number is odd.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an odd number. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is odd, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an odd number and throwErr is true.
 */
function isOdd(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {
  
  if (isInteger(n, type) && Boolean((n as number) & 1))
    return true;
  
  if (throwErr)
    throwError('odd integer', n);

  return false;
}

/**
 * Checks if a given number is zero.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not zero. If false, returns false.
 * @returns {boolean} True if the number is zero based on the specified comparison type, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not zero and throwErr is true.
 */
function isOrigin(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {
  
  if (type ? n === 0 : n == 0)
    return true;
  
  if (throwErr)
    throwError('zero', n);
  
  return false;

}

/**
 * Checks if a given number is positive.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not positive. If false, returns false.
 * @returns {boolean} True if the number is positive and passes the type check, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not positive and throwErr is true.
 */
function isPositive(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {
  
  if (isNumber(n, type) && n > 0) 
    return true;
  
  if (throwErr)
    throwError('positive number', n);
  
  return false;

}

/**
 * Checks if a given number is negative.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not negative. If false, returns false.
 * @returns {boolean} True if the number is negative and the type check passes, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not negative and throwErr is true.
 */
function isNegative(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {
  
  if (isNumber(n, type) && n < 0) 
    return true;
  
  if (throwErr)
    throwError('negative number', n);
  
  return false;
}

/**
 * Checks if a given number is a power of two.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a power of two. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is a power of two, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a power of two and throwErr is true.
 */
function isPowerOfTwo(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {

  if (isInteger(n, type) && !isOrigin(n, false) && ((n as number) & (n as number - 1)) === 0)
    return true;
    
  if (throwErr)
    throwError('power of two integer', n);
  
  return false;

}

/**
 * Checks if a given number is an ASCII code.
 *
 * @param {number | undefined | null} n - The number to check.
 * @param {boolean} [ext=true] - Optional boolean to include extended ASCII range (0-255) or not. Defaults to true.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid ASCII code. If false, returns false.
 * @returns {boolean} `true` if the number is a valid ASCII code, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid ASCII code and throwErr is true.
 */
function isAscii(n: number | undefined | null, ext = true, throwErr: boolean = false): boolean {
  
  if (isNumber(n, false) && isInteger(n, false) && ((ext && n >= 0 && n <= 255) || (n >= 0 && n <= 127)))
    return true;
  
  if (throwErr) {
    const range = ext ? '0-255' : '0-127';
    throwError(`ASCII code in range [${range}]`, n);
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
