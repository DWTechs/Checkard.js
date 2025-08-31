import { isValidTimestamp } from "../../../dist/ch";

describe('isValidTimestamp throwErr tests', () => {
  const minTs = -2208989361000; // 1/1/1900
  const maxTs = 7258114800000; // 1/1/2200

  describe('when value is not a valid timestamp', () => {
    test('should throw for null', () => {
      expect(() => isValidTimestamp(null, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isValidTimestamp(undefined, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for boolean', () => {
      expect(() => isValidTimestamp(true, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => isValidTimestamp({ time: 1640995200000 }, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isValidTimestamp([1640995200000], minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isValidTimestamp(() => Date.now(), minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for Date object', () => {
      expect(() => isValidTimestamp(new Date(), minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for non-integer number', () => {
      expect(() => isValidTimestamp(1640995200.5, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for NaN', () => {
      expect(() => isValidTimestamp(NaN, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for Infinity', () => {
      expect(() => isValidTimestamp(Infinity, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for string when type=true', () => {
      expect(() => isValidTimestamp('1640995200000', minTs, maxTs, true, true)).toThrow();
    });
  });

  describe('when timestamp is before minimum', () => {
    test('should throw for timestamp before 1900', () => {
      const before1900 = new Date('12/31/1899').getTime();
      expect(() => isValidTimestamp(before1900, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for very old timestamp', () => {
      const veryOld = new Date('1/1/1800').getTime();
      expect(() => isValidTimestamp(veryOld, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for timestamp just before minimum', () => {
      const justBefore = minTs - 1;
      expect(() => isValidTimestamp(justBefore, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw with custom minimum timestamp', () => {
      const customMin = new Date('1/1/2000').getTime();
      const beforeMin = new Date('12/31/1999').getTime();
      expect(() => isValidTimestamp(beforeMin, customMin, maxTs, true, true)).toThrow();
    });

    test('should throw with Date minimum', () => {
      const dateMin = new Date('1/1/2010');
      const beforeMin = new Date('12/31/2009').getTime();
      expect(() => isValidTimestamp(beforeMin, dateMin, maxTs, true, true)).toThrow();
    });
  });

  describe('when timestamp is after maximum', () => {
    test('should throw for timestamp after 2200', () => {
      const after2200 = new Date('1/2/2200').getTime();
      expect(() => isValidTimestamp(after2200, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for very future timestamp', () => {
      const veryFuture = new Date('1/1/2500').getTime();
      expect(() => isValidTimestamp(veryFuture, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for timestamp just after maximum', () => {
      const justAfter = maxTs + 1;
      expect(() => isValidTimestamp(justAfter, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw with custom maximum timestamp', () => {
      const customMax = new Date('1/1/2100').getTime();
      const afterMax = new Date('1/2/2100').getTime();
      expect(() => isValidTimestamp(afterMax, minTs, customMax, true, true)).toThrow();
    });

    test('should throw with Date maximum', () => {
      const dateMax = new Date('1/1/2050');
      const afterMax = new Date('1/2/2050').getTime();
      expect(() => isValidTimestamp(afterMax, minTs, dateMax, true, true)).toThrow();
    });
  });

  describe('with custom timestamp ranges', () => {
    test('should throw for timestamp outside narrow range', () => {
      const rangeMin = new Date('1/1/2020').getTime();
      const rangeMax = new Date('12/31/2020').getTime();
      const outsideTs = new Date('1/1/2021').getTime();
      expect(() => isValidTimestamp(outsideTs, rangeMin, rangeMax, true, true)).toThrow();
    });

    test('should throw for timestamp before narrow range', () => {
      const rangeMin = new Date('6/1/2023').getTime();
      const rangeMax = new Date('8/31/2023').getTime();
      const beforeRange = new Date('5/31/2023').getTime();
      expect(() => isValidTimestamp(beforeRange, rangeMin, rangeMax, true, true)).toThrow();
    });

    test('should throw for timestamp after narrow range', () => {
      const rangeMin = new Date('6/1/2023').getTime();
      const rangeMax = new Date('8/31/2023').getTime();
      const afterRange = new Date('9/1/2023').getTime();
      expect(() => isValidTimestamp(afterRange, rangeMin, rangeMax, true, true)).toThrow();
    });

    test('should throw when min > max and timestamp outside both', () => {
      const wrongMin = new Date('12/31/2023').getTime();
      const wrongMax = new Date('1/1/2023').getTime();
      const testTs = new Date('6/15/2023').getTime();
      expect(() => isValidTimestamp(testTs, wrongMin, wrongMax, true, true)).toThrow();
    });
  });

  describe('with Date parameters', () => {
    test('should throw for timestamp before Date minimum', () => {
      const dateMin = new Date('1/1/2020');
      const beforeMin = new Date('12/31/2019').getTime();
      expect(() => isValidTimestamp(beforeMin, dateMin, maxTs, true, true)).toThrow();
    });

    test('should throw for timestamp after Date maximum', () => {
      const dateMax = new Date('12/31/2025');
      const afterMax = new Date('1/1/2026').getTime();
      expect(() => isValidTimestamp(afterMax, minTs, dateMax, true, true)).toThrow();
    });

    test('should throw with both min and max as Dates', () => {
      const dateMin = new Date('1/1/2020');
      const dateMax = new Date('12/31/2020');
      const outsideTs = new Date('1/1/2021').getTime();
      expect(() => isValidTimestamp(outsideTs, dateMin, dateMax, true, true)).toThrow();
    });
  });

  describe('when type=false (allows strings)', () => {
    test('should throw for non-numeric string', () => {
      expect(() => isValidTimestamp('not a number', minTs, maxTs, false, true)).toThrow();
    });

    test('should throw for valid timestamp string outside range', () => {
      const beforeMin = (minTs - 1000).toString();
      expect(() => isValidTimestamp(beforeMin, minTs, maxTs, false, true)).toThrow();
    });

    test('should throw for valid timestamp string after max', () => {
      const afterMax = (maxTs + 1000).toString();
      expect(() => isValidTimestamp(afterMax, minTs, maxTs, false, true)).toThrow();
    });

    test('should throw for float string', () => {
      expect(() => isValidTimestamp('1640995200.5', minTs, maxTs, false, true)).toThrow();
    });

    test('should throw for empty string', () => {
      expect(() => isValidTimestamp('', minTs, maxTs, false, true)).toThrow();
    });

    test('should throw for whitespace string', () => {
      expect(() => isValidTimestamp('   ', minTs, maxTs, false, true)).toThrow();
    });

    test('should throw for date format string', () => {
      expect(() => isValidTimestamp('2023-01-01', minTs, maxTs, false, true)).toThrow();
    });

    test('should throw for ISO date string', () => {
      expect(() => isValidTimestamp('2023-01-01T00:00:00.000Z', minTs, maxTs, false, true)).toThrow();
    });
  });

  describe('edge cases with invalid parameters', () => {
    test('should not throw when min parameter is invalid timestamp', () => {
      const validTs = new Date('1/1/2020').getTime();
      expect(() => isValidTimestamp(validTs, 'invalid', maxTs, true, true)).not.toThrow();
    });

    test('should not throw when max parameter is invalid timestamp', () => {
      const validTs = new Date('1/1/2020').getTime();
      expect(() => isValidTimestamp(validTs, minTs, 'invalid', true, true)).not.toThrow();
    });

    test('should not throw when both min and max are invalid', () => {
      const validTs = new Date('1/1/2020').getTime();
      expect(() => isValidTimestamp(validTs, 'invalid', 'invalid', true, true)).not.toThrow();
    });

    test('should not throw when min is NaN', () => {
      const validTs = new Date('1/1/2020').getTime();
      expect(() => isValidTimestamp(validTs, NaN, maxTs, true, true)).not.toThrow();
    });

    test('should not throw when max is NaN', () => {
      const validTs = new Date('1/1/2020').getTime();
      expect(() => isValidTimestamp(validTs, minTs, NaN, true, true)).not.toThrow();
    });

    test('should not throw when min is Infinity', () => {
      const validTs = new Date('1/1/2020').getTime();
      expect(() => isValidTimestamp(validTs, Infinity, maxTs, true, true)).not.toThrow();
    });

    test('should not throw when max is -Infinity', () => {
      const validTs = new Date('1/1/2020').getTime();
      expect(() => isValidTimestamp(validTs, minTs, -Infinity, true, true)).not.toThrow();
    });
  });

  describe('boundary conditions', () => {
    test('should throw for timestamp exactly one millisecond before min', () => {
      const customMin = new Date('1/1/2020 12:00:00.000').getTime();
      const justBefore = customMin - 1;
      expect(() => isValidTimestamp(justBefore, customMin, maxTs, true, true)).toThrow();
    });

    test('should throw for timestamp exactly one millisecond after max', () => {
      const customMax = new Date('12/31/2020 23:59:59.999').getTime();
      const justAfter = customMax + 1;
      expect(() => isValidTimestamp(justAfter, minTs, customMax, true, true)).toThrow();
    });

    test('should throw for very precise timestamp outside range', () => {
      const preciseMin = new Date('2020-06-15T14:30:25.123Z').getTime();
      const preciseMax = new Date('2020-06-15T14:30:25.456Z').getTime();
      const outsideTs = preciseMin - 1;
      expect(() => isValidTimestamp(outsideTs, preciseMin, preciseMax, true, true)).toThrow();
    });
  });

  describe('extreme values', () => {
    test('should throw for timestamp beyond Date range', () => {
      const beyondMax = 8640000000000001; // Beyond max Date value
      expect(() => isValidTimestamp(beyondMax, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for timestamp before Date range', () => {
      const beforeMin = -8640000000000001; // Before min Date value
      expect(() => isValidTimestamp(beforeMin, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for Number.MAX_VALUE', () => {
      expect(() => isValidTimestamp(Number.MAX_VALUE, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for -Number.MAX_VALUE', () => {
      expect(() => isValidTimestamp(-Number.MAX_VALUE, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for Number.MAX_SAFE_INTEGER when outside range', () => {
      expect(() => isValidTimestamp(Number.MAX_SAFE_INTEGER, minTs, maxTs, true, true)).toThrow();
    });

    test('should throw for -Number.MAX_SAFE_INTEGER when outside range', () => {
      expect(() => isValidTimestamp(-Number.MAX_SAFE_INTEGER, minTs, maxTs, true, true)).toThrow();
    });
  });

  describe('with mixed parameter types', () => {
    test('should throw for timestamp outside range with mixed Date/timestamp params', () => {
      const dateMin = new Date('1/1/2020');
      const tsMax = new Date('12/31/2020').getTime();
      const outsideTs = new Date('1/1/2021').getTime();
      expect(() => isValidTimestamp(outsideTs, dateMin, tsMax, true, true)).toThrow();
    });

    test('should not throw when Date parameter is invalid', () => {
      const validTs = new Date('1/1/2020').getTime();
      const invalidDate = new Date('invalid');
      expect(() => isValidTimestamp(validTs, invalidDate, maxTs, true, true)).not.toThrow();
    });

    test('should not throw when both Date parameters are invalid', () => {
      const validTs = new Date('1/1/2020').getTime();
      const invalidDate1 = new Date('invalid1');
      const invalidDate2 = new Date('invalid2');
      expect(() => isValidTimestamp(validTs, invalidDate1, invalidDate2, true, true)).not.toThrow();
    });
  });
});