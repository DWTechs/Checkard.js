import { isNumber } from './primitive';
import { isInteger, isFloat } from './number';

/**
 * Checks if a given value is a valid number within given range.
 *
 * @param n - value to check
 * @param min - minimal value of the range
 * @param max - maximal value of the range
 * @param type - do type check
 * @returns true if the value is a valid number, false otherwise
 */
function isValidNumber( n: number, 
                        min = -999999999, 
                        max = 999999999,
                        type = true ): boolean {
  return isNumber(n, type) && n >= min && n <= max;
}

/**
 * Checks if a given value is a valid integer within given range.
 *
 * @param n - value to check
 * @param min - minimal value of the range
 * @param max - maximal value of the range
 * @param type - do type check
 * @returns true if the value is a valid integer, false otherwise
 */
function isValidInteger( n: number, 
                         min = -999999999, 
                         max = 999999999,
                         type = true ): boolean {
  return isInteger(n, type) && n >= min && n <= max;
}

/**
 * Checks if a given value is a valid float within given range.
 *
 * @param n - value to check
 * @param min - minimal value of the range
 * @param max - maximal value of the range
 * @param type - do type check
 * @returns true if the value is a valid float, false otherwise
 */
function isValidFloat( n: number, 
                       min = -999999999.9, 
                       max = 999999999.9,
                       type = true ): boolean {
  return isFloat(n, type) && n >= min && n <= max;
}

export {
  isValidNumber,
  isValidInteger,
  isValidFloat,
};
