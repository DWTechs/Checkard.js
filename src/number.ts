import { isNumber } from './primitive';

/**
 * Checks if a given number is an integer.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @returns {boolean} A boolean indicating whether the number is an integer.
 */
function isInteger(n: number | string | undefined | null, type = true): boolean {
  const int = Number.parseInt(String(n), 10);
  return type ? n === int : n == int;
}

/**
 * Checks if a given number is a floating-point number.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @returns {boolean} A boolean indicating whether the number is a floating-point number.
 */
function isFloat(n: number | string | undefined | null, type = true): boolean {
  const num = Number(n);
  const modulo = num % 1 !== 0;
  return type ? (num === n && modulo) : (num == n && modulo);
}

/**
 * Checks if a given number is even.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @returns {boolean} `true` if the number is even and an integer, `false` otherwise.
 */
function isEven(n: number | string | undefined | null, type = true): boolean {
  return isInteger(n, type) && !((n as number) & 1);
}

/**
 * Determines if a given number is odd.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @returns {boolean} A boolean indicating whether the number is odd.
 */
function isOdd(n: number | string | undefined | null, type = true): boolean {
  return isInteger(n, type) && Boolean((n as number) & 1);
}

/**
 * Checks if a given number is zero.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @returns {boolean} True if the number is zero based on the specified comparison type, otherwise false.
 */
function isOrigin(n: number | string, type = true): boolean {
  return type ? n === 0 : n == 0;
}

/**
 * Checks if a given number is positive.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @returns {boolean} True if the number is positive and passes the type check, otherwise false.
 */
function isPositive(n: number | string, type = true): boolean {
  return isNumber(n, type) && n > 0;
}

/**
 * Checks if a given number is negative.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @returns {boolean} True if the number is negative and the type check passes, otherwise false.
 */
function isNegative(n: number | string, type = true): boolean {
  return isNumber(n, type) && n < 0;
}

/**
 * Checks if a given number is a power of two.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @returns {boolean} A boolean indicating whether the number is a power of two.
 */
function isPowerOfTwo(n: number | string, type = true): boolean {
  return isInteger(n, type) && !isOrigin(n, false) && ((n as number) & (n as number - 1)) === 0;
}

/**
 * Checks if a given number is an ASCII code.
 *
 * @param {number | undefined | null} n - The number to check.
 * @param {boolean} [ext=true] - Optional boolean to include extended ASCII range (0-255) or not. Defaults to true.
 * @returns {boolean} `true` if the number is a valid ASCII code, `false` otherwise.
 */
function isAscii(n: number | undefined | null, ext = true): boolean {
  return isNumber(n, false) && isInteger(n, false) && ((ext && n >= 0 && n <= 255) || (n >= 0 && n <= 127));
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
