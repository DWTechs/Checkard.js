
/**
 * Checks if the length of an array is within the specified range.
 *
 * @template T - The type of elements in the array.
 * @param {Array<T>} a - The array to check.
 * @param {number} [min=0] - The minimum length of the array (inclusive).
 * @param {number} [max=999999999] - The maximum length of the array (inclusive).
 * @returns {boolean} - Returns `true` if the array length is within the specified range, otherwise `false`.
 */
function isArrayOfLength<T = unknown>(
  a: Array<T>, 
  min = 0, 
  max = 999999999): boolean 
{
    const n = a?.length;
    return n >= min && n <= max;
}

/**
 * Checks if a value is present in an array starting from a specified index.
 *
 * @param {unknown[]} a - The array to search within.
 * @param {unknown} v - The value to search for.
 * @param {number} [from=0] - The index to start the search from. Defaults to 0.
 * @returns `true` if the value is found in the array, otherwise `false`.
 */
function isIn(a: unknown[], v: unknown, from = 0): boolean {
  return a.includes(v, from);
}

export {
  isArrayOfLength,
  isIn,
};
