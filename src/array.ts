
import { isArray } from './nonprimitive';
import { throwError } from './error';

/**
 * Checks if the length of an array is within the specified range.
 * Performs internal array validation using isArray() before checking length.
 *
 * @template T - The type of elements in the array.
 * @param {unknown} v - The value to check (performs internal array validation).
 * @param {number} [min=0] - The minimum length of the array (inclusive).
 * @param {number} [max=999999999] - The maximum length of the array (inclusive).
 * @param {boolean} [throwErr=false] - If true, throws an error when array length is not within range. If false, returns false.
 * @returns {boolean} - Returns `true` if the value is an array and its length is within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an array or its length is not within the specified range and throwErr is true.
 */
function isArrayOfLength<T = unknown>(
  v: unknown, 
  min = 0, 
  max = 999999999,
  throwErr: boolean = false
): v is T[] {
  
  // First validate that v is an array
  if (!isArray<T>(v)) {
    if (throwErr)
      throwError(`array with length in range [${min}, ${max}]`, v);
    return false;
  }

  const n = v.length;
  if (n >= min && n <= max)
    return true;
    
  if (throwErr)
    throwError(`array with length in range [${min}, ${max}] (actual length: ${n})`, v);
    
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
function isIn(
  a: unknown[], 
  v: unknown, 
  from = 0, 
  throwErr: boolean = false
): boolean {

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
