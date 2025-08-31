import { isNum } from './internal';
import { isInteger } from './number';
import { isDate } from './nonprimitive';
import { throwError } from './error';

const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');
/**
 * Checks if a given date is valid within a specified range.
 *
 * @param {unknown} d - The value to be validated (performs internal date validation).
 * @param {Date | number} [min=minDate] - The minimum allowable date (Date object or timestamp). Defaults to `minDate`.
 * @param {Date | number} [max=maxDate] - The maximum allowable date (Date object or timestamp). Defaults to `maxDate`.
 * @param {boolean} [throwErr=false] - If true, throws an error when date is not valid. If false, returns false.
 * @returns {boolean} `true` if the value is a valid date within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid date or not within the specified range and throwErr is true.
 */
function isValidDate(d: unknown, min: Date | number = minDate, max: Date | number = maxDate, throwErr: boolean = false): boolean {

  // First validate that input is a valid date
  // This will throw immediately if throwErr=true
  if (!isDate(d, throwErr))
    return false;

  // Convert min to Date if it's a timestamp
  const from = isDate(min) ? min : isTimestamp(min, false) ? new Date(min) : minDate;
  // Convert max to Date if it's a timestamp
  const to = isDate(max) ? max : isTimestamp(max, false) ? new Date(max) : maxDate;

  // All dates are valid, now check the range
  if (d >= from && d <= to)
    return true;
  
  // Range validation failed
  if (throwErr)
    throwError(`date between ${from.toISOString()} and ${to.toISOString()}`, d);
  return false;

}


/**
 * Checks if the given value is a valid timestamp.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - An optional boolean parameter to verify the type of v. Defaults to true.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid timestamp. If false, returns false.
 * @returns {boolean} A boolean indicating whether the value is a timestamp, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid timestamp and throwErr is true.
 */
function isTimestamp<T extends boolean = true>(
  v: unknown, 
  type: T = true as T, 
  throwErr: boolean = false
): v is T extends true ? number : number | string {

  
  if (isInteger(v, type) && isNum(new Date(Number.parseInt(String(v))).getTime(), type))
    return true;
  
  if (throwErr)
    throwError('valid timestamp', v);
  
  return false;

}


const minTs = -2208989361000; // 1/1/1900
const maxTs = 7258114800000; // 1/1/2200
/**
 * Checks if a given timestamp is valid within a specified range.
 *
 * @param {unknown} v - The value to check.
 * @param {Date | number} [min=minTs] - The minimum allowed timestamp (Date object or timestamp). Defaults to `minTs`.
 * @param {Date | number} [max=maxTs] - The maximum allowed timestamp (Date object or timestamp). Defaults to `maxTs`.
 * @param {boolean} [type=true] - A boolean indicating the type of timestamp (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when timestamp is not valid. If false, returns false.
 * @returns {boolean} `true` if the timestamp is valid and within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the timestamp is not valid and throwErr is true.
 */
function isValidTimestamp(v: unknown, min: Date | number = minTs, max: Date | number = maxTs, type = true, throwErr: boolean = false): boolean {

  // First validate that input is a valid timestamp
  // This will throw immediately if throwErr=true and timestamp is invalid
  if (!isTimestamp(v, type, throwErr))
    return false;

  // Convert min to timestamp if it's a Date, with validation for invalid dates
  let from = minTs;
  if (isTimestamp(min, false))
    from = Number(min);
  else if (isDate(min))
    from = min.getTime();

  // Convert max to timestamp if it's a Date, with validation for invalid dates
  let to = maxTs;
  if (isTimestamp(max, false))
    to = Number(max);
  else if (isDate(max))
    to = max.getTime();
  
  // Convert v to number for comparison
  const ts = Number(v);
  
  // Timestamp is valid, now check the range
  if (ts >= from && ts <= to)
    return true;
  
  // Range validation failed
  if (throwErr) {
    const minDate = new Date(from).toISOString();
    const maxDate = new Date(to).toISOString();
    throwError(`timestamp between ${from} (${minDate}) and ${to} (${maxDate})`, v);
  }
  
  return false;

}

export {
  isValidDate,
  isTimestamp,
  isValidTimestamp
};
