
import { throwError } from './error';

/**
 * Checks if the length of an array is within the specified range.
 *
 * @param {unknown[]} a - The array to check.
 * @param {number} [min=0] - The minimum length of the array (inclusive).
 * @param {number} [max=999999999] - The maximum length of the array (inclusive).
 * @param {boolean} [throwErr=false] - If true, throws an error when array length is not within range. If false, returns false.
 * @returns {boolean} - Returns `true` if the array length is within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the array length is not within the specified range and throwErr is true.
 */
function isArrayOfLength(
  a: unknown[], 
  min = 0, 
  max = 999999999,
  throwErr: boolean = false): boolean 
{
    const n = a?.length;
    if (n >= min && n <= max)
        return true;
    
    if (throwErr)
        throwError(`array length [${min}, ${max}]`, a);
    
    return false;
}

/**
 * Checks if a value is present in an array starting from a specified index.
 *
 * @param {unknown[]} a - The array to search within.
 * @param {unknown} v - The value to search for.
 * @param {number} [from=0] - The index to start the search from. Defaults to 0.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not found in array. If false, returns false.
 * @returns {boolean} `true` if the value is found in the array, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not found in the array and throwErr is true.
 */
function isIn(a: unknown[], v: unknown, from = 0, throwErr: boolean = false): boolean {

  if (a.includes(v, from))
    return true;
  
  if (throwErr)
    throwError(`value ${String(v)} to be found in array`, a);
  
  return false;
}

export {
  isArrayOfLength,
  isIn,
};
