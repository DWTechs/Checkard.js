import { isDate } from "../../../dist/ch";

describe('isDate throwErr tests', () => {
  describe('when value is not a Date', () => {
    test('should throw for null', () => {
      expect(() => isDate(null, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isDate(undefined, true)).toThrow();
    });

    test('should throw for string', () => {
      expect(() => isDate('not date', true)).toThrow();
    });

    test('should throw for valid date string', () => {
      expect(() => isDate('2023-01-01', true)).toThrow();
    });

    test('should throw for ISO date string', () => {
      expect(() => isDate('2023-01-01T00:00:00.000Z', true)).toThrow();
    });

    test('should throw for number', () => {
      expect(() => isDate(123, true)).toThrow();
    });

    test('should throw for timestamp number', () => {
      expect(() => isDate(1640995200000, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => isDate(true, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => isDate(false, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => isDate({ year: 2023, month: 1, day: 1 }, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isDate([2023, 1, 1], true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isDate(() => {}, true)).toThrow();
    });

    test('should throw for RegExp', () => {
      expect(() => isDate(/date/, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => isDate(Symbol('date'), true)).toThrow();
    });

    test('should throw for BigInt', () => {
      expect(() => isDate(BigInt(123), true)).toThrow();
    });
  });

  describe('when value is invalid Date', () => {
    test('should throw for new Date() with invalid argument', () => {
      expect(() => isDate(new Date('invalid'), true)).toThrow();
    });

    test('should throw for new Date() with undefined', () => {
      expect(() => isDate(new Date(undefined), true)).toThrow();
    });

    test('should throw for new Date() with non-date string', () => {
      expect(() => isDate(new Date('not a date'), true)).toThrow();
    });

    test('should throw for new Date() with invalid format', () => {
      expect(() => isDate(new Date('2023-13-01'), true)).toThrow();
    });

    test('should not throw for new Date() with invalid day', () => {
      expect(() => isDate(new Date('2023-02-30'), true)).not.toThrow();
    });

    test('should throw for new Date() with malformed string', () => {
      expect(() => isDate(new Date('abc-def-ghi'), true)).toThrow();
    });

    test('should throw for new Date() with empty string', () => {
      expect(() => isDate(new Date(''), true)).toThrow();
    });

    test('should not throw for new Date() with null', () => {
      expect(() => isDate(new Date(null), true)).not.toThrow();
    });

    test('should throw for new Date() with NaN', () => {
      expect(() => isDate(new Date(NaN), true)).toThrow();
    });

    test('should throw for new Date() with Infinity', () => {
      expect(() => isDate(new Date(Infinity), true)).toThrow();
    });

    test('should throw for new Date() with -Infinity', () => {
      expect(() => isDate(new Date(-Infinity), true)).toThrow();
    });
  });

  describe('edge cases with Date-like objects', () => {
    test('should throw for object with Date methods', () => {
      const fakeDateObj = {
        getTime: () => Date.now(),
        toString: () => new Date().toString(),
        valueOf: () => Date.now()
      };
      expect(() => isDate(fakeDateObj, true)).toThrow();
    });

    test('should throw for Date.prototype', () => {
      expect(() => isDate(Date.prototype, true)).toThrow();
    });

    test('should throw for Date constructor', () => {
      expect(() => isDate(Date, true)).toThrow();
    });

    test('should throw for Date.now() result', () => {
      expect(() => isDate(Date.now(), true)).toThrow();
    });

    test('should throw for Date.parse() result', () => {
      expect(() => isDate(Date.parse('2023-01-01'), true)).toThrow();
    });
  });

  describe('with various invalid date formats', () => {
    test('should not throw for Date with impossible date', () => {
      expect(() => isDate(new Date(2023, 13, 32), true)).not.toThrow();
    });

    test('should not throw for Date with negative year', () => {
      expect(() => isDate(new Date(-1, 0, 1), true)).not.toThrow();
    });

    test('should not throw for Date created from invalid ISO string', () => {
      expect(() => isDate(new Date('2023-1-1'), true)).not.toThrow();
    });

    test('should not throw for Date created from partial date string', () => {
      expect(() => isDate(new Date('2023'), true)).not.toThrow();
    });

    test('should throw for Date created from time-only string', () => {
      expect(() => isDate(new Date('12:00:00'), true)).toThrow();
    });
  });

  describe('special NaN cases', () => {
    test('should throw for Date object that evaluates to NaN', () => {
      const invalidDate = new Date();
      invalidDate.setTime(NaN);
      expect(() => isDate(invalidDate, true)).toThrow();
    });

    test('should throw for Date with setFullYear to invalid values', () => {
      const date = new Date();
      date.setFullYear(NaN);
      expect(() => isDate(date, true)).toThrow();
    });

    test('should throw for Date with setMonth to invalid values', () => {
      const date = new Date();
      date.setMonth(NaN);
      expect(() => isDate(date, true)).toThrow();
    });

    test('should throw for Date with setDate to invalid values', () => {
      const date = new Date();
      date.setDate(NaN);
      expect(() => isDate(date, true)).toThrow();
    });
  });
});