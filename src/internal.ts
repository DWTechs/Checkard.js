
import { throwError } from './error';

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
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a number. If false, returns false.
 * @returns {boolean} True if the value is a number, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a number and throwErr is true.
 */
function isNum(v: unknown, type: boolean, throwErr: boolean = false): v is number {
  
  const n = Number(v);
  if (type ? n === v : !Number.isNaN(n - Number.parseFloat(v as string)))
    return true;
  
  if (throwErr)
    throwError('number', v);
  
  return false;
}

/**
 * Checks if the given value is an array.
 *
 * This function is a type guard that checks if the given value is an array.
 *
 * @param v The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an array. If false, returns false.
 * @returns {boolean} true if the value is an array, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an array and throwErr is true.
 */
function isArr(v: unknown, throwErr: boolean = false): v is unknown[] {

  if (v?.constructor === Array)
    return true;
  
  if (throwErr)
    throwError('array', v);
  
  return false;

}

/**
 * Checks if the given value is a string.
 *
 * This function is a type guard that checks if the given value is a string.
 *
 * @param v The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a string. If false, returns false.
 * @returns {boolean} true if the value is a string, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a string and throwErr is true.
 */
function isStr(v: unknown, throwErr: boolean = false): v is string {

  if (typeof v === "string")
    return true;
  
  if (throwErr)
    throwError('string', v);
  
  return false;
  
}

export {
  isNum,
  isArr,
  isStr,
};