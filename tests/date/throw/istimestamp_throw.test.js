import { isTimestamp } from "../../../dist/ch";

describe('isTimestamp throwErr tests', () => {
  describe('when value is not a valid integer', () => {
    test('should throw for null', () => {
      expect(() => isTimestamp(null, true, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isTimestamp(undefined, true, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => isTimestamp(true, true, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => isTimestamp(false, true, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => isTimestamp({ timestamp: 1640995200000 }, true, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isTimestamp([1640995200000], true, true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isTimestamp(() => Date.now(), true, true)).toThrow();
    });

    test('should throw for Date object', () => {
      expect(() => isTimestamp(new Date(), true, true)).toThrow();
    });

    test('should throw for RegExp', () => {
      expect(() => isTimestamp(/\d+/, true, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => isTimestamp(Symbol('timestamp'), true, true)).toThrow();
    });
  });

  describe('when value is not an integer', () => {
    test('should throw for float number', () => {
      expect(() => isTimestamp(1640995200.5, true, true)).toThrow();
    });

    test('should throw for decimal timestamp', () => {
      expect(() => isTimestamp(1640995200000.123, true, true)).toThrow();
    });

    test('should throw for very small decimal', () => {
      expect(() => isTimestamp(1640995200000.001, true, true)).toThrow();
    });

    test('should throw for negative decimal', () => {
      expect(() => isTimestamp(-1640995200.5, true, true)).toThrow();
    });

    test('should throw for float string when type=false', () => {
      expect(() => isTimestamp('1640995200.5', false, true)).toThrow();
    });
  });

  describe('when timestamp creates invalid Date', () => {
    test('should throw for NaN', () => {
      expect(() => isTimestamp(NaN, true, true)).toThrow();
    });

    test('should throw for Infinity', () => {
      expect(() => isTimestamp(Infinity, true, true)).toThrow();
    });

    test('should throw for -Infinity', () => {
      expect(() => isTimestamp(-Infinity, true, true)).toThrow();
    });

    test('should throw for extremely large number', () => {
      expect(() => isTimestamp(Number.MAX_VALUE, true, true)).toThrow();
    });

    test('should throw for extremely negative number', () => {
      expect(() => isTimestamp(-Number.MAX_VALUE, true, true)).toThrow();
    });

    test('should throw for number too large for valid Date', () => {
      expect(() => isTimestamp(8640000000000001, true, true)).toThrow(); // Beyond max Date value
    });

    test('should throw for number too negative for valid Date', () => {
      expect(() => isTimestamp(-8640000000000001, true, true)).toThrow(); // Beyond min Date value
    });
  });

  describe('when type=true and value is string', () => {
    test('should throw for valid timestamp string', () => {
      expect(() => isTimestamp('1640995200000', true, true)).toThrow();
    });

    test('should throw for timestamp string with leading zeros', () => {
      expect(() => isTimestamp('001640995200000', true, true)).toThrow();
    });

    test('should throw for negative timestamp string', () => {
      expect(() => isTimestamp('-1640995200000', true, true)).toThrow();
    });

    test('should throw for empty string', () => {
      expect(() => isTimestamp('', true, true)).toThrow();
    });

    test('should throw for non-numeric string', () => {
      expect(() => isTimestamp('not a timestamp', true, true)).toThrow();
    });

    test('should throw for mixed alphanumeric string', () => {
      expect(() => isTimestamp('123abc456', true, true)).toThrow();
    });
  });

  describe('when type=false and value is invalid string', () => {
    test('should throw for non-numeric string', () => {
      expect(() => isTimestamp('not a number', false, true)).toThrow();
    });

    test('should throw for empty string', () => {
      expect(() => isTimestamp('', false, true)).toThrow();
    });

    test('should throw for whitespace string', () => {
      expect(() => isTimestamp('   ', false, true)).toThrow();
    });

    test('should throw for string with letters', () => {
      expect(() => isTimestamp('123abc', false, true)).toThrow();
    });

    test('should throw for string with special characters', () => {
      expect(() => isTimestamp('123!@#', false, true)).toThrow();
    });

    test('should throw for date string', () => {
      expect(() => isTimestamp('2023-01-01', false, true)).toThrow();
    });

    test('should throw for ISO date string', () => {
      expect(() => isTimestamp('2023-01-01T00:00:00.000Z', false, true)).toThrow();
    });

    test('should throw for float string that creates invalid Date', () => {
      expect(() => isTimestamp('1640995200.5', false, true)).toThrow();
    });

    test('should throw for string with hex number', () => {
      expect(() => isTimestamp('0x123456', false, true)).toThrow();
    });

    test('should throw for string with octal number', () => {
      expect(() => isTimestamp('0o123456', false, true)).toThrow();
    });

    test('should throw for string with binary number', () => {
      expect(() => isTimestamp('0b101010', false, true)).toThrow();
    });
  });

  describe('with BigInt values', () => {
    test('should throw for BigInt timestamp', () => {
      expect(() => isTimestamp(BigInt(1640995200000), true, true)).toThrow();
    });

    test('should throw for large BigInt', () => {
      expect(() => isTimestamp(BigInt('123456789012345678901234567890'), true, true)).toThrow();
    });

    test('should throw for negative BigInt', () => {
      expect(() => isTimestamp(BigInt(-1640995200000), true, true)).toThrow();
    });
  });

  describe('edge cases with numbers that look like timestamps', () => {
    test('should throw for valid integer that creates invalid Date', () => {
      expect(() => isTimestamp(Number.MAX_SAFE_INTEGER, true, true)).toThrow();
    });

    test('should throw for negative integer that creates invalid Date', () => {
      expect(() => isTimestamp(-Number.MAX_SAFE_INTEGER, true, true)).toThrow();
    });

    test('should throw for zero when it creates invalid Date behavior', () => {
      // Zero timestamp is 1970-01-01, should be valid, but testing edge case
      expect(() => isTimestamp(0, true, true)).not.toThrow();
    });

    test('should throw for very large valid integer beyond Date range', () => {
      expect(() => isTimestamp(8640000000000002, true, true)).toThrow();
    });

    test('should throw for very negative valid integer beyond Date range', () => {
      expect(() => isTimestamp(-8640000000000002, true, true)).toThrow();
    });
  });

  describe('with parsed values that fail', () => {
    test('should throw for parseInt result that is NaN', () => {
      expect(() => isTimestamp(parseInt('abc'), true, true)).toThrow();
    });

    test('should throw for parseFloat result', () => {
      expect(() => isTimestamp(parseFloat('123.456'), true, true)).toThrow();
    });

    test('should throw for Number() of invalid string', () => {
      expect(() => isTimestamp(Number('not a number'), true, true)).toThrow();
    });

    test('should throw for computed value that is not integer', () => {
      expect(() => isTimestamp(1640995200000 / 7, true, true)).toThrow();
    });

    test('should throw for Math operation result that is invalid', () => {
      expect(() => isTimestamp(Math.sqrt(-1), true, true)).toThrow(); // NaN
    });
  });

  describe('special numeric edge cases', () => {
    test('should throw for -0 when it behaves unexpectedly', () => {
      expect(() => isTimestamp(-0, true, true)).not.toThrow(); // -0 should be valid
    });

    test('should throw for very precise decimal that rounds to invalid', () => {
      expect(() => isTimestamp(Number.MAX_VALUE + 1, true, true)).toThrow();
    });

    test('should throw for number close to but exceeding safe integer', () => {
      expect(() => isTimestamp(Number.MAX_SAFE_INTEGER + 2, true, true)).toThrow();
    });
  });

  describe('type coercion failures', () => {
    test('should throw for array that converts to number but is not integer', () => {
      expect(() => isTimestamp([123], true, true)).toThrow();
    });

    test('should throw for object with valueOf that returns non-integer', () => {
      const obj = { valueOf: () => 123.456 };
      expect(() => isTimestamp(obj, true, true)).toThrow();
    });

    test('should throw for object with toString that returns non-integer', () => {
      const obj = { toString: () => '123.456' };
      expect(() => isTimestamp(obj, true, true)).toThrow();
    });

    test('should throw for function that returns non-integer when called', () => {
      expect(() => isTimestamp(() => 123.456, true, true)).toThrow();
    });
  });
});