import { isNumber } from './primitive';
import { isInteger, isFloat } from './number';
import { throwError } from './error';

const minNum = -999999999;
const maxNum = 999999999;
/**
 * Checks if a given value is a valid number within given range.
 * Performs internal number validation using isNumber() before checking range.
 *
 * @param {unknown} v - The value to check (performs internal number validation).
 * @param {number} [min=-999999999] - minimal value of the range
 * @param {number} [max=999999999] - maximal value of the range
 * @param {boolean} [type=true] - do type check
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid number in range. If false, returns false.
 * @returns {boolean} true if the value is a valid number within the specified range, false if not (when throwErr is false)
 * @throws {Error} Throws an error if the value is not a valid number or not within the specified range and throwErr is true.
 */
function isValidNumber( 
  v: unknown, 
  min = minNum, 
  max = maxNum,
  type = true,
  throwErr: boolean = false
): v is number {
  
  // First validate that v is a valid number
  if (!isNumber(v, type, null, null, throwErr))
    return false;
  
  // Convert min & max to number if it's valid, otherwise use default
  const minVal = isNumber(min, false) ? min : minNum;
  const maxVal = isNumber(max, false) ? max : maxNum;

  const numVal = v as number;
  if (numVal >= minVal && numVal <= maxVal)
    return true;

  if (throwErr)
    throwError(`valid number in range [${minVal}, ${maxVal}]`, v);
  
  return false;

}

/**
 * Checks if a given value is a valid integer within given range.
 * Performs internal integer validation using isInteger() before checking range.
 *
 * @param {unknown} v - The value to check (performs internal integer validation).
 * @param {number} [min=-999999999] - minimal value of the range
 * @param {number} [max=999999999] - maximal value of the range
 * @param {boolean} [type=true] - do type check
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid integer in range. If false, returns false.
 * @returns {boolean} true if the value is a valid integer within the specified range, false if not (when throwErr is false)
 * @throws {Error} Throws an error if the value is not a valid integer or not within the specified range and throwErr is true.
 */
function isValidInteger<T extends boolean = true>(
  v: unknown, 
  min: number = minNum, 
  max: number = maxNum,
  type: T = true as T,
  throwErr: boolean = false 
): v is T extends true ? number : number | string {
  
  if (!isInteger(v, type, throwErr))
    return false;
  
  // Convert min & max to number if it's valid, otherwise use default
  const minVal = isNumber(min, false) ? min : minNum;
  const maxVal = isNumber(max, false) ? max : maxNum;

  const numVal = v as number;
  if (numVal >= minVal && numVal <= maxVal)
    return true;
  
  // Range validation failed
  if (throwErr)
    throwError(`valid integer in range [${minVal}, ${maxVal}]`, v);
  return false;

}

const minFloat = -999999999.9;
const maxFloat = 999999999.9;
/**
 * Checks if a given value is a valid float within given range.
 * Performs internal float validation using isFloat() before checking range.
 *
 * @param {unknown} v - The value to check (performs internal float validation).
 * @param {number} [min=-999999999.9] - minimal value of the range
 * @param {number} [max=999999999.9] - maximal value of the range
 * @param {boolean} [type=true] - do type check
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid float in range. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is a valid float (or number|string if type=false), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid float in range and throwErr is true.
 */
function isValidFloat<T extends boolean = true>(
  v: unknown,
  min: number = minFloat,
  max: number = maxFloat,
  type: T = true as T,
  throwErr: boolean = false 
): v is T extends true ? number : number | string {
  
  // First validate that v is a valid float
  if (!isFloat(v, type, throwErr))
    return false;
  
  // Convert min & max to number if it's valid, otherwise use default
  const minVal = isNumber(min, false) ? min as number : minFloat;
  const maxVal = isNumber(max, false) ? max as number : maxFloat;

  // v is guaranteed to be a number at this point due to isFloat check
  const numValue = v as number;
  if (numValue >= minVal && numValue <= maxVal)
    return true;
  
  // Range validation failed
  if (throwErr)
    throwError(`valid float in range [${minVal}, ${maxVal}]`, v);
  return false;
  
}

export {
  isValidNumber,
  isValidInteger,
  isValidFloat,
};
