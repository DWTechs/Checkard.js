import { isNumeric } from './internal';
import { isDate } from './nonprimitive';
import { isInteger } from './number';

const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');
function isValidDate(d: Date, min: Date = minDate, max: Date = maxDate): boolean {
  return d >= min && d <= max;
}

function isTimestamp(t: unknown, type = true): t is number {
  return isInteger(t, type) && isNumeric(new Date(Number.parseInt(String(t))).getTime());
}

// default min = 1/1/1900 (month/day/year)
// default max = 1/1/2200 (month/day/year)
function isValidTimestamp(t: number | null | undefined, min = -2208989361000, max = 7258114800000, type = true): boolean {
  return isTimestamp(t, type) && t >= min && t <= max;
}

export {
  isValidDate,
  isTimestamp,
  isValidTimestamp
};
