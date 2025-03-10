import { isNum } from './internal';
import { isInteger } from './number';
import { isDate } from './nonprimitive';

const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');
/**
 * Checks if a given date is valid within a specified range.
 *
 * @param {Date} d - The date to be validated.
 * @param {Date} [min=minDate] - The minimum allowable date. Defaults to `minDate`.
 * @param {Date} [max=maxDate] - The maximum allowable date. Defaults to `maxDate`.
 * @returns {boolean} `true` if the date is valid and within the specified range, otherwise `false`.
 */
function isValidDate(d: Date, min: Date = minDate, max: Date = maxDate): boolean {
  return isDate(d) && d >= min && d <= max;
}


/**
 * Checks if the given number is a valid timestamp.
 *
 * @param {unknown} t - The number to check.
 * @param {boolean} [type=true] - An optional boolean parameter to verify the type of t. Defaults to true.
 * @returns {boolean} A boolean indicating whether the number is a timestamp.
 */
function isTimestamp(t: number, type = true): boolean {
  return isInteger(t, type) && isNum(new Date(Number.parseInt(String(t))).getTime(), type);
}

/**
 * Checks if a given timestamp is valid within a specified range.
 *
 * @param {unknown} t - The timestamp to validate.
 * @param {number} [min=-2208989361000] - The minimum allowed timestamp (default is -2208989361000,eg 1/1/1900).
 * @param {number} [max=7258114800000] - The maximum allowed timestamp (default is 7258114800000, eg 1/1/2200).
 * @param {boolean} [type=true] - A boolean indicating the type of timestamp (default is true).
 * @returns {boolean} `true` if the timestamp is valid and within the specified range, otherwise `false`.
 */
function isValidTimestamp(t: number, min = -2208989361000, max = 7258114800000, type = true): boolean {
  return isTimestamp(t, type) && t >= min && t <= max;
}

export {
  isValidDate,
  isTimestamp,
  isValidTimestamp
};
