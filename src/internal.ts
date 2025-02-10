
/**
 * Checks if the given value is a number.
 * 
 * This function uses the NaN check hack to identify whether a value is numeric.
 * It works by first converting the value to a number using `parseFloat`, then
 * subtracting the result from the original value. If the result is `NaN` then
 * the original value is not numeric.
 * No type checking. Works with '8e4', '+true', '0x44' etc
 *
 * @param v - The value to check.
 * @param type - If true, checks if the value is strictly equal to its number conversion.
 *               If false, checks if the value can be parsed as a number.
 * @returns True if the value is a number, false otherwise.
 */
function isNum(v: unknown, type: boolean): v is number {
  const n = Number(v);
  return type ? n === v : !Number.isNaN(n - Number.parseFloat(v as string));
}

/**
 * Checks if the given value is an array.
 *
 * This function is a type guard that checks if the given value is an array.
 *
 * @param v The value to check.
 * @returns true if the value is an array, false otherwise.
 */
function isArr(v: unknown): v is unknown[] {
  return v?.constructor === Array;
}

/**
 * Checks if the given value is a string.
 *
 * This function is a type guard that checks if the given value is a string.
 *
 * @param v The value to check.
 * @returns true if the value is a string, false otherwise.
 */
function isStr(v: unknown): v is string {
  return typeof v === "string";
}

export {
  isNum,
  isArr,
  isStr,
};