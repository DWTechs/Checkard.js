import { isNumber } from './primitive';

/**
 * Checks if a given number is an integer.
 *
 * @param n - The number to check.
 * @param type - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @returns A boolean indicating whether the number is an integer.
 */
function isInteger(n: number, type = true): boolean {
  const int = Number.parseInt(String(n), 10);
  return type ? n === int : n == int;
}

/**
 * Checks if a given number is an ASCII code.
 *
 * @param n - The number to check.
 * @param ext - Optional boolean to include extended ASCII range (0-255). Defaults to true.
 * @returns `true` if the number is a valid ASCII code, `false` otherwise.
 */
function isAscii(n: number, ext = true): boolean {
  return isInteger(n, false) && ((ext && n >= 0 && n <= 255) || (n >= 0 && n <= 127));
}

/**
 * Checks if a given number is a floating-point number.
 *
 * @param n - The number to check.
 * @param type - A boolean indicating whether to use strict equality (default is true).
 * @returns A boolean indicating whether the number is a floating-point number.
 */
function isFloat(n: number, type = true): boolean {
  const num = Number(n);
  const modulo = num % 1 !== 0;
  return type ? (num === n && modulo) : (num == n && modulo);
}

/**
 * Checks if a given number is even.
 *
 * @param n - The number to check.
 * @param type - A boolean flag to specify the type of check (default is true).
 * @returns `true` if the number is even and an integer, `false` otherwise.
 */
function isEven(n: number, type = true): boolean {
  return isInteger(n, type) && !(n & 1);
}

/**
 * Determines if a given number is odd.
 *
 * @param n - The number to check.
 * @param type - An optional boolean parameter to specify the type of check. Default is true.
 * @returns A boolean indicating whether the number is odd.
 */
function isOdd(n: number, type = true): boolean {
  return isInteger(n, type) && Boolean(n & 1);
}

/**
 * Checks if a given number is zero.
 *
 * @param n - The number to check.
 * @param type - A boolean indicating the type of comparison to use.
 *               If true, uses strict equality (===).
 *               If false, uses loose equality (==).
 *               Defaults to true.
 * @returns True if the number is zero based on the specified comparison type, otherwise false.
 */
function isOrigin(n: number, type = true): boolean {
  return type ? n === 0 : n == 0;
}

/**
 * Checks if a given number is positive.
 *
 * @param n - The number to check.
 * @param type - An optional boolean parameter to specify the type check (default is true).
 * @returns True if the number is positive and passes the type check, otherwise false.
 */
function isPositive(n: number, type = true): boolean {
  return isNumber(n, type) && n > 0;
}

/**
 * Checks if a given number is negative.
 *
 * @param n - The number to check.
 * @param type - A boolean flag to indicate if the type should be checked. Defaults to true.
 * @returns True if the number is negative and the type check passes, otherwise false.
 */
function isNegative(n: number, type = true): boolean {
  return isNumber(n, type) && n < 0;
}

/**
 * Checks if a given number is a power of two.
 *
 * @param n - The number to check.
 * @param type - An optional boolean parameter. Default is true.
 * @returns A boolean indicating whether the number is a power of two.
 */
function isPowerOfTwo(n: number, type = true): boolean {
  return isInteger(n, type) && !isOrigin(n, false) && (n & (n - 1)) === 0;
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
