import { isNumber } from './primitive';
import { isInteger, isFloat } from './number';

/**
 * Checks if a given value is a valid number within given range.
 *
 * @param {number | string} n - value to check
 * @param {number} [min=-999999999] - minimal value of the range
 * @param {number} [max=999999999] - maximal value of the range
 * @param {boolean} [type=true] - do type check
 * @returns {boolean} true if the value is a valid number, false otherwise
 */
function isValidNumber( n: number | string, 
                        min = -999999999, 
                        max = 999999999,
                        type = true ): boolean {
  return isNumber(n, type) && n >= min && n <= max;
}

/**
 * Checks if a given value is a valid integer within given range.
 *
 * @param {number | string} n - value to check
 * @param {number} [min=-999999999] - minimal value of the range
 * @param {number} [max=999999999] - maximal value of the range
 * @param {boolean} [type=true] - do type check
 * @returns {boolean} true if the value is a valid integer, false otherwise
 */
function isValidInteger( n: number | string, 
                         min = -999999999, 
                         max = 999999999,
                         type = true ): boolean {
  return isInteger(n, type) && (n as number) >= min && (n as number) <= max;
}

/**
 * Checks if a given value is a valid float within given range.
 *
 * @param {number | string} n - value to check
 * @param {number} [min=-999999999.9] - minimal value of the range
 * @param {number} [max=999999999.9] - maximal value of the range
 * @param {boolean} [type=true] - do type check
 * @returns {boolean} true if the value is a valid float, false otherwise
 */
function isValidFloat( n: number | string, 
                       min = -999999999.9, 
                       max = 999999999.9,
                       type = true ): boolean {
  return isFloat(n, type) && (n as number) >= min && (n as number) <= max;
}

export {
  isValidNumber,
  isValidInteger,
  isValidFloat,
};
