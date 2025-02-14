
/**
 * Checks if a value is falsy.
 *
 * A value is considered falsy if it is : 
 * false,
 * 0, 
 * -0,
 * "",
 * null,
 * undefined,
 * NaN.
 *
 * @param {unknown} v - The value to check.
 * @returns `true` if the value is truthy, otherwise `false`.
 */
function isFalsy(v: unknown): boolean {
  return !v;
}


/**
 * Checks if a value is truthy.
 *
 * true: The boolean value true.
 * Non-zero numbers: Any number other than 0 or -0.
 * Non-empty strings: Any string with at least one character.
 * Objects: Any object, including empty objects and arrays.
 * Symbols: Any symbol.
 * BigInt values: Any BigInt value other than 0n.
 *
 * @param {unknown} v - The value to check.
 * @returns `true` if the value is truthy, otherwise `false`.
 */
function isTruthy(v: unknown): boolean {
  return !!v;
}

export {
  isFalsy,
  isTruthy,
};
