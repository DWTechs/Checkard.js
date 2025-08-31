import { isValidDate } from "../../../dist/ch";

describe('isValidDate throwErr tests', () => {
  const minDate = new Date('1/1/1900');
  const maxDate = new Date('1/1/2200');

  describe('when value is not a valid Date', () => {
    test('should throw for null', () => {
      expect(() => isValidDate(null, minDate, maxDate, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isValidDate(undefined, minDate, maxDate, true)).toThrow();
    });

    test('should throw for string', () => {
      expect(() => isValidDate('not a date', minDate, maxDate, true)).toThrow();
    });

    test('should throw for number', () => {
      expect(() => isValidDate(123456789, minDate, maxDate, true)).toThrow();
    });

    test('should throw for boolean', () => {
      expect(() => isValidDate(true, minDate, maxDate, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => isValidDate({ year: 2023 }, minDate, maxDate, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isValidDate([2023, 1, 1], minDate, maxDate, true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isValidDate(() => new Date(), minDate, maxDate, true)).toThrow();
    });

    test('should throw for invalid Date object', () => {
      expect(() => isValidDate(new Date('invalid'), minDate, maxDate, true)).toThrow();
    });

    test('should throw for Date with NaN time', () => {
      const invalidDate = new Date();
      invalidDate.setTime(NaN);
      expect(() => isValidDate(invalidDate, minDate, maxDate, true)).toThrow();
    });
  });

  describe('when date is before minimum', () => {
    test('should throw for date before 1900', () => {
      const oldDate = new Date('12/31/1899');
      expect(() => isValidDate(oldDate, minDate, maxDate, true)).toThrow();
    });

    test('should throw for very old date', () => {
      const veryOldDate = new Date('1/1/1800');
      expect(() => isValidDate(veryOldDate, minDate, maxDate, true)).toThrow();
    });

    test('should throw for date just before minimum', () => {
      const justBefore = new Date(minDate.getTime() - 1);
      expect(() => isValidDate(justBefore, minDate, maxDate, true)).toThrow();
    });

    test('should throw with custom minimum date', () => {
      const customMin = new Date('1/1/2000');
      const beforeMin = new Date('12/31/1999');
      expect(() => isValidDate(beforeMin, customMin, maxDate, true)).toThrow();
    });

    test('should throw with timestamp minimum', () => {
      const timestampMin = new Date('1/1/2010').getTime();
      const beforeMin = new Date('12/31/2009');
      expect(() => isValidDate(beforeMin, timestampMin, maxDate, true)).toThrow();
    });
  });

  describe('when date is after maximum', () => {
    test('should throw for date after 2200', () => {
      const futureDate = new Date('1/2/2200');
      expect(() => isValidDate(futureDate, minDate, maxDate, true)).toThrow();
    });

    test('should throw for very future date', () => {
      const veryFutureDate = new Date('1/1/2500');
      expect(() => isValidDate(veryFutureDate, minDate, maxDate, true)).toThrow();
    });

    test('should throw for date just after maximum', () => {
      const justAfter = new Date(maxDate.getTime() + 1);
      expect(() => isValidDate(justAfter, minDate, maxDate, true)).toThrow();
    });

    test('should throw with custom maximum date', () => {
      const customMax = new Date('1/1/2100');
      const afterMax = new Date('1/2/2100');
      expect(() => isValidDate(afterMax, minDate, customMax, true)).toThrow();
    });

    test('should throw with timestamp maximum', () => {
      const timestampMax = new Date('1/1/2050').getTime();
      const afterMax = new Date('1/2/2050');
      expect(() => isValidDate(afterMax, minDate, timestampMax, true)).toThrow();
    });
  });

  describe('with custom date ranges', () => {
    test('should throw for date outside narrow range', () => {
      const rangeMin = new Date('1/1/2020');
      const rangeMax = new Date('12/31/2020');
      const outsideDate = new Date('1/1/2021');
      expect(() => isValidDate(outsideDate, rangeMin, rangeMax, true)).toThrow();
    });

    test('should throw for date before narrow range', () => {
      const rangeMin = new Date('6/1/2023');
      const rangeMax = new Date('8/31/2023');
      const beforeRange = new Date('5/31/2023');
      expect(() => isValidDate(beforeRange, rangeMin, rangeMax, true)).toThrow();
    });

    test('should throw for date after narrow range', () => {
      const rangeMin = new Date('6/1/2023');
      const rangeMax = new Date('8/31/2023');
      const afterRange = new Date('9/1/2023');
      expect(() => isValidDate(afterRange, rangeMin, rangeMax, true)).toThrow();
    });

    test('should throw when min > max and date outside both', () => {
      const wrongMin = new Date('12/31/2023');
      const wrongMax = new Date('1/1/2023');
      const testDate = new Date('6/15/2023');
      expect(() => isValidDate(testDate, wrongMin, wrongMax, true)).toThrow();
    });
  });

  describe('with timestamp parameters', () => {
    test('should throw for date before timestamp minimum', () => {
      const timestampMin = new Date('1/1/2020').getTime();
      const beforeMin = new Date('12/31/2019');
      expect(() => isValidDate(beforeMin, timestampMin, maxDate, true)).toThrow();
    });

    test('should throw for date after timestamp maximum', () => {
      const timestampMax = new Date('12/31/2025').getTime();
      const afterMax = new Date('1/1/2026');
      expect(() => isValidDate(afterMax, minDate, timestampMax, true)).toThrow();
    });

    test('should throw with both min and max as timestamps', () => {
      const timestampMin = new Date('1/1/2020').getTime();
      const timestampMax = new Date('12/31/2020').getTime();
      const outsideDate = new Date('1/1/2021');
      expect(() => isValidDate(outsideDate, timestampMin, timestampMax, true)).toThrow();
    });
  });

  describe('edge cases with invalid parameters', () => {
    test('should not throw when min parameter is invalid', () => {
      const validDate = new Date('1/1/2020');
      expect(() => isValidDate(validDate, 'invalid', maxDate, true)).not.toThrow();
    });

    test('should not throw when max parameter is invalid', () => {
      const validDate = new Date('1/1/2020');
      expect(() => isValidDate(validDate, minDate, 'invalid', true)).not.toThrow();
    });

    test('should not throw when both min and max are invalid', () => {
      const validDate = new Date('1/1/2020');
      expect(() => isValidDate(validDate, 'invalid', 'invalid', true)).not.toThrow();
    });

    test('should not throw when min is NaN timestamp', () => {
      const validDate = new Date('1/1/2020');
      expect(() => isValidDate(validDate, NaN, maxDate, true)).not.toThrow();
    });

    test('should not throw when max is NaN timestamp', () => {
      const validDate = new Date('1/1/2020');
      expect(() => isValidDate(validDate, minDate, NaN, true)).not.toThrow();
    });
  });

  describe('boundary conditions', () => {
    test('should throw for date exactly one millisecond before min', () => {
      const customMin = new Date('1/1/2020 12:00:00.000');
      const justBefore = new Date(customMin.getTime() - 1);
      expect(() => isValidDate(justBefore, customMin, maxDate, true)).toThrow();
    });

    test('should throw for date exactly one millisecond after max', () => {
      const customMax = new Date('12/31/2020 23:59:59.999');
      const justAfter = new Date(customMax.getTime() + 1);
      expect(() => isValidDate(justAfter, minDate, customMax, true)).toThrow();
    });

    test('should throw for very precise time outside range', () => {
      const preciseMin = new Date('2020-06-15T14:30:25.123Z');
      const preciseMax = new Date('2020-06-15T14:30:25.456Z');
      const outsideTime = new Date('2020-06-15T14:30:25.122Z');
      expect(() => isValidDate(outsideTime, preciseMin, preciseMax, true)).toThrow();
    });
  });

  describe('timezone and DST edge cases', () => {
    test('should throw for date in different timezone outside range', () => {
      const utcMin = new Date('2020-03-08T07:00:00.000Z'); // DST transition in US
      const utcMax = new Date('2020-03-08T08:00:00.000Z');
      const outsideDate = new Date('2020-03-08T06:59:59.999Z');
      expect(() => isValidDate(outsideDate, utcMin, utcMax, true)).toThrow();
    });

    test('should throw for leap year date outside range', () => {
      const leapMin = new Date('2020-02-29T00:00:00.000Z'); // 2020 is leap year
      const leapMax = new Date('2020-02-29T23:59:59.999Z');
      const beforeLeap = new Date('2020-02-28T23:59:59.999Z');
      expect(() => isValidDate(beforeLeap, leapMin, leapMax, true)).toThrow();
    });
  });

  describe('special Date values', () => {
    test('should not throw for Date with invalid operations', () => {
      const date = new Date('2020-01-01');
      date.setMonth(13); // Invalid month, creates invalid date
      expect(() => isValidDate(date, minDate, maxDate, true)).not.toThrow();
    });

    test('should not throw for Date created with invalid constructor args', () => {
      const invalidDate = new Date(2020, 13, 32); // Invalid month and day
      expect(() => isValidDate(invalidDate, minDate, maxDate, true)).not.toThrow();
    });
  });
});