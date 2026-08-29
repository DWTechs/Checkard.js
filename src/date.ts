import { isNum } from './internal';
import { isInteger } from './number';
import { isString } from './primitive';
import { isDate } from './nonprimitive';
import { throwError } from './error';

const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');
/**
 * Checks if a given date is valid within a specified range.
 *
 * @param {unknown} v - The value to be validated (performs internal date validation).
 * @param {Date | number} [min=minDate] - The minimum allowable date (Date object or timestamp). Defaults to `minDate`.
 * @param {Date | number} [max=maxDate] - The maximum allowable date (Date object or timestamp). Defaults to `maxDate`.
 * @param {boolean} [throwErr=false] - If true, throws an error when date is not valid. If false, returns false.
 * @returns {boolean} `true` if the value is a valid date within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid date or not within the specified range and throwErr is true.
 */
function isValidDate(
  v: unknown, 
  min: Date | number = minDate, 
  max: Date | number = maxDate, 
  throwErr: boolean = false
): v is Date {

  // First validate that input is a valid date
  // This will throw immediately if throwErr=true
  if (!isDate(v, throwErr))
    return false;

  // Convert min to Date if it's a timestamp
  const from = isDate(min) ? min : isTimestamp(min, false) ? new Date(min) : minDate;
  // Convert max to Date if it's a timestamp
  const to = isDate(max) ? max : isTimestamp(max, false) ? new Date(max) : maxDate;

  // All dates are valid, now check the range
  if (v >= from && v <= to)
    return true;
  
  // Range validation failed
  if (throwErr)
    throwError(`date between ${from.toISOString()} and ${to.toISOString()}`, v);
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

  
  if (isInteger(v, type) && isNum(new Date(Number(v)).getTime(), type))
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
 * @returns {boolean} A boolean indicating whether the value is a valid timestamp (or number|string if type=false), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the timestamp is not valid and throwErr is true.
 */
function isValidTimestamp<T extends boolean = true>(
  v: unknown, 
  min: Date | number = minTs, 
  max: Date | number = maxTs, 
  type: T = true as T, 
  throwErr: boolean = false
): v is T extends true ? number : number | string {

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


// Regex to validate IANA timezone format (e.g., Europe/Paris, America/New_York, Asia/Tokyo)
// Format: Region/City or Region/SubRegion/City
// Supports underscores followed by uppercase letters (e.g., New_York, Los_Angeles, Buenos_Aires)
// Pattern: Capital letter followed by lowercase letters, with optional underscore+Capital+lowercase sequences
const timeZoneRegex = /^[A-Z][a-z]+\/[A-Z][a-z]+(?:_[A-Z][a-z]+)*(?:\/[A-Z][a-z]+(?:_[A-Z][a-z]+)*)?$/;
/**
 * Checks if the given value is a valid IANA timezone format.
 * Performs internal string validation using isString() before checking timezone format.
 *
 * @param {unknown} v - The value to be checked (performs internal string validation).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid IANA timezone format. If false, returns false.
 * @returns {boolean} `true` if the value is a valid IANA timezone format, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid IANA timezone format and throwErr is true.
 */
function isTimeZone(v: unknown, throwErr: boolean = false): v is string {
  if (isString(v, "!0") && timeZoneRegex.test(v))
    return true;

  if (throwErr)
    throwError('IANA timezone format', v);
  return false;

}


// Regex to validate locale format (e.g., en-US, fr-FR, ja-JP)
// Format: 2 lowercase letters, hyphen, 2 uppercase letters
const localeRegex = /^[a-z]{2}-[A-Z]{2}$/;
// Extended locale format supporting scripts and variants
// Format: language (2-3 lowercase), optional script (Capital + 3 lowercase), optional region (2 uppercase), optional variants (x-...)
// Variants must start with 'x-' and can only appear after a region or script
// Matches: en, en-US, zh-Hans, zh-Hans-CN, en-US-x-twain, zh-Hans-CN-x-variant
const extendedLocaleRegex = /^[a-z]{2,3}(?:-[A-Z][a-z]{3}|-[A-Z]{2})?(?:-[A-Z]{2})?(?:-x-[a-z0-9]+)*$/;
/**
 * Checks if the given value is a valid locale format.
 * Performs internal string validation using isString() before checking locale format.
 *
 * @param {unknown} v - The value to be checked (performs internal string validation).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid locale format. If false, returns false.
 * @returns {boolean} `true` if the value is a valid locale format, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid locale format and throwErr is true.
 */
function isLocale(v: unknown, ext: boolean = false, throwErr: boolean = false): v is string {
  if (isString(v, "!0") && (ext ? extendedLocaleRegex.test(v) : isString(v, "=", 5) && localeRegex.test(v)))
    return true;
  
  if (throwErr)
    throwError('valid locale format', v);
  return false;
}



export {
  isValidDate,
  isTimestamp,
  isValidTimestamp,
  isTimeZone,
  isLocale
};
