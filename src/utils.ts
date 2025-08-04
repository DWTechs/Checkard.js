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
 * Compares two numbers using a comparator function.
 * 
 * @param {number} a - The first number.
 * @param {Comparator | null} c - The comparator function.
 * @param {number | null} b - The second number.
 * @returns {boolean} - Returns true if the comparison is valid, otherwise false.
 */
function compare(
  a: number, 
  c: Comparator | null, 
  b: number | null
): boolean {
  if (c) {
    if (c in comparisons) {
      if (c === '!0' || c === '0') 
        return comparisons[c](a);
      if (b != null)
        return comparisons[c](a, b);
    }
    return false;
  }
  return true;
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
};
