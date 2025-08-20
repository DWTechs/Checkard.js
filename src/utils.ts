import type { Comparator } from './types';

const comparisons = {
  "=" : (a:number, b: number) => a == b, // return true if a is equal to b
  "<" : (a:number, b: number) => a < b, // return true if a is less than b
  ">" : (a:number, b: number) => a > b, // return true if a is greater than b
  "<=": (a:number, b: number) => a <= b, // return true if a is less than or equal to b
  ">=": (a:number, b: number) => a >= b, // return true if a is greater than or equal to b
  "!=": (a:number, b: number) => a != b, // return true if a is not equal to b
  "!0": (a:number) => a != 0, // return true if a is not zero
  "0": (a:number) => a == 0, // return true if a is zero
};

/**
 * Creates a standardized type error message.
 * 
 * @param {string} expectedType - The expected type (e.g., 'number', 'string', 'boolean').
 * @param {unknown} actualValue - The actual value that was received.
 * @returns {string} A formatted error message.
 */
function createErrorMsg(expectedType: string, actualValue: unknown): string {
  return `Expected ${expectedType}, but received ${typeof actualValue}: ${String(actualValue)}`;
}

/**
 * Compares two numbers using a comparator function.
 * 
 * @param {number} a - The first number.
 * @param {Comparator | null} c - The comparator function.
 * @param {number | null} b - The second number.
 * @param {boolean} [throwError=false] - If true, throws an error when comparison fails. If false, returns false.
 * @returns {boolean} - Returns true if the comparison is valid, false if not (when throwError is false).
 * @throws {Error} Throws an error if the comparison fails and throwError is true.
 */
function compare(
  a: number, 
  c: Comparator | null, 
  b: number | null,
  throwError: boolean = false
): boolean {
  // If no comparator is provided, return true (no comparison needed)
  if (!c)
    return true;
  
  // Check if comparator is valid
  if (!(c in comparisons)) {
    if (throwError)
      throw new Error(`Invalid comparator: ${c}. Valid comparators are: ${Object.keys(comparisons).join(', ')}`);    
    return false;
  }
  
  // Handle unary comparators (!0 and 0)
  if (c === '!0' || c === '0')
    return comparisons[c](a);
  
  // Handle binary comparators (require second value)
  if (b == null) {
    if (throwError)
      throw new Error(`Comparator '${c}' requires a second value, but received null`);
    return false;
  }
  
  // Perform the comparison
  return comparisons[c](a, b);
}

/**
 * Gets the internal [[Prototype]] property of the given value.
 *
 * The result is a string of the form "[object <type>]" where <type> is the
 * internal type of the value. This is similar to the `Object.prototype.toString`
 * method, but this function is not generic and will only work on objects.
 *
 * @param t The value to get the internal [[Prototype]] property of.
 * @returns A string of the form "[object <type>]".
 */
function getTag(t: unknown): string {
  return t == null ? t === undefined ? '[object Undefined]' : '[object Null]' : toString.call(t);
}

export {
  compare,
  getTag,
  createErrorMsg,
};
