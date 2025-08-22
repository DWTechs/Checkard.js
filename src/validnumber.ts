import { isNumber } from './primitive';
import { isInteger, isFloat } from './number';
import { throwError } from './error';

/**
 * Checks if a given value is a valid number within given range.
 *
 * @param {number | string | undefined | null} n - value to check
 * @param {number} [min=-999999999] - minimal value of the range
 * @param {number} [max=999999999] - maximal value of the range
 * @param {boolean} [type=true] - do type check
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid number in range. If false, returns false.
 * @returns {boolean} true if the value is a valid number, false if not (when throwErr is false)
 * @throws {Error} Throws an error if the value is not a valid number in range and throwErr is true.
 */
function isValidNumber( n: number | string | undefined | null, 
                        min = -999999999, 
                        max = 999999999,
                        type = true,
                        throwErr: boolean = false ): boolean {
  
  if (isNumber(n, type) && n >= min && n <= max)
    return true;
  
  if (throwErr)
    throwError(`valid number in range [${min}, ${max}]`, n);
  
  return false;

}

/**
 * Checks if a given value is a valid integer within given range.
 *
 * @param {number | string | undefined | null} n - value to check
 * @param {number} [min=-999999999] - minimal value of the range
 * @param {number} [max=999999999] - maximal value of the range
 * @param {boolean} [type=true] - do type check
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid integer in range. If false, returns false.
 * @returns {boolean} true if the value is a valid integer, false if not (when throwErr is false)
 * @throws {Error} Throws an error if the value is not a valid integer in range and throwErr is true.
 */
function isValidInteger( n: number | string | undefined | null, 
                         min = -999999999, 
                         max = 999999999,
                         type = true,
                         throwErr: boolean = false ): boolean {
  
  if (isInteger(n, type) && (n as number) >= min && (n as number) <= max)
    return true;
  
  if (throwErr)
    throwError(`valid integer in range [${min}, ${max}]`, n);
  
  return false;

}

/**
 * Checks if a given value is a valid float within given range.
 *
 * @param {number | string | undefined | null} n - value to check
 * @param {number} [min=-999999999.9] - minimal value of the range
 * @param {number} [max=999999999.9] - maximal value of the range
 * @param {boolean} [type=true] - do type check
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid float in range. If false, returns false.
 * @returns {boolean} true if the value is a valid float, false if not (when throwErr is false)
 * @throws {Error} Throws an error if the value is not a valid float in range and throwErr is true.
 */
function isValidFloat( n: number | string | undefined | null, 
                       min = -999999999.9, 
                       max = 999999999.9,
                       type = true,
                       throwErr: boolean = false ): boolean {
  
  if (isFloat(n, type) && (n as number) >= min && (n as number) <= max)
    return true;
  
  if (throwErr)
    throwError(`valid float in range [${min}, ${max}]`, n);
  
  return false;
  
}

export {
  isValidNumber,
  isValidInteger,
  isValidFloat,
};
