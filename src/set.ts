import { isSet } from './nonprimitive';
import { isNumber } from './primitive';
import { throwError } from './error';

/**
 * Checks if the size of a Set is within the specified range.
 * Performs internal Set validation using isSet() before checking size.
 *
 * @template T - The type of elements in the Set.
 * @param {unknown} v - The value to check (performs internal Set validation).
 * @param {number} [min=0] - The minimum size of the Set (inclusive). Falls back to 0 if not a valid number (e.g. null, undefined, NaN).
 * @param {number} [max=999999999] - The maximum size of the Set (inclusive). Falls back to 999999999 if not a valid number (e.g. null, undefined, NaN).
 * @param {boolean} [throwErr=false] - If true, throws an error when Set size is not within range. If false, returns false.
 * @returns {boolean} - Returns `true` if the value is a Set and its size is within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a Set or its size is not within the specified range and throwErr is true.
 */
function isSetOfLength<T = unknown>(
  v: unknown, 
  min: number = 0, 
  max: number = 999999999,
  throwErr: boolean = false
): v is Set<T> {
  
  // First validate that v is a Set
  if (!isSet<T>(v)) {
    if (throwErr)
      throwError('Set', v);
    return false;
  }

  // Convert min & max to number if it's valid, otherwise use default
  const minVal = isNumber(min, false) ? min : 0;
  const maxVal = isNumber(max, false) ? max : 999999999;

  const n = v.size;
  if (n >= minVal && n <= maxVal)
    return true;
    
  if (throwErr)
    throwError(`Set with size in range [${minVal}, ${maxVal}] (actual size: ${n})`, v);
    
  return false;
}

export {
  isSetOfLength,
};
