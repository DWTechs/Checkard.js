import { isNum } from './internal';
import { isInteger } from './number';
import { isDate } from './nonprimitive';
import { throwError } from './error';

const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');
/**
 * Checks if a given date is valid within a specified range.
 *
 * @param {Date} d - The date to be validated.
 * @param {Date} [min=minDate] - The minimum allowable date. Defaults to `minDate`.
 * @param {Date} [max=maxDate] - The maximum allowable date. Defaults to `maxDate`.
 * @param {boolean} [throwErr=false] - If true, throws an error when date is not valid. If false, returns false.
 * @returns {boolean} `true` if the date is valid and within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the date is not valid and throwErr is true.
 */
function isValidDate(d: Date, min: Date = minDate, max: Date = maxDate, throwErr: boolean = false): boolean {
  
  if (isDate(d) && d >= min && d <= max)
    return true;
  
  if (throwErr)
    throwError(`date between ${min.toISOString()} and ${max.toISOString()}`, d);

  return false;

}


/**
 * Checks if the given number is a valid timestamp.
 *
 * @param {unknown} t - The number to check.
 * @param {boolean} [type=true] - An optional boolean parameter to verify the type of t. Defaults to true.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid timestamp. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is a timestamp, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid timestamp and throwErr is true.
 */
function isTimestamp(t: number, type = true, throwErr: boolean = false): boolean {
  
  if (isInteger(t, type) && isNum(new Date(Number.parseInt(String(t))).getTime(), type))
    return true;
  
  if (throwErr)
    throwError('valid timestamp', t);
  
  return false;

}

/**
 * Checks if a given timestamp is valid within a specified range.
 *
 * @param {unknown} t - The timestamp to validate.
 * @param {number} [min=-2208989361000] - The minimum allowed timestamp (default is -2208989361000,eg 1/1/1900).
 * @param {number} [max=7258114800000] - The maximum allowed timestamp (default is 7258114800000, eg 1/1/2200).
 * @param {boolean} [type=true] - A boolean indicating the type of timestamp (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when timestamp is not valid. If false, returns false.
 * @returns {boolean} `true` if the timestamp is valid and within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the timestamp is not valid and throwErr is true.
 */
function isValidTimestamp(t: number, min = -2208989361000, max = 7258114800000, type = true, throwErr: boolean = false): boolean {

  if (isTimestamp(t, type, throwErr) && t >= min && t <= max)
    return true;
  
  if (throwErr) {
    const minDate = new Date(min).toISOString();
    const maxDate = new Date(max).toISOString();
    throwError(`timestamp between ${min} (${minDate}) and ${max} (${maxDate})`, t);
  }
  
  return false;

}

export {
  isValidDate,
  isTimestamp,
  isValidTimestamp
};
